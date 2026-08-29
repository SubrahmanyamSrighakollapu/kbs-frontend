"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  tabLabel: string;
}

const slides: HeroSlide[] = [
  {
    id: "hero-globe",
    mediaType: "video",
    mediaSrc: "/Globe Video.mp4",
    eyebrow: "ONE GROUP. MANY POSSIBILITIES.",
    titlePrefix: "Building Today.",
    titleHighlight: "Creating a Better Tomorrow.",
    description:
      "KBS Group unites innovation, construction, creativity and technology across diverse verticals to deliver enterprise scale and real-world impact.",
    primaryCtaText: "Explore Our Verticals",
    primaryCtaLink: "#verticals",
    secondaryCtaText: "About KBS Group",
    secondaryCtaLink: "/about",
    tabLabel: "01 Group Vision",
  },
  {
    id: "hero-all-verticals",
    mediaType: "video",
    mediaSrc: "/All Verticals video.mp4",
    eyebrow: "ENTERPRISE TECHNOLOGY & VERTICALS",
    titlePrefix: "Engineered for Scale.",
    titleHighlight: "Driven by Intelligence.",
    description:
      "Empowering enterprises with cloud-native architecture, AI-driven automation, fintech solutions, civil engineering, and workplace skill development.",
    primaryCtaText: "Explore Verticals",
    primaryCtaLink: "#verticals",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    tabLabel: "02 Core Verticals",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-24 sm:pb-28 lg:pb-32 w-full min-h-[580px] lg:min-h-[640px] overflow-hidden flex items-center bg-[#03142B] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Video Carousel with Ultra-Sharp Clarity */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center lg:object-right pointer-events-none scale-[1.06] brightness-[1.08] contrast-[1.05] saturate-[1.1]"
            >
              <source src={slide.mediaSrc} type="video/mp4" />
            </video>

            {/* Left Gradient: Text Legibility on Left (0-45%), 100% Untouched Crystal Clarity on Right */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(2, 12, 32, 0.98) 0%, rgba(3, 16, 42, 0.85) 35%, rgba(3, 16, 42, 0.2) 55%, transparent 75%)",
              }}
            />

            {/* Mobile/Tablet Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03142B] via-transparent to-transparent md:hidden" />
          </div>
        );
      })}

      {/* SHARP SIDE NAVIGATION ARROWS (Left & Right Edges - No Overlap) */}
      <button
        onClick={handlePrev}
        aria-label="Previous Hero Slide"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#03142B]/80 hover:bg-[#168BFF] text-white border border-white/20 hover:border-[#168BFF] backdrop-blur-md transition-all shadow-2xl items-center justify-center group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Hero Slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#03142B]/80 hover:bg-[#168BFF] text-white border border-white/20 hover:border-[#168BFF] backdrop-blur-md transition-all shadow-2xl items-center justify-center group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Animated Slide Content Block */}
          <div key={`hero-slide-${currentSlide}`} className="animate-fade-in">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent">
                {activeSlide.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              {activeSlide.titlePrefix} <br />
              <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#B72CFF] bg-clip-text text-transparent inline-block">
                {activeSlide.titleHighlight}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mb-8">
              {activeSlide.description}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={activeSlide.primaryCtaLink}
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white text-sm sm:text-base font-semibold hover:opacity-95 hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
              >
                {activeSlide.primaryCtaText}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2.5 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href={activeSlide.secondaryCtaLink}
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/20 text-sm sm:text-base font-semibold hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all"
              >
                {activeSlide.secondaryCtaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
