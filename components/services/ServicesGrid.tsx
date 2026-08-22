"use client";

import React from "react";
import Link from "next/link";
import { servicesList } from "@/data/services";
import {
  Cpu,
  Bot,
  Cloud,
  Headphones,
  BarChart,
  Palette,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Cpu: Cpu,
  Bot: Bot,
  Cloud: Cloud,
  Headphones: Headphones,
  BarChart: BarChart,
  Palette: Palette,
  ShieldCheck: ShieldCheck,
};

export default function ServicesGrid() {
  const firstRow = servicesList.slice(0, 4);
  const secondRow = servicesList.slice(4, 7);

  return (
    <section id="services" className="bg-white py-16 sm:py-24 border-t border-[#0F2346]/08">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {firstRow.map((service) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || Cpu;

            return (
              <Link
                key={service.id}
                href={service.href}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-[#0F2346]/10 shadow-xs hover:shadow-xl hover:border-[#168BFF]/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Tinted Circular Icon Badge */}
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                    style={{
                      backgroundColor: service.badgeBg,
                      border: `1.5px solid ${service.accentColor}35`,
                      color: service.accentColor,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#111827] mb-3 tracking-tight group-hover:text-[#168BFF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5B6475] leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Link */}
                <div
                  className="inline-flex items-center text-sm font-semibold transition-all group-hover:translate-x-1"
                  style={{ color: service.accentColor }}
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Row 2: 3 Columns Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1035px] mx-auto">
          {secondRow.map((service) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || Cpu;

            return (
              <Link
                key={service.id}
                href={service.href}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-[#0F2346]/10 shadow-xs hover:shadow-xl hover:border-[#168BFF]/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Tinted Circular Icon Badge */}
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                    style={{
                      backgroundColor: service.badgeBg,
                      border: `1.5px solid ${service.accentColor}35`,
                      color: service.accentColor,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#111827] mb-3 tracking-tight group-hover:text-[#168BFF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5B6475] leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Link */}
                <div
                  className="inline-flex items-center text-sm font-semibold transition-all group-hover:translate-x-1"
                  style={{ color: service.accentColor }}
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
