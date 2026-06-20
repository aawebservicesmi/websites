import os
import re

# ==========================================
# CONFIGURATION
# Set DRY_RUN to False when you are ready to update the files permanently!
DRY_RUN = False
ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\websites"
# ==========================================

# Complete mapping from your provided script
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

# Raw copy-pasted table data from your prompt
RAW_GROUP_DATA = """
Fiorini Services LLC	1
Grand Prix Auto Wash	1
The Roof Doctor	1
C&K Premium Landscaping Service LLC	1
Robin's Wash N Wag	1
Your Car Wash	1
City Style Tango	1
RR Heating & AC Solutions	2
12th Street Grill	2
Kabob House	2
Munch Nâ€™ Dip	2
Royal Palace Restaurant & Banquet Hall	2
Desiree's Groovy Grooming	2
Cupolo Wayne T CPA	2
East Pointe Tax & Accounting	2
The Right Choice Insurance Agency	2
20 20 Holdings	2
Summitguard Roofing Company	2
Jaxx Home Improvement	2
Dollar town, Smoke Town	2
Elite House Cleaning	2
Michigan Boxing Gym	2
E & Y Insurance & Tax Preparation	2
Alpine Management	2
A & m Mobile Detailing L.L.C	3
Diamond Roofing and Construction	3
M D Cosmetic & Skin Care	3
SHELBY ROOF	3
Macomb Construction	3
Gold Star Construction	3
Lavender Grooms	3
Martial Arts Center for Excellence	3
Construction Fleet Concrete	3
Luxury Landscaping & Outdoor Services	3
Le Reve Dance Company	3
FreshWater Landscaping	3
Green Valley Insurance Agency	3
Custom Ins Agency	3
Sterling Hill Apartments	3
Paul J Smigielski & Associates PLLC	3
The Law Office of Armisa Laze Ura, PLLC	3
Borders Sidney R	3
VanHoutte, Robert J	3
Blue Skies Insurance	3
Jabal heating And Cooling LLC	4
Rochester Property Management	4
Wendel Tree and Landscape LLC	4
Omega Roofing & Construction	4
Oakland Medical Spa	4
The Studio Boxing and Fitness	4
Rochester Family Law Firm PLLC	4
NFX DETAILING SERVICES	4
Insurance- Jonathan Heinzman Agency	4
Perry Insurance Agency	4
Tracey Howard, Andrews Realty Group	4
Creative Commercial Real Estate, Inc.	4
Keller Williams Rochester - The Larry Roberts Team	4
Tracey Howard	4
Cherry Hill Real Estate	4
Northfield Apartments	4
K Beauty and Skin	4
Zippen Clippers	4
Animal Learning Systems Urban Dog Campus	4
Natural Disaster Service LLC	5
Oak Diner	5
Royal Oak Heating & Air Conditioning	5
Safe Spray Pressure Washing	5
Majik Clean	5
Precision Roofing & Construction	5
Handyman 4 u	5
PK Outdoor Maintenance	5
Costigan Roofing Contractors	5
Raymonds Roofing Inc.	5
TheLuxuryPaw LLC	5
Nan	5
Puppy and Dog Training by Sue	5
Royal Tropical Fish & Bird Haven	5
Clarence H Johnson PC Cpa's - James Johnson Jr CPA	5
Royal Oak Insurance Group	5
Detroit Rental Property Management	5
Smart Properties LLC	5
Ground Up Appliance Repairs and Installations	5
Transcending Horizons, Inc.	5
Wing Lee Chinese Restaurant	6
Motor City Accounting	6
Pate & Associates: Pate David P CPA	6
Zotos & Company	6
On The Spot Window Cleaning LLC	6
Painting & Staining Inc	6
Detroit Auto Detailing Services	7
Motor City Painting	7
R5 Roofing and Construction	7
Sheffield Brothers Roofing	7
Costigan Roofing Contractors	7
BollyXpress Dance & Fitness	7
AC Warehouse	7
MichaelWindowCleaning10	7
Glassxpert	8
Temp - 1 Heating & Cooling	8
Done Heating & Cooling, LLC	8
Heating & Air Conditioning	8
La Coney Island Restaurant	8
Claws & Paws By Renee	8
JACK'S AUTO DETAILING & Collision repair	8
MASTER AUTO REPAIR	8
Greenland Realty	8
NORTHERN STAR LANDSCAPING	8
Cherry wood tree service	8
Debbie Gilchers Landscaping	8
Tree Removal Sterling Heights	8
EJW Construction	8
Jakes Party Supplies +	8
A & M Accounting & Tax Services	8
Kevinâ€™s Services - Power and Wash	8
Empire Heating & Cooling Inc	8
Allstar detailing	9
Samâ€™s landscaping	9
Ho Wah Chinese Restaurant	9
Dream Restaurant	9
QAMAR AL-ZAMAN RESTAURANT Ù…Ø·Ø¹Ù… Ù‚Ù…Ø± Ø§Ù„Ø²Ù…Ø§Ù†	9
Kim's Taekowndo USA (World Champion Taekwondo)	9
Patel Income Tax	9
YM&KS Services	9
Barnett Heating & Cooling	9
Chantel & Sons Auto Detail LLC	10
Detroit Auto Detailing Services	10
Angel's House Restaurant	10
Wood's Lawn Services	10
Woody's Tree Service	10
Allure Body Spa	10
Dodge Park Coney Island	10
Mr Shine's Auto Detail, LLC.	10
Orange Tree Cafe Restaurant	10
Michael D Elias CPA PLLC	10
High End Painting	10
Kingsmen Mobile Solutions	11
Omega Roofing & Construction	11
Oaks Commercial Roofing	11
Raymonds Roofing Inc.	11
CK Roofing Prime LLC	11
Brazilian Jiju Jitsu	11
Doggie Styles Pet Salon	11
My Repair Pros	11
Quality Car Wash	11
Tesla Heating & Cooling	11
Southeast Michigan Property Rehabalitation Group LLC	11
Royal Oak Dance Academy	11
Bonez Auto Detailing	12
ABRA Contracting LLC	12
Rochesters Roofing And Siding	12
STN Painting and Powerwashing LLC	12
O'rena At Oakland University	12
takumakan	12
Clear Sunshine LLC	12
costello law	12
Paws 2 Learn	12
Birmingham Ballroom	12
Roman Empire Heating and Cooling	13
Elite Dog Grooming	13
Elijahgarrett97	13
Denny Strecker's Martial Arts	13
Inspire Auto Detailing	13
David A. Sophiea, CPA, LLC	13
Advanced CPA's LLP	13
Wolicki Frank J CPA	13
Warren Tax & Accounting	13
High Priority Property Management	13
IKONIK REALTY	13
Lawnclippers Landscaping	13
Exclusive Pet Buys	13
Shear Delight Pet Salon	13
MIAH CPA	13
The Law Office of Whitney S. Lemelin, P.C.	13
All Cities Insurance	13
Insure All Agency	13
J.Baldwin's Restaurant	14
Wilk's Landscaping	14
JUJUâ€™S Auto Detailing	14
D A Mutschler CPA, PC	14
Pellegrino & Co	14
1000 Plus	14
Harold Hahn & Associates	14
Thomas A Mette PC	14
Vercnocke & Associates	14
Walter A Holdan CPA	14
Tech IV	14
Joseph Moore Heating And Cooling, LLC	14
VM Real Estate Group / VM Property Management	14
Maria Clark	14
Alrafidyn Restaurant	15
Rabindrik Dance Studio	15
Integrated Financial Group	15
Air Conditioning Engineers	15
USA Truck & Trailer Repair	15
CJ's Auto Salon	15
Michigan Tree Solutions Network	16
CCA Commercial Cleaning services	16
Kai Shin Kan dojo	16
Qi Gong Martial Arts	16
Lavash Grill And Bakery	16
Refined Beauty Laser and Med Spa	16
Steve's Lawn Care Services	16
Next Level Outdoor Services Shelby mi	17
TARGET MECHANICAL HEATING & COOLING	17
Caps Heating & Cooling	17
Cappuso Gutters Siding-Roofing	17
CRYO CARE AUTOMOTIVE	17
FVPM PROPERTY MANAGEMENT	17
Prime Properties Management Llc	17
Sterling Coney Island	18
Dani's Landscaping	18
Rollerz Snow Removal & Hauling	18
Al Kabob	18
Titanium Tree Service Sterling Heights	18
3D Detroit Sterling Heights	18
Brothers Detailing	18
Amaseena Restaurant And Bar	18
Golden CPA	18
A1 Automobile Detailing	19
Sterling Heights Commercial Roofing & Siding	19
Al Shoroq Restaurant	19
Ryan Palace Restaurant	19
Johnny's Coney Island	19
Euro Eats Inc	19
Sam T. Sadaps, CPA	19
All American Auto Wash	19
White Pine Property Services	19
Ashley's Pet Parlor	19
Backyard Rehab and Property Maintenance LLC	20
Controlled Weather HVAC	20
The Dog Spa All Breed Dog Grooming	20
Paulâ€™s Roofing	20
Great Lakes Mobile Detail	20
Europe Insurance Agency	20
Neighborhood Landscapes	21
Dexter's Car Detailing & Ceramic Coating	21
Jonny's Landscape services	21
Yvonne Manni Laser and Medical Spa	22
Tony's Pizzeria and Family Restaurant	22
Hawk Power Washing	22
Diama-Shield LLC	22
Manhattan Dance Studio	22
Bokoba Mexican Cuisine	22
The Dojo Zen Bei Martial Arts	22
Brazilian Jiu-Jitsu	22
AVRA Med Spa	22
Debbie's Smooch A Pooch Salon	23
Kâ€™S MOBILE AUTOMOTIVE DETAILING	23
3D AUTO DETAILS	23
Summit Consulting Services	23
Al Qithara Restaurant	23
Dijla Restaurant	23
Tinsley Landscape and Hardscape LLC.	23
Michigan Mowers	23
Petco	23
Phoenix Tai Chi	23
American Heating & Air Conditioning	23
Warren	23
Pristine Auto & Window	24
Michigan Roots Outdoor Service	24
The Spoiled Dog Spa	24
Epoxy XP	24
nsi painting and epoxy llc	24
1 Air Conditioning & Heating Rochester Hills HVAC	24
Detroit HVAC INC	24
Pampered Paws Dog Grooming	24
Maddox Roofing Co.	24
PaintCrew	24
RDM PAINTING LLC	24
Nateâ€™s mobile detailing	25
Epoxy53	25
Heating & Cooling Oakland County	25
AAA Mobile Wash	25
Hercules Painting	25
Business Cleaning Solutions LLC	25
Woodbrite Professional Deck	25
R & B Mobile Detailing	25
Neo Detailers	25
Mitchell K Simon CPA	25
Steranko Robin CPA	25
All City Heating & Air Conditioning	25
Ferndale Heating & Cooling	25
J Milburn Mechanical	25
Jenny's Tree Service	26
RR Heating & AC Solutions	26
Gianninis' Window Shine	26
TWO Friends	26
Spin Palace Dance Studio LLC	26
TC Painting	26
W B Landscaping	27
Olympic Grill	27
Tailor Made Grooming	27
Schoenherr Cahill & Warnez	27
Dave's Discount Auto LLC	27
Professional Tax Inc	27
Point Blank Detailing	27
J & R Sheet Metal	27
Bentley's Renovations	27
harmonyhomemanagementllc	27
Gruenburg, Roy M Attorney	27
The Law Offices Of Timothy Doty	27
Power Cleaning Services LLC	27
Williamâ€™s Gardening & Hardscape	28
Diamond Valley Outdoor Creations	28
Peau Claire Medi Spa	28
Heating & Cooling	28
The Community House Dance Academy	28
Birmingham Insurance Agency	28
Saito-dojo at the Birmingham Y	28
U.S Karate-Do Tokukai	28
Shain Park Property Management	28
A & B Home improvement LLC	29
The Dog Shoppe	29
Ernst Landscaping	29
BnBeyond	29
AKT	29
Now Home Building Inc.	30
Kuts N Kisses	30
Dancing Under The Stars	30
Red Chillies	30
Knoblock & Badia	30
Superior Insurance Agency, LLC	30
Raicevich & Bulgarelli	30
Saleh Joseph a CPA	30
Berg Bros., LLC	30
Foam Storm Auto Wash	30
Michigan Business Insurance Pros	30
Lift Property Management	30
Timothy Wilds, Realtor	30
Froberger Mathew N	30
Mr. Car Wash & Self Service Wash 24/7	30
"""

def normalize(text):
    """
    Strips non-alphanumeric text and transforms to lowercase.
    This wipes out trailing spaces, Arabic mojibake, and smart-quote discrepancies.
    """
    text = text.lower()
    text = text.replace("â€™", "").replace("’", "").replace("'", "")
    return re.sub(r'[^a-z0-9]', '', text)

def build_parsed_groups():
    """
    Parses the raw spreadsheet snippet line-by-line using a safe right-split 
    to separate business name from group number.
    """
    group_map = {}
    for line in RAW_GROUP_DATA.strip().split("\n"):
        line = line.strip()
        if not line or "Group Number" in line:
            continue
        
        # Split starting from the right side to isolate the number reliably
        parts = line.rsplit(maxsplit=1)
        if len(parts) == 2:
            name, group_num = parts[0].strip(), parts[1].strip()
            try:
                group_map[normalize(name)] = int(group_num)
            except ValueError:
                continue
    return group_map

def main():
    print(f"--- RUNNING IN {'DRY RUN (PREVIEW)' if DRY_RUN else 'LIVE UPDATE'} MODE ---")
    
    # 1. Parse the spreadsheet text into a clean normalized dictionary
    group_map = build_parsed_groups()
    
    updated_count = 0
    skipped_count = 0

    # 2. Loop through your directory lookup configuration map
    for folder_name, formal_name in BUSINESS_MAPPING.items():
        normalized_formal = normalize(formal_name)
        
        # Verify if the business has an assigned group number
        if normalized_formal not in group_map:
            print(f"⚠️ Skipping '{folder_name}' - No matching entry found in Group data.")
            skipped_count += 1
            continue
            
        group_num = group_map[normalized_formal]
        group_str = f"{group_num:03d}"  # Pads with zeros to create standard 3 digits (e.g. 001, 015)
        
        latex_path = os.path.join(ROOT_DIR, folder_name, "Flyer", "newLatexTemplate.tex")
        
        if not os.path.exists(latex_path):
            skipped_count += 1
            continue
            
        # 3. Read the target LaTeX flyer document
        with open(latex_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Target regex pattern matching \hfill{\color{gray!70}\fontsize{5}{6}\selectfont GGG}
        # where GGG represents any 3-digit number assignment string
        pattern = r"\\hfill\{\\color\{gray!70\}\\fontsize\{5\}\{6\}\\selectfont \d{3}\}"
        replacement = r"\hfill{\color{gray!70}\fontsize{5}{6}\selectfont " + group_str + "}"
        
        if re.search(pattern, content):
            # Using a lambda function forces re.sub to treat the replacement string 100% literally
            new_content = re.sub(pattern, lambda match: replacement, content)
            
            # Check if text was already set to this specific number sequence
            if new_content == content:
                print(f"ℹ️ Folder: {folder_name} -> Already configured to Group {group_str}.")
                skipped_count += 1
                continue
                
            print(f"✅ Folder: {folder_name} -> Target Group: {group_str}")
            
            if not DRY_RUN:
                try:
                    with open(latex_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print("   Status: SUCCESS")
                except Exception as e:
                    print(f"   Status: FAILED due to Error: {e}")
            else:
                print("   Status: WILL UPDATE")
                
            updated_count += 1
        else:
            print(f"❌ Folder: {folder_name} -> Tracking tag missing inside template. Run styling script first.")
            skipped_count += 1
            
        print("-" * 50)

    print(f"\nProcess complete.")
    print(f"Files updated/targeted: {updated_count}")
    print(f"Files skipped/unchanged: {skipped_count}")
    
    if DRY_RUN and updated_count > 0:
        print("\n*** Look over the preview targets. Change 'DRY_RUN = True' to 'DRY_RUN = False' to run live. ***")

if __name__ == "__main__":
    main()