// ============================================================
// BUSINESS CONFIG — Costigan Roofing Contractors
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  // THEME
  // ----------------------------------------------------------
  theme: "home_services",

  // ----------------------------------------------------------
  // BUSINESS BASICS
  // ----------------------------------------------------------
  business: {
    name: "Costigan Roofing Contractors",
    shortName: "CostiganRoofing",
    tagline: "Your Trusted Roofing Experts",
    description: "Professional roofing contractor serving Royal Oak and surrounding areas, delivering reliable repairs, installations, and maintenance with a 5‑star reputation.",
    type: "Roofing Contractor",
    founded: "2015",
  },

  // ----------------------------------------------------------
  // COLORS & FONTS
  // ----------------------------------------------------------
  branding: {
    primaryColor: "#1E3A34",
    secondaryColor: "#2F6B5F",
    accentColor: "#9BC53D",
    textDark: "#1B1B1B",
    textLight: "#F5F7F6",
    bgLight: "#F3F7F5",
    fontHeading: "Bebas Neue",
    fontBody: "Lato",
  },

  // ----------------------------------------------------------
  // CONTACT INFO
  // ----------------------------------------------------------
  contact: {
    phone: "(248) 555-0100",
    phoneRaw: "2485550100",
    email: "info@costiganroofing.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.costiganroofing.com",
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
    logoText: "CostiganRoofing",
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
    taglineWords: ["Welcome", "to", "CostiganRoofing"],
    title: "Costigan Roofing Contractors",
    titleEmoji: "🚀",
    description: "Your Trusted Roofing Experts",
    stats: [
      { number: 9, label: "Years in Business" },
      { number: 150, label: "Happy Clients" },
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
      { name: "Roof Installation", description: "Expert installation of shingle, metal, and flat roofs using premium materials.", badge: "Popular" },
      { name: "Roof Repair", description: "Fast, reliable repairs for leaks, storm damage, and wear.", badge: "" },
      { name: "Roof Inspection & Maintenance", description: "Comprehensive inspections and preventative maintenance to extend roof life.", badge: "" },
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
      { icon: "🔍", title: "Free Consultation", description: "We assess your roof’s condition and provide a detailed, no‑obligation estimate." },
      { icon: "🛠️", title: "Professional Installation", description: "Our skilled crew installs or repairs using top‑grade materials and industry best practices." },
      { icon: "📦", title: "Final Inspection", description: "We conduct a thorough walkthrough to ensure your complete satisfaction." },
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
      "Founded in 2015, Costigan Roofing Contractors began as a family‑run business dedicated to delivering honest, high‑quality roofing services to the Royal Oak community. Over the years, our commitment to craftsmanship and customer care has earned us a flawless 5‑star rating on Google.",
      "Today, our team of certified professionals handles everything from new installations to emergency repairs, always prioritizing safety and durability. We treat each roof as if it were our own, ensuring lasting protection for homes and businesses alike.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "CostiganRoofing Team",
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
      { emoji: "🏠", title: "Residential Roofing", body: "Custom roof solutions for homes, including energy‑efficient materials and stylish designs.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Commercial Roofing", body: "Durable, low‑maintenance roofing systems for businesses, warehouses, and retail spaces.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Costigan Roofing Contractors Since 2015",
    copyright: "© Costigan Roofing Contractors. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};