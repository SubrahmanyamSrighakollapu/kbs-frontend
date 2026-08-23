"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Course } from "@/data/skillHub";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/skill-hub/courses/${course.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E52B2F]/40"
    >
      <div>
        {/* Course Thumbnail Image */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
            {course.category}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-3">
          {/* Level & Meta */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className="rounded-full bg-red-50 text-[#E52B2F] px-2.5 py-0.5 border border-red-100">
              {course.level}
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                {course.lessons} Lessons
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {course.duration}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#E52B2F] transition-colors leading-snug">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {course.description}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-[#E52B2F]">
        <span>Explore Course</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
