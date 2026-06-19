// ============================================================
// BUSINESS CONFIG — Alrafidyn Restaurant
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  // THEME
  // ----------------------------------------------------------
  theme: "restaurant",

  // ----------------------------------------------------------
  // BUSINESS BASICS
  // ----------------------------------------------------------
  business: {
    name: "Alrafidyn Restaurant",
    shortName: "Alrafidyn",
    tagline: "Authentic Middle Eastern Flavors in Sterling Heights",
    description: "Alrafidyn Restaurant delivers a professional dining experience with traditional Middle Eastern cuisine, crafted from fresh ingredients and served in a welcoming atmosphere.",
    type: "Restaurant",
    founded: "2015",
  },

  // ----------------------------------------------------------
  // COLORS & FONTS
  // ----------------------------------------------------------
  branding: {
    primaryColor: "#D45500",
    secondaryColor: "#FFA500",
    accentColor: "#FFD700",
    textDark: "#1B1B1B",
    textLight: "#F5F7F6",
    bgLight: "#FFF8F0",
    fontHeading: "Bebas Neue",
    fontBody: "Lato",
  },

  // ----------------------------------------------------------
  // CONTACT INFO
  // ----------------------------------------------------------
  contact: {
    phone: "(248) 555-0100",
    phoneRaw: "2485550100",
    email: "info@alrafidyn.com",
    address: {
      street: "123 Main Street",
      city: "Sterling Heights",
      state: "MI",
      zip: "48310",
    },
    website: "www.alrafidyn.com",
    mapsEmbed: "",
  },

  // ----------------------------------------------------------
  // HOURS
  // ----------------------------------------------------------
  hours: [
    { days: "Monday – Thursday", time: "11 AM – 10 PM" },
    { days: "Friday – Saturday", time: "11 AM – 11 PM" },
    { days: "Sunday", time: "12 PM – 9 PM" },
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
    logoText: "Alrafidyn",
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
    taglineWords: ["Welcome", "to", "Alrafidyn"],
    title: "Alrafidyn Restaurant",
    titleEmoji: "🚀",
    description: "Authentic Middle Eastern Flavors in Sterling Heights",
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
      { name: "Traditional Mezze Platter", description: "A selection of classic dips, salads, and breads perfect for sharing.", badge: "Popular" },
      { name: "Grilled Kebabs & Shawarma", description: "Succulent marinated meats grilled to perfection, served with aromatic rice.", badge: "" },
      { name: "Baklava & Desserts", description: "Hand‑crafted pastries and sweets infused with honey and nuts.", badge: "" },
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
      { icon: "🔍", title: "Reserve Your Table", description: "Book online or call ahead to secure your spot for a memorable meal." },
      { icon: "🛠️", title: "Enjoy the Experience", description: "Savor authentic dishes prepared by our skilled chefs in a warm setting." },
      { icon: "📦", title: "Share Your Feedback", description: "We value your opinion and continuously improve based on your comments." },
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
      "Founded by a family of culinary enthusiasts, Alrafidyn Restaurant began as a modest eatery dedicated to sharing the rich flavors of the Middle East with the Sterling Heights community.",
      "Over the years, our commitment to quality and hospitality has earned us a 4.4‑star rating on Google, reflecting the trust and satisfaction of over 300 happy diners.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "Alrafidyn Team",
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
      { emoji: "🏠", title: "Dine‑In Experience", body: "Enjoy a cozy atmosphere, attentive service, and a menu that celebrates authentic Middle Eastern cuisine.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Catering & Events", body: "Bring the taste of the Middle East to your private parties, corporate events, and celebrations with customized catering packages.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Alrafidyn Restaurant Since 2015",
    copyright: "© Alrafidyn Restaurant. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};