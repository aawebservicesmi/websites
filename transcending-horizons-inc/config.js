// ============================================================
// BUSINESS CONFIG — Transcending Horizons, Inc.
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
    name: "Transcending Horizons, Inc.",
    shortName: "TranscendingHorizons",
    tagline: "Elevate Your Mind, Body, and Spirit through Martial Arts Coaching",
    description: "We provide professional life coaching tailored for martial arts schools, empowering instructors and students to achieve peak performance, personal growth, and lasting success.",
    type: "Life Coaching",
    founded: "2015",
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
    email: "info@transcendinghorizons.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.transcendinghorizons.com",
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
    logoText: "TranscendingHorizons",
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
    taglineWords: ["Welcome", "to", "TranscendingHorizons"],
    title: "Transcending Horizons, Inc.",
    titleEmoji: "🚀",
    description: "Elevate Your Mind, Body, and Spirit through Martial Arts Coaching",
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
      { name: "One‑on‑One Coaching", description: "Personalized coaching sessions focusing on mindset, goal setting, and performance optimization for martial artists.", badge: "Popular" },
      { name: "Group Workshops", description: "Interactive workshops that blend martial arts techniques with life‑skill development for teams and classes.", badge: "" },
      { name: "Performance Assessment", description: "Comprehensive evaluations to identify strengths, address challenges, and create actionable improvement plans.", badge: "" },
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
      { icon: "🔍", title: "Discovery Session", description: "We begin with an in‑depth conversation to understand your goals, challenges, and the unique culture of your school." },
      { icon: "🛠️", title: "Personalized Plan", description: "Our experts craft a customized coaching roadmap that integrates mental training, leadership development, and technical refinement." },
      { icon: "📦", title: "Ongoing Support", description: "Through regular check‑ins, feedback loops, and adaptive strategies, we ensure continuous growth and lasting results." },
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
      "Founded in 2015 in Royal Oak, Transcending Horizons, Inc. was born from a passion for both martial arts mastery and personal development. Our founder, a seasoned martial artist and certified life coach, recognized the need for holistic guidance that bridges physical discipline with mental resilience.",
      "Today, we partner with martial arts schools across the region, delivering coaching that transforms instructors into inspiring leaders and students into confident practitioners. Our 4.9‑star rating on Google reflects our commitment to excellence and the lasting impact we create."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "TranscendingHorizons Team",
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
      { emoji: "🏠", title: "Mindset Development", body: "Cultivate mental toughness, focus, and confidence through proven coaching techniques tailored for martial artists.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Technical Mastery", body: "Integrate life‑coaching principles with skill training to enhance technique, flow, and overall performance.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Transcending Horizons, Inc. Since 2015",
    copyright: "© Transcending Horizons, Inc.. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};