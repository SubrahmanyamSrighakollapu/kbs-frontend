"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/skill-hub/CourseCard";
import { coursesData } from "@/data/skillHub";
import { 
  ChevronRight, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  UserCheck, 
  ChevronDown, 
  ChevronUp,
  Award
} from "lucide-react";

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const course = coursesData.find((c) => c.slug === slug) || coursesData[0];
  const [openModule, setOpenModule] = useState<number | null>(0);

  const toggleModule = (idx: number) => {
    setOpenModule(openModule === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      <Header />

      <main className="w-full">
        {/* Course Detail Hero */}
        <section className="bg-[#06131E] py-12 lg:py-16 text-white border-b border-slate-800">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <Link href="/skill-hub" className="hover:text-white transition-colors">Skill Hub</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <Link href="/skill-hub/courses" className="hover:text-white transition-colors">Courses</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <span className="text-white font-semibold">{course.title}</span>
            </div>

            {/* Header Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#E52B2F] text-white px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
                    {course.category}
                  </span>
                  <span className="rounded-full bg-white/10 text-slate-300 px-3 py-0.5 text-xs font-semibold">
                    {course.level}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  {course.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {course.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-medium text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#E52B2F]" />
                    {course.lessons} Lessons
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#E52B2F]" />
                    {course.duration} Duration
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#E52B2F]" />
                    Certificate of Completion
                  </span>
                </div>
              </div>

              {/* Enroll Box */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-slate-950/80 p-6 space-y-6 shadow-2xl backdrop-blur-md">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400">Tuition & Access</span>
                    <div className="text-3xl font-extrabold text-white">Full Access</div>
                  </div>

                  <button
                    onClick={() => alert(`Enrolled in ${course.title}!`)}
                    className="w-full rounded-full bg-[#E52B2F] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#c92226] active:scale-95 transition-all cursor-pointer text-center"
                  >
                    Enroll Now
                  </button>

                  <div className="space-y-2 pt-2 text-xs text-slate-400 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>100% Online & Self-Paced</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Real-World Engineering Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Dedicated Mentor Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Body Content */}
        <section className="py-16 bg-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* What You Will Learn Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                What You Will Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.whatYouWillLearn.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#E52B2F] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Accordion */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Course Curriculum
              </h2>
              <div className="space-y-4 max-w-4xl">
                {course.curriculum.map((mod, idx) => {
                  const isOpen = openModule === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 bg-slate-50/60 hover:bg-slate-100/80 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-[#E52B2F] uppercase bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                            {mod.moduleNumber}
                          </span>
                          <span className="text-base sm:text-lg">{mod.title}</span>
                        </div>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                      </button>

                      {isOpen && (
                        <div className="p-5 border-t border-slate-100 bg-white space-y-2">
                          {mod.topics.map((top, tIdx) => (
                            <div key={tIdx} className="flex items-center gap-2 text-sm text-slate-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#E52B2F]" />
                              <span>{top}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instructor */}
            <div className="space-y-4 max-w-xl rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <h3 className="text-lg font-bold text-slate-900">Lead Instructor</h3>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-[#E52B2F] font-bold">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{course.instructor.name}</h4>
                  <p className="text-xs font-medium text-slate-500">{course.instructor.role}</p>
                </div>
              </div>
            </div>

            {/* Related Courses */}
            <div className="space-y-6 pt-6 border-t border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900">Related Courses</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coursesData.filter(c => c.slug !== course.slug).slice(0, 3).map((rCourse) => (
                  <CourseCard key={rCourse.slug} course={rCourse} />
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
