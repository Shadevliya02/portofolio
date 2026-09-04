"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Source of truth is the <html> class set by ThemeScript before hydration,
// so this only ever mirrors it instead of re-deriving from localStorage.
function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.classList.toggle("light", theme === "light");
  window.localStorage.setItem("theme", theme);
  notify();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
