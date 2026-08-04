import type { Metadata } from "next";
import { Leaf, Flame } from "lucide-react";
import { menuCategories } from "@/data/menu";
import type { SpiceLevel } from "@/data/menu";
import { SectionHeading } from "@/components/section-heading";
import { MenuItemCard } from "@/components/menu-item-card";
import { SpiceIndicator } from "@/components/spice-indicator";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full Rumah Rasa menu — heirloom Indonesian dishes from starters to drinks, all 100% halal.",
};

const SPICE_LEVELS: SpiceLevel[] = [0, 1, 2, 3];

export default function MenuPage() {
  return (
    <>
      {/* Intro band */}
      <section className="border-b border-sand bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Menu Kami"
            title="The full menu"
            description="Every dish is prepared fresh daily, using recipes passed down through three generations. All dishes are halal."
          />
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-leaf">
              <Leaf className="h-4 w-4" aria-hidden="true" />
              All dishes are halal
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 text-sm font-medium text-ink-soft">
                <Flame className="h-4 w-4 text-chili" aria-hidden="true" />
                Spice legend:
              </span>
              {SPICE_LEVELS.map((level) => (
                <SpiceIndicator key={level} level={level} showLabel />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky category nav */}
      <nav
        className="sticky top-16 z-40 border-b border-sand bg-rice/85 backdrop-blur-md"
        aria-label="Menu categories"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-sand/40 hover:text-ink"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Category sections */}
      {menuCategories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="py-16 even:bg-cream-deep"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={category.labelId}
              title={category.label}
              description={category.description}
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}