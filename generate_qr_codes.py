#!/usr/bin/env python3
"""
Generate a QR‑code image for the URL stored in each
<business folder>/website_name.txt.
The image is saved as `qr.png` inside the same folder.
"""

import os
import qrcode

# ------------------------------------------------------------
# 1.  Locate every business directory under the script's parent
# ------------------------------------------------------------
ROOT_DIR = os.path.abspath(os.path.dirname(__file__))

def get_business_folders(root: str):
    """Yield absolute paths of all sub‑folders (skip files)."""
    for entry in os.scandir(root):
        if entry.is_dir():
            yield entry.path

# ------------------------------------------------------------
# 2.  Read the URL from website_name.txt
# ------------------------------------------------------------
def read_url(folder: str) -> str | None:
    txt_path = os.path.join(folder, "website_name.txt")
    if not os.path.isfile(txt_path):
        return None
    with open(txt_path, "r", encoding="utf-8") as f:
        return f.readline().strip() or None

# ------------------------------------------------------------
# 3.  Create the QR‑code image
# ------------------------------------------------------------
def make_qr(url: str):
    """Return a QR‑code Pillow image for *url* using default settings."""
    return qrcode.make(url)

# ------------------------------------------------------------
# 4.  Main loop – one QR per business folder
# ------------------------------------------------------------
def main():
    for folder in get_business_folders(ROOT_DIR):
        url = read_url(folder)
        if not url:
            print(f"[SKIP] No website_name.txt in {os.path.basename(folder)}")
            continue
        img = make_qr(url)
        out_path = os.path.join(folder, "qr.png")
        img.save(out_path)
        print(f"[DONE] {os.path.basename(folder)} -> {out_path}")

if __name__ == "__main__":
    main()
