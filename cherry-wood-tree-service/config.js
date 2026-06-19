// ============================================================
// BUSINESS CONFIG — Cherry Wood Tree Service
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
    name: "Cherry Wood Tree Service",
    shortName: "CherryWood",
    tagline: "Expert Tree Removal & Care in Hazel Park",
    description: "Professional tree removal, pruning, and emergency services serving Hazel Park and surrounding areas.",
    type: "Tree Service",
    founded: "2019",
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
    phone: "(248) 555-0199",
    phoneRaw: "2485550199",
    email: "info@cherrywood.com",
    address: {
      street: "123 Oak Lane",
      city: "Hazel Park",
      state: "MI",
      zip: "48030",
    },
    website: "www.cherrywood.com",
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
    logoText: "CherryWood",
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
    taglineWords: ["Welcome", "to", "CherryWood"],
    title: "Cherry Wood Tree Service",
    titleEmoji: "🚀",
    description: "Expert Tree Removal & Care in Hazel Park",
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
      { name: "Tree Removal", description: "Safe and efficient removal of hazardous or unwanted trees.", badge: "Popular" },
      { name: "Tree Pruning & Trimming", description: "Professional pruning to promote healthy growth and aesthetic appeal.", badge: "" },
      { name: "Stump Grinding", description: "Complete stump removal to restore your landscape.", badge: "" },
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
      { icon: "🔍", title: "Site Assessment", description: "Our certified arborists evaluate the tree and surrounding area to determine the best approach." },
      { icon: "🛠️", title: "Safe Removal", description: "Using industry‑standard equipment, we carefully remove the tree while protecting your property." },
      { icon: "📦", title: "Cleanup & Restoration", description: "We clear debris, grind stumps, and leave your site clean and ready for new projects." },
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
      "Founded in 2019, Cherry Wood Tree Service began with a mission to provide reliable, high‑quality tree care to the Hazel Park community. Our team of certified arborists brings years of experience and a passion for preserving the natural beauty of our neighborhoods.",
      "Over the years, we’ve earned a 4.7‑star rating on Google from 25 satisfied customers, thanks to our commitment to safety, professionalism, and customer satisfaction. Whether it’s a routine pruning or an emergency storm‑damage removal, we’re dedicated to delivering exceptional service every time."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "CherryWood Team",
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
      { emoji: "🏠", title: "Residential Tree Care", body: "Comprehensive services for homeowners, including removal, pruning, and emergency response to keep your property safe and beautiful.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Commercial Property Management", body: "Tailored tree management solutions for businesses and property managers, ensuring compliance, safety, and aesthetic appeal.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Cherry Wood Tree Service Since 2019",
    copyright: "© Cherry Wood Tree Service. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};