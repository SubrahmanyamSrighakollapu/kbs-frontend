"use client";

import React from "react";
import { UserCheck, Zap, ShieldCheck, Layers, RefreshCw } from "lucide-react";

export default function WhyKBSFinancial() {
  const pillars = [
    {
      id: "business-owners",
      title: "Built for Business Owners",
      description: "Solutions designed for real-world business needs.",
      icon: UserCheck,
      color: "#1688FF",
    },
    {
      id: "retail-bnpl",
      title: "Retail-first BNPL",
      description: "Simple and transparent credit options your customers trust.",
      icon: Zap,
      color: "#7A42FF",
    },
    {
      id: "group-backed",
      title: "Group-backed Reliability",
      description: "Part of KBS Group: One Group, Every Solution.",
      icon: ShieldCheck,
      color: "#D437FF",
    },
    {
      id: "full-stack",
      title: "Full-stack Financial Infrastructure",
      description: "Payments, payouts, credit and lending under one trusted partner.",
      icon: Layers,
      color: "#00C9A7",
    },
    {
      id: "grow-with-you",
      title: "Built to Grow With You",
      description: "Scalable solutions that adapt as your business expands.",
      icon: RefreshCw,
      color: "#FF9F1C",
    },
  ];

  return (
    <section className="bg-[#020B19] py-16 sm:py-24 text-white border-t border-[#101D34]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1688FF] mb-3 block">
            WHY KBS FINANCIAL SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            A partner that grows with you
          </h2>
        </div>

        {/* 5 Column Layout with Vertical Separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {pillars.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${
                  idx !== 0 ? "lg:pl-6" : ""
                }`}
              >
                <div>
                  {/* Glowing Icon */}
                  <div className="relative mb-5 inline-block">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#071427] border transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: `${item.color}50`,
                        color: item.color,
                        boxShadow: `0 0 15px -3px ${item.color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-white mb-2 tracking-tight group-hover:text-[#1688FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#AAB7CB] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Accent indicator */}
                <div
                  className="w-8 h-0.5 rounded-full mt-6 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
