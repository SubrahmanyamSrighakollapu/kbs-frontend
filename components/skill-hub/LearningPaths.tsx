"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { learningPathsList } from "@/data/skill-hub";
import { Layers } from "lucide-react";

export default function LearningPaths() {
  return (
    <section id="paths" className="bg-white py-12 sm:py-16">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-1">
            LEARNING PATHS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            Structured Roadmaps to Career Roles
          </h2>
        </div>

        {/* 3 Learning Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {learningPathsList.map((path) => (
            <Link
              key={path.id}
              href={path.href}
              className="bg-white rounded-2xl border border-[#0F2346]/10 shadow-xs hover:shadow-xl hover:border-[#6657FF]/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Dark Artwork Header Area */}
                <div className="relative w-full aspect-[16/9] bg-[#03142B] overflow-hidden">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03142B] via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] mb-1.5 tracking-tight group-hover:text-[#168BFF] transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed font-normal mb-6">
                    {path.description}
                  </p>

                  {/* Course Count Footer */}
                  <div className="flex items-center gap-2 text-xs font-bold text-[#168BFF] pt-3 border-t border-[#0F2346]/08">
                    <Layers className="w-4 h-4 text-[#6657FF]" />
                    <span>{path.coursesCount} Courses Included</span>
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
