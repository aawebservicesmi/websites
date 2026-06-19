// ============================================================
// BUSINESS CONFIG — Munch Nâ€™ Dip
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
    name: "Munch Nâ€™ Dip",
    shortName: "MunchDip",
    tagline: "Fresh flavors, perfect dips.",
    description: "Munch Nâ€™ Dip is a beloved neighborhood restaurant in Warren, offering a vibrant menu of handcrafted appetizers, signature dips, and hearty entrees made from locally sourced ingredients.",
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
    email: "info@munchdip.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.munchdip.com",
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
    logoText: "MunchDip",
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
    taglineWords: ["Welcome", "to", "MunchDip"],
    title: "Munch Nâ€™ Dip",
    titleEmoji: "🚀",
    description: "Fresh flavors, perfect dips.",
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
      { name: "Appetizer Sampler", description: "A curated selection of bite-sized starters, from crispy onion rings to seasoned mozzarella sticks.", badge: "Popular" },
      { name: "Signature Dips", description: "Our house-made dips, including tangy ranch, spicy chipotle, and creamy garlic aioli.", badge: "" },
      { name: "Main Entrées", description: "Hearty meals such as grilled chicken sandwiches, loaded nachos, and fresh salads.", badge: "" },
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
      { icon: "🔍", title: "Choose Your Favorites", description: "Browse our menu and select the dishes and dips that excite your palate." },
      { icon: "🛠️", title: "Fresh Preparation", description: "Our chefs prepare each order with care, using fresh, high-quality ingredients." },
      { icon: "📦", title: "Enjoy & Share", description: "Savor your meal in our cozy dining area or take it to go, and share the experience with friends." },
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
      "Founded in 2012 by a group of food enthusiasts, Munch Nâ€™ Dip began as a modest eat‑in spot in Warren, driven by a passion for bold flavors and community connection.",
      "Over the years, we've grown into a local favorite, earning a 4.3‑star rating on Google from over 300 satisfied diners who appreciate our friendly service and unforgettable dips.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "MunchDip Team",
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
      { emoji: "🏠", title: "Catering for Events", body: "Customizable catering packages perfect for birthdays, corporate meetings, and celebrations, featuring our most popular dishes and dips.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Private Party Reservations", body: "Reserve our private dining area for intimate gatherings, complete with a dedicated host and tailored menu options.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Munch Nâ€™ Dip Since 2012",
    copyright: "© Munch Nâ€™ Dip. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};