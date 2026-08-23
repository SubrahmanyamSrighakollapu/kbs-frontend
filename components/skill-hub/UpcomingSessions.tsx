"use client";

import React from "react";
import Link from "next/link";
import { Clock, Calendar, Video, ArrowRight } from "lucide-react";
import { upcomingSessionsData } from "@/data/skillHub";

export default function UpcomingSessions() {
  return (
    <section className="w-full bg-slate-50/50 py-16 lg:py-24">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 space-y-1 text-left">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            UPCOMING SESSIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Live Workshops & Expert Webinars
          </h2>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {upcomingSessionsData.map((session) => (
            <div
              key={session.slug}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 gap-6 shadow-xs hover:shadow-md transition-all duration-300 hover:border-[#E52B2F]/40"
            >
              {/* Left Date Circle/Block */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-red-50 border border-red-100 text-[#E52B2F]">
                  <span className="text-lg font-black leading-none">{session.day}</span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">{session.month}</span>
                </div>

                {/* Session Title & Category */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-100 text-slate-700 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      {session.category}
                    </span>
                  </div>
                  <Link
                    href={`/skill-hub/sessions/${session.slug}`}
                    className="text-lg font-bold text-slate-900 group-hover:text-[#E52B2F] transition-colors leading-snug block"
                  >
                    {session.title}
                  </Link>
                  <p className="text-xs text-slate-500 font-medium">
                    {session.type}
                  </p>
                </div>
              </div>

              {/* Right Side Time & Register Button */}
              <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                  <Clock className="w-4 h-4 text-[#E52B2F]" />
                  <span>{session.time}</span>
                </div>

                <Link
                  href={`/skill-hub/sessions/${session.slug}/register`}
                  className="inline-flex items-center justify-center rounded-full bg-[#E52B2F] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#c92226] active:scale-95 transition-all"
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
