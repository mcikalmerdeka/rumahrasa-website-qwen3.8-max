import { SpiceIndicator } from "@/components/spice-indicator";
import { formatIDR } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { MenuItem, MenuTag } from "@/data/menu";

const TAG_STYLES: Record<MenuTag, string> = {
  vegetarian: "bg-leaf/10 text-leaf border-leaf/20",
  "gluten-free": "bg-turmeric/10 text-turmeric border-turmeric/20",
  seafood: "bg-ink-soft/10 text-ink-soft border-ink-soft/20",
  "chef's pick": "bg-chili/10 text-chili border-chili/20",
  "best seller": "border-turmeric/40 text-turmeric bg-transparent",
};

const TAG_LABELS: Record<MenuTag, string> = {
  vegetarian: "Vegetarian",
  "gluten-free": "Gluten-Free",
  seafood: "Seafood",
  "chef's pick": "Chef's Pick",
  "best seller": "Best Seller",
};

/**
 * MenuItemCard — server component for a single dish on the menu page.
 */
export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-sand bg-cream-deep p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-16px_rgba(38,25,15,0.2)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <h3 className="font-display text-lg font-semibold text-ink">
            {item.name}
          </h3>
          {item.origin && (
            <span className="text-xs font-medium uppercase tracking-wide text-turmeric">
              {item.origin}
            </span>
          )}
        </div>
        <span className="whitespace-nowrap font-semibold text-chili">
          {formatIDR(item.price)}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-ink-soft">
        {item.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
        <SpiceIndicator level={item.spice} showLabel />
        {item.signature && (
          <span className="rounded-full bg-chili px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rice">
            Signature
          </span>
        )}
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
              TAG_STYLES[tag],
            )}
          >
            {TAG_LABELS[tag]}
          </span>
        ))}
      </div>
    </article>
  );
}