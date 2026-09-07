"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screenshot } from "@/content/types";

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
  useEffect(() => {
    if (index === null) return;

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
  }, [index, onClose, onNavigate]);

  if (index === null) return null;
  const active = photos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={active.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-lg ring-1 ring-white/20 transition-colors hover:bg-black"
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
            className="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg ring-1 ring-white/20 transition-colors hover:bg-black"
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
            className="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg ring-1 ring-white/20 transition-colors hover:bg-black"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </>
      ) : null}

      <div
        className="flex max-h-[85vh] max-w-[92vw] flex-col items-center sm:max-w-[85vw]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Plain <img>: photos here mix portrait and landscape, and next/image needs a
            fixed width/height hint that would misreport the box for whichever don't match. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={active.src}
          alt={active.alt}
          className="max-h-[85vh] max-w-full rounded-lg object-contain"
        />
        {active.caption ? (
          <p className="mt-3 max-w-full text-center text-sm text-white/80">{active.caption}</p>
        ) : null}
      </div>
    </div>
  );
}
