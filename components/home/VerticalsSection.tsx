"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { verticals } from "@/data/home";
import { ArrowRight } from "lucide-react";

export default function VerticalsSection() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-[#E52B2F] tracking-widest uppercase block mb-2">
            OUR VERTICALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Multiple Strengths. One Vision.
          </h2>
        </div>

        {/* 4 Vertical Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {verticals.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4.2] sm:aspect-[4/5] lg:aspect-[3/4.4] flex flex-col justify-end p-6 sm:p-7 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100/60"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Dark Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 via-50% to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content Overlay */}
              <div className="relative z-10 text-white flex flex-col justify-end">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-1 leading-tight transition-transform duration-500 group-hover:-translate-y-1">
                  {card.title}
                </h3>

                {/* Subtitle & Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-snug font-medium transition-colors duration-300">
                  {card.subtitle} {card.description}
                </p>

                {/* Hover Expanded Details & Tags (Modern Smooth Reveal Animation) */}
                <div className="max-h-0 opacity-0 transform translate-y-4 transition-all duration-500 ease-out group-hover:max-h-48 group-hover:opacity-100 group-hover:translate-y-0 overflow-hidden">
                  <p className="text-xs text-slate-200/90 leading-relaxed font-normal pt-3 border-t border-white/20 mt-2.5">
                    {card.hoverDetails}
                  </p>

                  {/* Tags */}
                  {card.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2.5">
                      {card.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-white/15 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Red Circular Button with Smooth Arrow Rotation (Diagonal ↗ to Horizontal →) */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/0 group-hover:text-white/90 transition-colors duration-500">
                    Explore Vertical
                  </span>
                  
                  <div className="w-11 h-11 rounded-full bg-[#E52B2F] text-white flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-[#c92226] group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
