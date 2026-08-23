"use client";

import React from "react";
import { Target, ShieldCheck, TrendingUp, HeartHandshake } from "lucide-react";

interface WhyKBSProps {
  items: {
    title: string;
    description: string;
  }[];
}

const icons = [Target, ShieldCheck, TrendingUp, HeartHandshake];

export default function WhyKBS({ items }: WhyKBSProps) {
  return (
    <section className="w-full bg-white py-16 lg:py-20 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center space-y-1">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            WHY KBS IT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Businesses Choose KBS
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 space-y-3 shadow-xs hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#E52B2F]">
                  <IconComp className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
