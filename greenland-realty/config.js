// ============================================================
// BUSINESS CONFIG — Greenland Realty
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  // THEME
  // ----------------------------------------------------------
  theme: "professional",

  // ----------------------------------------------------------
  // BUSINESS BASICS
  // ----------------------------------------------------------
  business: {
    name: "Greenland Realty",
    shortName: "GreenlandRealty",
    tagline: "Expert Property Management for Warren & Beyond",
    description: "Greenland Realty provides comprehensive property management solutions, ensuring property owners enjoy hassle‑free rentals and tenants receive top‑notch service.",
    type: "Property Management",
    founded: "2008",
  },

  // ----------------------------------------------------------
  // COLORS & FONTS
  // ----------------------------------------------------------
  branding: {
    primaryColor: "#2C3E50",
    secondaryColor: "#4A6572",
    accentColor: "#3498DB",
    textDark: "#1B1B1B",
    textLight: "#F5F7F6",
    bgLight: "#F0F2F5",
    fontHeading: "Bebas Neue",
    fontBody: "Lato",
  },

  // ----------------------------------------------------------
  // CONTACT INFO
  // ----------------------------------------------------------
  contact: {
    phone: "(248) 555-0100",
    phoneRaw: "2485550100",
    email: "info@greenlandrealty.com",
    address: {
      street: "123 Main Street",
      city: "Warren",
      state: "MI",
      zip: "48089",
    },
    website: "www.greenlandrealty.com",
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
    logoText: "GreenlandRealty",
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
    taglineWords: ["Welcome", "to", "GreenlandRealty"],
    title: "Greenland Realty",
    titleEmoji: "🚀",
    description: "Expert Property Management for Warren & Beyond",
    stats: [
      { number: 18, label: "Years in Business" },
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
      { name: "Residential Property Management", description: "Full‑service management for single‑family homes, condos, and townhouses, including rent collection, maintenance coordination, and tenant relations.", badge: "Popular" },
      { name: "Commercial Property Management", description: "Professional oversight of office, retail, and industrial spaces, maximizing ROI through strategic leasing and facility management.", badge: "" },
      { name: "Tenant Screening & Placement", description: "Thorough background checks and marketing to secure qualified tenants quickly.", badge: "" },
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
      { icon: "🔍", title: "Consultation & Assessment", description: "We meet with property owners to understand their goals and evaluate each property’s needs." },
      { icon: "🛠️", title: "Customized Management Plan", description: "Develop a tailored strategy covering leasing, maintenance, and financial reporting." },
      { icon: "📦", title: "Ongoing Support & Reporting", description: "Provide continuous oversight, regular updates, and responsive maintenance services." },
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
      "Founded in 2008, Greenland Realty began as a small team dedicated to simplifying the rental experience for property owners in Warren, Michigan. Over the years, we have grown into a trusted name in the community, managing a diverse portfolio of residential and commercial properties.",
      "Our commitment to transparency, responsiveness, and professionalism has earned us a 4‑star rating on Google from satisfied clients. We pride ourselves on building lasting relationships, treating each property as if it were our own."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "GreenlandRealty Team",
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
      { emoji: "🏠", title: "Full‑Service Management", body: "From marketing vacant units to handling repairs, we take care of every aspect of property ownership.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Investment Consulting", body: "Expert advice on acquiring, optimizing, and expanding your real‑estate portfolio for long‑term growth.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Greenland Realty Since 2008",
    copyright: "© Greenland Realty. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};