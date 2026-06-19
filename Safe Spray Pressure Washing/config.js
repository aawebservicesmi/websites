// ============================================================
// BUSINESS CONFIG — Safe Spray Pressure Washing
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
    name: "Safe Spray Pressure Washing",
    shortName: "SafeSpray",
    tagline: "Expert Pressure Washing for a Spotless Shine",
    description: "Professional pressure washing services in Royal Oak, delivering exceptional results with safety and efficiency.",
    type: "Pressure Washing",
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
    email: "info@safespray.com",
    address: {
      street: "1234 Oakridge Blvd",
      city: "Royal Oak",
      state: "MI",
      zip: "48067",
    },
    website: "www.safespray.com",
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
    logoText: "SafeSpray",
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
    taglineWords: ["Welcome", "to", "SafeSpray"],
    title: "Safe Spray Pressure Washing",
    titleEmoji: "💦",
    description: "Expert Pressure Washing for a Spotless Shine",
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
        name: "Residential Pressure Washing",
        description: "Comprehensive exterior cleaning for homes, including siding, decks, driveways, and walkways.",
        badge: "Popular",
      },
      {
        name: "Commercial Pressure Washing",
        description: "High‑pressure cleaning for storefronts, parking lots, and business facades.",
        badge: "",
      },
      {
        name: "Soft‑Wash Roof & Gutter Cleaning",
        description: "Gentle, low‑pressure cleaning to safely remove moss, algae, and debris from roofs and gutters.",
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
        title: "Free Consultation",
        description: "We assess your property and provide a detailed, no‑obligation quote.",
      },
      {
        icon: "🛠️",
        title: "Professional Cleaning",
        description: "Our trained technicians use state‑of‑the‑art equipment to deliver a thorough clean.",
      },
      {
        icon: "📦",
        title: "Final Inspection",
        description: "We walk through the job with you to ensure complete satisfaction.",
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
      "Safe Spray Pressure Washing was founded in 2015 by a team of cleaning enthusiasts who recognized the need for safe, effective exterior cleaning in the Royal Oak area.",
      "Since then, we’ve built a reputation for reliability and excellence, earning a perfect 5‑star rating on Google from our satisfied customers.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "SafeSpray Team",
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
        title: "Eco‑Friendly Cleaning",
        body: "We use biodegradable detergents and water‑conserving techniques to protect the environment while delivering powerful results.",
        ctaLabel: "Learn More →",
        ctaHref: "#contact",
      },
      {
        emoji: "🏢",
        title: "Flexible Scheduling",
        body: "Our team works around your timetable, offering weekend and evening appointments for minimal disruption.",
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
    tagline: "Safe Spray Pressure Washing Since 2015",
    copyright: "© Safe Spray Pressure Washing. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};