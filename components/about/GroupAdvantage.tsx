"use client";

import React from "react";
import { groupAdvantages } from "@/data/about";
import { Building, Layers, PackageCheck, TrendingUp } from "lucide-react";

const iconMap = {
  Building: Building,
  Layers: Layers,
  PackageCheck: PackageCheck,
  TrendingUp: TrendingUp,
};

export default function GroupAdvantage() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#E52B2F] tracking-widest uppercase block mb-2">
            THE KBS GROUP ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Stronger Together. Farther Ahead.
          </h2>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {groupAdvantages.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#E52B2F]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Red Outline Icon */}
                <div className="w-12 h-12 rounded-full border border-[#E52B2F]/30 bg-[#E52B2F]/5 text-[#E52B2F] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#E52B2F] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#E52B2F] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
