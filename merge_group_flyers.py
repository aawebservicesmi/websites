from pathlib import Path
from pypdf import PdfWriter

# ==========================================
# CONFIGURATION
# Set DRY_RUN to False when you want to actually combine the PDFs!
DRY_RUN = False

FINISHED_FLYERS_DIR = Path(r"C:\Users\ashwi\Downloads\13KM_WEBSITES\FINISHED_FLYERS")
# ==========================================

def main():
    mode_label = "DRY RUN (PREVIEW)" if DRY_RUN else "LIVE PDF MERGING"
    print(f"--- RUNNING IN {mode_label} MODE ---")
    
    if not FINISHED_FLYERS_DIR.exists():
        print(f"❌ Error: The directory {FINISHED_FLYERS_DIR} does not exist.")
        return

    # Gather and sort all subdirectories (000, 001, 002... 030)
    subdirs = sorted([d for d in FINISHED_FLYERS_DIR.iterdir() if d.is_dir()])
    
    merged_folders_count = 0

    for folder in subdirs:
        # The output file name matches the folder name (e.g. "003.pdf")
        output_filename = f"{folder.name}.pdf"
        output_path = folder / output_filename
        
        # Grab all PDFs in the folder, but skip the target output file 
        # just in case this script is run more than once.
        pdf_files = sorted([
            f for f in folder.glob("*.pdf") 
            if f.name != output_filename
        ])
        
        # If there are no flyers inside this group folder, skip to the next one
        if not pdf_files:
            continue
            
        print(f"📁 Processing Group Folder: {folder.name}")
        print(f"   -> Found {len(pdf_files)} individual flyer PDFs to combine.")
        print(f"   -> Destination File: {output_path.name}")
        
        if not DRY_RUN:
            print(f"   ⏳ Appending and building master PDF... please wait...")
            writer = PdfWriter()
            
            try:
                for pdf_file in pdf_files:
                    # pypdf can accept Path objects directly
                    writer.append(pdf_file)
                    
                with open(output_path, "wb") as f:
                    writer.write(f)
                
                writer.close()  # Clean up the writer stream
                print(f"   ✅ SUCCESS: Created master file {output_path.name} inside folder!")
            except Exception as e:
                print(f"   ❌ ERROR compiling group {folder.name}: {e}")
        else:
            print(f"   -> Status: WILL COMBINE")
            
        print("-" * 50)
        merged_folders_count += 1

    print(f"\nProcess complete.")
    print(f"Total group folders handled: {merged_folders_count}")
    
    if DRY_RUN and merged_folders_count > 0:
        print("\n*** Previews look good? Set 'DRY_RUN = False' to start merging your master PDFs! ***")

if __name__ == "__main__":
    main()