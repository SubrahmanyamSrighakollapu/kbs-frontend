"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { learningPathsData } from "@/data/skillHub";
import LearningPathCard from "./LearningPathCard";

export default function LearningPaths() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
              LEARNING PATHS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Guided Career Roadmaps
            </h2>
          </div>

          <Link
            href="/skill-hub/paths"
            className="group flex items-center gap-1 text-sm font-bold text-[#E52B2F] hover:text-[#c92226] transition-colors"
          >
            <span>View All Learning Paths</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPathsData.map((path) => (
            <LearningPathCard key={path.slug} path={path} />
          ))}
        </div>

      </div>
    </section>
  );
}
