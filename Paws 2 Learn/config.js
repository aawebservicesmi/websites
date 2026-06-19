// ============================================================
// BUSINESS CONFIG — Paws 2 Learn
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
    name: "Paws 2 Learn",
    shortName: "Paws2Learn",
    tagline: "Expert dog training and grooming for a happy, well-behaved companion.",
    description: "Paws 2 Learn offers personalized dog training and grooming services in Auburn Hills, helping owners build strong bonds with their pets through positive reinforcement and top-quality care.",
    type: "Pet Services",
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
    email: "info@paws2learn.com",
    address: {
      street: "1450 Business Parkway",
      city: "Rochester Hills",
      state: "MI",
      zip: "48309",
    },
    website: "www.paws2learn.com",
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
    logoText: "Paws2Learn",
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
    taglineWords: ["Welcome", "to", "Paws2Learn"],
    title: "Paws 2 Learn",
    titleEmoji: "🚀",
    description: "Expert dog training and grooming for a happy, well-behaved companion.",
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
      { name: "Basic Obedience Training", description: "Teach your dog essential commands and good manners using positive reinforcement techniques.", badge: "Popular" },
      { name: "Advanced Behavior Coaching", description: "Address specific behavioral challenges such as aggression, anxiety, and excessive barking.", badge: "" },
      { name: "Professional Grooming", description: "Full-service grooming including bathing, haircuts, nail trimming, and ear cleaning.", badge: "" },
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
      { icon: "🔍", title: "Initial Consultation", description: "We meet with you and your dog to assess needs, discuss goals, and create a customized training plan." },
      { icon: "🛠️", title: "Personalized Training", description: "Our expert trainers work with your dog through hands‑on sessions, focusing on obedience, behavior, and confidence." },
      { icon: "📦", title: "Grooming & Maintenance", description: "We provide professional grooming services and teach you how to keep your dog looking and feeling great between visits." },
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
      "Founded in 2018, Paws 2 Learn began with a simple belief: every dog deserves compassionate, effective training and grooming. Based in Auburn Hills, our founder, a certified dog trainer with over a decade of experience, started the business to help owners build lasting bonds with their pets.",
      "Since then, we’ve helped hundreds of families transform their dogs’ behavior and appearance, earning a reputation for patience, professionalism, and results. With a 3.5‑star rating on Google from eight satisfied clients, we continue to grow our services and share our love for happy, well‑trained dogs."
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "Paws2Learn Team",
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
      { emoji: "🏠", title: "Tailored Training Programs", body: "Customizable training plans that fit your dog’s age, breed, and personality, ensuring lasting results.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "All‑Inclusive Grooming Packages", body: "Convenient grooming bundles that keep your dog clean, healthy, and looking their best.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Paws 2 Learn Since 2018",
    copyright: "© Paws 2 Learn. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};