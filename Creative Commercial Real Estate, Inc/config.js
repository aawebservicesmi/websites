// ============================================================
// BUSINESS CONFIG — Creative Commercial Real Estate, Inc.
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
    name: "Creative Commercial Real Estate, Inc.",
    shortName: "CreativeCRE",
    tagline: "Professional Property Management Solutions",
    description: "We provide comprehensive property management services for commercial real estate owners in Rochester, delivering tailored leasing, maintenance, and financial reporting.",
    type: "Property Management",
    founded: "2010",
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
    email: "info@creativecre.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.creativecre.com",
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
    logoText: "CreativeCRE",
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
    taglineWords: ["Welcome", "to", "CreativeCRE"],
    title: "Creative Commercial Real Estate, Inc.",
    titleEmoji: "🚀",
    description: "Professional Property Management Solutions",
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
      {
        name: "Leasing & Tenant Acquisition",
        description: "Strategic marketing and tenant screening to fill vacancies quickly with qualified occupants.",
        badge: "Popular",
      },
      {
        name: "Property Maintenance & Repairs",
        description: "24/7 maintenance coordination, preventative upkeep, and rapid response to service requests.",
        badge: "",
      },
      {
        name: "Financial Reporting & Accounting",
        description: "Transparent monthly statements, budgeting, and tax‑ready financial documentation.",
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
        title: "Consultation & Assessment",
        description: "We meet with owners to understand goals, evaluate property conditions, and outline service needs.",
      },
      {
        icon: "🛠️",
        title: "Strategic Planning & Implementation",
        description: "Customized management plans are created, covering leasing, maintenance schedules, and financial controls.",
      },
      {
        icon: "📦",
        title: "Ongoing Management & Reporting",
        description: "Continuous oversight, tenant relations, and detailed reporting keep owners informed and properties thriving.",
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
      "Founded in 2010, Creative Commercial Real Estate, Inc. began with a simple mission: to bring innovative, client‑focused property management to Rochester’s commercial market. Over the years, our team has grown into a seasoned group of leasing specialists, maintenance coordinators, and financial analysts dedicated to maximizing asset value.",
      "Our commitment to transparency, responsiveness, and results has earned us a 5‑star reputation on Google, reflecting the trust our clients place in us. We partner with owners to streamline operations, reduce vacancies, and enhance profitability, treating each property as a collaborative project.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "CreativeCRE Team",
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
        title: "Custom Leasing Strategies",
        body: "Targeted marketing, competitive lease structures, and thorough tenant vetting to keep spaces occupied with quality occupants.",
        ctaLabel: "Learn More →",
        ctaHref: "#contact",
      },
      {
        emoji: "🏢",
        title: "Comprehensive Facility Management",
        body: "Proactive maintenance programs, vendor management, and rapid repair response to protect your investment.",
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
      { label: "Free First Month Management", detail: "Limited time" },
      { label: "Discounted Maintenance Services", detail: "Ongoing" },
    ],
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline: "Creative Commercial Real Estate, Inc. Since 2010",
    copyright: "© Creative Commercial Real Estate, Inc.. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};