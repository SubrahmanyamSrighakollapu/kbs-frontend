"use client";

import React from "react";
import Image from "next/image";
import { partnerBrands } from "@/data/home";

export default function TrustedBrands() {
  // Multiply array for seamless infinite looping scroll ticker
  const tickerItems = [...partnerBrands, ...partnerBrands, ...partnerBrands, ...partnerBrands];

  return (
    <section className="bg-white py-12 sm:py-16 border-t border-b border-[#0F2346]/10 overflow-hidden select-none">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow */}
        <h3 className="text-center text-xs sm:text-sm font-extrabold tracking-widest text-[#5B6475] uppercase mb-8 sm:mb-12">
          TRUSTED BY FORWARD-THINKING ORGANIZATIONS
        </h3>

        {/* Auto-Scrolling Infinite Logo Ticker with Gradient Fading Edge Masks */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex items-center space-x-8 sm:space-x-12 md:space-x-16 animate-marquee w-max py-2 hover:[animation-play-state:paused]">
            {tickerItems.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="group flex items-center space-x-3.5 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#168BFF]/40 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer shrink-0"
              >
                <div className="relative h-12 sm:h-14 w-auto min-w-[50px] flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={220}
                    height={80}
                    className={
                      brand.logoClass
                        ? `w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105 ${brand.logoClass}`
                        : "h-8 sm:h-9 w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#111827] group-hover:text-[#168BFF] transition-colors whitespace-nowrap">
                    {brand.name}
                  </span>
                  {brand.tagline && (
                    <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap">
                      {brand.tagline}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
