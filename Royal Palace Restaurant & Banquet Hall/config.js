// ============================================================
// BUSINESS CONFIG — Royal Palace Restaurant & Banquet Hall
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
    name: "Royal Palace Restaurant & Banquet Hall",
    shortName: "RoyalPalace",
    tagline: "Elegant dining and unforgettable events",
    description: "A premier restaurant and banquet hall offering exquisite cuisine and versatile event spaces in Warren, MI.",
    type: "Restaurant & Banquet Hall",
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
    email: "info@royalpalace.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.royalpalace.com",
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
    logoText: "RoyalPalace",
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
    taglineWords: ["Welcome", "to", "RoyalPalace"],
    title: "Royal Palace Restaurant & Banquet Hall",
    titleEmoji: "🚀",
    description: "Elegant dining and unforgettable events",
    stats: [
      { number: 9, label: "Years in Business" },
      { number: 200, label: "Happy Clients" },
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
      { name: "Fine Dining", description: "Experience gourmet dishes crafted from locally sourced ingredients, served in an elegant setting.", badge: "Popular" },
      { name: "Banquet & Wedding Events", description: "Host unforgettable celebrations in our spacious banquet hall, complete with customizable décor and catering.", badge: "" },
      { name: "Catering Services", description: "Enjoy our chef‑curated menus delivered to your venue, perfect for corporate events and private parties.", badge: "" },
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
      { icon: "🔍", title: "Reserve Your Table", description: "Book online or by phone, choose your preferred date, time, and seating preferences." },
      { icon: "🛠️", title: "Plan Your Event", description: "Work with our event specialists to design a menu, layout, and service plan tailored to your vision." },
      { icon: "📦", title: "Enjoy the Experience", description: "Relax as our professional staff delivers exceptional food and service, ensuring a memorable occasion." },
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
      "Founded in 2015, Royal Palace Restaurant & Banquet Hall began as a family‑run eatery dedicated to serving the Warren community with high‑quality, home‑style cuisine.",
      "Over the years, we expanded our space to include a grand banquet hall, becoming the go‑to venue for weddings, corporate gatherings, and special celebrations, all while maintaining a 4.3‑star rating on Google."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "RoyalPalace Team",
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
      { emoji: "🏠", title: "Custom Event Planning", body: "Our experienced team collaborates with you to create a personalized event plan, from menu selection to décor and timeline.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Tailored Catering", body: "Choose from a variety of menu options or let our chefs design a bespoke menu that reflects your taste and budget.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Royal Palace Restaurant & Banquet Hall Since 2015",
    copyright: "© Royal Palace Restaurant & Banquet Hall. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};