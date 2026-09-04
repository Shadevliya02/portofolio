"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import { Lightbox } from "@/components/ui/Lightbox";
import type { Screenshot } from "@/content/types";

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (screenshots.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border py-16 text-center text-ink-muted">
        <ImageOff className="h-6 w-6" aria-hidden="true" />
        <p className="text-sm">Screenshots coming soon.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {screenshots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group overflow-hidden rounded-xl border border-border text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={800}
              height={500}
              loading="eager"
              sizes="(min-width: 640px) 50vw, 100vw"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {shot.caption ? (
              <p className="border-t border-border bg-surface px-3 py-2 text-xs text-ink-muted">
                {shot.caption}
              </p>
            ) : null}
          </button>
        ))}
      </div>

      <Lightbox
        photos={screenshots}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={(delta) =>
          setOpenIndex((i) => (i === null ? i : (i + delta + screenshots.length) % screenshots.length))
        }
      />
    </>
  );
}
