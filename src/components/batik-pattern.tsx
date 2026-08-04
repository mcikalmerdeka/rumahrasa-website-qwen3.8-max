import { cn } from "@/lib/utils";

/**
 * Reusable inline SVG batik pattern overlay.
 * Two variants inspired by traditional Indonesian batik motifs:
 * - "parang": diagonal blade-like repeating shapes
 * - "kawung": circular four-petal geometric arrangement
 *
 * Rendered at low opacity as section textures or decorative dividers.
 */
export function BatikPattern({
  variant = "parang",
  className,
}: {
  variant?: "parang" | "kawung";
  className?: string;
}) {
  if (variant === "kawung") {
    return (
      <svg
        className={cn("h-full w-full", className)}
        aria-hidden="true"
        viewBox="0 0 120 120"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <pattern
            id="batik-kawung"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Four-petal kawung shapes around each intersection */}
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              {/* Top-left petal cluster */}
              <ellipse cx="0" cy="0" rx="14" ry="9" transform="rotate(45 0 0)" />
              <ellipse cx="0" cy="0" rx="14" ry="9" transform="rotate(-45 0 0)" />
              {/* Top-right */}
              <ellipse cx="60" cy="0" rx="14" ry="9" transform="rotate(45 60 0)" />
              <ellipse cx="60" cy="0" rx="14" ry="9" transform="rotate(-45 60 0)" />
              {/* Bottom-left */}
              <ellipse cx="0" cy="60" rx="14" ry="9" transform="rotate(45 0 60)" />
              <ellipse cx="0" cy="60" rx="14" ry="9" transform="rotate(-45 0 60)" />
              {/* Bottom-right */}
              <ellipse cx="60" cy="60" rx="14" ry="9" transform="rotate(45 60 60)" />
              <ellipse cx="60" cy="60" rx="14" ry="9" transform="rotate(-45 60 60)" />
              {/* Center small circles */}
              <circle cx="30" cy="30" r="3" />
              <circle cx="30" cy="30" r="7" fill="currentColor" opacity="0.08" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#batik-kawung)" />
      </svg>
    );
  }

  // parang variant — diagonal blade shapes
  return (
    <svg
      className={cn("h-full w-full", className)}
      aria-hidden="true"
      viewBox="0 0 120 120"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <pattern
          id="batik-parang"
          x="0"
          y="0"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Parang blade shape */}
            <path d="M 0 8 C 8 8, 16 16, 24 16 C 32 16, 40 8, 48 8" />
            <path d="M 0 16 C 8 16, 16 24, 24 24 C 32 24, 40 16, 48 16" />
            <path d="M 0 24 C 8 24, 16 32, 24 32 C 32 32, 40 24, 48 24" />
            <path d="M 0 32 C 8 32, 16 40, 24 40 C 32 40, 40 32, 48 32" />
            <path d="M 0 40 C 8 40, 16 48, 24 48 C 32 48, 40 40, 48 40" />
            {/* Inner accent lines */}
            <path d="M 4 12 C 10 12, 18 20, 24 20 C 30 20, 38 12, 44 12" strokeWidth="0.8" opacity="0.5" />
            <path d="M 4 28 C 10 28, 18 36, 24 36 C 30 36, 38 28, 44 28" strokeWidth="0.8" opacity="0.5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#batik-parang)" />
    </svg>
  );
}
