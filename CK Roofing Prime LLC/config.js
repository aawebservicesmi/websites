// ============================================================
// BUSINESS CONFIG — CK Roofing Prime LLC
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
    name: "CK Roofing Prime LLC",
    shortName: "CKRoofing",
    tagline: "Your trusted partner for durable, high‑quality roofs",
    description: "CK Roofing Prime LLC delivers expert roof installation, repair, and maintenance services to homeowners and businesses throughout Royal Oak and the surrounding Michigan area.",
    type: "Roofing Contractor",
    founded: "2018",
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
    email: "info@ckroofing.com",
    address: {
      street: "123 Main Street",
      city: "Royal Oak",
      state: "MI",
      zip: "48067",
    },
    website: "www.ckroofing.com",
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
    logoText: "CKRoofing",
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
    taglineWords: ["Welcome", "to", "CKRoofing"],
    title: "CK Roofing Prime LLC",
    titleEmoji: "🚀",
    description: "Your trusted partner for durable, high‑quality roofs",
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
      { name: "Roof Installation", description: "Professional installation of shingle, metal, and flat roofs using premium materials and industry best practices.", badge: "Popular" },
      { name: "Roof Repair", description: "Fast, reliable repairs for leaks, storm damage, and wear to extend the life of your roof.", badge: "" },
      { name: "Roof Maintenance", description: "Comprehensive inspections and preventative maintenance to keep your roof in optimal condition.", badge: "" },
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
      { icon: "🔍", title: "Free Inspection & Estimate", description: "Our certified inspectors assess your roof’s condition and provide a detailed, no‑obligation estimate." },
      { icon: "🛠️", title: "Material Selection & Planning", description: "We help you choose the right materials and schedule the work to fit your timeline." },
      { icon: "📦", title: "Installation & Cleanup", description: "Our skilled crew completes the installation efficiently, leaving your property clean and protected." },
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
      "Founded in 2018 by seasoned roofing professionals, CK Roofing Prime LLC was built on a commitment to quality craftsmanship and honest service. Based in Royal Oak, we have grown into a trusted name for residential and commercial roofing projects across the region.",
      "Our team combines years of experience with the latest roofing technologies to ensure every roof we touch stands the test of time. We pride ourselves on transparent communication, safety, and delivering results that exceed expectations.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "CKRoofing Team",
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
      { emoji: "🏠", title: "Residential Roofing", body: "Custom roof solutions for homes, including shingle, tile, and metal options, designed for durability and curb appeal.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Commercial Roofing", body: "Robust roofing systems for businesses, such as flat roofs, EPDM, and TPO, engineered for performance and energy efficiency.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "CK Roofing Prime LLC Since 2018",
    copyright: "© CK Roofing Prime LLC. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};