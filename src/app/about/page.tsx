import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, Flame, Users, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { BatikPattern } from "@/components/batik-pattern";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Three generations of Indonesian home cooking — from a grandmother's kitchen in Padang to Rumah Rasa in Jakarta.",
};

const acts = [
  {
    year: "1974",
    title: "A grandmother's kitchen in Padang",
    body: "It starts with Ibu Ratna, who learned to cook from her own mother in a small house near the Bukittinggi market. She ground spices by hand on a batu cobek, slow-cooked rendang for hours over a wood fire, and taught her children that food is an act of love.",
  },
  {
    year: "2008",
    title: "A six-table warung in Senopati",
    body: "Her son Pak Joko opened a tiny warung on Jl. Senopati with six tables, a single charcoal grill, and Ibu Ratna's recipes. Word spread quickly. Within a year, there was a line down the block every Friday night.",
  },
  {
    year: "Today",
    title: "Rumah Rasa",
    body: "Now seating 80 guests, Rumah Rasa still cooks the way Ibu Ratna taught us — rendang braised eight hours, sambal ground fresh every morning, and every guest welcomed like family. The batu cobek sits in our kitchen still.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    name: "Ramah",
    subtitle: "Warmth",
    description:
      "Every guest is family. We greet you at the door, remember your favorite dish, and make sure you leave full and happy.",
  },
  {
    icon: Flame,
    name: "Rempah",
    subtitle: "Spice integrity",
    description:
      "We grind our own spices daily, toast them fresh, and never take shortcuts. The flavor you taste is the flavor Ibu intended.",
  },
  {
    icon: Users,
    name: "Gotong Royong",
    subtitle: "Community",
    description:
      "We source from local markets, hire from our neighborhood, and support the Senopati community that has supported us for years.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero statement */}
      <section className="relative overflow-hidden bg-ink py-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(201,138,45,0.2) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 text-rice/[0.06]">
          <BatikPattern variant="parang" className="h-full w-full" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-turmeric">
            Kisah Kami
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-rice sm:text-5xl lg:text-6xl">
            A family kitchen, three generations deep.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-rice/70">
            From Padang to Jakarta, from a wood fire to a professional kitchen
            &mdash; the recipes haven&apos;t changed. Only the room got bigger.
          </p>
        </div>
      </section>

      {/* Three-act narrative */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {acts.map((act, i) => (
              <div key={act.year} className="flex flex-col gap-3">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl font-bold text-turmeric sm:text-6xl">
                    {act.year}
                  </span>
                  <span
                    className="h-px flex-1 bg-sand"
                    aria-hidden="true"
                    style={{ alignSelf: "center" }}
                  />
                  {i < acts.length - 1 && (
                    <span className="text-sm text-ink-soft">continued</span>
                  )}
                </div>
                <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {act.title}
                </h2>
                <p className="text-base leading-relaxed text-ink-soft">
                  {act.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-cream-deep py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nilai Kami"
            title="What we stand for"
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-sand bg-rice p-6 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-turmeric/10 text-turmeric">
                  <value.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {value.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-turmeric">
                  {value.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            &ldquo;Saya masak untuk tamu seperti masak untuk keluarga saya
            sendiri. Tidak ada perbedaan.&rdquo;
          </blockquote>
          <p className="mt-4 text-center text-sm text-turmeric">
            &mdash; Ibu Ratna, founder
          </p>
          <p className="mt-2 text-center text-sm text-ink-soft">
            &ldquo;I cook for guests the same way I cook for my own family.
            There is no difference.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-chili px-6 py-3 font-semibold text-rice transition-colors hover:bg-chili/90"
          >
            Explore the menu
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}