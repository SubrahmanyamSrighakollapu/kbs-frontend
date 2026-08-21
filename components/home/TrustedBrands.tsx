"use client";

import React from "react";
import { partnerBrands } from "@/data/home";
import { Shield, MapPin, Store, Trophy, Sparkles, Award } from "lucide-react";

const brandIconMap: { [key: string]: React.ElementType } = {
  shield: Shield,
  map: MapPin,
  store: Store,
  trophy: Trophy,
  sparkles: Sparkles,
  award: Award,
};

export default function TrustedBrands() {
  return (
    <section className="bg-slate-50/80 py-12 sm:py-16 border-t border-slate-200/60">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <h3 className="text-center text-xs sm:text-sm font-extrabold tracking-widest text-slate-400 uppercase mb-8 sm:mb-10">
          TRUSTED BY FORWARD-THINKING ORGANIZATIONS
        </h3>

        {/* Brand Logos Grid / Flex Container */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {partnerBrands.map((brand) => {
            const Icon = brandIconMap[brand.iconType] || Shield;
            return (
              <div
                key={brand.id}
                className="group flex items-center space-x-2.5 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="p-2 rounded-lg bg-slate-200/60 group-hover:bg-[#E52B2F]/10 text-slate-700 group-hover:text-[#E52B2F] transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-800 group-hover:text-[#E52B2F] transition-colors">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
