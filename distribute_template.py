import os
import shutil

# ==========================================
# CONFIGURATION
# Set DRY_RUN to False when you are ready to actually copy the files!
DRY_RUN = False

SOURCE_TEMPLATE = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\websites\woods-lawn-services\Flyer\newLatexTemplate.tex"
ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\websites"
# ==========================================

def main():
    # Quick sanity check to make sure the source template actually exists
    if not os.path.exists(SOURCE_TEMPLATE):
        print(f"❌ ERROR: Could not find the source template at:\n{SOURCE_TEMPLATE}")
        print("Please double-check the path.")
        return

    print(f"--- RUNNING IN {'DRY RUN (PREVIEW)' if DRY_RUN else 'LIVE COPY'} MODE ---")
    print(f"Source: {SOURCE_TEMPLATE}\n")

    copied_count = 0
    skipped_count = 0

    # Loop through the master websites directory
    for item in os.listdir(ROOT_DIR):
        item_path = os.path.join(ROOT_DIR, item)
        
        # Only look at business folders
        if os.path.isdir(item_path) and not item.startswith('.'):
            
            # Skip the source folder itself so it doesn't try to copy onto itself
            if item == "woods-lawn-services":
                skipped_count += 1
                continue
                
            # Define the path to the business's Flyer folder
            target_flyer_dir = os.path.join(item_path, "Flyer")
            target_file_path = os.path.join(target_flyer_dir, "newLatexTemplate.tex")
            
            print(f"Target Business: {item}")
            
            if not DRY_RUN:
                try:
                    # Create the 'Flyer' folder if it doesn't already exist
                    os.makedirs(target_flyer_dir, exist_ok=True)
                    # Copy the template (shutil.copy2 preserves file metadata/dates)
                    shutil.copy2(SOURCE_TEMPLATE, target_file_path)
                    print("  Status: SUCCESS (Copied)")
                except Exception as e:
                    print(f"  Status: FAILED due to error: {e}")
            else:
                print(f"  Status: WILL COPY to -> {item}/Flyer/newLatexTemplate.tex")
                
            copied_count += 1
            print("-" * 40)

    print(f"\nProcess complete.")
    print(f"Templates distributed/targeted: {copied_count}")
    print(f"Folders skipped (source folder): {skipped_count}")
    
    if DRY_RUN:
        print("\n*** If the preview looks correct, change 'DRY_RUN = True' to 'DRY_RUN = False' to execute. ***")

if __name__ == "__main__":
    main()