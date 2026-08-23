import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ChevronRight, Briefcase } from "lucide-react";

export const metadata = {
  title: "Careers | KBS Information Technology",
  description: "Join the engineering and design team at KBS IT to build next-generation software products.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      <main className="w-full">
        <section className="bg-[#030A12] py-16 text-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <Link href="/">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <span className="text-white font-semibold">Careers</span>
            </div>
            <h1 className="text-4xl font-extrabold">Careers at KBS IT</h1>
            <p className="text-slate-300 max-w-xl">Build high-impact digital systems with visionary engineers.</p>
          </div>
        </section>
        <section className="py-20 text-center space-y-4 bg-slate-50">
          <Briefcase className="w-12 h-12 text-[#E52B2F] mx-auto" />
          <h2 className="text-2xl font-bold">Open Positions Coming Soon</h2>
          <p className="text-slate-600 max-w-md mx-auto">Send your resume to hello@kbsit.com to be considered for upcoming engineering, design, and AI roles.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
