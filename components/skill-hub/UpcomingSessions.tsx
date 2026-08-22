"use client";

import React from "react";
import Link from "next/link";
import { upcomingSessionsList } from "@/data/skill-hub";
import { Clock } from "lucide-react";

export default function UpcomingSessions() {
  return (
    <section id="sessions" className="bg-[#F8FAFF] py-12 sm:py-16 border-b border-[#0F2346]/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent block mb-1">
            UPCOMING SESSIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            Live Workshops &amp; Masterclasses
          </h2>
        </div>

        {/* 3 Session Rows */}
        <div className="space-y-4">
          {upcomingSessionsList.map((session) => (
            <div
              key={session.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#0F2346]/10 shadow-xs hover:shadow-lg hover:border-[#168BFF]/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-6">
                {/* Date Block */}
                <div className="flex flex-col items-center justify-center shrink-0 min-w-[64px]">
                  <span className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight leading-none">
                    {session.day}
                  </span>
                  <span className="text-xs font-extrabold text-[#168BFF] tracking-wider uppercase mt-1">
                    {session.month}
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block w-px h-12 bg-[#0F2346]/10" />

                {/* Session Info */}
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#111827] tracking-tight mb-1">
                    {session.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6475] font-normal">
                    {session.format}
                  </p>
                </div>
              </div>

              {/* Right Side: Time & Register CTA */}
              <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-4 sm:pt-0 border-t sm:border-0 border-[#0F2346]/08">
                <span className="flex items-center text-xs font-semibold text-[#5B6475] gap-1.5 whitespace-nowrap">
                  <Clock className="w-3.5 h-3.5 text-[#6657FF]" />
                  {session.time}
                </span>

                <Link
                  href={session.registerHref}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white text-xs sm:text-sm font-semibold hover:opacity-95 active:scale-95 transition-all shadow-md shrink-0"
                >
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
