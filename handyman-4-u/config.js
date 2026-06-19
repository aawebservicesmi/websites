// ============================================================
// BUSINESS CONFIG — Handyman 4 u
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
    name: "Handyman 4 u",
    shortName: "Handyman4U",
    tagline: "Your trusted power‑washing and handyman experts in Royal Oak",
    description: "Professional handyman services with a focus on power washing, serving Royal Oak and surrounding areas.",
    type: "Handyman",
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
    email: "info@handyman4u.com",
    address: {
      street: "123 Oak Street",
      city: "Royal Oak",
      state: "MI",
      zip: "48067",
    },
    website: "www.handyman4u.com",
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
    logoText: "Handyman4U",
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
    taglineWords: ["Welcome", "to", "Handyman4U"],
    title: "Handyman 4 u",
    titleEmoji: "🚀",
    description: "Your trusted power‑washing and handyman experts in Royal Oak",
    stats: [
      { number: 8, label: "Years in Business" },
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
      { name: "Power Washing", description: "Exterior cleaning for homes, decks, driveways, and fences using high‑pressure equipment.", badge: "Popular" },
      { name: "General Repairs", description: "Minor plumbing, electrical, and carpentry fixes to keep your home running smoothly.", badge: "" },
      { name: "Furniture Assembly", description: "Fast and reliable assembly of flat‑pack furniture and fixtures.", badge: "" },
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
      { icon: "🔍", title: "Schedule", description: "Book an appointment online or by phone at your convenience." },
      { icon: "🛠️", title: "Inspect & Quote", description: "We assess the job and provide a transparent, no‑surprise estimate." },
      { icon: "📦", title: "Execute & Review", description: "Our skilled team completes the work, then we ensure you're satisfied." },
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
      "Handyman 4 u was founded by a seasoned handyperson who saw a need for reliable, high‑quality home maintenance in Royal Oak. Starting with a single truck, we quickly grew by delivering honest work and exceptional customer service.",
      "Today, our team combines expertise in power washing, repairs, and installations to keep homes looking their best. We pride ourselves on punctuality, professionalism, and a commitment to getting the job done right the first time."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "Handyman4U Team",
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
      { emoji: "🏠", title: "Residential Care", body: "Comprehensive home maintenance, from power washing to minor repairs, ensuring your property stays pristine.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Commercial Support", body: "Tailored services for small businesses and property managers, keeping storefronts and facilities spotless and functional.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Handyman 4 u Since 2018",
    copyright: "© Handyman 4 u. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};