/**
 * Full menu for Rumah Rasa. All prices are in IDR (no decimals).
 * Pages/components must import from here — never hardcode menu items.
 */

export type SpiceLevel = 0 | 1 | 2 | 3;

export interface MenuItem {
  id: string;
  name: string;
  /** Indonesian subtitle or origin note, shown under the name. Optional. */
  origin?: string;
  description: string;
  price: number; // IDR
  spice: SpiceLevel; // 0 = not spicy … 3 = fiery
  tags: MenuTag[];
  signature?: boolean;
}

export type MenuTag =
  | "vegetarian"
  | "gluten-free"
  | "seafood"
  | "chef's pick"
  | "best seller";

export interface MenuCategory {
  id: string;
  /** English label used in navigation. */
  label: string;
  /** Indonesian label shown as the authentic accent. */
  labelId: string;
  description: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    labelId: "Pembuka",
    description:
      "Small plates to share — the way every Indonesian table begins.",
    items: [
      {
        id: "gado-gado",
        name: "Gado-Gado Jakarta",
        origin: "Betawi heritage",
        description:
          "Blanched market vegetables, tofu, tempeh and egg under a rich, freshly ground peanut sauce with kerupuk.",
        price: 42000,
        spice: 1,
        tags: ["vegetarian", "gluten-free", "best seller"],
      },
      {
        id: "sate-ayam",
        name: "Sate Ayam Madura",
        origin: "Madura Island",
        description:
          "Ten charcoal-grilled chicken skewers glazed in sweet soy, served with Madura peanut sauce and lontong.",
        price: 58000,
        spice: 1,
        tags: ["best seller"],
      },
      {
        id: "perkedel-jagung",
        name: "Perkedel Jagung",
        origin: "North Sulawesi",
        description:
          "Crispy sweet-corn fritters perfumed with kaffir lime leaf and scallion, with a lime-chili dip.",
        price: 38000,
        spice: 1,
        tags: ["vegetarian"],
      },
      {
        id: "lumpia-semarang",
        name: "Lumpia Semarang",
        origin: "Semarang, Central Java",
        description:
          "Golden fried spring rolls filled with bamboo shoot, chicken and prawn, with garlic-vinegar sauce.",
        price: 48000,
        spice: 0,
        tags: ["seafood"],
      },
      {
        id: "otak-otak",
        name: "Otak-Otak Bakar",
        origin: "Palembang, Sumatra",
        description:
          "Grilled fish cakes wrapped in banana leaf, served with a bright chili-vinegar dip.",
        price: 45000,
        spice: 1,
        tags: ["seafood", "gluten-free"],
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    labelId: "Hidangan Utama",
    description:
      "Heirloom recipes from Sumatra to Bali — slow-cooked, generous, and meant for the middle of the table.",
    items: [
      {
        id: "rendang",
        name: "Rendang Sapi Padang",
        origin: "Minangkabau, West Sumatra",
        description:
          "Our signature: beef brisket braised eight hours in coconut milk and twelve spices until dark, dry and tender.",
        price: 95000,
        spice: 2,
        tags: ["gluten-free", "chef's pick", "best seller"],
        signature: true,
      },
      {
        id: "nasi-goreng-kampung",
        name: "Nasi Goreng Kampung",
        origin: "House classic",
        description:
          "Village-style fried rice with free-range chicken, egg, anchovies, and our stone-ground sambal terasi.",
        price: 62000,
        spice: 2,
        tags: ["chef's pick"],
        signature: true,
      },
      {
        id: "ayam-betutu",
        name: "Ayam Betutu",
        origin: "Bali",
        description:
          "Whole chicken rubbed with base genep spice paste, wrapped in banana leaf and slow-baked Balinese style.",
        price: 78000,
        spice: 2,
        tags: ["gluten-free", "chef's pick"],
      },
      {
        id: "ikan-bakar",
        name: "Ikan Bakar Jimbaran",
        origin: "Jimbaran Bay, Bali",
        description:
          "Market-fresh fish grilled over coconut husk, with sambal matah, plecing kangkung and lime.",
        price: 88000,
        spice: 2,
        tags: ["seafood", "gluten-free"],
      },
      {
        id: "soto-betawi",
        name: "Soto Betawi",
        origin: "Jakarta",
        description:
          "Jakarta's beloved beef soup in a rich coconut-milk broth, with potato, tomato and emping crackers.",
        price: 68000,
        spice: 1,
        tags: ["best seller"],
      },
      {
        id: "gudeg-jogja",
        name: "Gudeg Jogja",
        origin: "Yogyakarta",
        description:
          "Young jackfruit stewed for hours with palm sugar, served with chicken, egg and krecek rind stew.",
        price: 65000,
        spice: 1,
        tags: [],
      },
      {
        id: "sayur-lodeh",
        name: "Sayur Lodeh & Tempe Bacem",
        origin: "Central Java",
        description:
          "Gentle coconut-vegetable curry with caramelized coriander tempeh and jasmine rice.",
        price: 55000,
        spice: 0,
        tags: ["vegetarian", "gluten-free"],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    labelId: "Pencuci Mulut",
    description: "Sweet endings from street stalls and family celebrations.",
    items: [
      {
        id: "es-cendol",
        name: "Es Cendol",
        origin: "West Java",
        description:
          "Iced pandan jelly noodles in fresh coconut milk with dark palm sugar from Garut.",
        price: 32000,
        spice: 0,
        tags: ["vegetarian", "gluten-free", "best seller"],
      },
      {
        id: "klepon-getuk",
        name: "Klepon & Getuk Seleman",
        origin: "Java",
        description:
          "Assorted market sweets: palm-sugar klepon and cassava getuk with fresh grated coconut.",
        price: 35000,
        spice: 0,
        tags: ["vegetarian", "gluten-free"],
      },
      {
        id: "pisang-goreng",
        name: "Pisang Goreng Keju",
        origin: "House favorite",
        description:
          "Crispy fried bananas with grated cheese, chocolate sprinkles and a palm-sugar drizzle.",
        price: 38000,
        spice: 0,
        tags: ["vegetarian"],
      },
      {
        id: "es-teler",
        name: "Es Teler",
        origin: "Jakarta",
        description:
          "Shaved ice with avocado, young coconut, jackfruit and a float of condensed milk.",
        price: 36000,
        spice: 0,
        tags: ["vegetarian", "gluten-free"],
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    labelId: "Minuman",
    description:
      "From tubruk coffee to jamu tonics — brewed, pressed and poured in house.",
    items: [
      {
        id: "teh-melati",
        name: "Teh Melati",
        origin: "Javanese highlands",
        description: "Fragrant jasmine tea, served hot or over ice.",
        price: 18000,
        spice: 0,
        tags: ["vegetarian", "gluten-free"],
      },
      {
        id: "kopi-tubruk",
        name: "Kopi Tubruk",
        origin: "Sumatra",
        description:
          "Traditional unfiltered coffee — grounds steeped in the glass, thick and honest.",
        price: 25000,
        spice: 0,
        tags: ["vegetarian", "gluten-free"],
      },
      {
        id: "es-jeruk-kelapa",
        name: "Es Jeruk Kelapa",
        origin: "Coastal Java",
        description:
          "Young coconut water and flesh with freshly squeezed lime over ice.",
        price: 28000,
        spice: 0,
        tags: ["vegetarian", "gluten-free"],
      },
      {
        id: "wedang-jahe",
        name: "Wedang Jahe",
        origin: "Central Java",
        description:
          "Warming ginger drink with lemongrass, pandan and palm sugar.",
        price: 25000,
        spice: 0,
        tags: ["vegetarian", "gluten-free"],
      },
      {
        id: "jamu-kunyit-asam",
        name: "Jamu Kunyit Asam",
        origin: "Javanese tradition",
        description:
          "House-pressed turmeric and tamarind tonic — bright, tangy, restorative.",
        price: 28000,
        spice: 0,
        tags: ["vegetarian", "gluten-free", "chef's pick"],
      },
    ],
  },
];

/** Flat list of every dish — handy for sitemaps, search, JSON-LD. */
export const allMenuItems: MenuItem[] = menuCategories.flatMap((c) => c.items);

/** Dishes featured on the homepage hero strip. */
export const signatureDishes: MenuItem[] = allMenuItems.filter(
  (item) => item.signature || item.tags.includes("chef's pick"),
);
