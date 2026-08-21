"use client";

import React from "react";
import { purposeCards } from "@/data/about";
import { Eye, Rocket } from "lucide-react";

const iconMap = {
  Eye: Eye,
  Rocket: Rocket,
};

export default function VisionMission() {
  return (
    <section className="bg-[#06131E] text-white py-16 sm:py-24 lg:py-28 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#E52B2F] tracking-widest uppercase block mb-2">
            OUR PURPOSE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Guided by a Clear Vision. Driven by a Real Mission.
          </h2>
        </div>

        {/* 2 Purpose Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {purposeCards.map((card) => {
            const Icon = iconMap[card.iconName];
            return (
              <div
                key={card.id}
                className="bg-white/[0.035] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-xl hover:border-[#E52B2F]/40 hover:bg-white/[0.05] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Red Outline Icon */}
                  <div className="w-14 h-14 rounded-full border border-[#E52B2F]/40 bg-[#E52B2F]/10 text-[#E52B2F] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#E52B2F] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
