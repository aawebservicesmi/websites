// ============================================================
// BUSINESS CONFIG — QAMAR AL-ZAMAN RESTAURANT Ù…Ø·Ø¹Ù… Ù‚Ù…Ø± Ø§Ù„Ø²Ù…Ø§Ù†
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
    name: "QAMAR AL-ZAMAN RESTAURANT Ù…Ø·Ø¹Ù… Ù‚Ù…Ø± Ø§Ù„Ø²Ù…Ø§Ù†",
    shortName: "QamarAlZaman",
    tagline: "Taste the Tradition of the Middle East",
    description: "Qamar Al-Zaman Restaurant offers authentic Middle Eastern dishes crafted with fresh ingredients, serving the Sterling Heights community with hospitality and flavor.",
    type: "Restaurant",
    founded: "2012",
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
    email: "info@qamaralzaman.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.qamaralzaman.com",
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
    logoText: "QamarAlZaman",
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
    taglineWords: ["Welcome", "to", "QamarAlZaman"],
    title: "QAMAR AL-ZAMAN RESTAURANT Ù…Ø·Ø¹Ù… Ù‚Ù…Ø± Ø§Ù„Ø²Ù…Ø§Ù†",
    titleEmoji: "🚀",
    description: "Taste the Tradition of the Middle East",
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
      { name: "Dine-In Experience", description: "Enjoy a warm, family‑friendly atmosphere with a menu of classic and contemporary Middle Eastern dishes.", badge: "Popular" },
      { name: "Takeout & Delivery", description: "Conveniently order your favorites for pickup or fast delivery straight to your door.", badge: "" },
      { name: "Catering Services", description: "Tailored catering for events, parties, and corporate gatherings, featuring a customizable menu.", badge: "" },
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
      { icon: "🔍", title: "Reserve Your Table", description: "Book online or call ahead to secure your spot for a memorable dining experience." },
      { icon: "🛠️", title: "Savor the Flavors", description: "Our chefs prepare each dish with authentic spices and fresh ingredients, served promptly." },
      { icon: "📦", title: "Enjoy & Share", description: "Relish your meal with family and friends, and share the experience on social media." },
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
      "Founded in 2012 by a passionate family of chefs, Qamar Al-Zaman Restaurant began as a modest eatery dedicated to sharing the rich culinary heritage of the Middle East with the Sterling Heights community.",
      "Over the years, we have grown into a beloved local landmark, known for our warm hospitality, consistent quality, and a menu that blends traditional recipes with modern twists, earning a 4.2‑star rating from our valued guests."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "QamarAlZaman Team",
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
      { emoji: "🏠", title: "Family Dining", body: "A comfortable setting perfect for families, offering kid‑friendly options and a menu that satisfies all ages.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Corporate Events", body: "Professional catering and private dining spaces designed for business meetings, seminars, and corporate celebrations.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "QAMAR AL-ZAMAN RESTAURANT Ù…Ø·Ø¹Ù… Ù‚Ù…Ø± Ø§Ù„Ø²Ù…Ø§Ù† Since 2012",
    copyright: "© QAMAR AL-ZAMAN RESTAURANT Ù…Ø·Ø¹Ù… Ù‚Ù…Ø± Ø§Ù„Ø²Ù…Ø§Ù†. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};