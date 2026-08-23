import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/skill-hub/CourseCard";
import { coursesData } from "@/data/skillHub";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "All Courses | Skill Hub - KBS Information Technology",
  description: "Browse all industry-relevant courses in Web Development, UI/UX Design, Data Science, DevOps and AI.",
};

export default function CoursesListingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      <Header />

      <main className="w-full">
        {/* Banner Header */}
        <section className="bg-[#030A12] py-12 text-white border-b border-slate-800">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-medium text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <Link href="/skill-hub" className="hover:text-white transition-colors">Skill Hub</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#E52B2F]" />
              <span className="text-white font-semibold">Courses</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              All Courses & Masterclasses
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal">
              Practical, hands-on courses taught by industry engineers to take your technical skills to the next level.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-slate-50/50">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesData.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
