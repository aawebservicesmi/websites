// ============================================================
// BUSINESS CONFIG — Warren Tax & Accounting
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
    name: "Warren Tax & Accounting",
    shortName: "WarrenTax",
    tagline: "Expert CPA Services for Individuals & Businesses",
    description: "Warren Tax & Accounting delivers accurate tax preparation, comprehensive bookkeeping, and strategic financial planning to help clients thrive.",
    type: "Accounting",
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
    email: "info@warraintax.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.warraintax.com",
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
    logoText: "WarrenTax",
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
    taglineWords: ["Welcome", "to", "WarrenTax"],
    title: "Warren Tax & Accounting",
    titleEmoji: "🚀",
    description: "Expert CPA Services for Individuals & Businesses",
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
      { name: "Tax Preparation", description: "Personal and corporate tax filing, ensuring maximum deductions and compliance.", badge: "Popular" },
      { name: "Bookkeeping & Payroll", description: "Accurate record-keeping and payroll management tailored to your business needs.", badge: "" },
      { name: "Financial Planning", description: "Strategic advice for budgeting, investments, and long‑term financial health.", badge: "" },
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
      { icon: "🔍", title: "Initial Consultation", description: "We discuss your financial situation and goals to tailor our services." },
      { icon: "🛠️", title: "Preparation & Review", description: "Our CPA prepares your documents, reviews for accuracy, and optimizes tax benefits." },
      { icon: "📦", title: "Filing & Follow‑Up", description: "We file your returns on time and provide ongoing support for any questions." },
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
      "Founded in 2010, Warren Tax & Accounting began as a solo practice dedicated to providing personalized tax solutions to the Warren community. Over the years, we have grown into a trusted firm, serving both individuals and businesses with the same commitment to excellence.",
      "Our mission is to simplify complex financial matters, delivering clear guidance and proactive strategies that empower our clients to achieve their financial goals. With a 4.4‑star rating on Google from 22 reviews, we pride ourselves on professionalism, responsiveness, and results."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "WarrenTax Team",
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
      { emoji: "🏠", title: "Tax Solutions", body: "From filing to audit support, we handle all aspects of tax compliance for individuals and corporations.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Business Advisory", body: "We offer bookkeeping, payroll, and financial consulting to help businesses streamline operations and grow.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Warren Tax & Accounting Since 2010",
    copyright: "© Warren Tax & Accounting. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};