import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SpiceLevel } from "@/data/menu";

const SPICE_LABELS: Record<SpiceLevel, string> = {
  0: "Not spicy",
  1: "Mild",
  2: "Medium",
  3: "Fiery",
};

/**
 * Shows 0–3 flame icons indicating spice level.
 * Filled chili icons for the level, muted for the remainder.
 */
export function SpiceIndicator({
  level,
  showLabel = false,
}: {
  level: SpiceLevel;
  showLabel?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5"
      aria-label={`Spice level: ${SPICE_LABELS[level]}`}
      role="img"
    >
      <span className="inline-flex items-center gap-0.5">
        {[0, 1, 2].map((i) => (
          <Flame
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              i < level
                ? "fill-chili text-chili"
                : "fill-sand text-sand",
            )}
            aria-hidden="true"
          />
        ))}
      </span>
      {showLabel && (
        <span className="text-xs font-medium text-ink-soft">
          {SPICE_LABELS[level]}
        </span>
      )}
    </span>
  );
}
