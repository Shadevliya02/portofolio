import type { ComponentType } from "react";
import { isTodo } from "@/lib/utils";

export function SocialIconLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}) {
  if (isTodo(href)) {
    return (
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-border text-ink-muted/50"
        title={`${label}: ${href.replace(/^TODO:\s*/, "")}`}
        aria-hidden="true"
      >
        <Icon className="h-4 w-4" aria-hidden />
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      <Icon className="h-4 w-4" aria-hidden />
    </a>
  );
}
