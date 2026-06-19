// ============================================================
// BUSINESS CONFIG — J.Baldwin's Restaurant
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
    name: "J.Baldwin's Restaurant",
    shortName: "JBaldwins",
    tagline: "Taste the tradition of Clinton Township",
    description: "J.Baldwin's Restaurant is a beloved local eatery offering classic American dishes made from fresh, locally sourced ingredients.",
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
    email: "info@jbaldwins.com",
    address: {
      street: "123 Main Street",
      city: "Clinton Township",
      state: "MI",
      zip: "48035",
    },
    website: "www.jbaldwins.com",
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
    logoText: "JBaldwins",
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
    taglineWords: ["Welcome", "to", "JBaldwins"],
    title: "J.Baldwin's Restaurant",
    titleEmoji: "🚀",
    description: "Taste the tradition of Clinton Township",
    stats: [
      { number: 25, label: "Years in Business" },
      { number: 1875, label: "Happy Clients" },
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
      { name: "Dine-In Service", description: "Enjoy a cozy atmosphere with our full menu served by attentive staff.", badge: "Popular" },
      { name: "Takeout & Delivery", description: "Conveniently order your favorites to enjoy at home.", badge: "" },
      { name: "Catering", description: "Customizable catering packages for parties, meetings, and celebrations.", badge: "" },
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
      { icon: "🔍", title: "Reserve a Table", description: "Book online or call ahead to secure your spot." },
      { icon: "🛠️", title: "Enjoy Your Meal", description: "Savor expertly prepared dishes made with fresh ingredients." },
      { icon: "📦", title: "Leave Feedback", description: "Share your experience and help us continue to improve." },
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
      "Founded in 1998 by James Baldwin, J.Baldwin's Restaurant began as a modest family‑run eatery in the heart of Clinton Township. With a passion for hearty, home‑cooked meals, James set out to create a place where neighbors could gather over delicious food and friendly conversation.",
      "Over the past two decades, we’ve earned a reputation for quality service and flavorful dishes, reflected in our 4.6‑star rating from over 1,800 satisfied customers. Today, our team continues to uphold the same commitment to hospitality, sourcing fresh local ingredients and delivering memorable dining experiences.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "JBaldwins Team",
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
      { emoji: "🏠", title: "Seasonal Menus", body: "Our menu evolves with the seasons, featuring fresh, locally sourced ingredients for a dynamic dining experience.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Private Events", body: "Host your celebrations in our private dining rooms, complete with customized menus and attentive service.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
      { label: "Lunch Special: $9.99 Sandwich Combo", detail: "Limited time" },
      { label: "Happy Hour: 20% off drinks", detail: "Ongoing" },
    ],
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline: "J.Baldwin's Restaurant Since 1998",
    copyright: "© J.Baldwin's Restaurant. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};