import os

# ==========================================
# CONFIGURATION
# Set DRY_RUN to False when you are ready to permanently delete the files!
DRY_RUN = False
TARGET_FILE = "website_name.txt"
# ==========================================

def main():
    current_dir = os.getcwd()
    print(f"Scanning subfolders for '{TARGET_FILE}'...")
    print(f"--- RUNNING IN {'DRY RUN (PREVIEW)' if DRY_RUN else 'LIVE DELETE'} MODE ---\n")

    deleted_count = 0
    skipped_count = 0

    # Loop through the main directory
    for item in os.listdir(current_dir):
        item_path = os.path.join(current_dir, item)
        
        # Only look inside business folders
        if os.path.isdir(item_path) and not item.startswith('.'):
            # Construct the path to the old file
            old_file_path = os.path.join(item_path, TARGET_FILE)
            
            # Check if the file actually exists in this folder
            if os.path.isfile(old_file_path):
                print(f"FOUND: {item}/{TARGET_FILE}")
                
                if not DRY_RUN:
                    try:
                        os.remove(old_file_path)
                        print("Status: DELETED")
                    except Exception as e:
                        print(f"Status: ERROR could not delete: {e}")
                else:
                    print("Status: WILL BE DELETED")
                
                deleted_count += 1
                print("-" * 30)
            else:
                skipped_count += 1

    print("\n------------------------------------------")
    print(f"Cleanup complete.")
    print(f"Files found and targeted: {deleted_count}")
    print(f"Folders already clear: {skipped_count}")
    
    if DRY_RUN and deleted_count > 0:
        print("\n*** Change 'DRY_RUN = True' to 'DRY_RUN = False' to permanently delete these files. ***")

if __name__ == "__main__":
    main()