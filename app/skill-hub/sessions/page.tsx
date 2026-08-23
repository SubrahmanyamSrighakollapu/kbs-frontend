import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UpcomingSessions from "@/components/skill-hub/UpcomingSessions";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Upcoming Sessions | Skill Hub - KBS Information Technology",
  description: "Join live engineering workshops, interactive webinars, and hands-on coding labs led by KBS IT experts.",
};

export default function SessionsListingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      <Header />

      <main className="w-full">
        {/* Banner */}
        <section className="bg-[#030A12] py-12 text-white border-b border-slate-800">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-medium text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <Link href="/skill-hub" className="hover:text-white transition-colors">Skill Hub</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <span className="text-white font-semibold">Sessions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Live Workshops & Webinars
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
              Interactive live masterclasses and deep-dive technical sessions with leading software architects.
            </p>
          </div>
        </section>

        {/* Sessions List */}
        <UpcomingSessions />
      </main>

      <Footer />
    </div>
  );
}
