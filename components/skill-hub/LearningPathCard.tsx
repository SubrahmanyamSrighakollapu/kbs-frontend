"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Award } from "lucide-react";
import { LearningPath } from "@/data/skillHub";

interface LearningPathCardProps {
  path: LearningPath;
}

export default function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <Link
      href={`/skill-hub/paths/${path.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E52B2F]/40"
    >
      <div>
        {/* Path Image Header */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <Image
            src={path.image}
            alt={path.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-[#E52B2F] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md">
            Career Pathway
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className="text-[#E52B2F]">{path.subtitle}</span>
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              {path.courseCount} Courses
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#E52B2F] transition-colors leading-snug">
            {path.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {path.description}
          </p>

          {/* Skills Tags */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {path.skillsGained.slice(0, 4).map((skill, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-[#E52B2F]">
        <span>Explore Path Roadmap</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
