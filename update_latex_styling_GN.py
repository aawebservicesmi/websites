import os

# ==========================================
# CONFIGURATION
# Set DRY_RUN to False when you are ready to apply changes!
DRY_RUN = False
ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\websites"
# ==========================================

def update_latex_template(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Inject \usepackage{xcolor} right below \usepackage{qrcode}
    if r"\usepackage{qrcode}" in content and r"\usepackage{xcolor}" not in content:
        # Detect if file uses Windows (\r\n) or Unix (\n) line endings
        newline = "\r\n" if "\r\n" in content else "\n"
        
        target = r"\usepackage{qrcode}" + newline
        replacement = r"\usepackage{qrcode}" + newline + r"\usepackage{xcolor}" + newline
        
        content = content.replace(target, replacement)
        modified = True

    # 2. Inject the tiny gray tracking number right below \end{center}
    if r"\end{center}" in content and r"\color{gray!70}" not in content:
        newline = "\r\n" if "\r\n" in content else "\n"
        
        target = r"\end{center}"
        # Places the text right between \end{center} and \end{document}
        replacement = r"\end{center}" + newline + r"\hfill{\color{gray!70}\fontsize{5}{6}\selectfont 000}"
        
        content = content.replace(target, replacement)
        modified = True

    # If changes were made and dry run is disabled, save the file
    if modified:
        if not DRY_RUN:
            try:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                return "SUCCESS"
            except Exception as e:
                return f"FAILED (Error: {e})"
        else:
            return "WILL UPDATE"
            
    return "SKIPPED (Already updated or target elements missing)"

def main():
    print(f"--- RUNNING IN {'DRY RUN (PREVIEW)' if DRY_RUN else 'LIVE UPDATE'} MODE ---")
    
    updated_count = 0
    skipped_count = 0

    # Scan the master websites directory
    for item in os.listdir(ROOT_DIR):
        item_path = os.path.join(ROOT_DIR, item)
        
        if os.path.isdir(item_path) and not item.startswith('.'):
            latex_path = os.path.join(item_path, "Flyer", "newLatexTemplate.tex")
            
            if os.path.exists(latex_path):
                status = update_latex_template(latex_path)
                print(f"Folder: {item}")
                print(f"  -> Template Status: {status}")
                
                if "UPDATE" in status or "SUCCESS" in status:
                    updated_count += 1
                else:
                    skipped_count += 1
                print("-" * 50)

    print(f"\nProcess complete.")
    print(f"Files targeted/updated: {updated_count}")
    print(f"Files skipped/unchanged: {skipped_count}")
    
    if DRY_RUN and updated_count > 0:
        print("\n*** Preview complete. Change 'DRY_RUN = False' to apply styling to files permanently. ***")

if __name__ == "__main__":
    main()