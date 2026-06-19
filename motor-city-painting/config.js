// ============================================================
// BUSINESS CONFIG — Motor City Painting
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
    name: "Motor City Painting",
    shortName: "MotorCity",
    tagline: "Durable Epoxy Flooring for Homes & Businesses",
    description: "Professional flooring contractor specializing in high-quality epoxy flooring, serving Troy and the surrounding Metro Detroit area.",
    type: "Flooring Contractor",
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
    email: "info@motorcity.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.motorcity.com",
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
    logoText: "MotorCity",
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
    taglineWords: ["Welcome", "to", "MotorCity"],
    title: "Motor City Painting",
    titleEmoji: "🎨",
    description: "Durable Epoxy Flooring for Homes & Businesses",
    stats: [
      { number: 9, label: "Years in Business" },
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
      {
        name: "Residential Epoxy Flooring",
        description: "Custom epoxy floor installations for homes, garages, and basements with a flawless finish.",
        badge: "Popular",
      },
      {
        name: "Commercial Epoxy Flooring",
        description: "Heavy‑duty epoxy solutions for warehouses, showrooms, and retail spaces.",
        badge: "",
      },
      {
        name: "Floor Repair & Maintenance",
        description: "Crack filling, surface preparation, and resurfacing to extend the life of existing floors.",
        badge: "",
      },
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
      {
        icon: "🔍",
        title: "Consultation & Design",
        description: "We assess your space, discuss design options, and provide a detailed quote.",
      },
      {
        icon: "🛠️",
        title: "Professional Installation",
        description: "Our skilled team prepares the substrate and applies premium epoxy for a seamless finish.",
      },
      {
        icon: "📦",
        title: "Finishing & Follow‑Up",
        description: "We apply protective topcoats, conduct a final inspection, and offer maintenance guidance.",
      },
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
      "Motor City Painting was founded in 2015 by a team of seasoned flooring specialists who saw a need for high‑quality epoxy flooring in the Metro Detroit area. Starting with a modest garage workshop, we quickly earned a reputation for precision, durability, and exceptional customer service.",
      "Today, our crew combines state‑of‑the‑art equipment with industry‑leading materials to deliver floors that not only look stunning but also stand up to heavy traffic and chemicals. With a perfect 5‑star rating on Google from six satisfied clients, we’re proud to be the trusted choice for homeowners and businesses alike.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "MotorCity Team",
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
      {
        emoji: "🏠",
        title: "Custom Design Consultation",
        body: "Personalized design guidance to match your aesthetic and functional needs.",
        ctaLabel: "Learn More →",
        ctaHref: "#contact",
      },
      {
        emoji: "🏢",
        title: "Rapid Installation Service",
        body: "Efficient project timelines to minimize disruption and get your floor ready fast.",
        ctaLabel: "Learn More →",
        ctaHref: "#contact",
      },
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
    tagline: "Motor City Painting Since 2015",
    copyright: "© Motor City Painting. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};