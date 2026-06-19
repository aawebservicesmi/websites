// ============================================================
// BUSINESS CONFIG — Robin's Wash N Wag
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  // THEME
  // ----------------------------------------------------------
  theme: "home_services",

  // ----------------------------------------------------------
  // BUSINESS BASICS
  // ----------------------------------------------------------
  business: {
    name: "Robin's Wash N Wag",
    shortName: "RobinsWashNWag",
    tagline: "Professional Dog Grooming in Clawson",
    description: "We provide top-quality dog grooming services, including baths, haircuts, nail trimming, and more, ensuring every pet looks and feels great.",
    type: "Pet Grooming",
    founded: "2015",
  },

  // ----------------------------------------------------------
  // COLORS & FONTS
  // ----------------------------------------------------------
  branding: {
    primaryColor: "#1E3A34",
    secondaryColor: "#2F6B5F",
    accentColor: "#9BC53D",
    textDark: "#1B1B1B",
    textLight: "#F5F7F6",
    bgLight: "#F3F7F5",
    fontHeading: "Bebas Neue",
    fontBody: "Lato",
  },

  // ----------------------------------------------------------
  // CONTACT INFO
  // ----------------------------------------------------------
  contact: {
    phone: "(248) 555-0100",
    phoneRaw: "2485550100",
    email: "info@robinswashnwag.com",
    address: {
      street: "123 Main Street",
      city: "Clawson",
      state: "MI",
      zip: "48017",
    },
    website: "www.robinswashnwag.com",
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
    logoText: "RobinsWashNWag",
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
    taglineWords: ["Welcome", "to", "RobinsWashNWag"],
    title: "Robin's Wash N Wag",
    titleEmoji: "🐾",
    description: "Professional Dog Grooming in Clawson",
    stats: [
      { number: 8, label: "Years in Business" },
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
      { name: "Full Grooming", description: "Complete grooming package including bath, haircut, ear cleaning, and styling.", badge: "Popular" },
      { name: "Bath & Brush", description: "Gentle bath with premium shampoo and thorough brushing to keep coats shiny.", badge: "" },
      { name: "Nail Trimming", description: "Professional nail trimming and paw pad care for comfort and health.", badge: "" },
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
      { icon: "🔍", title: "Consultation", description: "We discuss your pet’s needs and preferred style to create a personalized grooming plan." },
      { icon: "🛠️", title: "Grooming", description: "Our skilled groomers perform a thorough bath, haircut, and styling using high-quality products." },
      { icon: "📦", title: "Final Touches", description: "We finish with nail trimming, ear cleaning, and a spritz of fragrance, then review care tips with you." },
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
      "Robin's Wash N Wag started as a passion project for Robin, a lifelong dog lover who wanted to give pets the care they deserve. Based in Clawson, the shop quickly became known for its friendly atmosphere and meticulous grooming.",
      "With a 4.4‑star rating on Google from 49 happy clients, we pride ourselves on personalized service, using only pet‑safe products and staying up‑to‑date with the latest grooming trends.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "RobinsWashNWag Team",
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
      { emoji: "🏠", title: "Mobile Grooming", body: "We bring our grooming services to your doorstep, saving you time and stress.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "In‑Shop Grooming", body: "Visit our comfortable studio for a full grooming experience with a relaxed environment.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Robin's Wash N Wag Since 2015",
    copyright: "© Robin's Wash N Wag. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};