// ===
// BUSINESS CONFIG — Sterling Coney Island
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
    name: "Sterling Coney Island",
    shortName: "SterlingConey",
    tagline: "Classic American flavors, freshly served.",
    description: "A beloved American restaurant in Sterling Heights offering hearty classics, friendly service, and a welcoming atmosphere.",
    type: "Restaurant",
    founded: "1998",
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
    phone: "(586) 555-0123",
    phoneRaw: "5865550123",
    email: "info@sterlingconey.com",
    address: {
      street: "123 Coney Island Blvd",
      city: "Sterling Heights",
      state: "MI",
      zip: "48310",
    },
    website: "www.sterlingconey.com",
    mapsEmbed: "",
  },

  // ----------------------------------------------------------
  // HOURS
  // ----------------------------------------------------------
  hours: [
    { days: "Monday – Friday", time: "11 AM – 9 PM" },
    { days: "Saturday", time: "12 PM – 10 PM" },
    { days: "Sunday", time: "12 PM – 8 PM" },
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
    logoText: "SterlingConey",
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
    taglineWords: ["Welcome", "to", "SterlingConey"],
    title: "Sterling Coney Island",
    titleEmoji: "🍔",
    description: "Classic American flavors, freshly served.",
    stats: [
      { number: 25, label: "Years of Service" },
      { number: 406, label: "Happy Customers" },
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
      { name: "Dine-In Experience", description: "Enjoy our cozy indoor seating with a full menu of American classics.", badge: "Popular" },
      { name: "Takeout", description: "Quickly pick up your favorite dishes to enjoy at home.", badge: "" },
      { name: "Catering", description: "Customizable catering for events, parties, and corporate gatherings.", badge: "" },
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
      { icon: "🔍", title: "Reserve Your Table", description: "Book a reservation online or call ahead to guarantee your spot." },
      { icon: "🛠️", title: "Savor the Flavors", description: "Our chefs prepare fresh, delicious meals using quality ingredients." },
      { icon: "📦", title: "Share Your Experience", description: "We value your feedback—leave a review and let us know how we did." },
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
      "Founded in 1998 by the Sterling family, Sterling Coney Island began as a modest diner serving classic American comfort food to the Sterling Heights community.",
      "Over the years, we’ve grown into a neighborhood favorite, known for our friendly service, generous portions, and a menu that celebrates timeless flavors. Our commitment to quality and community has earned us a 4.8-star rating from over 400 satisfied customers.",
    ],
    quote: "\"Quality service is our promise.\"",
    quoteTranslation: "We deliver the best service possible.",
    pullQuote: "We don’t just work for you—we work with you.",
    pullQuoteAuthor: "SterlingConey Team",
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
      { emoji: "🏠", title: "Family Dining", body: "A welcoming space perfect for families to gather and enjoy hearty meals together.", ctaLabel: "Learn More →", ctaHref: "#contact" },
      { emoji: "🏢", title: "Event Catering", body: "Tailored catering packages for birthdays, weddings, and corporate events.", ctaLabel: "Learn More →", ctaHref: "#contact" },
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
    tagline: "Sterling Coney Island Since 1998",
    copyright: "© Sterling Coney Island. All rights reserved.",
    links: [
      { label: "Home", href: "index.html" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#story" },
      { label: "Contact", href: "#contact" },
    ],
  },
};