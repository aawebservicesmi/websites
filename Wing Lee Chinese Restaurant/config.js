// ============================================================
// BUSINESS CONFIG — Wing Lee Chinese Restaurant
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
    name: "Wing Lee Chinese Restaurant",
    shortName: "WingLee",
    tagline: "Authentic Chinese Cuisine in Sterling Heights",
    description: "A well-established Chinese restaurant delivering authentic flavors and exceptional service to the Sterling Heights community.",
    type: "Restaurant",
    founded: "2005",
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
    email: "info@winglee.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.winglee.com",
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
    logoText: "WingLee",
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
    taglineWords: ["Welcome", "to", "WingLee"],
    title: "Wing Lee Chinese Restaurant",
    titleEmoji: "🥢",
    description: "Authentic Chinese Cuisine in Sterling Heights",
    stats: [
      { number: 4.3, label: "Google Rating" },
      { number: 902, label: "Reviews" },
    ],
    primaryBtn: { label: "View Menu", href: "#services" },
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
      { name: "Dine‑In", description: "Enjoy a comfortable dining experience with our full menu.", badge: "Popular" },
      { name: "Takeout", description: "Quickly pick up your favorite dishes for a meal at home.", badge: "" },
      { name: "Catering", description: "Delicious Chinese catering for parties, offices, and events.", badge: "" },
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
      { icon: "🔍", title: "Reserve", description: "Book a table online or by phone to guarantee your spot." },
      { icon: "🛠️", title: "Enjoy Your Meal", description: "Savor authentic dishes prepared fresh by our skilled chefs." },
      { icon: "📦", title: "Leave Feedback", description: "Share your experience; we continuously improve based on your input." },
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
      "Founded in 2005 by the Lee family, Wing Lee Chinese Restaurant began as a modest take‑out spot serving traditional recipes passed down through generations. Over the years, we expanded into a full‑service restaurant while preserving the authentic flavors that our community loves.",
      "Today, we are proud to be a staple of Sterling Heights, offering a warm atmosphere, friendly service, and a menu that celebrates the rich culinary heritage of China. Our commitment to quality and community has earned us a 4.3‑star rating from over 900 satisfied diners.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "WingLee Team",
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
      { emoji: "🏠", title: "Family Dining", body: "Cozy indoor seating perfect for family gatherings and celebrations.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Corporate Catering", body: "Tailored catering packages for meetings, events, and office lunches.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
      { label: "Lunch Special", detail: "Half‑price appetizers weekdays 12–2 PM" },
      { label: "Dinner Combo", detail: "Family platter 20% off on weekends" },
    ],
  },

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footer: {
    tagline: "Wing Lee Chinese Restaurant Since 2005",
    copyright: "© Wing Lee Chinese Restaurant. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};