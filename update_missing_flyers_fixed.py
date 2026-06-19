#!/usr/bin/env python3
"""
Selective flyer copier.

* Scans every business folder under pyMETHOD.
* Copies baseLatexFlyer.tex from the template if missing.
* Skips directories in the explicit skip list.
"""

import os
import re
import shutil

# ----------------------------------------------------------------------
# Configuration
# ----------------------------------------------------------------------
ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\pyMETHOD"
TEMPLATE_FILE = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\pyMETHOD\1000 Plus\Flyer\baseLatexFlyer.tex"

# Explicit skip list: directories where we NEVER add a flyer
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
def main():
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

        # Create Flyer directory if missing
        if not os.path.exists(flyer_dir):
            os.makedirs(flyer_dir)
            print(f"Created Flyer directory for {business_name}")

        # Copy template if missing
        if not os.path.isfile(tex_path):
            shutil.copy2(TEMPLATE_FILE, tex_path)
            print(f"[COPIED] baseLatexFlyer.tex to {business_name}")
        else:
            print(f"[EXISTS] baseLatexFlyer.tex already exists in {business_name}")

if __name__ == "__main__":
    main()