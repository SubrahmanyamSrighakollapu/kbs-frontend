"use client";

import React from "react";
import Image from "next/image";
import { aboutHeroData } from "@/data/about";

export default function WhoWeAre() {
  return (
    <section className="relative z-20 -mt-6 rounded-t-3xl bg-white pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent mb-3 block">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-6">
              Engineering Real Software <br className="hidden sm:block" />
              for Real Businesses
            </h2>
            <p className="text-base sm:text-lg text-[#5B6475] font-normal leading-relaxed max-w-xl">
              {aboutHeroData.whoWeAre}
            </p>
          </div>

          {/* Right Team Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#0F2346]/10 group bg-slate-100">
              <Image
                src="/about-us-bg.png"
                alt="KBS IT Team Collaboration"
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
