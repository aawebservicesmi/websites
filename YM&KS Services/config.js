// ============================================================
// BUSINESS CONFIG — YM&KS Services
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
    name: "YM&KS Services",
    shortName: "YMKS",
    tagline: "Expert Pressure Washing for a Spotless Shine",
    description: "Professional pressure washing services that restore the look of residential and commercial properties.",
    type: "Pressure Washing",
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
    email: "info@ymks.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.ymks.com",
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
    logoText: "YMKS",
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
    taglineWords: ["Welcome", "to", "YMKS"],
    title: "YM&KS Services",
    titleEmoji: "🚀",
    description: "Expert Pressure Washing for a Spotless Shine",
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
        name: "Residential Pressure Washing",
        description: "Gentle yet powerful cleaning for homes, decks, driveways, and sidewalks.",
        badge: "Popular",
      },
      {
        name: "Commercial Pressure Washing",
        description: "High‑capacity washing for storefronts, parking lots, and building exteriors.",
        badge: "",
      },
      {
        name: "Surface Restoration",
        description: "Stain removal, graffiti removal, and surface sealing.",
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
        title: "Inspection & Quote",
        description: "We assess the property, discuss needs, and provide a transparent estimate.",
      },
      {
        icon: "🛠️",
        title: "Professional Cleaning",
        description: "Our team uses eco‑friendly detergents and high‑pressure equipment to remove dirt and grime.",
      },
      {
        icon: "📦",
        title: "Final Walk‑Through",
        description: "We ensure satisfaction, clean up the site, and offer maintenance tips.",
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
      "Founded in 2018 by a team of seasoned cleaning specialists, YM&KS Services was created to bring professional‑grade pressure washing to the local community.",
      "Our mission is to deliver exceptional results with integrity, using state‑of‑the‑art equipment and environmentally safe solutions, ensuring every property looks its best.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "YMKS Team",
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
        title: "Home Exterior Refresh",
        body: "Restore curb appeal with thorough cleaning of siding, roofs, and patios.",
        ctaLabel: "Learn More →",
        ctaHref: "#contact",
      },
      {
        emoji: "🏢",
        title: "Business Facade Revitalization",
        body: "Make a great first impression with spotless storefronts and parking areas.",
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
    tagline: "YM&KS Services Since 2018",
    copyright: "© YM&KS Services. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};