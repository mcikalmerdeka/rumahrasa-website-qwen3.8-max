import Link from "next/link";
import { MapPin, Phone, Mail, Leaf } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { SocialLinks } from "@/components/social-links";
import { HoursList } from "@/components/hours-list";

/**
 * SiteFooter — server component. Dark ink background, four columns.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-rice">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand blurb */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl font-bold text-rice">
                Rumah Rasa
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-turmeric">
                Cita Rasa Nusantara
              </span>
            </div>
            <p className="text-sm leading-relaxed text-rice/70">
              {restaurant.description}
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-leaf">
              <Leaf className="h-3.5 w-3.5" aria-hidden="true" />
              100% Halal
            </span>
          </div>

          {/* Explore links */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric">
              Explore
            </h3>
            <Link href="/menu" className="text-sm text-rice/70 transition-colors hover:text-rice">
              Menu
            </Link>
            <Link href="/about" className="text-sm text-rice/70 transition-colors hover:text-rice">
              Our Story
            </Link>
            <Link href="/visit" className="text-sm text-rice/70 transition-colors hover:text-rice">
              Visit Us
            </Link>
            <Link href="/contact" className="text-sm text-rice/70 transition-colors hover:text-rice">
              Contact
            </Link>
          </div>

          {/* Visit — address + condensed hours */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric">
              Visit
            </h3>
            <p className="flex items-start gap-2 text-sm text-rice/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turmeric" aria-hidden="true" />
              <span>
                {restaurant.address.street}
                <br />
                {restaurant.address.area}, {restaurant.address.city}
                <br />
                {restaurant.address.postalCode}
              </span>
            </p>
            <div className="mt-1">
              <HoursList compact />
            </div>
          </div>

          {/* Contact + socials */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-turmeric">
              Contact
            </h3>
            <a
              href={restaurant.contact.phoneHref}
              className="flex items-center gap-2 text-sm text-rice/70 transition-colors hover:text-rice"
            >
              <Phone className="h-4 w-4 shrink-0 text-turmeric" aria-hidden="true" />
              {restaurant.contact.phone}
            </a>
            <a
              href={restaurant.contact.emailHref}
              className="flex items-center gap-2 text-sm text-rice/70 transition-colors hover:text-rice"
            >
              <Mail className="h-4 w-4 shrink-0 text-turmeric" aria-hidden="true" />
              {restaurant.contact.email}
            </a>
            <div className="mt-2">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-rice/10 pt-6 sm:flex-row">
          <p className="text-xs text-rice/50">
            &copy; {year} Rumah Rasa. All rights reserved.
          </p>
          <p className="text-xs text-rice/50">
            {restaurant.tagline} — {restaurant.taglineEn}
          </p>
        </div>
      </div>
    </footer>
  );
}