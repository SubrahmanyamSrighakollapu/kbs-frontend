"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { verticals } from "@/data/home";
import { ArrowUpRight } from "lucide-react";

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
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4.2] flex flex-col justify-end p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-100"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Dark Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 via-50% to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="relative z-10 text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-snug font-medium mb-6 whitespace-pre-line">
                  {card.subtitle} <br />
                  {card.description}
                </p>

                {/* Red Circular Arrow Button */}
                <div className="w-10 h-10 rounded-full bg-[#E52B2F] text-white flex items-center justify-center shadow-md group-hover:bg-[#c92226] group-hover:scale-105 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
