"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] overflow-hidden flex items-center bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us-bg.png"
          alt="KBS IT Team & Office"
          fill
          priority
          className="object-cover object-center lg:object-right transition-transform duration-1000 scale-100"
        />
        {/* Dark Left-to-Right Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030c14] via-[#030c14]/80 md:via-[#030c14]/65 via-60% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030c14]/60 via-transparent to-transparent md:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-300 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#E52B2F] font-bold">&gt;</span>
            <span className="text-white font-semibold">About Us</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
            About KBS <br />
            Information Technology
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-lg">
            We&apos;re the technology arm of KBS Group, building software that
            runs real businesses — not demo-ware.
          </p>
        </div>
      </div>
    </section>
  );
}
