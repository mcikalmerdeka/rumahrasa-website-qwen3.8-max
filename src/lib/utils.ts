/**
 * Join class names, filtering out falsy values.
 * A lightweight alternative to clsx — no dependencies.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
