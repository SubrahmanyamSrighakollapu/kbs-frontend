"use client";

import React from "react";
import { Eye, Target } from "lucide-react";

export default function VisionMissionStrip() {
  return (
    <section className="bg-[#020B19] py-10 sm:py-14 border-t border-[#101D34]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071427] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#1688FF]/20 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#1688FF]/10 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7A42FF]/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Left: VISION */}
            <div className="flex items-start space-x-5 pt-4 md:pt-0 md:pr-6">
              {/* Icon with glowing circular accent */}
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#101D34] border border-[#1688FF]/40 text-[#1688FF] flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7" />
                </div>
                <div className="absolute inset-0 bg-[#1688FF]/25 blur-md rounded-full pointer-events-none" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#1688FF] mb-2 block">
                  VISION
                </span>
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
                  To make sophisticated financial infrastructure accessible to every business owner — not just the largest ones — so that access to capital and payments is never the reason a good business stays small.
                </p>
              </div>
            </div>

            {/* Right: MISSION */}
            <div className="flex items-start space-x-5 pt-8 md:pt-0 md:pl-10">
              {/* Icon with glowing circular accent */}
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-[#101D34] border border-[#7A42FF]/40 text-[#7A42FF] flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7" />
                </div>
                <div className="absolute inset-0 bg-[#7A42FF]/25 blur-md rounded-full pointer-events-none" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#7A42FF] mb-2 block">
                  MISSION
                </span>
                <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
                  To deliver reliable, easy-to-adopt financial services — payments, credit, and lending — built around how small and mid-sized businesses actually operate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
