"use client";

import React from "react";
import { purposeCards } from "@/data/about";
import { Eye, Target } from "lucide-react";

const iconMap = {
  Eye: Eye,
  Target: Target,
};

export default function VisionMission() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-14 border border-[#82A0FF]/25 shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, #03152D 0%, #061C3C 55%, #0B1237 100%)",
          }}
        >
          {/* Subtle Dotted Wave Graphic Overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg viewBox="0 0 1000 400" fill="none" className="w-full h-full">
              <path
                d="M -100 350 Q 200 150, 500 280 T 1100 200"
                stroke="url(#purposeWave1)"
                strokeWidth="3"
                strokeDasharray="6 8"
              />
              <defs>
                <linearGradient id="purposeWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#168BFF" />
                  <stop offset="50%" stopColor="#6657FF" />
                  <stop offset="100%" stopColor="#D82DFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-2">
                OUR PURPOSE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Guided by a Clear Vision. Driven by a Real Mission.
              </h2>
            </div>

            {/* 2 Purpose Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {purposeCards.map((card) => {
                const Icon = iconMap[card.iconName as keyof typeof iconMap] || Eye;
                const isVision = card.id === "vision";
                const accentColor = isVision ? "#A52BFF" : "#168BFF";

                return (
                  <div
                    key={card.id}
                    className="bg-[#061A36]/85 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-[#82A0FF]/20 shadow-xl hover:border-[#6657FF]/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Gradient Outline Icon Badge */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}10)`,
                          border: `1.5px solid ${accentColor}50`,
                          color: accentColor,
                        }}
                      >
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
        </div>
      </div>
    </section>
  );
}

