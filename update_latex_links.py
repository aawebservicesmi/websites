import os

# ==========================================
# CONFIGURATION
# Set DRY_RUN to False when you are ready to actually update the files!
DRY_RUN = False
ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\websites"
# ==========================================

def main():
    print(f"--- RUNNING IN {'DRY RUN (PREVIEW)' if DRY_RUN else 'LIVE UPDATE'} MODE ---")
    
    updated_count = 0
    skipped_count = 0

    # Loop through the master websites directory
    for item in os.listdir(ROOT_DIR):
        item_path = os.path.join(ROOT_DIR, item)
        
        # Only process business directories
        if os.path.isdir(item_path) and not item.startswith('.'):
            txt_path = os.path.join(item_path, "website_name_final.txt")
            latex_path = os.path.join(item_path, "Flyer", "newLatexTemplate.tex")
            
            # Sanity Check: Ensure both the source text file and target LaTeX file exist
            if not os.path.exists(txt_path):
                print(f"⚠️ Skipped '{item}': website_name_final.txt not found.")
                skipped_count += 1
                continue
                
            if not os.path.exists(latex_path):
                print(f"⚠️ Skipped '{item}': Flyer/newLatexTemplate.tex not found.")
                skipped_count += 1
                continue
            
            # 1. Read the final website link
            with open(txt_path, 'r', encoding='utf-8') as f:
                url = f.read().strip()
            
            # 2. Read the LaTeX template
            with open(latex_path, 'r', encoding='utf-8') as f:
                latex_content = f.read()
            
            # 3. Check for the placeholder and replace it
            if "website link here" in latex_content:
                new_content = latex_content.replace("website link here", url)
                
                print(f"✅ Target Business: {item}")
                print(f"   Link to insert:  {url}")
                
                if not DRY_RUN:
                    try:
                        with open(latex_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print("   Status: SUCCESS (Link Updated)")
                    except Exception as e:
                        print(f"   Status: FAILED due to error: {e}")
                else:
                    print("   Status: WILL UPDATE")
                
                updated_count += 1
            else:
                # Keeps it from re-updating files that are already completed if you run it twice
                print(f"ℹ️ '{item}': Placeholder 'website link here' not found (already updated).")
                skipped_count += 1
                
            print("-" * 50)

    print(f"\nProcess complete.")
    print(f"Files successfully updated/targeted: {updated_count}")
    print(f"Files skipped/unchanged: {skipped_count}")
    
    if DRY_RUN and updated_count > 0:
        print("\n*** If the preview looks correct, change 'DRY_RUN = True' to 'DRY_RUN = False' to execute. ***")

if __name__ == "__main__":
    main()