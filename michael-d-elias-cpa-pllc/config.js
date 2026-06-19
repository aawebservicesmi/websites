// ============================================================
// BUSINESS CONFIG — Michael D Elias CPA PLLC
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
    name: "Michael D Elias CPA PLLC",
    shortName: "EliasCPA",
    tagline: "Precision Accounting for Your Peace of Mind",
    description: "Michael D Elias CPA PLLC delivers expert CPA services, tax planning, and financial consulting to individuals and businesses in Sterling Heights.",
    type: "CPA Firm",
    founded: "2005",
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
    email: "info@eliascpa.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.eliascpa.com",
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
    logoText: "EliasCPA",
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
    taglineWords: ["Welcome", "to", "EliasCPA"],
    title: "Michael D Elias CPA PLLC",
    titleEmoji: "🚀",
    description: "Precision Accounting for Your Peace of Mind",
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
      { name: "Tax Preparation & Planning", description: "Accurate and timely preparation of federal and state tax returns, coupled with strategic planning to minimize liabilities.", badge: "Popular" },
      { name: "Bookkeeping & Payroll", description: "Comprehensive bookkeeping services and reliable payroll processing to keep your financial records flawless.", badge: "" },
      { name: "Financial Consulting", description: "Expert advice on budgeting, cash flow management, and growth strategies for sustainable success.", badge: "" },
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
      { icon: "🔍", title: "Consultation", description: "We begin with a thorough consultation to understand your financial goals and challenges." },
      { icon: "🛠️", title: "Analysis & Strategy", description: "Our team analyzes your data and crafts a customized accounting strategy." },
      { icon: "📦", title: "Implementation & Review", description: "We implement solutions and provide ongoing reviews to ensure optimal financial health." },
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
      "Founded in 2005 by Michael D. Elias, a seasoned CPA with a passion for helping clients navigate complex financial landscapes, our firm has grown into a trusted partner for businesses and individuals alike.",
      "With a 4.8-star rating on Google from 17 satisfied clients, we pride ourselves on delivering personalized, accurate, and proactive accounting services that empower our clients to achieve their financial objectives.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "EliasCPA Team",
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
      { emoji: "🏠", title: "Tax Optimization", body: "Strategic tax planning to reduce liabilities and maximize refunds for individuals and businesses.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Business Advisory", body: "Insightful financial guidance to support growth, budgeting, and strategic decision‑making.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Michael D Elias CPA PLLC Since 2005",
    copyright: "© Michael D Elias CPA PLLC. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};