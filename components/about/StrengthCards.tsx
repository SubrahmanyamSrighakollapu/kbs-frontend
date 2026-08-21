"use client";

import React from "react";
import { strengthItems } from "@/data/about";
import { Code, Target, UserCheck } from "lucide-react";

const iconMap = {
  Code: Code,
  Target: Target,
  UserCheck: UserCheck,
};

export default function StrengthCards() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {strengthItems.map((item) => {
            const Icon = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#E52B2F]/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Red Outline Icon */}
                <div className="w-12 h-12 rounded-full border border-[#E52B2F]/30 bg-[#E52B2F]/5 text-[#E52B2F] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#E52B2F] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-[#E52B2F] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
