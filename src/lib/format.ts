/**
 * Format a price in IDR using Indonesian locale conventions.
 * e.g. 95000 -> "Rp 95.000"
 */
export function formatIDR(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}
