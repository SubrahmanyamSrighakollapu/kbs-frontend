"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data/home";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function IndustryAccordion() {
  // Default active index: Consulting (index 3)
  const [activeIndex, setActiveIndex] = useState<number>(3);

  const handlePrevMobile = () => {
    setActiveIndex((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
  };

  const handleNextMobile = () => {
    setActiveIndex((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#E52B2F] tracking-widest uppercase block mb-2">
            EXPANDING CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            End-to-End Solutions Across Key Sectors
          </h2>
        </div>

        {/* DESKTOP/TABLET: 7-Panel Interactive Expanding Accordion */}
        <div className="hidden md:flex h-[480px] lg:h-[540px] xl:h-[580px] gap-3 lg:gap-4 items-stretch justify-center w-full">
          {industries.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-between p-6 select-none group border border-slate-100 shadow-md ${
                  isActive
                    ? "flex-[3.5] bg-slate-900 shadow-xl border-slate-800"
                    : "flex-1 min-w-[64px] lg:min-w-[76px] bg-slate-950 hover:flex-[1.2]"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  className={`object-cover object-center transition-transform duration-700 ease-out ${
                    isActive ? "scale-105" : "group-hover:scale-110 opacity-70"
                  }`}
                />

                {/* Dark Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-slate-950 via-slate-950/75 via-60% to-slate-950/40"
                      : "bg-slate-950/75 group-hover:bg-slate-950/60"
                  }`}
                />

                {/* ACTIVE CARD CONTENT */}
                {isActive ? (
                  <div className="relative z-10 h-full flex flex-col justify-between text-white animate-fade-in">
                    {/* Top Tag */}
                    <div className="inline-self-start">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#E52B2F] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {item.category}
                      </span>
                    </div>

                    {/* Bottom Main Details */}
                    <div className="mt-auto max-w-xl">
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm lg:text-base text-slate-200 leading-relaxed font-normal mb-6">
                        {item.description}
                      </p>
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-sm lg:text-base font-semibold text-white hover:text-[#E52B2F] transition-colors group/link"
                      >
                        <span>Explore More</span>
                        <ArrowRight className="w-5 h-5 ml-2 text-[#E52B2F] group-hover/link:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* COLLAPSED CARD CONTENT (Vertical Orientation) */
                  <div className="relative z-10 h-full flex flex-col justify-end items-center pb-4 text-white">
                    <span className="writing-mode-vertical text-sm lg:text-base font-bold uppercase tracking-widest text-slate-200 group-hover:text-white whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MOBILE CAROUSEL (< 768px) */}
        <div className="md:hidden">
          <div className="relative rounded-2xl overflow-hidden min-h-[440px] flex flex-col justify-between p-6 bg-slate-900 shadow-lg border border-slate-800">
            {/* Background Image */}
            <Image
              src={industries[activeIndex].image}
              alt={industries[activeIndex].category}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 via-60% to-slate-950/40" />

            {/* Top Category Tag */}
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E52B2F] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                {industries[activeIndex].category}
              </span>
            </div>

            {/* Card Content */}
            <div className="relative z-10 mt-auto text-white">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight mb-2">
                {industries[activeIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal mb-5">
                {industries[activeIndex].description}
              </p>
              <Link
                href={industries[activeIndex].link}
                className="inline-flex items-center text-sm font-semibold text-white hover:text-[#E52B2F] transition-colors"
              >
                <span>Explore More</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#E52B2F]" />
              </Link>
            </div>
          </div>

          {/* Mobile Controls & Dots */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={handlePrevMobile}
              aria-label="Previous slide"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
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
                      ? "w-8 bg-[#E52B2F]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextMobile}
              aria-label="Next slide"
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
