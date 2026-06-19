// ============================================================
// BUSINESS CONFIG — JACK'S AUTO DETAILING & Collision repair
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
    name: "JACK'S AUTO DETAILING & Collision repair",
    shortName: "JacksAuto",
    tagline: "Premium Detailing & Collision Repair",
    description: "Professional auto detailing and collision repair services in Hazel Park, delivering top-quality results and exceptional customer satisfaction.",
    type: "Auto Detailing & Collision Repair",
    founded: "2015",
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
    email: "info@jacksauto.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.jacksauto.com",
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
    logoText: "JacksAuto",
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
    taglineWords: ["Welcome", "to", "JacksAuto"],
    title: "JACK'S AUTO DETAILING & Collision repair",
    titleEmoji: "🚀",
    description: "Premium Detailing & Collision Repair",
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
      { name: "Full Interior Detailing", description: "Comprehensive cleaning, shampooing, and conditioning of seats, carpets, and upholstery to restore a fresh interior.", badge: "Popular" },
      { name: "Paint Correction & Polishing", description: "Expert paint correction to eliminate swirl marks and restore showroom shine.", badge: "" },
      { name: "Collision Repair & Paint Matching", description: "Professional collision repair with precise paint matching and finishing.", badge: "" },
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
      { icon: "🔍", title: "Consultation & Inspection", description: "We assess your vehicle's condition and discuss your detailing or repair goals." },
      { icon: "🛠️", title: "Detailing / Repair Execution", description: "Our technicians perform meticulous detailing or precise collision repairs using premium products." },
      { icon: "📦", title: "Final Review & Delivery", description: "We conduct a final quality check and hand over your vehicle, ensuring complete satisfaction." },
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
      "Founded in 2015, JACK'S AUTO DETAILING & Collision repair started as a small garage in Hazel Park with a passion for restoring vehicles to their original glory. Over the years, we’ve expanded our expertise to include both high‑end detailing and comprehensive collision repair.",
      "Our team of certified technicians combines state‑of‑the‑art equipment with meticulous craftsmanship, earning us a 4.7‑star rating from over 200 satisfied customers. We pride ourselves on transparent communication, timely service, and a commitment to excellence."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "JacksAuto Team",
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
      { emoji: "🏠", title: "Detailing Packages", body: "Choose from basic, premium, or elite packages tailored to your vehicle’s needs.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Collision Repair Services", body: "From minor dents to major bodywork, we provide full repair solutions with factory‑grade paint.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "JACK'S AUTO DETAILING & Collision repair Since 2015",
    copyright: "© JACK'S AUTO DETAILING & Collision repair. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};