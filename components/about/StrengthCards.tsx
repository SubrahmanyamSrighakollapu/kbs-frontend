"use client";

import React from "react";
import { strengthItems } from "@/data/about";
import { Code, Target, RefreshCw } from "lucide-react";

const iconMap = {
  Code: Code,
  Target: Target,
  RefreshCw: RefreshCw,
};

export default function StrengthCards() {
  return (
    <section className="bg-white pb-16 sm:pb-24">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {strengthItems.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap] || Code;
            return (
              <div
                key={item.id}
                className="bg-white p-8 rounded-2xl border border-[#0F2346]/10 shadow-sm hover:shadow-xl hover:border-[#6657FF]/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Soft Circular Icon Badge */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                    style={{
                      background: `linear-gradient(135deg, ${item.accentColor}18, ${item.accentColor}08)`,
                      border: `1.5px solid ${item.accentColor}40`,
                      color: item.accentColor,
                    }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827] mb-3 tracking-tight group-hover:text-[#168BFF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#5B6475] leading-relaxed font-normal">
                    {item.description}
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

