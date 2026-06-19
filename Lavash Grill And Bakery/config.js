// ============================================================
// BUSINESS CONFIG — Lavash Grill And Bakery
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
    name: "Lavash Grill And Bakery",
    shortName: "Lavash",
    tagline: "Authentic Armenian Flavors in Southfield",
    description: "Lavash Grill And Bakery offers a professional Armenian dining experience, featuring expertly grilled meats, fresh lavash bread, and a variety of traditional dishes crafted for the local community.",
    type: "Restaurant",
    founded: "2014",
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
    email: "info@lavash.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.lavash.com",
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
    logoText: "Lavash",
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
    taglineWords: ["Welcome", "to", "Lavash"],
    title: "Lavash Grill And Bakery",
    titleEmoji: "🚀",
    description: "Authentic Armenian Flavors in Southfield",
    stats: [
      { number: 8, label: "Years in Business" },
      { number: 358, label: "Happy Clients" },
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
      { name: "Traditional Armenian Grill", description: "Savor expertly seasoned kebabs, kofta, and chicken cooked over open flames, delivering authentic smoky flavors.", badge: "Popular" },
      { name: "Freshly Baked Lavash & Pastries", description: "Enjoy our signature lavash bread, baked daily, along with a selection of sweet and savory Armenian pastries.", badge: "" },
      { name: "Catering & Private Events", description: "Customizable catering packages for gatherings, delivering the taste of Armenia to your celebrations.", badge: "" },
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
      { icon: "🔍", title: "Ingredient Sourcing", description: "We select the highest quality, locally sourced meats and fresh herbs to ensure authentic taste." },
      { icon: "🛠️", title: "Grilling & Baking", description: "Our chefs grill meats to perfection and bake lavash in traditional ovens for that perfect texture." },
      { icon: "📦", title: "Serving & Feedback", description: "We serve each dish with hospitality and welcome feedback to continuously improve." },
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
      "Founded by a family of Armenian chefs, Lavash Grill And Bakery began as a modest kitchen in Southfield, driven by a passion for sharing the rich culinary heritage of Armenia.",
      "Over the years, our dedication to quality and community has earned us a 4.6-star rating on Google, reflecting the trust and love of our 358 satisfied guests.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "Lavash Team",
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
      { emoji: "🏠", title: "Dine-In Experience", body: "Relax in our warm, welcoming space and enjoy freshly prepared Armenian dishes served by attentive staff.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Takeout & Delivery", body: "Order online or call ahead for quick takeout or delivery, bringing authentic flavors straight to your door.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Lavash Grill And Bakery Since 2014",
    copyright: "© Lavash Grill And Bakery. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};