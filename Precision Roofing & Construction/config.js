// ============================================================
// BUSINESS CONFIG — Precision Roofing & Construction
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
    name: "Precision Roofing & Construction",
    shortName: "PrecisionRoofing",
    tagline: "Expert Roofing & Construction Services",
    description: "Providing precise, reliable roofing and construction solutions for residential and commercial properties in Huntington Woods.",
    type: "Roofing Contractor",
    founded: "2010",
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
    email: "info@precisionroofing.com",
    address: {
      street: "1450 Business Parkway",
      city: "Huntington Woods",
      state: "MI",
      zip: "48309",
    },
    website: "www.precisionroofing.com",
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
    logoText: "PrecisionRoofing",
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
    taglineWords: ["Welcome", "to", "PrecisionRoofing"],
    title: "Precision Roofing & Construction",
    titleEmoji: "🚀",
    description: "Expert Roofing & Construction Services",
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
      { name: "Roof Installation", description: "Professional installation of shingle, metal, and flat roofs for new builds and replacements.", badge: "Popular" },
      { name: "Roof Repair", description: "Fast and reliable repair of leaks, storm damage, and wear to extend roof lifespan.", badge: "" },
      { name: "Commercial Construction", description: "Comprehensive construction services for commercial properties, including roofing, framing, and project management.", badge: "" },
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
      { icon: "🔍", title: "Free Consultation & Inspection", description: "We assess your property, identify issues, and discuss options at no cost." },
      { icon: "🛠️", title: "Custom Planning & Estimate", description: "Our experts create a detailed plan and transparent pricing tailored to your needs." },
      { icon: "📦", title: "Professional Installation & Follow‑up", description: "Skilled crews complete the work on schedule, followed by a thorough inspection and warranty support." },
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
      "Founded in 2010, Precision Roofing & Construction began as a small family‑run business dedicated to delivering top‑quality roofing services in Huntington Woods. Over the years, we’ve expanded our expertise to include full‑scale construction projects, always emphasizing precision and reliability.",
      "Our team combines seasoned craftsmen with the latest industry techniques, ensuring every roof and structure we work on meets the highest standards of safety and durability. Customer satisfaction is at the core of our mission, reflected in our commitment to transparent communication and lasting results.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "PrecisionRoofing Team",
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
      { emoji: "🏠", title: "Residential Roofing Solutions", body: "From new installations to emergency repairs, we protect your home with durable, energy‑efficient roofing options.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Commercial Construction Services", body: "We manage complete construction projects for businesses, delivering on time and within budget with a focus on quality craftsmanship.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Precision Roofing & Construction Since 2010",
    copyright: "© Precision Roofing & Construction. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};