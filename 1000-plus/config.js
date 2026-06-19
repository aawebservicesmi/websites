// ============================================================
// BUSINESS CONFIG — 1000 Plus
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
    name: "1000 Plus",
    shortName: "ThousandPlus",
    tagline: "Your Trusted Partner in Property Management",
    description: "1000 Plus delivers comprehensive property management services, handling everything from tenant placement to maintenance, ensuring property owners enjoy peace of mind.",
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
    email: "info@thousandplus.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.thousandplus.com",
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
    logoText: "ThousandPlus",
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
    taglineWords: ["Welcome", "to", "ThousandPlus"],
    title: "1000 Plus",
    titleEmoji: "🚀",
    description: "Your Trusted Partner in Property Management",
    stats: [
      { number: 13, label: "Years in Business" },
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
      { name: "Residential Property Management", description: "Full-cycle management for single-family homes, condos, and townhouses, including rent collection, maintenance coordination, and tenant relations.", badge: "Popular" },
      { name: "Commercial Property Management", description: "Professional oversight of office, retail, and industrial spaces, focusing on lease administration, facility upkeep, and maximizing ROI.", badge: "" },
      { name: "Tenant Screening & Leasing", description: "Thorough background checks, credit analysis, and lease preparation to secure reliable tenants quickly.", badge: "" },
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
      { icon: "🔍", title: "Consultation & Assessment", description: "We meet with property owners to understand their goals, evaluate assets, and identify opportunities for optimization." },
      { icon: "🛠️", title: "Customized Management Plan", description: "Our team designs a tailored management strategy covering leasing, maintenance, and financial reporting." },
      { icon: "📦", title: "Ongoing Support & Reporting", description: "We provide continuous oversight, regular performance reports, and responsive communication to keep owners informed." },
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
      "Founded in 2010, 1000 Plus began with a simple mission: to simplify property ownership for landlords in Clinton Township. Our founders, seasoned real estate professionals, recognized the need for a trustworthy partner who could handle the day‑to‑day challenges of managing properties.",
      "Today, we combine cutting‑edge technology with a hands‑on approach, serving hundreds of residential and commercial owners. Our commitment to transparency, responsiveness, and results has earned us a 5‑star rating on Google and the confidence of our growing client base."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "ThousandPlus Team",
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
      { emoji: "🏠", title: "Full‑Service Management", body: "From marketing vacancies to handling repairs, we take care of every aspect of property stewardship, allowing owners to focus on what matters most.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Financial Reporting & Accounting", body: "Detailed monthly statements, expense tracking, and year‑end summaries give owners clear insight into their investment performance.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "1000 Plus Since 2010",
    copyright: "© 1000 Plus. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};