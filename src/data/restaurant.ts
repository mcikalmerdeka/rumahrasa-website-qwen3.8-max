/**
 * Central brand & contact data for Rumah Rasa.
 * Every page/component must import from here — never hardcode these values.
 */

export const restaurant = {
  name: "Rumah Rasa",
  legalName: "Rumah Rasa Indonesian Kitchen",
  shortName: "Rumah Rasa",
  tagline: "Cita Rasa Nusantara",
  taglineEn: "Flavors of the Archipelago",
  description:
    "Rumah Rasa is a family-run Indonesian restaurant in Jakarta serving heirloom recipes from across the archipelago — slow-cooked rendang, charcoal sate, and market-fresh sambal, made the way our grandmother taught us.",
  foundedYear: 2008,
  currency: "IDR",
  locale: "id-ID",
  websiteUrl: "https://rumahrasa.id",

  address: {
    street: "Jl. Senopati No. 21",
    area: "Kebayoran Baru",
    city: "Jakarta Selatan",
    province: "DKI Jakarta",
    postalCode: "12190",
    country: "Indonesia",
    full: "Jl. Senopati No. 21, Kebayoran Baru, Jakarta Selatan 12190, DKI Jakarta, Indonesia",
  },

  contact: {
    phone: "+62 21 7279 0123",
    phoneHref: "tel:+622172790123",
    whatsapp: "+62 812 9000 1123",
    /** Deep link opens WhatsApp chat with a prefilled greeting. */
    whatsappHref:
      "https://wa.me/6281290001123?text=Halo%20Rumah%20Rasa%2C%20saya%20ingin%20reservasi.",
    email: "hello@rumahrasa.id",
    emailHref: "mailto:hello@rumahrasa.id",
  },

  /**
   * 24-hour clock strings. `open`/`close` are display strings;
   * keep them human-readable for the hours table.
   */
  hours: [
    { days: "Monday – Thursday", open: "11:00", close: "22:00" },
    { days: "Friday", open: "11:00", close: "23:00" },
    { days: "Saturday", open: "10:00", close: "23:00" },
    { days: "Sunday", open: "10:00", close: "21:00" },
  ],

  socials: [
    { id: "instagram", label: "Instagram", handle: "@rumahrasa.jkt", url: "https://instagram.com/rumahrasa.jkt" },
    { id: "facebook", label: "Facebook", handle: "Rumah Rasa Jakarta", url: "https://facebook.com/rumahrasajkt" },
    { id: "tiktok", label: "TikTok", handle: "@rumahrasa.jkt", url: "https://tiktok.com/@rumahrasa.jkt" },
  ],

  /** Keyless Google Maps embed (iframe src). */
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Jl.%20Senopati%20No.%2021%2C%20Kebayoran%20Baru%2C%20Jakarta%20Selatan&output=embed",
  /** Link users can open in their own maps app. */
  mapsLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Jl.+Senopati+No.+21+Kebayoran+Baru+Jakarta+Selatan",
} as const;

export type Restaurant = typeof restaurant;
export type OpeningHours = (typeof restaurant.hours)[number];
