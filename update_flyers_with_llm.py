#!/usr/bin/env python3
"""
Flyer customizer with LLM.

* Scans every business folder under pyMETHOD.
* Skips directories in the explicit skip list.
* Only updates flyers that still contain the placeholder title.
* Never reports "No flyer file" unless the Flyer folder truly doesn’t exist.
"""

import os
import re
import pandas as pd
from openai import OpenAI

# ----------------------------------------------------------------------
# Configuration
# ----------------------------------------------------------------------
EXCEL_PATH = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\BUS_DESC_13KM.xlsx"
ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\pyMETHOD"

# Placeholder that appears in the untouched template
PLACEHOLDER_TITLE = "Quickly Boba Cafe - Troy"

# Explicit skip list: directories where we NEVER update or add a flyer
SKIP_LIST = [
    "Rollerz Snow Removal & Hauling",
    "Al Kabob",
    "Titanium Tree Service Sterling Heights",
    "3D Detroit Sterling Heights",
    "Brothers Detailing",
    "Amaseena Restaurant And Bar",
    "Golden CPA",
    "A1 Automobile Detailing",
    "Sterling Heights Commercial Roofing & Siding",
    "Al Shoroq Restaurant",
    "Ryan Palace Restaurant",
    "Johnny's Coney Island",
    "Euro Eats Inc",
    "Sam T. Sadaps, CPA",
    "All American Auto Wash",
    "White Pine Property Services",
    "Ashley's Pet Parlor",
    "Backyard Rehab and Property Maintenance LLC",
    "Controlled Weather HVAC",
    "The Dog Spa All Breed Dog Grooming",
    "Paul's Roofing",
    "Great Lakes Mobile Detail",
    "Europe Insurance Agency",
    "Neighborhood Landscapes",
    "Dexter's Car Detailing & Ceramic Coating",
    "Jonny's Landscape services",
    "Yvonne Manni Laser and Medical Spa",
    "Tony's Pizzeria and Family Restaurant",
    "Hawk Power Washing",
    "Diama-Shield LLC",
    "Manhattan Dance Studio",
    "Bokoba Mexican Cuisine",
    "The Dojo Zen Bei Martial Arts",
    "Brazilian Jiu-Jitsu",
    "AVRA Med Spa",
    "Debbie's Smooch A Pooch Salon",
    "K'S MOBILE AUTOMOTIVE DETAILING",
    "3D AUTO DETAILS",
    "Summit Consulting Services",
    "Al Qithara Restaurant",
    "Dijla Restaurant",
    "Tinsley Landscape and Hardscape LLC.",
    "Michigan Mowers",
    "Petco",
    "Phoenix Tai Chi",
    "American Heating & Air Conditioning",
    "Warren",
    "Pristine Auto & Window",
    "Michigan Roots Outdoor Service",
    "The Spoiled Dog Spa",
    "Epoxy XP",
    "nsi painting and epoxy llc",
    "1 Air Conditioning & Heating Rochester Hills HVAC",
    "Detroit HVAC INC",
    "Pampered Paws Dog Grooming",
    "Maddox Roofing Co.",
    "PaintCrew",
    "RDM PAINTING LLC",
    "Nate's mobile detailing",
    "Epoxy53",
    "Heating & Cooling Oakland County",
    "AAA Mobile Wash",
    "Hercules Painting",
    "Business Cleaning Solutions LLC",
    "Woodbrite Professional Deck",
    "R & B Mobile Detailing",
    "Neo Detailers",
    "Mitchell K Simon CPA",
    "Steranko Robin CPA",
    "All City Heating & Air Conditioning",
    "Ferndale Heating & Cooling",
    "J Milburn Mechanical",
    "Jenny's Tree Service",
    "Gianninis' Window Shine",
    "TWO Friends",
    "Spin Palace Dance Studio LLC",
    "TC Painting",
    "W B Landscaping",
    "Olympic Grill",
    "Tailor Made Grooming",
    "Schoenherr Cahill & Warnez",
    "Dave's Discount Auto LLC",
    "Professional Tax Inc",
    "Point Blank Detailing",
    "J & R Sheet Metal",
    "Bentley's Renovations",
    "harmonyhomemanagementllc",
    "Gruenburg, Roy M Attorney",
    "The Law Offices Of Timothy Doty",
    "Power Cleaning Services LLC",
    "William's Gardening & Hardscape",
    "Diamond Valley Outdoor Creations",
    "Peau Claire Medi Spa",
    "Heating & Cooling",
    "The Community House Dance Academy",
    "Birmingham Insurance Agency",
    "Saito-dojo at the Birmingham Y",
    "U.S Karate-Do Tokukai",
    "Shain Park Property Management",
    "A & B Home improvement LLC",
    "The Dog Shoppe",
    "Ernst Landscaping",
    "BnBeyond",
    "AKT",
    "Now Home Building Inc.",
    "Kuts N Kisses",
    "Dancing Under The Stars",
    "Red Chillies",
    "Knoblock & Badia",
    "Superior Insurance Agency, LLC",
    "Raicevich & Bulgarelli",
    "Saleh Joseph a CPA",
    "Berg Bros., LLC",
    "Foam Storm Auto Wash",
    "Michigan Business Insurance Pros",
    "Lift Property Management",
    "Timothy Wilds, Realtor",
    "Froberger Mathew N",
    "Mr. Car Wash & Self Service Wash 24_7"
]

# ----------------------------------------------------------------------
def build_prompt(latex_source: str, name: str, summary: str) -> str:
    """Prompt that asks the LLM to replace the title, tagline, and “What We Need”."""
    return (
        "You are an expert marketing copywriter who knows LaTeX.\n\n"
        "Below is a complete LaTeX flyer (no markdown fences). Please make **only** these textual changes and return the full document:\n"
        "1) Replace the title line (the line that starts with \\noindent{\\color{accent-teal}\\Large\\bfseries) with the real business name: **" + name + "**.\n"
        "2) Slightly re‑word the tagline line (the line immediately after the title) using the business summary for inspiration.\n"
        "3) Rewrite the paragraph in the \"What We Need From You\" section so it feels specific to this business, again using the summary as context.\n"
        "Do NOT modify any other LaTeX commands, colors, pricing tables, or the logo.\n\n"
        "Business summary (for context):\n" + summary + "\n\n"
        "-----BEGIN LATEX-----\n" + latex_source + "\n-----END LATEX-----\n"
    )

# ----------------------------------------------------------------------
def main():
    # Load the Excel sheet – we need the name & summary for each business
    df = pd.read_excel(EXCEL_PATH)

    # Initialize the NVIDIA NIM client
    client = OpenAI(
        base_url="https://integrate.api.nvidia.com/v1",
        api_key="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"
    )

    # List all business directories in the filesystem
    for business_name in os.listdir(ROOT_DIR):
        business_path = os.path.join(ROOT_DIR, business_name)

        # Skip if not a directory
        if not os.path.isdir(business_path):
            continue

        # Skip if in skip list
        if business_name in SKIP_LIST:
            print(f"[SKIP] No flyer file in {business_name}")
            continue

        flyer_dir = os.path.join(business_path, "Flyer")
        tex_path = os.path.join(flyer_dir, "baseLatexFlyer.tex")

        # Skip if Flyer folder doesn't exist or baseLatexFlyer.tex is missing
        if not os.path.exists(flyer_dir) or not os.path.isfile(tex_path):
            print(f"[SKIP] No flyer file in {business_name}")
            continue

        # Read the flyer
        with open(tex_path, "r", encoding="utf-8") as f:
            tex_content = f.read()

        # Skip if already customised
        if PLACEHOLDER_TITLE not in tex_content:
            print(f"[SKIP] Already customised: {business_name}")
            continue

        # Get summary from Excel
        excel_row = df[df["title"].str.strip() == business_name]
        if excel_row.empty:
            print(f"[WARNING] No Excel summary for {business_name}")
            summary = ""
        else:
            summary = str(excel_row["Business Summary"].values[0]).strip()

        # Build prompt and call LLM
        prompt = build_prompt(tex_content, business_name, summary)
        completion = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3,
            top_p=1,
            max_tokens=4096,
            stream=True,
        )

        generated = ""
        for chunk in completion:
            if not getattr(chunk, "choices", None):
                continue
            content = getattr(chunk.choices[0].delta, "content", None)
            if content is not None:
                generated += content

        # Clean up markdown fences if present
        generated = re.sub(r"^```[a-zA-Z]*\n", "", generated.strip())
        generated = re.sub(r"\n```$", "", generated)

        # Overwrite the flyer
        with open(tex_path, "w", encoding="utf-8") as f:
            f.write(generated)
        print(f"[DONE] Updated flyer for {business_name}")

if __name__ == "__main__":
    main()