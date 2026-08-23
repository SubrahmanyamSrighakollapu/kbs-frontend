"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { upcomingSessionsData } from "@/data/skillHub";
import { ChevronRight, CheckCircle2, Calendar, Clock, Video } from "lucide-react";

export default function SessionRegisterPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const session = upcomingSessionsData.find((s) => s.slug === slug) || upcomingSessionsData[0];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profession: "Developer / Engineer",
    experience: "1-3 years",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      <Header />

      <main className="w-full py-12 lg:py-16">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-medium text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
            <Link href="/skill-hub" className="hover:text-slate-900 transition-colors">Skill Hub</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
            <Link href="/skill-hub/sessions" className="hover:text-slate-900 transition-colors">Sessions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
            <span className="text-slate-900 font-semibold">Register</span>
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Registration Confirmed!
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                  Thank you <span className="font-bold text-slate-900">{formData.fullName}</span>. You have successfully registered for <span className="font-bold text-[#E52B2F]">{session.title}</span> on {session.dateString}.
                </p>
                <p className="text-xs text-slate-400">
                  A calendar invite and access link have been sent to {formData.email}.
                </p>
                <div className="pt-4">
                  <Link
                    href="/skill-hub"
                    className="inline-flex items-center justify-center rounded-full bg-[#E52B2F] px-8 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#c92226]"
                  >
                    Back to Skill Hub
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-2 pb-6 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E52B2F]">
                    LIVE SESSION REGISTRATION
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {session.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#E52B2F]" />
                      {session.dateString}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E52B2F]" />
                      {session.time}
                    </span>
                  </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none"
                      />
                    </div>

                    {/* Profession */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Current Role / Profession
                      </label>
                      <select
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none bg-white"
                      >
                        <option>Developer / Engineer</option>
                        <option>Student / Fresher</option>
                        <option>UI/UX Designer</option>
                        <option>Data Analyst / Scientist</option>
                        <option>Engineering Manager</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Experience Level
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none bg-white"
                    >
                      <option>Beginner (0-1 years)</option>
                      <option>Intermediate (1-3 years)</option>
                      <option>Senior (3+ years)</option>
                    </select>
                  </div>

                  {/* Agree Checkbox */}
                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="h-4 w-4 rounded border-slate-300 text-[#E52B2F] focus:ring-[#E52B2F]"
                    />
                    <label htmlFor="agree" className="text-xs text-slate-600 font-medium">
                      I agree to receive workshop materials & event reminders via email.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#E52B2F] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#c92226] active:scale-95 transition-all cursor-pointer text-center"
                    >
                      Confirm Registration
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
