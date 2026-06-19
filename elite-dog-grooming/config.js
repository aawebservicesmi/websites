// ============================================================
// BUSINESS CONFIG — Elite Dog Grooming
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
    name: "Elite Dog Grooming",
    shortName: "EliteDogGrooming",
    tagline: "Premium Grooming for Your Best Friend",
    description: "Professional dog grooming services delivering top-quality care and style in Warren.",
    type: "Dog Grooming",
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
    email: "info@elitedoggrooming.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.elitedoggrooming.com",
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
    logoText: "EliteDogGrooming",
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
    taglineWords: ["Welcome", "to", "EliteDogGrooming"],
    title: "Elite Dog Grooming",
    titleEmoji: "🚀",
    description: "Premium Grooming for Your Best Friend",
    stats: [
      { number: 9, label: "Years in Business" },
      { number: 145, label: "Happy Clients" },
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
      {
        name: "Full Grooming Package",
        description: "Bath, haircut, nail trim, ear cleaning, and styling for a complete makeover.",
        badge: "Popular",
      },
      {
        name: "Bath & Brush",
        description: "Gentle wash, thorough brushing, and blow‑dry to keep coats fresh.",
        badge: "",
      },
      {
        name: "Pawdicure & Spa",
        description: "Nail trimming, paw balm, and a soothing facial for extra pampering.",
        badge: "",
      },
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
      {
        icon: "🔍",
        title: "Consultation & Assessment",
        description: "We evaluate your dog’s coat, skin, and style preferences to create a personalized plan.",
      },
      {
        icon: "🛠️",
        title: "Custom Grooming Session",
        description: "Our skilled groomers execute the plan using premium products and gentle techniques.",
      },
      {
        icon: "📦",
        title: "Final Touches & Review",
        description: "We perform a final check, ensure your satisfaction, and provide care tips.",
      },
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
      "Founded in 2015 by lifelong dog lover Alex Martinez, Elite Dog Grooming began as a small home‑based service dedicated to giving every pup a confident, clean look.",
      "Over the years, our commitment to quality and compassion earned us a 4.5‑star rating from 145 happy owners across Warren. We’re proud to be the go‑to groomers for families who treat their dogs like royalty.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "EliteDogGrooming Team",
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
      {
        emoji: "🏠",
        title: "Mobile Grooming Services",
        body: "We come to your home, providing stress‑free grooming in a safe, familiar environment.",
        ctaLabel: "Learn More →",
        ctaHref: "#contact",
      },
      {
        emoji: "🏢",
        title: "Premium In‑Store Grooming",
        body: "State‑of‑the‑art salon with experienced groomers delivering a pampering experience.",
        ctaLabel: "Learn More →",
        ctaHref: "#contact",
      },
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
    tagline: "Elite Dog Grooming Since 2015",
    copyright: "© Elite Dog Grooming. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};