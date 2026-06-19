// ============================================================
// BUSINESS CONFIG — Mr Shine's Auto Detail, LLC.
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
    name: "Mr Shine's Auto Detail, LLC.",
    shortName: "MrShine",
    tagline: "Shining your ride to perfection",
    description: "Mr Shine's Auto Detail offers top‑tier car detailing services, delivering showroom‑quality results for every vehicle.",
    type: "Auto Detailing",
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
    email: "info@mrshine.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.mrshine.com",
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
    logoText: "MrShine",
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
    taglineWords: ["Welcome", "to", "MrShine"],
    title: "Mr Shine's Auto Detail, LLC.",
    titleEmoji: "🚀",
    description: "Shining your ride to perfection",
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
      { name: "Full Interior Detail", description: "Comprehensive cleaning of seats, carpets, dashboards, and vents using premium products.", badge: "Popular" },
      { name: "Exterior Paint Protection", description: "Hand wash, clay bar treatment, polish, and wax to protect and enhance paint.", badge: "" },
      { name: "Ceramic Coating", description: "Advanced ceramic coating for long‑lasting shine and protection.", badge: "" },
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
      { icon: "🔍", title: "Inspection & Consultation", description: "We assess your vehicle’s condition and discuss your detailing preferences." },
      { icon: "🛠️", title: "Detailed Cleaning", description: "Our technicians perform meticulous interior and exterior cleaning using industry‑grade tools." },
      { icon: "📦", title: "Final Inspection & Delivery", description: "A thorough walk‑through ensures perfection before returning your car." },
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
      "Founded in 2018 by automotive enthusiast John Doe, Mr Shine's Auto Detail started as a small garage dedicated to giving cars the care they deserve.",
      "Today, with a 4.5‑star rating on Google and a loyal client base across Sterling Heights, we continue to combine passion with precision, ensuring every vehicle leaves our shop looking its absolute best.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "MrShine Team",
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
      { emoji: "🏠", title: "Mobile Detailing", body: "We bring our expertise to your doorstep, offering convenient on‑site detailing services.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Premium Packages", body: "Choose from curated packages that bundle interior, exterior, and protective treatments for maximum value.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Mr Shine's Auto Detail, LLC. Since 2018",
    copyright: "© Mr Shine's Auto Detail, LLC.. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};