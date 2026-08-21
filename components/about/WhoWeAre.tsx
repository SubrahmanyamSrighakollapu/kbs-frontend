"use client";

import React from "react";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-bold text-[#E52B2F] tracking-widest uppercase mb-3 block">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Engineering Real Solutions <br className="hidden sm:block" />
              for Real Businesses
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              Since 2021, we&apos;ve engineered products across payments,
              commerce, civic-tech, and consumer platforms, giving us a rare
              mix: engineering depth paired with an owner&apos;s understanding of
              what actually drives a business.
            </p>
          </div>

          {/* Right Team Image */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
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
