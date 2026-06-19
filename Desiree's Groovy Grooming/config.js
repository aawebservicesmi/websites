// ============================================================
// BUSINESS CONFIG — Desiree's Groovy Grooming
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
    name: "Desiree's Groovy Grooming",
    shortName: "GroovyGrooming",
    tagline: "Stylish grooming for your furry friends",
    description: "Professional dog grooming services delivering a groovy look for your pet in Warren.",
    type: "Pet Grooming",
    founded: "2018",
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
    email: "info@groovygrooming.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.groovygrooming.com",
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
    logoText: "GroovyGrooming",
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
    taglineWords: ["Welcome", "to", "GroovyGrooming"],
    title: "Desiree's Groovy Grooming",
    titleEmoji: "🚀",
    description: "Stylish grooming for your furry friends",
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
      { name: "Full Grooming Package", description: "Complete wash, haircut, styling, nail trim, and ear cleaning for a total makeover.", badge: "Popular" },
      { name: "Bath & Brush", description: "Gentle shampoo, conditioning, and thorough brushing to keep coats shiny and tangle‑free.", badge: "" },
      { name: "Nail Trimming & Pawdicure", description: "Safe nail clipping and paw pad care for comfort and health.", badge: "" },
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
      { icon: "🔍", title: "Consultation & Style Selection", description: "We discuss your pet’s needs and choose a style that fits their personality." },
      { icon: "🛠️", title: "Gentle Wash & Trim", description: "Our experts use pet‑safe products to clean and trim, ensuring a comfortable experience." },
      { icon: "📦", title: "Final Styling & Pickup", description: "A finishing touch with bows or bandanas, then we safely return your freshly groomed companion." },
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
      "Founded in 2018, Desiree's Groovy Grooming started as a passion project to give dogs in Warren a place where they could look and feel their best. With a background in professional pet care and a love for funky styles, Desiree created a boutique grooming studio that blends expertise with a fun, relaxed atmosphere.",
      "Our reputation grew quickly, earning a perfect 5‑star rating on Google from our delighted clients. We pride ourselves on personalized service, using only high‑quality, pet‑safe products, and staying up‑to‑date with the latest grooming trends. Every dog leaves our salon feeling confident, comfortable, and a little bit groovier."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "GroovyGrooming Team",
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
      { emoji: "🏠", title: "Mobile Grooming", body: "We bring our full grooming suite to your home, saving you time and keeping your pet comfortable in familiar surroundings.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "In‑Store Grooming", body: "Visit our stylish studio for a relaxing grooming session with all the amenities your pet deserves.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Desiree's Groovy Grooming Since 2018",
    copyright: "© Desiree's Groovy Grooming. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};