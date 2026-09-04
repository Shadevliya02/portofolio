import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "neutral",
  className,
}: {
  children: ReactNode;
  variant?: "neutral" | "accent";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variant === "accent"
          ? "border-transparent bg-accent-soft text-accent-strong"
          : "border-border bg-surface text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
