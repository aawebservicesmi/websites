// ============================================================
// BUSINESS CONFIG — The Law Office of Whitney S. Lemelin, P.C.
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
    name: "The Law Office of Whitney S. Lemelin, P.C.",
    shortName: "LemelinLaw",
    tagline: "Protecting Your Legacy with Expert Estate Planning",
    description: "A trusted law office specializing in comprehensive estate planning, wills, trusts, and probate services for individuals and families in Warren, MI.",
    type: "Law Firm",
    founded: "1998",
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
    email: "info@lemelinlaw.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.lemelinlaw.com",
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
    logoText: "LemelinLaw",
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
    taglineWords: ["Welcome", "to", "LemelinLaw"],
    title: "The Law Office of Whitney S. Lemelin, P.C.",
    titleEmoji: "🚀",
    description: "Protecting Your Legacy with Expert Estate Planning",
    stats: [
      { number: 25, label: "Years in Business" },
      { number: 500, label: "Happy Clients" },
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
      { name: "Estate Planning", description: "Comprehensive estate planning including wills, trusts, and power of attorney to safeguard your assets.", badge: "Popular" },
      { name: "Probate & Estate Administration", description: "Guidance through probate process ensuring efficient asset distribution.", badge: "" },
      { name: "Elder Law & Medicaid Planning", description: "Strategic planning for long-term care and Medicaid eligibility.", badge: "" },
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
      { icon: "🔍", title: "Consultation", description: "Initial meeting to understand your goals and assess your estate needs." },
      { icon: "🛠️", title: "Plan Development", description: "Drafting tailored documents and strategies to meet your objectives." },
      { icon: "📦", title: "Implementation & Review", description: "Executing the plan and providing ongoing updates as life changes." },
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
      "Founded in 1998 by Whitney S. Lemelin, our firm has dedicated over two decades to helping families in Warren secure their future through meticulous estate planning.",
      "Our mission is to provide personalized, compassionate legal counsel, ensuring that every client’s assets are protected and their wishes honored."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "LemelinLaw Team",
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
      { emoji: "🏠", title: "Tailored Estate Plans", body: "Custom wills, trusts, and powers of attorney designed to reflect your unique circumstances.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Comprehensive Probate Support", body: "Expert navigation of probate proceedings to minimize stress and expense.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
      { label: "Free Initial Consultation", detail: "Limited time" },
      { label: "Discounted Trust Packages", detail: "Ongoing" },
    ],
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline: "The Law Office of Whitney S. Lemelin, P.C. Since 1998",
    copyright: "© The Law Office of Whitney S. Lemelin, P.C.. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};