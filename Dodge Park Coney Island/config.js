// ============================================================
// BUSINESS CONFIG — Dodge Park Coney Island
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
    name: "Dodge Park Coney Island",
    shortName: "DodgePark",
    tagline: "Taste the Tradition of Classic American Coney Island Fare",
    description: "Dodge Park Coney Island serves up authentic American comfort food, from hot dogs and fries to hearty burgers, in a welcoming family‑friendly atmosphere.",
    type: "Restaurant",
    founded: "1998",
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
    email: "info@dodgepark.com",
    address: {
      street: "1234 Dodge Park Road",
      city: "Sterling Heights",
      state: "MI",
      zip: "48310",
    },
    website: "www.dodgepark.com",
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
    logoText: "DodgePark",
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
    taglineWords: ["Welcome", "to", "DodgePark"],
    title: "Dodge Park Coney Island",
    titleEmoji: "🚀",
    description: "Taste the Tradition of Classic American Coney Island Fare",
    stats: [
      { number: 25, label: "Years in Business" },
      { number: 723, label: "Google Reviews" },
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
      { name: "Dine-In", description: "Enjoy our full menu in a comfortable, family‑friendly setting.", badge: "Popular" },
      { name: "Takeout", description: "Grab your favorites on the go with quick and convenient service.", badge: "" },
      { name: "Catering", description: "Custom catering for parties, events, and corporate gatherings.", badge: "" },
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
      { icon: "🔍", title: "Reserve Your Table", description: "Book online or call ahead to secure your spot." },
      { icon: "🛠️", title: "Savor the Flavors", description: "Indulge in our signature dishes made with fresh ingredients." },
      { icon: "📦", title: "Share Your Experience", description: "Leave a review and let us know how we did." },
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
      "Founded in 1998 by the Dodge family, Dodge Park Coney Island began as a modest stand serving classic hot dogs and fries to the Sterling Heights community.",
      "Over the years, we’ve expanded our menu and grown into a beloved neighborhood restaurant, earning a 4.4‑star rating on Google from over 700 satisfied diners.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "DodgePark Team",
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
      { emoji: "🏠", title: "Family Meals", body: "Delicious platters perfect for sharing with loved ones, available for dine‑in or takeout.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Corporate Events", body: "Tailored catering packages to impress your team and clients with authentic American cuisine.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Dodge Park Coney Island Since 1998",
    copyright: "© Dodge Park Coney Island. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};