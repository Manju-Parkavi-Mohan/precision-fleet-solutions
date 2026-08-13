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
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#solutions", hasServicesMenu: true },
  { label: "Industries", href: "/#industries" },
  { label: "Training", href: "/#training" },
  { label: "Online Store", href: "/#store" },
  { label: "Contact", href: "/#contact" },
] as const;

export const REVIEWS_URL =
  "https://www.google.com/maps/place/AutoDome+%7C+Truck+Diagnostic+Centre/@25.3023253,55.6268803,17z/data=!4m8!3m7!1s0x3ef5f3a453b79363:0xcbef8cf83bbe4f94!8m2!3d25.3421411!4d55.6481055!9m1!1b1!16s%2Fg%2F11vt6z1nmb?hl=en&entry=ttu";

