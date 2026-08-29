"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { verticals } from "@/data/home";
import { ArrowRight, Sparkles, Building2, Cpu, GraduationCap, Bot, Landmark } from "lucide-react";

const verticalIconMap = {
  "it-solutions": Cpu,
  "automation-tools": Bot,
  "civil-engineering": Building2,
  "financial-services": Landmark,
  "skill-hub": GraduationCap,
};

export default function VerticalsSection() {
  return (
    <section id="verticals" className="bg-[#FFFFFF] pt-20 sm:pt-28 pb-16 sm:pb-24 lg:pb-28">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-2">
            OUR VERTICALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            One Group. Multiple Possibilities.
          </h2>
          <p className="text-sm sm:text-base text-[#5B6475] mt-3 max-w-lg mx-auto">
            Deep domain expertise across technology, business automation, civil engineering, fintech, and industry learning.
          </p>
        </div>

        {/* 5 Vertical Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {verticals.map((card) => {
            const Icon = verticalIconMap[card.id as keyof typeof verticalIconMap] || Sparkles;

            return (
              <Link
                key={card.id}
                href={card.link}
                className="group relative flex flex-col rounded-2xl bg-white border border-[#0F2346]/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  boxShadow: `0 4px 20px -4px rgba(15, 35, 70, 0.05)`,
                }}
              >
                {/* Top Image Container */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                </div>

                {/* Bottom White Info Block */}
                <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    {/* Icon Badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: card.badgeBg,
                        color: card.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-[#111827] tracking-tight mb-1">
                      {card.title}
                    </h3>

                    {/* Subtitle / Category */}
                    <p className="text-xs font-semibold mb-2.5" style={{ color: card.accentColor }}>
                      {card.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-[#5B6475] leading-relaxed font-normal mb-5 line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  {/* Explore Link with Sliding Arrow */}
                  <div className="flex items-center text-xs font-bold transition-colors duration-200 mt-auto" style={{ color: card.accentColor }}>
                    <span>Explore Now</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1.5 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

