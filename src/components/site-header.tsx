"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/visit", label: "Visit Us" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * SiteHeader — sticky, blurred, with mobile hamburger panel.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-rice/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl font-bold text-ink">
            Rumah Rasa
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-turmeric">
            Cita Rasa Nusantara
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active
                    ? "text-chili"
                    : "text-ink-soft hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact#reserve"
            className="rounded-full bg-chili px-5 py-2.5 text-sm font-semibold text-rice transition-colors hover:bg-chili/90"
          >
            Reserve a Table
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile slide-down panel */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-sand bg-rice md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                    active
                      ? "bg-chili/10 text-chili"
                      : "text-ink hover:bg-sand/40",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact#reserve"
              className="mt-2 rounded-full bg-chili px-5 py-3 text-center text-sm font-semibold text-rice transition-colors hover:bg-chili/90"
              onClick={() => setOpen(false)}
            >
              Reserve a Table
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}