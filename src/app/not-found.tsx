import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for isn't here.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60svh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-turmeric">
        404
      </span>
      <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
        Wah — this plate is empty.
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        The page you were looking for has been eaten. Let us guide you back to
        something delicious.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-chili px-6 py-3 font-semibold text-rice transition-colors hover:bg-chili/90"
        >
          Back home
        </Link>
        <Link
          href="/menu"
          className="rounded-full border border-ink/30 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink hover:bg-ink/5"
        >
          See the menu
        </Link>
      </div>
    </div>
  );
}
