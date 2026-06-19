// ============================================================
// BUSINESS CONFIG — Oak Diner
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
    name: "Oak Diner",
    shortName: "OakDiner",
    tagline: "Classic comfort food in the heart of Royal Oak",
    description: "Oak Diner is a beloved local eatery serving hearty breakfast, lunch, and dinner classics with friendly, fast service.",
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
    email: "info@oakdiner.com",
    address: {
      street: "123 Oak Street",
      city: "Royal Oak",
      state: "MI",
      zip: "48067",
    },
    website: "www.oakdiner.com",
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
    logoText: "OakDiner",
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
    taglineWords: ["Welcome", "to", "OakDiner"],
    title: "Oak Diner",
    titleEmoji: "🚀",
    description: "Classic comfort food in the heart of Royal Oak",
    stats: [
      { number: 9, label: "Years in Business" },
      { number: 1200, label: "Happy Clients" },
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
      { name: "All‑Day Breakfast", description: "From fluffy pancakes to savory omelets, our breakfast menu is served all day.", badge: "Popular" },
      { name: "Lunch Specials", description: "Fresh sandwiches, salads, and daily specials crafted with locally sourced ingredients.", badge: "" },
      { name: "Dinner Classics", description: "Hearty entrees like meatloaf, chicken fried steak, and homemade pies to end your day.", badge: "" },
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
      { icon: "🔍", title: "Select Fresh Ingredients", description: "We source locally grown produce and quality meats to ensure every dish starts with the best." },
      { icon: "🛠️", title: "Handcrafted Cooking", description: "Our chefs prepare each meal to order, preserving flavor and tradition." },
      { icon: "📦", title: "Serve with a Smile", description: "Friendly staff deliver your food promptly, making every visit memorable." },
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
      "Founded in 2015 by longtime Royal Oak residents, Oak Diner began as a modest spot serving breakfast to early commuters. Over the years, our commitment to quality food and warm hospitality turned us into a community staple.",
      "Today, we proudly serve over a thousand satisfied customers each month, earning a 4.7‑star rating on Google. Our menu reflects the flavors of home, and our staff treats every guest like family.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "OakDiner Team",
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
      { emoji: "🏠", title: "Cozy Dine‑In Experience", body: "Enjoy your meal in our comfortable, retro‑styled dining room with attentive service.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Takeout & Delivery", body: "Order ahead online or by phone and enjoy Oak Diner’s favorites wherever you are.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Oak Diner Since 2015",
    copyright: "© Oak Diner. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};