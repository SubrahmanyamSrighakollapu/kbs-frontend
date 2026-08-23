"use client";

import React from "react";
import { ShieldCheck, Send, Sparkles, Banknote } from "lucide-react";

export default function FinancialOfferings() {
  const offerings = [
    {
      id: "payment-gateway",
      title: "Payment Gateway Services",
      description: "Secure, scalable payment infrastructure built for reliability and speed.",
      icon: ShieldCheck,
      color: "#1688FF",
    },
    {
      id: "payout-services",
      title: "Payout Services",
      description: "Fast, dependable disbursements with real-time visibility.",
      icon: Send,
      color: "#7A42FF",
    },
    {
      id: "bnpl",
      title: "Buy Now, Pay Later (BNPL)",
      description: "Flexible credit options that increase customer satisfaction and sales.",
      icon: Sparkles,
      color: "#D437FF",
    },
    {
      id: "business-loans",
      title: "Business Loans",
      description: "Working capital solutions that help you grow without roadblocks.",
      icon: Banknote,
      color: "#00C9A7",
    },
  ];

  return (
    <section className="bg-[#020B19] py-16 sm:py-24 text-white border-t border-[#101D34]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#1688FF] mb-3 block">
            WHAT WE OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            End-to-end solutions for every stage of your growth
          </h2>
        </div>

        {/* 4 Horizontal Columns with Vertical Separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {offerings.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${
                  idx !== 0 ? "lg:pl-8" : ""
                }`}
              >
                <div>
                  {/* Glowing Outline Icon */}
                  <div className="relative mb-6 inline-block">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#071427] border transition-all duration-300 group-hover:scale-105"
                      style={{
                        borderColor: `${item.color}50`,
                        color: item.color,
                        boxShadow: `0 0 20px -5px ${item.color}30`,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight group-hover:text-[#1688FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#AAB7CB] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Hover Accent */}
                <div
                  className="w-10 h-0.5 rounded-full mt-6 transition-all duration-300 group-hover:w-full"
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
