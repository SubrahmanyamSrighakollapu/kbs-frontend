"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { upcomingSessionsData } from "@/data/skillHub";
import { ChevronRight, Calendar, Clock, Video, UserCheck, CheckCircle2 } from "lucide-react";

export default function SessionDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const session = upcomingSessionsData.find((s) => s.slug === slug) || upcomingSessionsData[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      <Header />

      <main className="w-full">
        {/* Hero Header */}
        <section className="bg-[#06131E] py-12 lg:py-16 text-white border-b border-slate-800">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <Link href="/skill-hub" className="hover:text-white transition-colors">Skill Hub</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <Link href="/skill-hub/sessions" className="hover:text-white transition-colors">Sessions</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <span className="text-white font-semibold">{session.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="rounded-full bg-[#E52B2F] text-white px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
                  {session.category}
                </span>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  {session.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {session.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm font-medium text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#E52B2F]" />
                    {session.dateString}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#E52B2F]" />
                    {session.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-[#E52B2F]" />
                    Live Interactive Workshop
                  </span>
                </div>
              </div>

              {/* Action Box */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-slate-950/80 p-6 space-y-6 shadow-2xl backdrop-blur-md text-center">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400">Registration</span>
                    <div className="text-2xl font-extrabold text-white">Free Access</div>
                  </div>

                  <Link
                    href={`/skill-hub/sessions/${session.slug}/register`}
                    className="w-full inline-block rounded-full bg-[#E52B2F] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#c92226] active:scale-95 transition-all text-center"
                  >
                    Reserve Your Seat
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Topics Covered */}
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900">Topics Covered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {session.topics.map((topic, idx) => (
                  <div key={idx} className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-slate-50/50 p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#E52B2F] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speaker Info */}
            <div className="space-y-4 max-w-md rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <h3 className="text-lg font-bold text-slate-900">Featured Speaker</h3>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-[#E52B2F] font-bold">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{session.speaker}</h4>
                  <p className="text-xs font-medium text-slate-500">{session.speakerRole}</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
