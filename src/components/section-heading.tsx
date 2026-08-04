import { cn } from "@/lib/utils";

/**
 * Section heading with optional Indonesian eyebrow, title, and description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-turmeric">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed text-ink-soft",
            align === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
