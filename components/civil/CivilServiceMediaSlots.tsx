"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import type { CivilServiceImage } from "@/data/civil-services";

interface DrawingCarouselSlotProps {
  images?: CivilServiceImage[];
  accent?: string;
}

export function DrawingCarouselSlot({ images = [], accent = "#168BFF" }: DrawingCarouselSlotProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative">
        <div
          role="img"
          aria-label="Reserved area for the future project drawing carousel"
          className="aspect-[16/9] min-h-[260px] rounded-3xl border border-dashed border-slate-300 bg-white"
        >
          <span className="sr-only">Project drawing carousel images will be added after approval.</span>
        </div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 pointer-events-none">
          <span aria-hidden="true" className="w-10 h-10 rounded-full border border-slate-200 bg-white/90 text-slate-300 flex items-center justify-center shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </span>
          <span aria-hidden="true" className="w-10 h-10 rounded-full border border-slate-200 bg-white/90 text-slate-300 flex items-center justify-center shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </span>
        </div>
        <div aria-hidden="true" className="flex items-center justify-center gap-2 mt-4">
          <span className="w-5 h-1.5 rounded-full bg-slate-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        </div>
      </div>
    );
  }

  const activeImage = images[activeIndex];
  const showPrevious = () => setActiveIndex((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % images.length);

  return (
    <div>
      <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] min-h-[280px]">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1380px) 92vw, 1320px"
            className="object-contain p-3 sm:p-6"
          />
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous drawing"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-slate-200 bg-white/95 text-[#111827] flex items-center justify-center shadow-lg hover:bg-[#03142B] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next drawing"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-slate-200 bg-white/95 text-[#111827] flex items-center justify-center shadow-lg hover:bg-[#03142B] hover:text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <figcaption className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-7 py-4 border-t border-slate-200 bg-slate-50">
          <div>
            <span className="block text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
              Drawing {activeIndex + 1} of {images.length}
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#374151]">{activeImage.caption}</span>
          </div>
          <a
            href={activeImage.src}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#168BFF] hover:text-[#03142B] transition-colors shrink-0"
          >
            Open full size <ExternalLink className="w-4 h-4" />
          </a>
        </figcaption>
      </figure>

      <div className="mt-5 overflow-x-auto pb-2" aria-label="Project drawing thumbnails">
        <div className="flex gap-3 min-w-max">
          {images.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show drawing ${index + 1}: ${item.caption}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`relative w-24 sm:w-28 aspect-[4/3] overflow-hidden rounded-xl bg-white border-2 transition-all ${
                index === activeIndex ? "shadow-md" : "border-slate-200 hover:border-slate-400"
              }`}
              style={{ borderColor: index === activeIndex ? accent : undefined }}
            >
              <Image src={item.src} alt="" fill sizes="112px" className="object-contain p-1" />
              <span className="absolute bottom-1 right-1 min-w-5 h-5 px-1 rounded bg-[#03142B]/85 text-white text-[10px] font-bold flex items-center justify-center">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionImageSlot({ label, image }: { label: string; image?: CivilServiceImage }) {
  if (image) {
    return (
      <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[4/3] min-h-[280px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 660px"
            className="object-contain p-4"
          />
        </div>
        <figcaption className="px-5 py-3 border-t border-slate-200 bg-slate-50 text-sm font-semibold text-[#4B5563]">
          {image.caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Reserved area for ${label}`}
      className="aspect-[4/3] min-h-[280px] rounded-3xl border border-dashed border-slate-300 bg-slate-50"
    >
      <span className="sr-only">{label} will be added after approval.</span>
    </div>
  );
}
