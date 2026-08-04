import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Leaf, ArrowRight } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { signatureDishes } from "@/data/menu";
import { BatikPattern } from "@/components/batik-pattern";
import { SectionHeading } from "@/components/section-heading";
import { FoodTile } from "@/components/food-tile";
import { HoursList } from "@/components/hours-list";

export const metadata: Metadata = {
  description: restaurant.description,
};

// NOTE: These testimonials are placeholders for the owner to replace with real customer quotes.
const testimonials = [
  {
    quote:
      "The rendang here is the best I've had outside of Padang. Eight hours of braising and you can taste every minute of it.",
    name: "Andi Pratama",
    city: "Jakarta",
  },
  {
    quote:
      "Their nasi goreng kampung tastes exactly like my grandmother's. The sambal terasi is dangerously good.",
    name: "Sari Wulandari",
    city: "Bandung",
  },
  {
    quote:
      "We celebrated my father's 70th birthday here. The staff treated us like family — that's rare in Jakarta.",
    name: "Michael Tan",
    city: "Singapore",
  },
];

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[88svh] overflow-hidden bg-ink">
        {/* Radial glows */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(166,58,43,0.35) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(201,138,45,0.25) 0%, transparent 50%)",
          }}
        />
        {/* Batik overlay */}
        <div className="absolute inset-0 text-rice/[0.08]">
          <BatikPattern variant="kawung" className="h-full w-full" />
        </div>
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(38,25,15,0.5) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-turmeric">
            Selamat Datang &middot; Est. 2008
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-rice sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            The taste of home, from every island of Indonesia.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-rice/70">
            {restaurant.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className="rounded-full bg-chili px-6 py-3 font-semibold text-rice transition-colors hover:bg-chili/90"
            >
              Explore the Menu
            </Link>
            <Link
              href="/contact#reserve"
              className="rounded-full border border-rice/30 px-6 py-3 font-semibold text-rice transition-colors hover:border-rice hover:bg-rice/10"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        {/* Info strip */}
        <div className="relative z-10 border-t border-rice/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <Link
              href="/visit"
              className="flex items-center gap-2 text-sm text-rice/60 transition-colors hover:text-rice"
            >
              <Clock className="h-4 w-4 text-turmeric" aria-hidden="true" />
              Open daily &middot; hours vary by day
            </Link>
            <span className="flex items-center gap-2 text-sm text-rice/60">
              <MapPin className="h-4 w-4 text-turmeric" aria-hidden="true" />
              {restaurant.address.street}, {restaurant.address.area}
            </span>
            <span className="flex items-center gap-2 text-sm text-rice/60">
              <Leaf className="h-4 w-4 text-turmeric" aria-hidden="true" />
              100% Halal
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. Signature dishes ────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Rasa Andalan"
            title="Signatures from our kitchen"
            description="Dishes that define who we are — slow-cooked, hand-ground, and made with the patience of three generations."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {signatureDishes.map((dish) => (
              <FoodTile key={dish.id} item={dish} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/menu"
              className="inline-flex items-center gap-1 text-sm font-semibold text-chili transition-all hover:gap-2"
            >
              See the full menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Story teaser ────────────────────────────────── */}
      <section className="bg-cream-deep py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-4">
              <SectionHeading
                eyebrow="Kisah Kami"
                title="Three generations of flavor"
              />
              <p className="text-base leading-relaxed text-ink-soft">
                From a grandmother&apos;s kitchen in Padang to a six-table
                warung in Senopati, our recipes have traveled across three
                generations. Every dish at Rumah Rasa carries the warmth of
                home cooking and the pride of a family legacy.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-semibold text-chili transition-all hover:gap-2"
              >
                Read our story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-ink p-8">
              <div className="absolute inset-0 text-rice/[0.08]">
                <BatikPattern variant="parang" className="h-full w-full" />
              </div>
              <blockquote className="relative z-10 font-display text-2xl font-medium leading-snug text-rice">
                &ldquo;Rasa itu ingatan &mdash; flavor is memory. We cook the
                way Ibu taught us, with patience and love.&rdquo;
              </blockquote>
              <p className="relative z-10 mt-4 text-sm text-turmeric">
                &mdash; Ibu Ratna, founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Visit teaser ────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-sand bg-cream-deep p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <SectionHeading
                  eyebrow="Kunjungi Kami"
                  title="Plan your visit"
                />
                <p className="flex items-start gap-2 text-sm text-ink-soft">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-turmeric"
                    aria-hidden="true"
                  />
                  {restaurant.address.full}
                </p>
                <HoursList compact />
              </div>
              <div className="flex flex-col justify-center gap-3">
                <Link
                  href="/visit"
                  className="rounded-full bg-chili px-6 py-3 text-center font-semibold text-rice transition-colors hover:bg-chili/90"
                >
                  Plan your visit &rarr;
                </Link>
                <a
                  href={restaurant.mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/30 px-6 py-3 text-center font-semibold text-ink transition-colors hover:border-ink hover:bg-ink/5"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Testimonials ────────────────────────────────── */}
      <section className="bg-cream-deep py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kata Mereka"
            title="What our guests say"
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col gap-4 rounded-2xl border border-sand bg-rice p-6"
              >
                <blockquote className="text-base leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-turmeric">{t.city}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Reservation CTA band ────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #A63A2B 0%, #C98A2D 100%)",
          }}
        />
        <div className="absolute inset-0 text-rice/[0.08]">
          <BatikPattern variant="kawung" className="h-full w-full" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-rice sm:text-4xl">
            Meja untuk malam ini?
          </h2>
          <p className="mt-3 text-lg text-rice/80">
            Reserve a table and let us take care of the rest.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact#reserve"
              className="rounded-full bg-rice px-6 py-3 font-semibold text-chili transition-colors hover:bg-rice/90"
            >
              Reserve a Table
            </Link>
            <a
              href={restaurant.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rice/30 px-6 py-3 font-semibold text-rice transition-colors hover:border-rice hover:bg-rice/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}