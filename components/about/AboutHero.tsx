"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full pt-28 sm:pt-32 pb-20 sm:pb-24 lg:pb-28 overflow-hidden flex items-center bg-[#03142B] text-white">
      {/* Background Animated Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center lg:object-right pointer-events-none"
        >
          <source src="/about-bg-animated.mp4" type="video/mp4" />
        </video>
        
        {/* Navy Left-to-Right Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(2, 12, 32, 0.98) 0%, rgba(3, 17, 43, 0.94) 34%, rgba(4, 20, 48, 0.62) 58%, rgba(4, 15, 35, 0.15) 80%)",
          }}
        />

        {/* Mobile Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03142B] via-[#03142B]/70 to-transparent md:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500 font-bold">&gt;</span>
            <span className="text-[#A52BFF] font-semibold">About Us</span>
          </nav>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            About KBS <br />
            <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#B72CFF] bg-clip-text text-transparent inline-block">
              Information Technology
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-lg">
            We&apos;re the technology arm of KBS Group, building software that
            runs real businesses — not demo-ware.
          </p>
        </div>
      </div>

      {/* Bottom-Left Decorative Digital Wave Graphic */}
      <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-28 pointer-events-none opacity-40 z-10 overflow-hidden">
        <svg viewBox="0 0 400 120" fill="none" className="w-full h-full">
          <path
            d="M-50 90 Q 50 30, 150 70 T 350 40 T 450 80"
            stroke="url(#waveGradient)"
            strokeWidth="2.5"
            strokeDasharray="4 6"
          />
          <path
            d="M-50 110 Q 70 50, 180 85 T 380 50"
            stroke="url(#waveGradient2)"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#168BFF" />
              <stop offset="50%" stopColor="#6657FF" />
              <stop offset="100%" stopColor="#D82DFF" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6657FF" />
              <stop offset="100%" stopColor="#00A8FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

