// ============================================================
// BUSINESS CONFIG — TARGET MECHANICAL HEATING & COOLING
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
    name: "TARGET MECHANICAL HEATING & COOLING",
    shortName: "TargetMechanical",
    tagline: "Your trusted HVAC repair experts in Shelby Township",
    description: "Professional HVAC contractor offering reliable heating and cooling repair, maintenance, and installation services for residential and commercial customers in Shelby Township, MI.",
    type: "HVAC Contractor",
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
    email: "info@targetmechanical.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.targetmechanical.com",
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
    logoText: "TargetMechanical",
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
    taglineWords: ["Welcome", "to", "TargetMechanical"],
    title: "TARGET MECHANICAL HEATING & COOLING",
    titleEmoji: "🚀",
    description: "Your trusted HVAC repair experts in Shelby Township",
    stats: [
      { number: 11, label: "Years in Business" },
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
      { name: "Heating System Repair", description: "Comprehensive diagnosis and repair of furnaces, boilers, and heat pumps to keep your home warm.", badge: "Popular" },
      { name: "Air Conditioning Repair", description: "Fast and effective AC troubleshooting, component replacement, and performance optimization.", badge: "" },
      { name: "Preventive Maintenance", description: "Seasonal tune‑ups and inspections to extend equipment life and improve efficiency.", badge: "" },
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
      { icon: "🔍", title: "Schedule Inspection", description: "Contact us to set up a convenient appointment for a thorough system assessment." },
      { icon: "🛠️", title: "Professional Service", description: "Our certified technicians perform precise repairs or maintenance using quality parts." },
      { icon: "📦", title: "Follow‑Up & Support", description: "We ensure the job is done right and provide guidance for optimal system performance." },
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
      "Founded in 2015, Target Mechanical Heating & Cooling began with a mission to deliver reliable, high‑quality HVAC services to the Shelby Township community. Over the years, our team of certified technicians has grown, but our commitment to honesty, transparency, and customer satisfaction remains unchanged.",
      "Today, we proudly serve both residential and commercial clients, earning a 4.3‑star rating on Google from 12 satisfied customers. Our focus on prompt response times, thorough diagnostics, and lasting solutions has made us a trusted partner for heating and cooling needs."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "TargetMechanical Team",
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
      { emoji: "🏠", title: "Residential HVAC Solutions", body: "Tailored heating and cooling services for homes, including emergency repairs, system upgrades, and energy‑saving maintenance plans.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Commercial HVAC Solutions", body: "Comprehensive climate control services for businesses, ensuring reliable performance and compliance with industry standards.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "TARGET MECHANICAL HEATING & COOLING Since 2015",
    copyright: "© TARGET MECHANICAL HEATING & COOLING. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};