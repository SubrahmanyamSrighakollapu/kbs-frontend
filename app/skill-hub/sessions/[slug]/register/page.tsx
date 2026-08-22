import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { upcomingSessionsList } from "@/data/skill-hub";
import { Clock, Calendar, CheckCircle2 } from "lucide-react";

interface RegisterPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return upcomingSessionsList.map((session) => ({
    slug: session.slug,
  }));
}

export async function generateMetadata({ params }: RegisterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const session = upcomingSessionsList.find((s) => s.slug === slug);

  if (!session) {
    return {
      title: "Session Not Found | KBS Skill Hub",
    };
  }

  return {
    title: `Register: ${session.title} | KBS Skill Hub`,
    description: `Register for ${session.title} live workshop on ${session.day} ${session.month}.`,
  };
}

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { slug } = await params;
  const session = upcomingSessionsList.find((s) => s.slug === slug);

  if (!session) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      <Header />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        <section className="py-12 sm:py-16">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-[#5B6475] mb-6">
              <Link href="/" className="hover:text-[#111827] transition-colors">
                Home
              </Link>
              <span className="text-slate-400 font-bold">&gt;</span>
              <Link href="/skill-hub" className="hover:text-[#111827] transition-colors">
                Skill Hub
              </Link>
              <span className="text-slate-400 font-bold">&gt;</span>
              <span className="text-[#168BFF] font-semibold">Register</span>
            </nav>

            <div className="bg-[#F8FAFF] p-8 sm:p-10 rounded-3xl border border-[#0F2346]/10 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-[#168BFF] block mb-2">
                LIVE SESSION REGISTRATION
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-4">
                {session.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[#5B6475] mb-8 pb-6 border-b border-[#0F2346]/10">
                <span className="flex items-center gap-1.5 text-[#168BFF]">
                  <Calendar className="w-4 h-4" /> {session.day} {session.month}
                </span>
                <span className="flex items-center gap-1.5 text-[#6657FF]">
                  <Clock className="w-4 h-4" /> {session.time}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#168BFF]/10 text-[#168BFF]">
                  {session.format}
                </span>
              </div>

              {/* Simple Registration Form */}
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#0F2346]/15 text-sm focus:outline-none focus:border-[#168BFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#0F2346]/15 text-sm focus:outline-none focus:border-[#168BFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#0F2346]/15 text-sm focus:outline-none focus:border-[#168BFF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-bold text-base hover:opacity-95 transition-all shadow-md mt-4"
                >
                  Confirm Free Registration
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
