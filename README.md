# Rumah Rasa — Indonesian Restaurant Website

> **This is just a quick one shot test using the Qwen 3.8 Max model that is released in 4th of August 2026.**

A warm, mobile-first, SEO-friendly website for an Indonesian restaurant. Built with **Next.js 16 App Router**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

> **Status:** Production-ready starter. All copy, hours, contact details, and menu items are centralized in `src/data/` for easy customization.

---

## Quick start (pnpm)

```bash
# 1. Install dependencies
pnpm install

# 2. Run the development server
pnpm dev

# Open http://localhost:3000 in your browser.
```

### Other package managers

This project was scaffolded with npm, but works identically with pnpm or yarn:

```bash
# pnpm
pnpm install && pnpm dev

# npm
npm install && npm run dev

# yarn
yarn install && yarn dev
```

### Common scripts

| Script                  | Command      | What it does                        |
| ----------------------- | ------------ | ----------------------------------- |
| Dev server              | `pnpm dev`   | HMR dev server on `localhost:3000`  |
| Production build        | `pnpm build` | Static + server route generation    |
| Start production server | `pnpm start` | Serves the `.next` build output     |
| Lint                    | `pnpm lint`  | Runs ESLint with the Next.js config |

---

## Customize for the restaurant

All business content lives in two data files. Editing these updates every page automatically:

### 1. Restaurant identity & contact — `src/data/restaurant.ts`

Update:

- `name`, `tagline`, `description`, `foundedYear`
- `address` (street, area, city, province, postal code)
- `contact` (phone, WhatsApp, email)
- `hours` (opening hours table)
- `socials` (Instagram, Facebook, TikTok URLs)
- `websiteUrl`, `mapsEmbedUrl`, `mapsLinkUrl`

**Google Maps tip:** the site uses a keyless embed. To point it to the real location, replace `mapsEmbedUrl` and `mapsLinkUrl` with URLs for the restaurant's actual address.

### 2. Menu — `src/data/menu.ts`

- Add / edit / remove categories (`menuCategories`).
- Add dishes (`MenuItem`).
- `price` is in IDR (no decimals).
- Use `spice: 0|1|2|3` for the flame indicator.
- Use `tags` for vegetarian, gluten-free, seafood, chef's pick, best seller.
- Mark `signature: true` for homepage-featured dishes.

### 3. Fonts, colors, brand visuals

- **Colors:** edit `src/app/globals.css` `:root` variables and the `@theme inline` tokens.
- **Fonts:** edit the imports in `src/app/layout.tsx` (`Plus_Jakarta_Sans` and `Fraunces`).
- **App icon:** replace `src/app/icon.svg`.

---

## Contact form / reservations

The contact form on `/contact` supports two modes:

### Option A — connected form endpoint (recommended)

Set an environment variable with the endpoint the form should POST to:

```bash
# .env.local
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

The form will POST a JSON payload with: `name`, `email`, `phone`, `requestType`, `date`, `time`, `partySize`, `message`.

### Option B — mailto fallback (no backend)

If `NEXT_PUBLIC_FORM_ENDPOINT` is not set, the form opens the user's email client with a pre-filled message to `hello@rumahrasa.id`.

To use a different fallback email, update `restaurant.contact.email` in `src/data/restaurant.ts`.

---

## Adding real food photography

The current design uses CSS gradients and inline SVG batik motifs so the site looks complete without photography. To add real images:

1. Place images in `public/images/` (e.g. `public/images/hero.jpg`).
2. Import `Image` from `next/image`.
3. Use `<Image src="/images/hero.jpg" alt="..." width={1600} height={900} priority />`.

For menu photos, swap the emoji medallion in `src/components/food-tile.tsx` for an `<Image>`.

### Remote images

If using an external CDN (e.g. Cloudinary or a CMS), add the hostname to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.example.com" }],
  },
};
```

---

## Project structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx           # Root layout: fonts, metadata, JSON-LD, header/footer
│   ├── page.tsx             # Homepage
│   ├── menu/page.tsx        # Full menu
│   ├── about/page.tsx       # Story / values
│   ├── contact/page.tsx     # Contact + reservation form
│   ├── visit/page.tsx       # Location, hours, map
│   ├── sitemap.ts           # /sitemap.xml
│   ├── robots.ts            # /robots.txt
│   └── not-found.tsx        # 404 page
├── components/              # Shared React components
├── data/                    # Restaurant + menu data
├── lib/                     # helpers (cn, formatIDR)
└── ...
```

---

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import it on [vercel.com/new](https://vercel.com/new).
3. Framework preset is **Next.js**.
4. Add any required environment variables (e.g. `NEXT_PUBLIC_FORM_ENDPOINT`).

### Other hosts

Any platform that supports Node.js 18+ can run this app:

```bash
pnpm build
pnpm start
```

For static export only, add `output: "export"` to `next.config.ts` and run `pnpm build`. Note: this disables the contact form POST endpoint if you later add a server-side handler.

---

## SEO

- Each page exports a `metadata` object with title and description.
- `sitemap.ts` and `robots.ts` are generated automatically.
- Structured data: a `Restaurant` JSON-LD schema is injected in `layout.tsx` using data from `src/data/restaurant.ts`.

---

## Notes

- **No dark mode** — the design uses one warm, light theme.
- **No external image dependencies** — the site builds and runs offline.
- **Halal badge** is a content label; update or remove it in `src/data/restaurant.ts` if needed.
- Testimonials on the homepage are placeholders; replace them with real customer quotes.

---

Built with care for Rumah Rasa — _Cita Rasa Nusantara_.
