"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";
import type { Screenshot } from "@/content/types";

export function PhotoStrip({ photos }: { photos: Screenshot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (photos.length === 0) return null;

  return (
    <>
      <div className="mt-3 flex flex-wrap gap-2">
        {photos.map((photo, index) => (
          <button
            key={photo.src + index}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-border transition-shadow duration-300 hover:shadow-md sm:h-16 sm:w-16"
          >
            <Image src={photo.src} alt={photo.alt} width={128} height={128} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      <Lightbox
        photos={photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={(delta) =>
          setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length))
        }
      />
    </>
  );
}
