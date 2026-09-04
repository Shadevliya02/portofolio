"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-6 sm:px-8">
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-ink hover:text-accent"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border bg-bg transition-[max-height] duration-300 ease-in-out md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-base font-medium text-ink-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
