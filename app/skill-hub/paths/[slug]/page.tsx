"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { learningPathsData } from "@/data/skillHub";
import { ChevronRight, CheckCircle2, Layers, Award, Clock, ArrowDown } from "lucide-react";

export default function LearningPathDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const path = learningPathsData.find((p) => p.slug === slug) || learningPathsData[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      <Header />

      <main className="w-full">
        {/* Path Hero Header */}
        <section className="bg-[#06131E] py-12 lg:py-16 text-white border-b border-slate-800">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <Link href="/skill-hub" className="hover:text-white transition-colors">Skill Hub</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <Link href="/skill-hub/paths" className="hover:text-white transition-colors">Paths</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <span className="text-white font-semibold">{path.title}</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="rounded-full bg-[#E52B2F] text-white px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
                Career Pathway
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {path.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {path.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-medium text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#E52B2F]" />
                  {path.courseCount} Included Courses
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#E52B2F]" />
                  {path.estimatedWeeks} Estimated Time
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#E52B2F]" />
                  Target Role: {path.targetRole}
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Path Roadmap Flow & Content */}
        <section className="py-16 bg-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Skills Gained */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Skills Gained in this Pathway</h2>
              <div className="flex flex-wrap gap-2">
                {path.skillsGained.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg bg-red-50 text-[#E52B2F] px-3 py-1.5 text-sm font-bold border border-red-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Included Courses Roadmap */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Curated Progression Roadmap</h2>
              <div className="space-y-4 max-w-3xl">
                {path.includedCourses.map((cTitle, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E52B2F] text-white font-mono font-bold text-sm">
                        0{idx + 1}
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-base font-bold text-slate-900">{cTitle}</h3>
                        <p className="text-xs text-slate-500 font-medium">Core Requirement • Hands-on Projects</p>
                      </div>
                    </div>
                    {idx < path.includedCourses.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowDown className="w-5 h-5 text-slate-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enroll CTA */}
            <div className="rounded-2xl bg-[#06131E] p-8 text-white max-w-3xl space-y-4 text-center">
              <h3 className="text-2xl font-bold">Start the {path.title} Today</h3>
              <p className="text-sm text-slate-300">Master every skill step-by-step with 1-on-1 mentor guidance.</p>
              <button
                onClick={() => alert(`Enrolled in ${path.title}!`)}
                className="inline-flex items-center justify-center rounded-full bg-[#E52B2F] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#c92226] active:scale-95 transition-all cursor-pointer"
              >
                Enroll in Pathway
              </button>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
