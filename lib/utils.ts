export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Content that still needs to be filled in is written as `TODO: ...` — see TODO.md. */
export function isTodo(value: string | undefined): boolean {
  return !value || value.trim().toUpperCase().startsWith("TODO");
}
