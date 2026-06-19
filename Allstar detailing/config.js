// ============================================================
// BUSINESS CONFIG — Allstar detailing
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  // THEME
  // ----------------------------------------------------------
  theme: "automotive",

  // ----------------------------------------------------------
  // BUSINESS BASICS
  // ----------------------------------------------------------
  business: {
    name: "Allstar detailing",
    shortName: "AllstarDetailing",
    tagline: "Shine Like a Star – Expert Car Detailing",
    description: "Allstar Detailing provides top‑tier automotive detailing services, delivering showroom‑quality results for every vehicle.",
    type: "Automotive Detailing",
    founded: "2015",
  },

  // ----------------------------------------------------------
  // COLORS & FONTS
  // ----------------------------------------------------------
  branding: {
    primaryColor: "#E63946",
    secondaryColor: "#0D3B66",
    accentColor: "#F1A208",
    textDark: "#1B1B1B",
    textLight: "#F5F7F6",
    bgLight: "#F9F8FD",
    fontHeading: "Bebas Neue",
    fontBody: "Lato",
  },

  // ----------------------------------------------------------
  // CONTACT INFO
  // ----------------------------------------------------------
  contact: {
    phone: "(248) 555-0100",
    phoneRaw: "2485550100",
    email: "info@allstardetailing.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.allstardetailing.com",
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
    logoText: "AllstarDetailing",
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
    taglineWords: ["Welcome", "to", "AllstarDetailing"],
    title: "Allstar detailing",
    titleEmoji: "🚀",
    description: "Shine Like a Star – Expert Car Detailing",
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
      {
        name: "Full Exterior Detailing",
        description: "Comprehensive wash, clay bar treatment, polish, and wax to restore paint brilliance.",
        badge: "Popular",
      },
      {
        name: "Interior Deep Clean",
        description: "Thorough vacuum, steam cleaning, leather conditioning, and odor elimination.",
        badge: "",
      },
      {
        name: "Paint Protection Coating",
        description: "Advanced ceramic coating for long‑lasting shine and protection against the elements.",
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
        title: "Inspection & Consultation",
        description: "We assess your vehicle’s condition and discuss your detailing goals.",
      },
      {
        icon: "🛠️",
        title: "Detailed Cleaning & Restoration",
        description: "Our technicians perform meticulous cleaning, polishing, and protective treatments.",
      },
      {
        icon: "📦",
        title: "Final Inspection & Delivery",
        description: "A final walk‑through ensures every detail meets our high standards before you drive away.",
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
      "Founded in 2015, Allstar Detailing began as a passion project for car enthusiasts who wanted to bring the showroom shine back to everyday drivers. Over the years, our dedication to meticulous craftsmanship and customer satisfaction has earned us a flawless 5‑star rating on Google.",
      "Our team combines state‑of‑the‑art equipment with premium products to treat each vehicle as a work of art. Whether you need a quick refresh or a full restoration, we deliver results that make your car look—and feel—like new.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "AllstarDetailing Team",
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
        title: "Mobile Detailing",
        body: "We come to your home or office, providing full detailing services on‑site for your convenience.",
        ctaLabel: "Learn More →",
        ctaHref: "#contact",
      },
      {
        emoji: "🏢",
        title: "Custom Packages",
        body: "Tailor‑made detailing plans that fit your vehicle’s needs and your budget.",
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
    tagline: "Allstar detailing Since 2015",
    copyright: "© Allstar detailing. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};