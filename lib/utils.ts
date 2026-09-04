export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Content that still needs to be filled in is written as `TODO: ...` — see TODO.md. */
export function isTodo(value: string | undefined): boolean {
  return !value || value.trim().toUpperCase().startsWith("TODO");
}

/** Shared pill-button styling for both <a> and <button> call sites. */
export function buttonClass(variant: "primary" | "secondary" = "primary"): string {
  if (variant === "primary") {
    return "inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-accent";
  }
  return "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-card";
}
