"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { popularCoursesList } from "@/data/skill-hub";
import { ArrowRight, BookOpen, User } from "lucide-react";

export default function PopularCourses() {
  return (
    <section id="courses" className="bg-white py-12 sm:py-16">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-1">
              POPULAR COURSES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              Master High-Demand Skills
            </h2>
          </div>

          <Link
            href="/skill-hub/courses"
            className="inline-flex items-center text-xs sm:text-sm font-bold text-[#168BFF] hover:text-[#6657FF] transition-colors group"
          >
            View All Courses
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {popularCoursesList.map((course) => (
            <Link
              key={course.id}
              href={course.href}
              className="bg-white rounded-2xl border border-[#0F2346]/10 shadow-xs hover:shadow-xl hover:border-[#168BFF]/30 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Thumbnail Area */}
                <div className="relative w-full aspect-[16/9] bg-slate-900 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Soft Lavender/Purple Badge */}
                  <div className="absolute top-3 left-3 bg-[#03142B]/85 backdrop-blur-md text-[#00A8FF] text-[11px] font-bold px-3 py-1 rounded-full border border-[#82A0FF]/30 shadow-xs">
                    {course.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] mb-2 tracking-tight group-hover:text-[#168BFF] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed font-normal mb-6">
                    {course.description}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#0F2346]/08 text-xs font-semibold text-[#5B6475]">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#168BFF]" />
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#6657FF]" />
                      {course.lessons} Lessons
                    </span>
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
