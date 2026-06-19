// ============================================================
// BUSINESS CONFIG — On The Spot Window Cleaning LLC
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
    name: "On The Spot Window Cleaning LLC",
    shortName: "OnTheSpot",
    tagline: "Crystal‑clear windows, every time",
    description: "On The Spot Window Cleaning LLC provides reliable residential and commercial window cleaning, plus power washing, delivering streak‑free results for Sterling Heights and the surrounding Metro Detroit area.",
    type: "Window Cleaning",
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
    email: "info@onthespot.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.onthespot.com",
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
    logoText: "OnTheSpot",
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
    taglineWords: ["Welcome", "to", "OnTheSpot"],
    title: "On The Spot Window Cleaning LLC",
    titleEmoji: "🚀",
    description: "Crystal‑clear windows, every time",
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
      { name: "Residential Window Cleaning", description: "Detailed interior and exterior window cleaning for homes, using eco‑friendly solutions for a spotless shine.", badge: "Popular" },
      { name: "Commercial Window Cleaning", description: "Professional cleaning for storefronts, offices, and high‑rise buildings, ensuring a pristine appearance.", badge: "" },
      { name: "Power Washing & Exterior Cleaning", description: "High‑pressure washing to remove grime, mold, and dirt from siding, decks, and driveways.", badge: "" },
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
      { icon: "🔍", title: "Schedule & Quote", description: "Contact us for a free, no‑obligation estimate and flexible scheduling that fits your timeline." },
      { icon: "🛠️", title: "On‑Site Preparation", description: "Our technicians protect your property, set up equipment, and assess the best cleaning approach." },
      { icon: "📦", title: "Spotless Finish & Inspection", description: "We perform meticulous cleaning, followed by a thorough inspection to guarantee perfection." },
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
      "Founded in 2018, On The Spot Window Cleaning LLC began with a simple mission: to bring crystal‑clear windows to every home and business in Sterling Heights. Starting as a two‑person team, we quickly earned a reputation for reliability and meticulous attention to detail.",
      "Today, our fully licensed crew uses the latest power‑washing technology and environmentally safe products, maintaining a 4.6‑star rating on Google from satisfied customers. We pride ourselves on punctuality, professionalism, and a commitment to exceeding expectations on every job."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "OnTheSpot Team",
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
      { emoji: "🏠", title: "Home Window Solutions", body: "From single‑pane windows to whole‑house cleaning, we keep your home looking its best with fast, affordable service.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Business & Property Solutions", body: "Tailored cleaning packages for offices, retail spaces, and multi‑unit properties, ensuring a professional image for your clientele.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "On The Spot Window Cleaning LLC Since 2018",
    copyright: "© On The Spot Window Cleaning LLC. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};