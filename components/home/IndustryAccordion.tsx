"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data/home";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function IndustryAccordion() {
  // Default active index: Consulting (index 3)
  const [activeIndex, setActiveIndex] = useState<number>(3);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-2">
            EXPANDING CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            End-to-End Solutions Across Key Sectors
          </h2>
        </div>

        {/* Accordion Container with Side Nav Controls */}
        <div className="relative flex items-center gap-3 sm:gap-4">
          {/* Left Nav Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous capability"
            className="hidden lg:flex shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#168BFF] to-[#6657FF] text-white items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* DESKTOP/TABLET: 7-Panel Interactive Expanding Accordion */}
          <div className="hidden md:flex h-[480px] lg:h-[520px] gap-3 lg:gap-4 items-stretch justify-center w-full">
            {industries.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-between p-6 sm:p-8 select-none border ${
                    isActive
                      ? "flex-[3.5] bg-gradient-to-br from-[#F3F6FF] via-[#EBF0FF] to-[#F8FAFF] border-[#6657FF]/40 shadow-xl"
                      : "flex-1 min-w-[60px] lg:min-w-[72px] bg-[#F8FAFF] hover:bg-[#EEF2FF] border-[#0F2346]/10 hover:border-[#6657FF]/30"
                  }`}
                >
                  {/* Subtle Background Pattern for Active Card */}
                  {isActive && (
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
                      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#168BFF] to-[#A52BFF] blur-3xl" />
                      <Image
                        src={item.image}
                        alt={item.category}
                        fill
                        className="object-cover object-center opacity-10 mix-blend-multiply"
                      />
                    </div>
                  )}

                  {/* ACTIVE CARD CONTENT */}
                  {isActive ? (
                    <div className="relative z-10 h-full flex flex-col justify-between text-[#111827] animate-fade-in">
                      {/* Top Tag */}
                      <div className="inline-self-start">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#6657FF] bg-[#6657FF]/10 px-3.5 py-1.5 rounded-full border border-[#6657FF]/20 flex items-center gap-1.5 w-max">
                          <Sparkles className="w-3.5 h-3.5" />
                          {item.category}
                        </span>
                      </div>

                      {/* Bottom Details */}
                      <div className="mt-auto max-w-xl">
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight mb-4">
                          {item.title}
                        </h3>
                        <p className="text-sm lg:text-base text-[#5B6475] leading-relaxed font-normal mb-6">
                          {item.description}
                        </p>
                        <Link
                          href={item.link}
                          className="inline-flex items-center text-sm lg:text-base font-semibold text-[#168BFF] hover:text-[#6657FF] transition-colors group/link"
                        >
                          <span>Explore More</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    /* COLLAPSED CARD CONTENT (Vertical Orientation) */
                    <div className="relative z-10 h-full flex flex-col justify-end items-center pb-4 text-[#111827]">
                      <span className="writing-mode-vertical text-sm lg:text-base font-bold uppercase tracking-widest text-[#5B6475] hover:text-[#111827] whitespace-nowrap">
                        {item.category}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Nav Button */}
          <button
            onClick={handleNext}
            aria-label="Next capability"
            className="hidden lg:flex shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#6657FF] to-[#A52BFF] text-white items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* MOBILE CAROUSEL (< 768px) */}
        <div className="md:hidden">
          <div className="relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-between p-6 bg-gradient-to-br from-[#F3F6FF] to-[#F8FAFF] border border-[#6657FF]/30 shadow-lg">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#6657FF] bg-[#6657FF]/10 px-3 py-1 rounded-full border border-[#6657FF]/20">
                {industries[activeIndex].category}
              </span>
            </div>

            <div className="relative z-10 mt-auto text-[#111827]">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
                {industries[activeIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed font-normal mb-5">
                {industries[activeIndex].description}
              </p>
              <Link
                href={industries[activeIndex].link}
                className="inline-flex items-center text-sm font-semibold text-[#168BFF]"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Mobile Controls & Dots */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="p-2.5 rounded-full bg-slate-100 text-slate-800"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center space-x-2">
              {industries.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-gradient-to-r from-[#168BFF] to-[#6657FF]"
                      : "w-2.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="p-2.5 rounded-full bg-slate-100 text-slate-800"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

