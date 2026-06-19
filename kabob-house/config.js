// ============================================================
// BUSINESS CONFIG — Kabob House
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
    name: "Kabob House",
    shortName: "KabobHouse",
    tagline: "Fresh, Flavorful Mediterranean Kabobs in Warren",
    description: "Kabob House is a professional Mediterranean restaurant serving the local community in Warren, offering authentic grilled kebabs, fresh salads, and traditional dishes.",
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
    email: "info@kabobhouse.com",
    address: {
      street: "123 Main Street",
      city: "Warren",
      state: "MI",
      zip: "48089",
    },
    website: "www.kabobhouse.com",
    mapsEmbed: "",
  },

  // ----------------------------------------------------------
  // HOURS
  // ----------------------------------------------------------
  hours: [
    { days: "Monday – Thursday", time: "11 AM – 9 PM" },
    { days: "Friday – Saturday", time: "11 AM – 10 PM" },
    { days: "Sunday", time: "12 PM – 8 PM" },
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
    logoText: "KabobHouse",
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
    taglineWords: ["Welcome", "to", "KabobHouse"],
    title: "Kabob House",
    titleEmoji: "🥙",
    description: "Fresh, Flavorful Mediterranean Kabobs in Warren",
    stats: [
      { number: 9, label: "Years of Flavor" },
      { number: 3000, label: "Happy Guests" },
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
      { name: "Dine-In Experience", description: "Enjoy our cozy indoor dining with a full menu of Mediterranean specialties.", badge: "Popular" },
      { name: "Takeout & Delivery", description: "Order online and savor our fresh kabobs at home.", badge: "" },
      { name: "Catering Services", description: "Custom Mediterranean catering for events and parties.", badge: "" },
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
      { icon: "🛠️", title: "Taste the Flavors", description: "Our chefs grill premium meats and vegetables to perfection." },
      { icon: "📦", title: "Share & Return", description: "Enjoy a memorable meal and join our loyalty program for future visits." },
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
      "Founded in 2015 by a family of culinary enthusiasts, Kabob House was created to bring the vibrant tastes of the Mediterranean to Warren. Inspired by traditional recipes and a passion for fresh, high‑quality ingredients, we set out to craft a welcoming spot where friends and families could gather over delicious grilled kebabs.",
      "Over the years, our commitment to authentic flavors and warm hospitality has earned us a loyal following, reflected in a 4.4‑star rating from over 3,000 reviews on Google. We continue to source the finest meats, herbs, and spices, ensuring every plate delivers the true essence of Mediterranean cuisine.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "KabobHouse Team",
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
      { emoji: "💻", title: "Online Ordering", body: "Conveniently place orders through our website for quick pickup or delivery.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🎉", title: "Private Events", body: "Host your celebrations with customized menus and dedicated service.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
      { label: "Lunch Special", detail: "Limited time" },
      { label: "Family Feast", detail: "Ongoing" },
    ],
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline: "Kabob House Since 2015",
    copyright: "© Kabob House. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};