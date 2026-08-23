"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FinancialFuture() {
  const features = [
    "AI-driven credit & risk models",
    "Real-time payments intelligence",
    "Embedded finance for platforms",
    "Open APIs for seamless integration",
  ];

  return (
    <section className="bg-[#020B19] py-16 sm:py-24 text-white border-t border-[#101D34]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071427] rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#1688FF]/20 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-[#7A42FF]/15 via-[#1688FF]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1688FF] mb-3 block">
                WHAT&apos;S NEXT IN
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
                Financial Services
              </h2>
              <p className="text-base sm:text-lg text-[#AAB7CB] font-normal leading-relaxed mb-8">
                The future of finance is embedded, intelligent, and frictionless. We&apos;re building what&apos;s next — today.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl bg-[#101D34]/80 border border-white/10 hover:border-[#1688FF]/40 transition-all duration-300 group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-white">
                      {feat}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#1688FF] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#1688FF]/25 bg-[#020B19] group">
                <Image
                  src="/fintech_platform_3d.png"
                  alt="Financial Technology Platform 3D Visual"
                  fill
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071427]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
