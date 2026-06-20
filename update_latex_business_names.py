import os

# ==========================================
# CONFIGURATION
# Set DRY_RUN to False when you are ready to update the files permanently!
DRY_RUN = False
ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\websites"
# ==========================================

def escape_for_latex(text):
    # '&' is a reserved character in LaTeX. It must be escaped as '\&' 
    # to avoid compilation errors.
    return text.replace("&", r"\&")

def main():
    print(f"--- RUNNING IN {'DRY RUN (PREVIEW)' if DRY_RUN else 'LIVE UPDATE'} MODE ---")
    
    updated_count = 0
    skipped_count = 0

    # Iterate through each folder in the master websites directory
    for item in os.listdir(ROOT_DIR):
        item_path = os.path.join(ROOT_DIR, item)
        
        if os.path.isdir(item_path) and not item.startswith('.'):
            flyer_dir = os.path.join(item_path, "Flyer")
            txt_path = os.path.join(flyer_dir, "business_name.txt")
            latex_path = os.path.join(flyer_dir, "newLatexTemplate.tex")
            
            # Ensure both the source text file and target LaTeX file exist
            if not os.path.exists(txt_path) or not os.path.exists(latex_path):
                skipped_count += 1
                continue
            
            # 1. Read the formal business name
            with open(txt_path, 'r', encoding='utf-8') as f:
                raw_name = f.read().strip()
            
            # 2. Escape special LaTeX characters (e.g., & -> \&)
            escaped_name = escape_for_latex(raw_name)
            
            # 3. Read the LaTeX template file
            with open(latex_path, 'r', encoding='utf-8') as f:
                latex_content = f.read()
            
            # Target the specific macro definition line
            target_placeholder = r"\newcommand{\businessname}{Business Name}"
            
            if target_placeholder in latex_content:
                replacement_line = f"\\newcommand{{\\businessname}}{{{escaped_name}}}"
                new_content = latex_content.replace(target_placeholder, replacement_line)
                
                print(f"✅ Target Folder: {item}")
                print(f"   Original Name: {raw_name}")
                print(f"   LaTeX Inline:  {escaped_name}")
                
                if not DRY_RUN:
                    try:
                        with open(latex_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print("   Status: SUCCESS (Name Updated)")
                    except Exception as e:
                        print(f"   Status: FAILED due to error: {e}")
                else:
                    print("   Status: WILL UPDATE")
                
                updated_count += 1
            else:
                # Skips if the script has already run on this file previously
                skipped_count += 1
                
            print("-" * 50)

    print(f"\nProcess complete.")
    print(f"Files successfully updated/targeted: {updated_count}")
    print(f"Files skipped or already modified:  {skipped_count}")
    
    if DRY_RUN and updated_count > 0:
        print("\n*** If the preview looks correct, change 'DRY_RUN = True' to 'DRY_RUN = False' to execute. ***")

if __name__ == "__main__":
    main()