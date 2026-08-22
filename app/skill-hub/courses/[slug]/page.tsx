import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillHubCTA from "@/components/skill-hub/SkillHubCTA";
import { popularCoursesList } from "@/data/skill-hub";
import { ArrowRight, CheckCircle2, Clock, User, BookOpen } from "lucide-react";

interface CourseDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return popularCoursesList.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = popularCoursesList.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | KBS Skill Hub",
    };
  }

  return {
    title: `${course.title} | KBS Skill Hub`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = popularCoursesList.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      <Header />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        {/* Course Hero */}
        <section className="bg-[#03142B] text-white py-14 sm:py-18 border-b border-[#82A0FF]/20 relative">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-300 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-500 font-bold">&gt;</span>
              <Link href="/skill-hub" className="hover:text-white transition-colors">
                Skill Hub
              </Link>
              <span className="text-slate-500 font-bold">&gt;</span>
              <span className="text-[#A52BFF] font-semibold">{course.title}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-[#00A8FF] bg-[#168BFF]/20 border border-[#168BFF]/40 mb-4">
                {course.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                {course.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-300 mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#168BFF]" /> Level: {course.level}
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#6657FF]" /> {course.lessons} Lessons
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D82DFF]" /> Self-Paced &amp; Live
                </span>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-bold text-sm sm:text-base hover:opacity-95 transition-all shadow-lg group"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Curriculum Highlights */}
        <section className="py-16 sm:py-20">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#168BFF] block mb-1">
                WHAT YOU WILL LEARN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Curriculum Overview
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {[
                "Core fundamentals & industry best practices",
                "Hands-on real world portfolio projects",
                "Code reviews & mentorship from KBS senior engineers",
                "Certification of completion & career support",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#0F2346]/10 shadow-xs flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#168BFF] shrink-0 mt-0.5" />
                  <span className="text-base text-[#111827] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SkillHubCTA />
      </main>

      <Footer />
    </div>
  );
}
