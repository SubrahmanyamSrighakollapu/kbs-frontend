import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillHubCTA from "@/components/skill-hub/SkillHubCTA";
import { learningPathsList } from "@/data/skill-hub";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";

interface PathDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return learningPathsList.map((path) => ({
    slug: path.slug,
  }));
}

export async function generateMetadata({ params }: PathDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = learningPathsList.find((p) => p.slug === slug);

  if (!path) {
    return {
      title: "Learning Path Not Found | KBS Skill Hub",
    };
  }

  return {
    title: `${path.title} | KBS Skill Hub`,
    description: path.description,
  };
}

export default async function PathDetailPage({ params }: PathDetailPageProps) {
  const { slug } = await params;
  const path = learningPathsList.find((p) => p.slug === slug);

  if (!path) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      <Header />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        <section className="bg-[#03142B] text-white py-14 sm:py-18 border-b border-[#82A0FF]/20">
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
              <span className="text-[#A52BFF] font-semibold">{path.title}</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-[#00A8FF] bg-[#168BFF]/20 border border-[#168BFF]/40 mb-4">
                <Layers className="w-3.5 h-3.5" /> {path.coursesCount} Guided Courses
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                {path.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
                Structured step-by-step career path: {path.description}.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-bold text-sm sm:text-base hover:opacity-95 transition-all shadow-lg group"
              >
                Start Learning Path
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] mb-8">
              Career Roadmap Milestones
            </h2>
            <div className="space-y-4">
              {[
                "Foundation: Core tools, languages, and syntax",
                "Intermediate: Frameworks, APIs, and databases",
                "Advanced: Architecture, performance, security & CI/CD",
                "Capstone: Live enterprise capstone project",
              ].map((step, i) => (
                <div key={i} className="p-6 bg-[#F8FAFF] rounded-2xl border border-[#0F2346]/10 flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#168BFF] shrink-0" />
                  <span className="text-base font-bold text-[#111827]">{step}</span>
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
