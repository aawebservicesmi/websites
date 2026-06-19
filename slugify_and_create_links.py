import os
import re

# ==========================================
# CONFIGURATION
# Set DRY_RUN to False when you are ready to apply changes!
DRY_RUN = True
BASE_URL = "https://aawebservicesmi.github.io/websites/"
# ==========================================

def clean_foldername(name):
    # Standard cleanup
    name = name.replace("â€™", "").replace("’", "").replace("'", "")
    name = name.replace("&", "and")
    name = name.lower()
    name = re.sub(r'[^a-z0-9]+', '-', name)
    name = re.sub(r'-+', '-', name).strip('-')
    return name

def main():
    current_dir = os.getcwd()
    print(f"--- RUNNING IN {'DRY RUN (PREVIEW)' if DRY_RUN else 'LIVE EDIT'} MODE ---")

    for item in os.listdir(current_dir):
        item_path = os.path.join(current_dir, item)
        
        # Only process directories
        if os.path.isdir(item_path) and not item.startswith('.'):
            slug = clean_foldername(item)
            new_path = os.path.join(current_dir, slug)
            
            # --- 1. RENAME FOLDER ---
            if item != slug:
                print(f"Renaming: {item} -> {slug}")
                if not DRY_RUN:
                    os.rename(item_path, new_path)
            else:
                print(f"Keeping: {slug}")
            
            # --- 2. CREATE TXT FILE ---
            # We use new_path/slug because the folder is now (or will be) named that
            file_path = os.path.join(new_path, "website_name_final.txt")
            full_url = f"{BASE_URL}{slug}/"
            
            print(f"  -> Creating file: website_name_final.txt")
            print(f"  -> Content: {full_url}")
            
            if not DRY_RUN:
                with open(file_path, "w") as f:
                    f.write(full_url)
            print("-" * 30)

    if DRY_RUN:
        print("\n*** Preview complete. Change 'DRY_RUN = False' to apply changes. ***")

if __name__ == "__main__":
    main()