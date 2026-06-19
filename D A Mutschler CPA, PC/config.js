// ============================================================
// BUSINESS CONFIG — D A Mutschler CPA, PC
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
    name: "D A Mutschler CPA, PC",
    shortName: "MutschlerCPA",
    tagline: "Expert Accounting Services for Individuals & Businesses",
    description: "D A Mutschler CPA, PC provides comprehensive accounting, tax, and financial consulting services with a focus on accuracy and client success.",
    type: "Accounting Firm",
    founded: "1995",
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
    email: "info@mutschlercpa.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.mutschlercpa.com",
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
    logoText: "MutschlerCPA",
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
    taglineWords: ["Welcome", "to", "MutschlerCPA"],
    title: "D A Mutschler CPA, PC",
    titleEmoji: "🚀",
    description: "Expert Accounting Services for Individuals & Businesses",
    stats: [
      { number: 30, label: "Years in Business" },
      { number: 200, label: "Happy Clients" },
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
        name: "Tax Preparation",
        description: "Comprehensive personal and corporate tax filing, ensuring maximum deductions and compliance.",
        badge: "Popular",
      },
      {
        name: "Bookkeeping & Accounting",
        description: "Accurate bookkeeping, financial statements, and payroll services tailored to your business.",
        badge: "",
      },
      {
        name: "Financial Consulting",
        description: "Strategic financial planning and advisory to help you achieve your goals.",
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
        title: "Consultation",
        description: "We begin with a free consultation to understand your financial needs and goals.",
      },
      {
        icon: "🛠️",
        title: "Analysis & Planning",
        description: "Our team reviews your documents, identifies opportunities, and creates a customized plan.",
      },
      {
        icon: "📦",
        title: "Implementation & Support",
        description: "We execute the plan, file taxes, and provide ongoing support throughout the year.",
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
      "Founded in 1995 by Daniel A. Mutschler, CPA, our firm has grown from a solo practice to a trusted partner for individuals and businesses throughout Clinton Township and the surrounding areas.",
      "With a 4.5-star rating on Google from satisfied clients, we pride ourselves on delivering personalized, reliable, and transparent accounting services that empower our clients to make informed financial decisions.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "MutschlerCPA Team",
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
        title: "Personal Tax Solutions",
        body: "Tailored tax preparation and planning for individuals, maximizing refunds while ensuring compliance.",
        ctaLabel: "Learn More →",
        ctaHref: "#contact",
      },
      {
        emoji: "🏢",
        title: "Business Accounting Solutions",
        body: "Comprehensive bookkeeping, payroll, and financial reporting to keep your business running smoothly.",
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
    tagline: "D A Mutschler CPA, PC Since 1995",
    copyright: "© D A Mutschler CPA, PC. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};