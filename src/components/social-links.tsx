import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";

/**
 * Inline SVG brand glyphs for social media.
 * lucide-react does not ship brand icons, so we draw our own.
 */

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.14-5.91 3.18-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.66-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.49-1.29 3.5-1.91 5.46-1.64.02 1.48-.04 2.96-.04 4.44-.69-.22-1.5-.2-2.14.16-.71.37-1.23 1.04-1.38 1.83-.1.6-.06 1.17.02 1.77.2 1.18 1.26 2.16 2.44 2.27 1.18.11 2.36-.58 2.8-1.66.15-.36.23-.75.24-1.14.06-2.03.03-4.06.04-6.09.01-3.59-.01-7.18.02-10.77z" />
    </svg>
  );
}

const GLYPHS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  instagram: InstagramGlyph,
  facebook: FacebookGlyph,
  tiktok: TikTokGlyph,
};

/**
 * SocialLinks — renders inline SVG brand glyphs for each social.
 */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Social media" className={cn("flex items-center gap-3", className)}>
      {restaurant.socials.map((social) => {
        const Glyph = GLYPHS[social.id];
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} — ${social.handle}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sand text-ink-soft transition-colors hover:border-turmeric hover:text-turmeric"
          >
            {Glyph && <Glyph className="h-4 w-4" />}
          </a>
        );
      })}
    </nav>
  );
}