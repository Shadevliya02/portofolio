"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "scale";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      node.classList.add("is-visible");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);

    // Safety net: content must never stay invisible. Covers screenshot
    // tools, crawlers, and any environment that never dispatches the
    // scroll/resize activity IntersectionObserver relies on.
    const fallback = window.setTimeout(reveal, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(variant === "scale" ? "reveal-scale" : "reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
