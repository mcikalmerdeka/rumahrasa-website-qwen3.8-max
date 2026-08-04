import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import { restaurant } from "@/data/restaurant";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(restaurant.websiteUrl),
  title: {
    default: "Rumah Rasa — Cita Rasa Nusantara",
    template: "%s · Rumah Rasa",
  },
  description: restaurant.description,
  keywords: [
    "Indonesian restaurant Jakarta",
    "rendang",
    "nasi goreng",
    "halal restaurant",
    "Senopati",
    "Rumah Rasa",
    "authentic Indonesian food",
    "sate",
    "soto betawi",
    "ayam betutu",
  ],
  openGraph: {
    title: "Rumah Rasa — Cita Rasa Nusantara",
    description: restaurant.description,
    url: restaurant.websiteUrl,
    siteName: "Rumah Rasa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumah Rasa — Cita Rasa Nusantara",
    description: restaurant.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF5EC",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  description: restaurant.description,
  url: restaurant.websiteUrl,
  telephone: restaurant.contact.phone,
  email: restaurant.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address.street,
    addressLocality: restaurant.address.city,
    addressRegion: restaurant.address.province,
    postalCode: restaurant.address.postalCode,
    addressCountry: restaurant.address.country,
  },
  servesCuisine: "Indonesian",
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={restaurantJsonLd} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-chili focus:px-4 focus:py-2 focus:font-semibold focus:text-rice"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
