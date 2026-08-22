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

const brandColorMap: { [key: string]: string } = {
  finjo: "#6657FF",
  helyi: "#111827",
  desidukan: "#E52B2F",
  winwala: "#168BFF",
  creavo: "#00A8FF",
  nayaleader: "#111827",
};

export default function TrustedBrands() {
  return (
    <section className="bg-white py-12 sm:py-16 border-t border-[#0F2346]/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <h3 className="text-center text-xs sm:text-sm font-extrabold tracking-widest text-[#5B6475] uppercase mb-8 sm:mb-10">
          TRUSTED BY FORWARD-THINKING ORGANIZATIONS
        </h3>

        {/* Brand Logos Container */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {partnerBrands.map((brand) => {
            const Icon = brandIconMap[brand.iconType] || Shield;
            const accentColor = brandColorMap[brand.id] || "#168BFF";

            return (
              <div
                key={brand.id}
                className="group flex items-center space-x-3 cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div
                  className="p-2 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${accentColor}12`,
                    color: accentColor,
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#111827]">
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

