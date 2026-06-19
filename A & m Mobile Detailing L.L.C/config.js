// ============================================================
// BUSINESS CONFIG — A & m Mobile Detailing L.L.C
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
    name: "A & m Mobile Detailing L.L.C",
    shortName: "AandM",
    tagline: "Premium Mobile Car Detailing at Your Doorstep",
    description: "Professional mobile detailing service delivering showroom-quality results wherever you are.",
    type: "Mobile Detailing",
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
    email: "info@aandm.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.aandm.com",
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
    logoText: "AandM",
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
    taglineWords: ["Welcome", "to", "AandM"],
    title: "A & m Mobile Detailing L.L.C",
    titleEmoji: "🚀",
    description: "Premium Mobile Car Detailing at Your Doorstep",
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
      { name: "Exterior Detailing", description: "Hand wash, paint correction, and protective coating for a flawless finish.", badge: "Popular" },
      { name: "Interior Detailing", description: "Deep cleaning of upholstery, carpets, and dashboard to restore fresh interiors.", badge: "" },
      { name: "Full-Service Detailing", description: "Comprehensive exterior and interior care for a showroom shine.", badge: "" },
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
      { icon: "🔍", title: "Schedule Appointment", description: "Book online or call, and choose a convenient time and location." },
      { icon: "🛠️", title: "On‑Site Detailing", description: "Our fully equipped team arrives and performs meticulous detailing at your location." },
      { icon: "📦", title: "Final Inspection", description: "We walk you through the results, ensuring complete satisfaction before we leave." },
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
      "Founded in 2018, A & m Mobile Detailing L.L.C started with a simple mission: bring premium car care directly to the customer’s driveway. Our founders, passionate automotive enthusiasts, recognized the inconvenience of traditional shop visits and set out to create a mobile solution that never compromises on quality.",
      "Today, our team of trained detailers uses eco‑friendly products and state‑of‑the‑art equipment to deliver showroom‑level results wherever you are. With a 5‑star Google rating and a growing list of satisfied clients, we pride ourselves on reliability, attention to detail, and a commitment to keeping your vehicle looking its best."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "AandM Team",
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
      { emoji: "🏠", title: "Convenient Mobile Service", body: "We come to your home or office, saving you time and hassle while delivering professional results.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Eco‑Friendly Products", body: "Our detailing uses biodegradable, non‑toxic cleaners that protect both your vehicle and the environment.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "A & m Mobile Detailing L.L.C Since 2018",
    copyright: "© A & m Mobile Detailing L.L.C. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};