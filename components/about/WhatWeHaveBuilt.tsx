"use client";

import React from "react";
import { whatWeHaveBuilt } from "@/data/about";
import {
  ShieldCheck,
  Store,
  Trophy,
  Landmark,
  HeartPulse,
  HardHat,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Store: Store,
  Trophy: Trophy,
  Landmark: Landmark,
  HeartPulse: HeartPulse,
  HardHat: HardHat,
};

export default function WhatWeHaveBuilt() {
  return (
    <section id="built" className="bg-white py-16 sm:py-24">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-3">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            What We&apos;ve Built
          </h2>
          <p className="text-base sm:text-lg text-[#5B6475] font-normal leading-relaxed">
            Real software platforms running real business operations across fintech, commerce, retail, civic tech, health tech, and construction AI.
          </p>
        </div>

        {/* 6 Built Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeHaveBuilt.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="bg-[#03142B] text-white p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between group hover:border-[#6657FF]/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Subtle Glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 blur-2xl pointer-events-none opacity-20 transition-opacity group-hover:opacity-40"
                  style={{ backgroundColor: item.accentColor }}
                />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/15">
                      {item.category}
                    </span>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${item.accentColor}25`,
                        color: item.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Sub-tagline */}
                  <span className="text-xs font-semibold text-[#82A0FF] mb-2 block">
                    {item.tagline}
                  </span>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Product Badges */}
                <div className="relative z-10 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                  {item.products?.map((prod, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Callout Box */}
        <div className="mt-16 rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-[#03142B] via-[#061C3C] to-[#0A1633] text-white border border-[#82A0FF]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2">
              Ready to Build Something That Lasts?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
              Let&apos;s talk about where technology can remove friction from your business — a new product, a platform overhaul, or infrastructure that&apos;s overdue for an upgrade.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg whitespace-nowrap group shrink-0"
          >
            Let&apos;s Talk
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
