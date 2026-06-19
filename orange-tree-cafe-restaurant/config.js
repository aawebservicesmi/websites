// ============================================================
// BUSINESS CONFIG — Orange Tree Cafe Restaurant
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
    name: "Orange Tree Cafe Restaurant",
    shortName: "OrangeTreeCafe",
    tagline: "Fresh Flavors, Warm Hospitality",
    description: "Orange Tree Cafe Restaurant is a family‑owned eatery delivering homestyle meals made from locally sourced ingredients, serving breakfast, lunch, and dinner to the Sterling Heights community.",
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
    email: "info@orangetreecafe.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.orangetreecafe.com",
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
    logoText: "OrangeTreeCafe",
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
    taglineWords: ["Welcome", "to", "OrangeTreeCafe"],
    title: "Orange Tree Cafe Restaurant",
    titleEmoji: "🚀",
    description: "Fresh Flavors, Warm Hospitality",
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
      { name: "Breakfast & Brunch", description: "Start your day with hearty breakfast classics and fresh brunch options, from omelets to avocado toast.", badge: "Popular" },
      { name: "Lunch & Dinner", description: "Enjoy a diverse menu of salads, sandwiches, pastas, and signature entrees crafted with seasonal produce.", badge: "" },
      { name: "Catering & Events", description: "Custom catering packages for parties, meetings, and special occasions, featuring our favorite dishes.", badge: "" },
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
      { icon: "🔍", title: "Browse & Order", description: "Explore our menu online or in‑person and place your order with ease." },
      { icon: "🛠️", title: "Savor the Meal", description: "Relax in our cozy dining area or enjoy your food at home with our prompt service." },
      { icon: "📦", title: "Share the Experience", description: "Leave a review, share photos, and become part of our community." },
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
      "Founded in 2005, Orange Tree Cafe began as a small family kitchen with a passion for serving wholesome, flavorful meals. Over the years, we’ve grown into a beloved neighborhood spot while staying true to our roots.",
      "Our commitment to fresh, locally sourced ingredients and friendly service has earned us a loyal following and a solid 3.9‑star rating on Google from over 400 satisfied guests.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "OrangeTreeCafe Team",
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
      { emoji: "🏠", title: "Dine‑In Experience", body: "Relax in our welcoming atmosphere, enjoy attentive service, and indulge in freshly prepared dishes.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Takeout & Delivery", body: "Conveniently order online for quick pick‑up or fast delivery right to your door.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Orange Tree Cafe Restaurant Since 2005",
    copyright: "© Orange Tree Cafe Restaurant. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};