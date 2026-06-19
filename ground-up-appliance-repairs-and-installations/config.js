// ============================================================
// BUSINESS CONFIG — Ground Up Appliance Repairs and Installations
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
    name: "Ground Up Appliance Repairs and Installations",
    shortName: "GroundUp",
    tagline: "Expert HVAC Repair & Installation in Royal Oak",
    description: "Professional HVAC repair and installation services serving Royal Oak and surrounding areas.",
    type: "HVAC Contractor",
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
    email: "info@groundup.com",
    address: {
      street: "123 Main Street",
      city: "Royal Oak",
      state: "MI",
      zip: "48067",
    },
    website: "www.groundup.com",
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
    logoText: "GroundUp",
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
    taglineWords: ["Welcome", "to", "GroundUp"],
    title: "Ground Up Appliance Repairs and Installations",
    titleEmoji: "🚀",
    description: "Expert HVAC Repair & Installation in Royal Oak",
    stats: [
      { number: 9, label: "Years in Business" },
      { number: 90, label: "Happy Clients" },
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
      { name: "HVAC Repair", description: "Fast, reliable repair for all heating and cooling systems.", badge: "Popular" },
      { name: "Air Conditioning Installation", description: "Professional installation of energy-efficient AC units.", badge: "" },
      { name: "Heating System Maintenance", description: "Seasonal tune-ups to keep your furnace running smoothly.", badge: "" },
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
      { icon: "🔍", title: "Schedule Inspection", description: "We assess your system to identify issues and recommend solutions." },
      { icon: "🛠️", title: "Perform Service", description: "Our certified technicians execute repairs or installations efficiently." },
      { icon: "📦", title: "Follow-Up Support", description: "We ensure everything works perfectly and offer maintenance plans." },
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
      "Founded in 2015, Ground Up Appliance Repairs and Installations began with a simple mission: to provide honest, high‑quality HVAC services to homeowners in Royal Oak. Our team of certified technicians combines years of experience with a commitment to transparency and customer satisfaction.",
      "Over the years, we’ve earned a 4.4‑star rating on Google from 90 satisfied clients, reflecting our dedication to prompt service, fair pricing, and lasting solutions. Whether it’s a broken furnace or a new air‑conditioning system, we treat every job as if it were our own home."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "GroundUp Team",
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
      { emoji: "🏠", title: "Residential HVAC Solutions", body: "Tailored repair, installation, and maintenance services to keep your home comfortable year‑round.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Commercial HVAC Services", body: "Expert support for businesses, ensuring reliable climate control for offices and retail spaces.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Ground Up Appliance Repairs and Installations Since 2015",
    copyright: "© Ground Up Appliance Repairs and Installations. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};