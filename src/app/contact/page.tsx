import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { HoursList } from "@/components/hours-list";
import { SocialLinks } from "@/components/social-links";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Get in touch with Rumah Rasa — reserve a table, plan a group event, or ask a question. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hubungi Kami"
          title="Contact & Reservations"
          description="Reserve a table, plan a group event, or just say halo. We'll get back to you quickly."
        />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: contact details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-sand bg-cream-deep p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Reach us directly
              </h3>

              <a
                href={restaurant.contact.phoneHref}
                className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <Phone className="h-5 w-5 shrink-0 text-turmeric" aria-hidden="true" />
                {restaurant.contact.phone}
              </a>

              <a
                href={restaurant.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-rice transition-colors hover:bg-leaf/90"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>

              <a
                href={restaurant.contact.emailHref}
                className="flex items-center gap-3 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                <Mail className="h-5 w-5 shrink-0 text-turmeric" aria-hidden="true" />
                {restaurant.contact.email}
              </a>

              <p className="flex items-start gap-3 text-sm text-ink-soft">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-turmeric" aria-hidden="true" />
                {restaurant.address.full}
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-sand bg-cream-deep p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                <Clock className="h-5 w-5 text-turmeric" aria-hidden="true" />
                Opening hours
              </h3>
              <HoursList compact />
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-sand bg-cream-deep p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                Follow us
              </h3>
              <SocialLinks />
            </div>
          </div>

          {/* Right: contact form */}
          <div
            id="reserve"
            className="rounded-2xl border border-sand bg-cream-deep p-6 sm:p-8"
          >
            <h3 className="mb-6 font-display text-xl font-semibold text-ink">
              Send us a request
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}