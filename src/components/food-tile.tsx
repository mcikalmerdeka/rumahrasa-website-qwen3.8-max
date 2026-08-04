import Link from "next/link";
import { BatikPattern } from "@/components/batik-pattern";
import { formatIDR } from "@/lib/format";
import type { MenuItem } from "@/data/menu";

/**
 * Map dish IDs to emoji glyphs for the food medallion.
 * Emoji ONLY appears here — nowhere else in the site.
 */
const DISH_EMOJI: Record<string, string> = {
  "gado-gado": "\u{1F957}", // salad
  "sate-ayam": "\u{1F357}", // meat on bone
  "perkedel-jagung": "\u{1F33D}", // corn
  "lumpia-semarang": "\u{1F959}", // burrito-ish
  "otak-otak": "\u{1F41F}", // fish
  rendang: "\u{1F35C}", // curry rice
  "nasi-goreng-kampung": "\u{1F35A}", // cooked rice
  "ayam-betutu": "\u{1F357}", // poultry
  "ikan-bakar": "\u{1F41F}", // fish
  "soto-betawi": "\u{1F372}", // pot of food
  "gudeg-jogja": "\u{1F35C}", // curry rice
  "sayur-lodeh": "\u{1F35D}", // spaghetti-ish (bowl)
  "es-cendol": "\u{1F367}", // shaved ice
  "klepon-getuk": "\u{1F36C}", // chocolate bar
  "pisang-goreng": "\u{1F34C}", // banana
  "es-teler": "\u{1F967}", // coconut
  "teh-melati": "\u{1F375}", // teacup
  "kopi-tubruk": "\u{2615}", // coffee
  "es-jeruk-kelapa": "\u{1F349}", // melon-ish
  "wedang-jahe": "\u{2618}\u{FE0F}", // shamrock/herb
  "jamu-kunyit-asam": "\u{1F33F}", // herb
};

/**
 * Per-dish gradient palettes drawn from turmeric/chili/leaf.
 * Each entry is a CSS background value.
 */
const DISH_GRADIENTS: Record<string, string> = {
  "gado-gado":
    "linear-gradient(135deg, #41694F 0%, #5a8a64 40%, #7ba88e 100%)",
  "sate-ayam":
    "linear-gradient(135deg, #C98A2D 0%, #d9a04a 40%, #e8b96a 100%)",
  "perkedel-jagung":
    "linear-gradient(135deg, #C98A2D 0%, #e0a040 50%, #f0c070 100%)",
  "lumpia-semarang":
    "linear-gradient(135deg, #A63A2B 0%, #c45a4a 40%, #d8786a 100%)",
  "otak-otak":
    "linear-gradient(135deg, #41694F 0%, #5a8a64 40%, #7ba88e 100%)",
  rendang:
    "linear-gradient(135deg, #26190F 0%, #4a2a18 30%, #A63A2B 100%)",
  "nasi-goreng-kampung":
    "linear-gradient(135deg, #A63A2B 0%, #c45a4a 40%, #C98A2D 100%)",
  "ayam-betutu":
    "linear-gradient(135deg, #41694F 0%, #5a8a64 30%, #C98A2D 100%)",
  "ikan-bakar":
    "linear-gradient(135deg, #41694F 0%, #3a5a44 40%, #2a4a36 100%)",
  "soto-betawi":
    "linear-gradient(135deg, #C98A2D 0%, #d9a04a 40%, #A63A2B 100%)",
  "gudeg-jogja":
    "linear-gradient(135deg, #8B5A2B 0%, #a06a35 40%, #C98A2D 100%)",
  "sayur-lodeh":
    "linear-gradient(135deg, #41694F 0%, #5a8a64 40%, #7ba88e 100%)",
  "es-cendol":
    "linear-gradient(135deg, #41694F 0%, #7ba88e 50%, #C8E6C9 100%)",
  "klepon-getuk":
    "linear-gradient(135deg, #8B5A2B 0%, #C98A2D 50%, #e0a040 100%)",
  "pisang-goreng":
    "linear-gradient(135deg, #C98A2D 0%, #e0a040 40%, #f0c070 100%)",
  "es-teler":
    "linear-gradient(135deg, #41694F 0%, #7ba88e 50%, #C8E6C9 100%)",
  "teh-melati":
    "linear-gradient(135deg, #41694F 0%, #5a8a64 50%, #7ba88e 100%)",
  "kopi-tubruk":
    "linear-gradient(135deg, #26190F 0%, #4a2a18 50%, #6b3e26 100%)",
  "es-jeruk-kelapa":
    "linear-gradient(135deg, #41694F 0%, #7ba88e 50%, #C8E6C9 100%)",
  "wedang-jahe":
    "linear-gradient(135deg, #C98A2D 0%, #d9a04a 40%, #e8b96a 100%)",
  "jamu-kunyit-asam":
    "linear-gradient(135deg, #C98A2D 0%, #e0a040 50%, #f0c070 100%)",
};

/**
 * FoodTile — visual representation of a signature dish.
 * Layered CSS gradients + batik overlay + emoji medallion.
 * The whole tile links to /menu.
 */
export function FoodTile({ item }: { item: MenuItem }) {
  const emoji = DISH_EMOJI[item.id] ?? "\u{1F374}";
  const gradient = DISH_GRADIENTS[item.id] ??
    "linear-gradient(135deg, #C98A2D 0%, #A63A2B 100%)";

  return (
    <Link
      href="/menu"
      className="group relative block overflow-hidden rounded-2xl border border-sand transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(38,25,15,0.25)]"
    >
      {/* Gradient base */}
      <div
        className="aspect-[4/5] w-full"
        style={{ background: gradient }}
      >
        {/* Batik overlay */}
        <div className="relative h-full w-full text-rice/20">
          <BatikPattern variant="kawung" className="absolute inset-0 opacity-30" />

          {/* Emoji medallion */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cream-deep/90 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)] ring-1 ring-rice/40 transition-transform duration-300 group-hover:scale-110 sm:h-28 sm:w-28">
              <span className="text-5xl sm:text-6xl" role="img" aria-label={item.name}>
                {emoji}
              </span>
            </div>
          </div>

          {/* Bottom scrim with name + price */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 pb-4 pt-12">
            <p className="font-display text-lg font-semibold text-rice">
              {item.name}
            </p>
            <p className="text-sm font-semibold text-turmeric">
              {formatIDR(item.price)}
            </p>
          </div>

          {/* Signature badge */}
          {item.signature && (
            <span className="absolute right-3 top-3 rounded-full bg-chili px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-rice shadow-sm">
              Signature
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}