// ============================================================
// BUSINESS CONFIG — Quality Car Wash
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  // THEME
  // ----------------------------------------------------------
  theme: "automotive",

  // ----------------------------------------------------------
  // BUSINESS BASICS
  // ----------------------------------------------------------
  business: {
    name: "Quality Car Wash",
    shortName: "QualityWash",
    tagline: "Fast, Powerful, Self‑Service Car Wash",
    description: "Quality Car Wash offers a state‑of‑the‑art self‑service power washing experience in Oak Park, delivering a spotless finish for every vehicle.",
    type: "Self-Service Car Wash",
    founded: "2018",
  },

  // ----------------------------------------------------------
  // COLORS & FONTS
  // ----------------------------------------------------------
  branding: {
    primaryColor: "#E63946",
    secondaryColor: "#0D3B66",
    accentColor: "#F1A208",
    textDark: "#1B1B1B",
    textLight: "#F5F7F6",
    bgLight: "#F9F8FD",
    fontHeading: "Bebas Neue",
    fontBody: "Lato",
  },

  // ----------------------------------------------------------
  // CONTACT INFO
  // ----------------------------------------------------------
  contact: {
    phone: "(248) 555-0100",
    phoneRaw: "2485550100",
    email: "info@qualitywash.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.qualitywash.com",
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
    logoText: "QualityWash",
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
    taglineWords: ["Welcome", "to", "QualityWash"],
    title: "Quality Car Wash",
    titleEmoji: "🚀",
    description: "Fast, Powerful, Self‑Service Car Wash",
    stats: [
      { number: 8, label: "Years in Business" },
      { number: 250, label: "Happy Clients" },
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
      { name: "Power Wash", description: "High‑pressure power wash removes dirt, grime, and road salt in seconds.", badge: "Popular" },
      { name: "Foam Clean", description: "Rich foam pre‑wash lifts stubborn stains for a deeper clean.", badge: "" },
      { name: "Tire Shine", description: "Premium tire shine restores shine and protects rubber.", badge: "" },
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
      { icon: "🔍", title: "Enter the Bay", description: "Pull your vehicle into the self‑service bay and choose your wash package." },
      { icon: "🛠️", title: "Select Your Settings", description: "Use the touchscreen to select pressure, soap, and additional options." },
      { icon: "📦", title: "Drive Through", description: "Activate the power wash and watch the system clean your car from top to bottom." },
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
      "Founded in 2018, Quality Car Wash was created to give Oak Park drivers a convenient, high‑quality car cleaning solution without the wait.",
      "Our state‑of‑the‑art equipment and eco‑friendly detergents ensure every vehicle leaves looking its best, while our 4.1‑star rating reflects the trust of over 250 satisfied customers.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "QualityWash Team",
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
      { emoji: "🏠", title: "Quick Clean", body: "A fast, high‑pressure wash that gets your car sparkling in under five minutes.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Full Service", body: "Comprehensive cleaning with foam, undercarriage rinse, and tire shine for a showroom finish.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Quality Car Wash Since 2018",
    copyright: "© Quality Car Wash. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};