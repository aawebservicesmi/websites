# ----------------------------------------------------------------------
# update_config_from_excel_llm_pure.py
#
# Reads BUS_DESC_13KM.xlsx, hands the raw business details and a template
# to the NVIDIA NIM endpoint (GPT-OSS-120B), and writes the fully
# AI-generated `config.js` into the respective business folder.
# ----------------------------------------------------------------------

import os
import re
import pandas as pd
from openai import OpenAI

# ------------------------------ Settings ------------------------------

EXCEL_PATH = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\BUS_DESC_13KM_trimmed.xlsx"
ROOT_DIR = r"C:\Users\ashwi\Downloads\13KM_WEBSITES\pyMETHOD"

# ----------------------------------------------------------------------
# Blank Template Configuration Reference
# ----------------------------------------------------------------------
CONFIG_TEMPLATE = """
// ============================================================
// BUSINESS CONFIG — {{BUSINESS_NAME}}
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  // THEME
  // ----------------------------------------------------------
  theme: "{{THEME}}",

  // ----------------------------------------------------------
  // BUSINESS BASICS
  // ----------------------------------------------------------
  business: {
    name: "{{BUSINESS_NAME}}",
    shortName: "{{SHORT_NAME}}",
    tagline: "{{TAGLINE}}",
    description: "{{DESCRIPTION}}",
    type: "{{TYPE}}",
    founded: "{{FOUNDED}}",
  },

  // ----------------------------------------------------------
  // COLORS & FONTS
  // ----------------------------------------------------------
  branding: {
    primaryColor: "{{PRIMARY_COLOR}}",
    secondaryColor: "{{SECONDARY_COLOR}}",
    accentColor: "{{ACCENT_COLOR}}",
    textDark: "#1B1B1B",
    textLight: "#F5F7F6",
    bgLight: "{{BG_LIGHT}}",
    fontHeading: "Bebas Neue",
    fontBody: "Lato",
  },

  // ----------------------------------------------------------
  // CONTACT INFO
  // ----------------------------------------------------------
  contact: {
    phone: "(248) 555-0100",
    phoneRaw: "2485550100",
    email: "info@{{SHORT_NAME_LOWER}}.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.{{SHORT_NAME_LOWER}}.com",
    mapsEmbed: "",
  },

  // ----------------------------------------------------------
  // HOURS
  // ----------------------------------------------------------
  hours: [
    { days: "Monday – Friday", time: "8 AM – 6 PM" },
    { days: "Saturday", time: "9 AM – 2 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  // ----------------------------------------------------------
  // ASSETS
  // ----------------------------------------------------------
  assets: {
    heroVideo: "",
  },

  // ----------------------------------------------------------
  // PRELOADER
  // ----------------------------------------------------------
  preloader: {
    text: "Preparing your experience...",
    logoText: "{{SHORT_NAME}}",
  },

  // ----------------------------------------------------------
  // NAVIGATION
  // ----------------------------------------------------------
  navigation: [
    { label: "Home", href: "#home", isAnchor: true },
    { label: "Services", href: "#services", isAnchor: true },
    { label: "About", href: "#story", isAnchor: true },
    { label: "Contact", href: "#contact", isAnchor: true },
  ],

  // ----------------------------------------------------------
  // HERO SECTION
  // ----------------------------------------------------------
  hero: {
    taglineWords: ["Welcome", "to", "{{SHORT_NAME}}"],
    title: "{{BUSINESS_NAME}}",
    titleEmoji: "🚀",
    description: "{{TAGLINE}}",
    stats: [
      { number: 5, label: "Years in Business" },
      { number: 100, label: "Happy Clients" },
    ],
    primaryBtn: { label: "Learn More", href: "#services" },
    secondaryBtn: { label: "Contact Us", href: "#contact" },
    scrollText: "Scroll to learn more",
  },

  // ----------------------------------------------------------
  // FEATURED SERVICES
  // ----------------------------------------------------------
  featured: {
    enabled: true,
    subtitle: "Our Services",
    heading: "What We Offer",
    description: "Discover our range of services tailored to meet your needs.",
    ctaLabel: "Get Started →",
    ctaHref: "#contact",
    items: [
      { name: "{{SERVICE_1_NAME}}", description: "{{SERVICE_1_DESC}}", badge: "Popular" },
      { name: "{{SERVICE_2_NAME}}", description: "{{SERVICE_2_DESC}}", badge: "" },
      { name: "{{SERVICE_3_NAME}}", description: "{{SERVICE_3_DESC}}", badge: "" },
    ],
  },

  // ----------------------------------------------------------
  // EXPERIENCE / PROCESS SECTION
  // ----------------------------------------------------------
  experience: {
    enabled: true,
    subtitle: "Our Process",
    heading: "How We Work",
    badgeNumber: "01",
    badgeText: "Professional Service",
    imageAlt: "Professional at work",
    features: [
      { icon: "🔍", title: "{{STEP_1_TITLE}}", description: "{{STEP_1_DESC}}" },
      { icon: "🛠️", title: "{{STEP_2_TITLE}}", description: "{{STEP_2_DESC}}" },
      { icon: "📦", title: "{{STEP_3_TITLE}}", description: "{{STEP_3_DESC}}" },
    ],
  },

  // ----------------------------------------------------------
  // STORY / ABOUT SECTION
  // ----------------------------------------------------------
  story: {
    enabled: true,
    subtitle: "Who We Are",
    heading: "Our Story",
    paragraphs: [
      "{{STORY_PARAGRAPH_1}}",
      "{{STORY_PARAGRAPH_2}}",
    ],
    quote: "\\"Quality service is our promise.\\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "{{SHORT_NAME}} Team",
    ctaLabel: "Get in Touch",
    ctaHref: "#contact",
  },

  // ----------------------------------------------------------
  // OFFERINGS / CTA CARDS
  // ----------------------------------------------------------
  offerings: {
    enabled: true,
    subtitle: "How We Help",
    heading: "Our Solutions",
    cards: [
      { emoji: "🏠", title: "{{SOLUTION_1_TITLE}}", body: "{{SOLUTION_1_DESC}}", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "{{SOLUTION_2_TITLE}}", body: "{{SOLUTION_2_DESC}}", ctaLabel: "Learn More →", ctaHref: "#contact" },
    ],
  },

  // ----------------------------------------------------------
  // REVIEW BANNER
  // ----------------------------------------------------------
  pressQuote: {
    enabled: true,
    quote: "Professional, responsive, and effective. Highly recommended!",
    source: "Verified Customer",
    stars: 5,
  },

  // ----------------------------------------------------------
  // SPECIALS / PROMOS
  // ----------------------------------------------------------
  specials: {
    enabled: true,
    emoji: "💲",
    items: [
      { label: "Special Offer 1", detail: "Limited time" },
      { label: "Special Offer 2", detail: "Ongoing" },
    ],
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline: "{{BUSINESS_NAME}} Since {{FOUNDED}}",
    copyright: "© {{BUSINESS_NAME}}. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};
"""

# ----------------------------------------------------------------------
# Main processing loop
# ----------------------------------------------------------------------
def main():
    df = pd.read_excel(EXCEL_PATH)

    # Initialize NVIDIA NIM Client
    client = OpenAI(
        base_url="https://integrate.api.nvidia.com/v1",
        api_key="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"  # <-- Fill in your $NVIDIA_API_KEY here
    )

    for _, row in df.iterrows():
        name = str(row["title"]).strip()
        summary = str(row["Business Summary"]).strip()

        # ----------------------------------------------------------
        # Build the all-inclusive prompt for the LLM
        # ----------------------------------------------------------
        # FIXED: Escaped ALL explicit configuration/template curly braces by doubling them {{ -> {{{{
        prompt = (
            f"You are an expert front-end web developer. Your task is to output a complete, valid JavaScript configuration file (config.js) based on the Business Name and Business Summary provided below.\n\n"
            f"DIRECTIONS:\n"
            f"1. Read the Business Name and Summary.\n"
            f"2. Infer the industry type and choose the matching theme/color palette rules from the branding section below.\n"
            f"3. Completely fill out all placeholder values wrapped in double curly braces (e.g., {{{{BUSINESS_NAME}}}}, {{{{PRIMARY_COLOR}}}}, etc.) inside the provided Example Template.\n"
            f"4. Generate realistic text for the services, story paragraphs, and steps based on what this business actually does.\n"
            f"5. Ensure variables like shortName match a clean single-word version of their name, and shortName_lower is lowercase for mock emails.\n\n"
            f"CRITICAL RULES:\n"
            f"- Return ONLY valid JavaScript code.\n"
            f"- Do NOT wrap your output in markdown code blocks (e.g., do NOT use ```javascript or ```).\n"
            f"- Start your response directly with '// ===' and end it with '}};\'.\n\n"
            f"--- BRANDING PALETTE RULES ---\n"
            f"- If Restaurant/Cafe: theme='restaurant', primaryColor='#D45500', secondaryColor='#FFA500', accentColor='#FFD700', bgLight='#FFF8F0'\n"
            f"- If Corporate/Law/Finance/Insurance: theme='professional', primaryColor='#2C3E50', secondaryColor='#4A6572', accentColor='#3498DB', bgLight='#F0F2F5'\n"
            f"- If Automotive/Mechanic/Car Wash: theme='automotive', primaryColor='#E63946', secondaryColor='#0D3B66', accentColor='#F1A208', bgLight='#F9F8FD'\n"
            f"- Default/Home Services (Plumbing, Pest, Construction, etc.): theme='home_services', primaryColor='#1E3A34', secondaryColor='#2F6B5F', accentColor='#9BC53D', bgLight='#F3F7F5'\n\n"
            f"--- INPUT DATA ---\n"
            f"Business Name: {name}\n"
            f"Business Summary: {summary}\n\n"
            f"--- EXAMPLE TEMPLATE TO FILL OUT ---\n"
            f"{CONFIG_TEMPLATE}"
        )

        # ----------------------------------------------------------
        # Call the NVIDIA NIM API
        # ----------------------------------------------------------
        completion = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3,  # Lowered temperature slightly for stricter structure compliance
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

        # ----------------------------------------------------------
        # Clean the AI response (Strip Markdown Backticks if present)
        # ----------------------------------------------------------
        generated_clean = re.sub(r"^```[a-zA-Z]*\n", "", generated.strip())
        generated_clean = re.sub(r"\n```$", "", generated_clean)
        generated_clean = generated_clean.strip()

        # ----------------------------------------------------------
        # Write the file
        # ----------------------------------------------------------
        safe_folder_name = re.sub(r'[<>:"/\\|?*]', "_", name)
        business_dir = os.path.join(ROOT_DIR, safe_folder_name)
        os.makedirs(business_dir, exist_ok=True)
        config_path = os.path.join(business_dir, "config.js")
        
        with open(config_path, "w", encoding="utf-8") as f:
            f.write(generated_clean)

        print(f"[DONE] Finished {name!r} -> {config_path}")

# ----------------------------------------------------------------------
if __name__ == "__main__":
    main()