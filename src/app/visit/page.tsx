import type { Metadata } from "next";
import { MapPin, Clock, Car, Train, Bike } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "@/components/section-heading";
import { HoursList } from "@/components/hours-list";

export const metadata: Metadata = {
  title: "Visit Us",
  description:
    "Find Rumah Rasa on Jl. Senopati in Jakarta Selatan — opening hours, directions, and parking information.",
};

const gettingHere = [
  {
    icon: Car,
    title: "Parking valet",
    description:
      "Complimentary valet parking every evening from 17:00. Street parking is available during the day.",
  },
  {
    icon: Train,
    title: "5 min from Blok M MRT",
    description:
      "Take the MRT to Blok M BCA station. Exit via Senopati and it's a short walk or a 2-minute ojek ride.",
  },
  {
    icon: Bike,
    title: "Ojek / Gojek drop-off",
    description:
      "Set your destination to 'Rumah Rasa Senopati' in Gojek or Grab. Our entrance is right on Jl. Senopati.",
  },
];

export default function VisitPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kunjungi Kami"
          title="Visit us"
          description="We're in the heart of Senopati, easy to reach from anywhere in Jakarta."
        />

        {/* Address card + map */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-sand bg-cream-deep p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                <MapPin className="h-5 w-5 text-turmeric" aria-hidden="true" />
                Address
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                {restaurant.address.full}
              </p>
              <a
                href={restaurant.mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-chili px-5 py-2.5 text-sm font-semibold text-rice transition-colors hover:bg-chili/90"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>

            <div className="rounded-2xl border border-sand bg-cream-deep p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
                <Clock className="h-5 w-5 text-turmeric" aria-hidden="true" />
                Opening hours
              </h3>
              <div className="mt-4">
                <HoursList />
              </div>
            </div>
          </div>

          {/* Map iframe */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-sand">
            <iframe
              src={restaurant.mapsEmbedUrl}
              title="Map to Rumah Rasa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Getting here */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-ink">
            Getting here
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {gettingHere.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-2xl border border-sand bg-cream-deep p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-turmeric/10 text-turmeric">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-ink">{item.title}</h4>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}