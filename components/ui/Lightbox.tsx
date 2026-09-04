"use client";

import { useEffect } from "react";
import Image from "next/image";
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

      <div className="max-h-[85vh] max-w-4xl" onClick={(event) => event.stopPropagation()}>
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
    </div>
  );
}
