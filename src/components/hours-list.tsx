import { Clock } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

/**
 * Renders the restaurant's opening hours.
 * `compact` variant for footer/contact sidebars.
 */
export function HoursList({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("flex flex-col", compact ? "gap-1.5" : "gap-3")}>
      {restaurant.hours.map((row) => (
        <div
          key={row.days}
          className={cn(
            "flex items-baseline justify-between gap-4",
            compact ? "text-sm" : "text-base",
          )}
        >
          <span className="flex items-center gap-2 font-medium text-ink">
            {!compact && (
              <Clock className="h-4 w-4 text-turmeric" aria-hidden="true" />
            )}
            {row.days}
          </span>
          <span className="text-ink-soft">
            {row.open} – {row.close}
          </span>
        </div>
      ))}
    </div>
  );
}