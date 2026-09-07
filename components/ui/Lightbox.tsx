"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screenshot } from "@/content/types";
import { cn } from "@/lib/utils";

const CLOSE_ANIMATION_MS = 200;

export function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: Screenshot[];
  index: number | null;
  onClose: () => void;
  onNavigate: (delta: 1 | -1) => void;
}) {
  const [renderedIndex, setRenderedIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const wasOpen = useRef(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Mirror the incoming index into local state during render (no effect needed) so
  // the displayed photo swaps immediately on open/navigate, while `visible` below
  // still controls the fade — see the close-timeout effect for the closing half.
  if (index !== null && index !== renderedIndex) {
    setRenderedIndex(index);
  }

  useEffect(() => {
    if (index !== null) {
      clearTimeout(closeTimeout.current);
      if (!wasOpen.current) {
        // Opening: mount hidden first, then flip to visible so the CSS transition runs.
        requestAnimationFrame(() => setVisible(true));
      }
      wasOpen.current = true;
    } else if (wasOpen.current) {
      wasOpen.current = false;
      setVisible(false);
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      closeTimeout.current = setTimeout(
        () => setRenderedIndex(null),
        reduceMotion ? 0 : CLOSE_ANIMATION_MS,
      );
    }
    return () => clearTimeout(closeTimeout.current);
  }, [index]);

  useEffect(() => {
    if (renderedIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate(1);
      if (event.key === "ArrowLeft") onNavigate(-1);
    }

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [renderedIndex, onClose, onNavigate]);

  if (renderedIndex === null) return null;
  const active = photos[renderedIndex];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={active.alt}
      className={cn("lightbox-backdrop", visible && "is-visible")}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      {photos.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate(-1);
            }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate(1);
            }}
            aria-label="Next"
            className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </>
      ) : null}

      <div
        className={cn("lightbox-panel max-h-[85vh] max-w-4xl", visible && "is-visible")}
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={active.src}
          alt={active.alt}
          width={1600}
          height={1000}
          loading="eager"
          sizes="(min-width: 1024px) 896px, 90vw"
          className="max-h-[85vh] w-auto rounded-lg object-contain"
        />
        {active.caption ? (
          <p className="mt-3 text-center text-sm text-white/80">{active.caption}</p>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
