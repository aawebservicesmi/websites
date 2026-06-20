import os
import re
import shutil

# ==========================================
# CONFIGURATION
# Set DRY_RUN to False when you want to actually copy the files!
DRY_RUN = False

SRC_ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\websites"
DEST_ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\FINISHED_FLYERS"
# ==========================================

# Complete mapping from your project setup
BUSINESS_MAPPING = {
    "1000-plus": "1000 Plus",
    "12th-street-grill": "12th Street Grill",
    "20-20-holdings": "20 20 Holdings",
    "a-and-m-accounting-and-tax-services": "A & M Accounting & Tax Services",
    "a-and-m-mobile-detailing-l-l-c": "A & m Mobile Detailing L.L.C",
    "abra-contracting-llc": "ABRA Contracting LLC",
    "ac-warehouse": "AC Warehouse",
    "advanced-cpas-llp": "Advanced CPA's LLP",
    "air-conditioning-engineers": "Air Conditioning Engineers",
    "all-cities-insurance": "All Cities Insurance",
    "allstar-detailing": "Allstar detailing",
    "allure-body-spa": "Allure Body Spa",
    "alpine-management": "Alpine Management",
    "alrafidyn-restaurant": "Alrafidyn Restaurant",
    "angels-house-restaurant": "Angel's House Restaurant",
    "animal-learning-systems-urban-dog-campus": "Animal Learning Systems Urban Dog Campus",
    "barnett-heating-and-cooling": "Barnett Heating & Cooling",
    "birmingham-ballroom": "Birmingham Ballroom",
    "blue-skies-insurance": "Blue Skies Insurance",
    "bollyxpress-dance-and-fitness": "BollyXpress Dance & Fitness",
    "bonez-auto-detailing": "Bonez Auto Detailing",
    "borders-sidney-r": "Borders Sidney R",
    "brazilian-jiju-jitsu": "Brazilian Jiju Jitsu",
    "candk-premium-landscaping-service-llc": "C&K Premium Landscaping Service LLC",
    "cappuso-gutters-siding-roofing": "Cappuso Gutters Siding-Roofing",
    "caps-heating-and-cooling": "Caps Heating & Cooling",
    "cca-commercial-cleaning-services": "CCA Commercial Cleaning services",
    "chantel-and-sons-auto-detail-llc": "Chantel & Sons Auto Detail LLC",
    "cherry-hill-real-estate": "Cherry Hill Real Estate",
    "cherry-wood-tree-service": "Cherry wood tree service",
    "city-style-tango": "City Style Tango",
    "cjs-auto-salon": "CJ's Auto Salon",
    "ck-roofing-prime-llc": "CK Roofing Prime LLC",
    "clarence-h-johnson-pc-cpas-james-johnson-jr-cpa": "Clarence H Johnson PC Cpa's - James Johnson Jr CPA",
    "claws-and-paws-by-renee": "Claws & Paws By Renee",
    "clear-sunshine-llc": "Clear Sunshine LLC",
    "construction-fleet-concrete": "Construction Fleet Concrete",
    "costello-law": "costello law",
    "costigan-roofing-contractors": "Costigan Roofing Contractors",
    "creative-commercial-real-estate-inc": "Creative Commercial Real Estate, Inc.",
    "cryo-care-automotive": "CRYO CARE AUTOMOTIVE",
    "cupolo-wayne-t-cpa": "Cupolo Wayne T CPA",
    "custom-ins-agency": "Custom Ins Agency",
    "d-a-mutschler-cpa-pc": "D A Mutschler CPA, PC",
    "danis-landscaping": "Dani's Landscaping",
    "david-a-sophiea-cpa-llc": "David A. Sophiea, CPA, LLC",
    "debbie-gilchers-landscaping": "Debbie Gilchers Landscaping",
    "denny-streckers-martial-arts": "Denny Strecker's Martial Arts",
    "desirees-groovy-grooming": "Desiree's Groovy Grooming",
    "detroit-auto-detailing-services": "Detroit Auto Detailing Services",
    "detroit-rental-property-management": "Detroit Rental Property Management",
    "diamond-roofing-and-construction": "Diamond Roofing and Construction",
    "dodge-park-coney-island": "Dodge Park Coney Island",
    "doggie-styles-pet-salon": "Doggie Styles Pet Salon",
    "dollar-town-smoke-town": "Dollar town, Smoke Town",
    "done-heating-and-cooling-llc": "Done Heating & Cooling, LLC",
    "dream-restaurant": "Dream Restaurant",
    "e-and-y-insurance-and-tax-preparation": "E & Y Insurance & Tax Preparation",
    "east-pointe-tax-and-accounting": "East Pointe Tax & Accounting",
    "ejw-construction": "EJW Construction",
    "elijahgarrett97": "Elijahgarrett97",
    "elite-dog-grooming": "Elite Dog Grooming",
    "elite-house-cleaning": "Elite House Cleaning",
    "empire-heating-and-cooling-inc": "Empire Heating & Cooling Inc",
    "exclusive-pet-buys": "Exclusive Pet Buys",
    "fiorini-services-llc": "Fiorini Services LLC",
    "freshwater-landscaping": "FreshWater Landscaping",
    "fvpm-property-management": "FVPM PROPERTY MANAGEMENT",
    "glassxpert": "Glassxpert",
    "gold-star-construction": "Gold Star Construction",
    "grand-prix-auto-wash": "Grand Prix Auto Wash",
    "green-valley-insurance-agency": "Green Valley Insurance Agency",
    "greenland-realty": "Greenland Realty",
    "ground-up-appliance-repairs-and-installations": "Ground Up Appliance Repairs and Installations",
    "handyman-4-u": "Handyman 4 u",
    "harold-hahn-and-associates": "Harold Hahn & Associates",
    "heating-and-air-conditioning": "Heating & Air Conditioning",
    "high-end-painting": "High End Painting",
    "high-priority-property-management": "High Priority Property Management",
    "ho-wah-chinese-restaurant": "Ho Wah Chinese Restaurant",
    "ikonik-realty": "IKONIK REALTY",
    "inspire-auto-detailing": "Inspire Auto Detailing",
    "insurance-jonathan-heinzman-agency": "Insurance- Jonathan Heinzman Agency",
    "insure-all-agency": "Insure All Agency",
    "integrated-financial-group": "Integrated Financial Group",
    "j-baldwins-restaurant": "J.Baldwin's Restaurant",
    "jabal-heating-and-cooling-llc": "Jabal heating And Cooling LLC",
    "jacks-auto-detailing-and-collision-repair": "JACK'S AUTO DETAILING & Collision repair",
    "jakes-party-supplies": "Jakes Party Supplies +",
    "jaxx-home-improvement": "Jaxx Home Improvement",
    "joseph-moore-heating-and-cooling-llc": "Joseph Moore Heating And Cooling, LLC",
    "jujus-auto-detailing": "JUJU’S Auto Detailing",
    "k-beauty-and-skin": "K Beauty and Skin",
    "kabob-house": "Kabob House",
    "kai-shin-kan-dojo": "Kai Shin Kan dojo",
    "keller-williams-rochester-the-larry-roberts-team": "Keller Williams Rochester - The Larry Roberts Team",
    "kevins-services-power-and-wash": "Kevin’s Services - Power and Wash",
    "kims-taekowndo-usa-world-champion-taekwondo": "Kim's Taekowndo USA (World Champion Taekwondo)",
    "kingsmen-mobile-solutions": "Kingsmen Mobile Solutions",
    "la-coney-island-restaurant": "La Coney Island Restaurant",
    "lavash-grill-and-bakery": "Lavash Grill And Bakery",
    "lavender-grooms": "Lavender Grooms",
    "lawnclippers-landscaping": "Lawnclippers Landscaping",
    "le-reve-dance-company": "Le Reve Dance Company",
    "luxury-landscaping-and-outdoor-services": "Luxury Landscaping & Outdoor Services",
    "m-d-cosmetic-and-skin-care": "M D Cosmetic & Skin Care",
    "macomb-construction": "Macomb Construction",
    "majik-clean": "Majik Clean",
    "maria-clark": "Maria Clark",
    "martial-arts-center-for-excellence": "Martial Arts Center for Excellence",
    "master-auto-repair": "MASTER AUTO REPAIR",
    "miah-cpa": "MIAH CPA",
    "michael-d-elias-cpa-pllc": "Michael D Elias CPA PLLC",
    "michaelwindowcleaning10": "MichaelWindowCleaning10",
    "michigan-boxing-gym": "Michigan Boxing Gym",
    "michigan-tree-solutions-network": "Michigan Tree Solutions Network",
    "motor-city-accounting": "Motor City Accounting",
    "motor-city-painting": "Motor City Painting",
    "mr-shines-auto-detail-llc": "Mr Shine's Auto Detail, LLC.",
    "munch-n-dip": "Munch N’ Dip",
    "my-repair-pros": "My Repair Pros",
    "nan": "Nan",
    "natural-disaster-service-llc": "Natural Disaster Service LLC",
    "next-level-outdoor-services-shelby-mi": "Next Level Outdoor Services Shelby mi",
    "nfx-detailing-services": "NFX DETAILING SERVICES",
    "northern-star-landscaping": "NORTHERN STAR LANDSCAPING",
    "northfield-apartments": "Northfield Apartments",
    "oak-diner": "Oak Diner",
    "oakland-medical-spa": "Oakland Medical Spa",
    "oaks-commercial-roofing": "Oaks Commercial Roofing",
    "omega-roofing-and-construction": "Omega Roofing & Construction",
    "on-the-spot-window-cleaning-llc": "On The Spot Window Cleaning LLC",
    "orange-tree-cafe-restaurant": "Orange Tree Cafe Restaurant",
    "orena-at-oakland-university": "O'rena At Oakland University",
    "painting-and-staining-inc": "Painting & Staining Inc",
    "pate-and-associates-pate-david-p-cpa": "Pate & Associates: Pate David P CPA",
    "patel-income-tax": "Patel Income Tax",
    "paul-j-smigielski-and-associates-pllc": "Paul J Smigielski & Associates PLLC",
    "paws-2-learn": "Paws 2 Learn",
    "pellegrino-and-co": "Pellegrino & Co",
    "perry-insurance-agency": "Perry Insurance Agency",
    "pk-outdoor-maintenance": "PK Outdoor Maintenance",
    "precision-roofing-and-construction": "Precision Roofing & Construction",
    "prime-properties-management-llc": "Prime Properties Management Llc",
    "puppy-and-dog-training-by-sue": "Puppy and Dog Training by Sue",
    "qamar-al-zaman-restaurant": "QAMAR AL-ZAMAN RESTAURANT مطعم قمر الزمان",
    "qi-gong-martial-arts": "Qi Gong Martial Arts",
    "quality-car-wash": "Quality Car Wash",
    "r5-roofing-and-construction": "R5 Roofing and Construction",
    "rabindrik-dance-studio": "Rabindrik Dance Studio",
    "raymonds-roofing-inc": "Raymonds Roofing Inc.",
    "refined-beauty-laser-and-med-spa": "Refined Beauty Laser and Med Spa",
    "robins-wash-n-wag": "Robin's Wash N Wag",
    "rochester-family-law-firm-pllc": "Rochester Family Law Firm PLLC",
    "rochester-property-management": "Rochester Property Management",
    "rochesters-roofing-and-siding": "Rochesters Roofing And Siding",
    "roman-empire-heating-and-cooling": "Roman Empire Heating and Cooling",
    "royal-oak-dance-academy": "Royal Oak Dance Academy",
    "royal-oak-heating-and-air-conditioning": "Royal Oak Heating & Air Conditioning",
    "royal-oak-insurance-group": "Royal Oak Insurance Group",
    "royal-palace-restaurant-and-banquet-hall": "Royal Palace Restaurant & Banquet Hall",
    "royal-tropical-fish-and-bird-haven": "Royal Tropical Fish & Bird Haven",
    "rr-heating-and-ac-solutions": "RR Heating & AC Solutions",
    "safe-spray-pressure-washing": "Safe Spray Pressure Washing",
    "sams-landscaping": "Sam’s landscaping",
    "shear-delight-pet-salon": "Shear Delight Pet Salon",
    "sheffield-brothers-roofing": "Sheffield Brothers Roofing",
    "shelby-roof": "SHELBY ROOF",
    "smart-properties-llc": "Smart Properties LLC",
    "southeast-michigan-property-rehabalitation-group-llc": "Southeast Michigan Property Rehabalitation Group LLC",
    "sterling-coney-island": "Sterling Coney Island",
    "sterling-hill-apartments": "Sterling Hill Apartments",
    "steves-lawn-care-services": "Steve's Lawn Care Services",
    "stn-painting-and-powerwashing-llc": "STN Painting and Powerwashing LLC",
    "summitguard-roofing-company": "Summitguard Roofing Company",
    "takumakan": "takumakan",
    "target-mechanical-heating-and-cooling": "TARGET MECHANICAL HEATING & COOLING",
    "tech-iv": "Tech IV",
    "temp-1-heating-and-cooling": "Temp - 1 Heating & Cooling",
    "tesla-heating-and-cooling": "Tesla Heating & Cooling",
    "the-law-office-of-armisa-laze-ura-pllc": "The Law Office of Armisa Laze Ura, LLC",
    "the-law-office-of-whitney-s-lemelin-p-c": "The Law Office of Whitney S. Lemelin, P.C.",
    "the-right-choice-insurance-agency": "The Right Choice Insurance Agency",
    "the-roof-doctor": "The Roof Doctor",
    "the-studio-boxing-and-fitness": "The Studio Boxing and Fitness",
    "theluxurypaw-llc": "TheLuxuryPaw LLC",
    "thomas-a-mette-pc": "Thomas A Mette PC",
    "tracey-howard": "Tracey Howard",
    "tracey-howard-andrews-realty-group": "Tracey Howard, Andrews Realty Group",
    "transcending-horizons-inc": "Transcending Horizons, Inc.",
    "tree-removal-sterling-heights": "Tree Removal Sterling Heights",
    "usa-truck-and-trailer-repair": "USA Truck & Trailer Repair",
    "vanhoutte-robert-j": "VanHoutte, Robert J",
    "vercnocke-and-associates": "Vercnocke & Associates",
    "vm-real-estate-group-vm-property-management": "VM Real Estate Group / VM Property Management",
    "walter-a-holdan-cpa": "Walter A Holdan CPA",
    "warren-tax-and-accounting": "Warren Tax & Accounting",
    "wendel-tree-and-landscape-llc": "Wendel Tree and Landscape LLC",
    "wilks-landscaping": "Wilk's Landscaping",
    "wing-lee-chinese-restaurant": "Wing Lee Chinese Restaurant",
    "wolicki-frank-j-cpa": "Wolicki Frank J CPA",
    "woods-lawn-services": "Wood's Lawn Services",
    "woodys-tree-service": "Woody's Tree Service",
    "ymandks-services": "YM&KS Services",
    "your-car-wash": "Your Car Wash",
    "zippen-clippers": "Zippen Clippers",
    "zotos-and-company": "Zotos & Company"
}

def main():
    mode_label = "DRY RUN (PREVIEW)" if DRY_RUN else "LIVE FILE MIGRATION"
    print(f"--- RUNNING IN {mode_label} MODE ---")
    
    copied_count = 0
    skipped_count = 0

    # Regex matches 'newLatexTemplate' followed by exactly 3 digits and '.pdf'
    pdf_pattern = re.compile(r"newLatexTemplate(\d{3})\.pdf")

    for folder_name in BUSINESS_MAPPING.keys():
        flyer_dir = os.path.join(SRC_ROOT_DIR, folder_name, "Flyer")
        
        if not os.path.exists(flyer_dir):
            skipped_count += 1
            continue
            
        try:
            # Look for matching pdf files inside the Flyer folder
            pdf_files = [f for f in os.listdir(flyer_dir) if pdf_pattern.match(f)]
        except Exception:
            continue

        if not pdf_files:
            skipped_count += 1
            continue

        for pdf_file in pdf_files:
            # Extract the group number (e.g., '003')
            match = pdf_pattern.match(pdf_file)
            group_num = match.group(1)
            
            # Source file full path
            src_file_path = os.path.join(flyer_dir, pdf_file)
            
            # Destination directory structure: FINISHED_FLYERS / group_num
            dest_dir_path = os.path.join(DEST_ROOT_DIR, group_num)
            
            # Safe unique filename to prevent businesses in the same group from overwriting each other
            dest_file_name = f"{folder_name}_{pdf_file}"
            dest_file_path = os.path.join(dest_dir_path, dest_file_name)
            
            print(f"📄 Business: {folder_name}")
            print(f"   -> Found Src: Flyer/{pdf_file}")
            print(f"   -> Destination: FINISHED_FLYERS/{group_num}/{dest_file_name}")
            
            if not DRY_RUN:
                try:
                    # Safely make sure destination directory exists just in case
                    os.makedirs(dest_dir_path, exist_ok=True)
                    
                    # Copy file and preserve original metadata timestamps
                    shutil.copy2(src_file_path, dest_file_path)
                    print("   ✅ Status: COPY SUCCESS")
                except Exception as e:
                    print(f"   ❌ Status: FAILED due to error: {e}")
            else:
                print("   -> Status: WILL COPY")
                
            copied_count += 1
            print("-" * 50)

    print(f"\nProcess complete.")
    print(f"PDF Flyers copied/targeted: {copied_count}")
    print(f"Folders skipped: {skipped_count}")
    
    if DRY_RUN and copied_count > 0:
        print("\n*** Safe configuration verified. Set 'DRY_RUN = False' to execute file copies! ***")

if __name__ == "__main__":
    main()