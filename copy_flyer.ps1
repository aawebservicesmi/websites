#!/usr/bin/env pwsh

# Define the skip list
$skipList = @(
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
    "Mr. Car Wash & Self Service Wash 24_7",
    "Heating & Cooling"
)

# Template file path
$templateFile = "C:\Users\ashwi\Downloads\13KM_WEBSITES\pyMETHOD\1000 Plus\Flyer\baseLatexFlyer.tex"

# Root directory
$rootDir = "C:\Users\ashwi\Downloads\13KM_WEBSITES\pyMETHOD"

# Get all business directories
$businessDirs = Get-ChildItem -Directory -Path $rootDir

foreach ($dir in $businessDirs) {
    $businessName = $dir.Name

    # Skip if in skip list
    if ($skipList -contains $businessName) {
        Write-Host "[SKIP] $businessName" -ForegroundColor Yellow
        continue
    }

    # Skip if already customized
    if ($businessName -eq "RR Heating & AC Solutions") {
        Write-Host "[SKIP] Already customised: $businessName" -ForegroundColor Yellow
        continue
    }

    # Define Flyer directory
    $flyerDir = Join-Path -Path $dir.FullName -ChildPath "Flyer"

    # Create Flyer directory if it doesn't exist
    if (-not (Test-Path -Path $flyerDir)) {
        New-Item -ItemType Directory -Path $flyerDir | Out-Null
        Write-Host "Created Flyer directory for $businessName" -ForegroundColor Green
    }

    # Define target file path
    $targetFile = Join-Path -Path $flyerDir -ChildPath "baseLatexFlyer.tex"

    # Copy the template file if it doesn't exist
    if (-not (Test-Path -Path $targetFile)) {
        Copy-Item -Path $templateFile -Destination $targetFile
        Write-Host "Copied baseLatexFlyer.tex to $businessName" -ForegroundColor Green
    } else {
        Write-Host "[EXISTS] baseLatexFlyer.tex already exists in $businessName" -ForegroundColor Blue
    }
}