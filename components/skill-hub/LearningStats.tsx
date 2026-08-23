"use client";

import React from "react";

export default function LearningStats() {
  const stats = [
    { value: "500+", label: "Learners Enrolled" },
    { value: "50+", label: "Specialized Courses" },
    { value: "20+", label: "Expert Mentors" },
    { value: "95%", label: "Placement Success Rate" },
  ];

  return (
    <section className="w-full bg-slate-900 py-12 text-white border-y border-slate-800">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-slate-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 pt-4 sm:pt-0">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {stat.value}
              </span>
              <p className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
