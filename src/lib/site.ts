export const SITE = {
  name: "AutoDome",
  tagline: "Powering Smarter Mobility Through Advanced Vehicle Technology",
  storefront: {
    name: "ADL Automotive",
    url: "https://adlautomotive.com",
  },
  email: "Office@autodome.ae",
  phones: ["+971 6 565 8212", "+971 52 191 4444"],
  whatsapp: "971521914444",
  address: "407A, Al Sajaa Industrial, Sharjah — United Arab Emirates",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { days: "Saturday", time: "8:00 AM – 6:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  mapQuery: "Al+Sajaa+Industrial+Area+Sharjah+United+Arab+Emirates",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Training", href: "#training" },
  { label: "Online Store", href: "#store" },
  { label: "Contact", href: "#contact" },
] as const;
