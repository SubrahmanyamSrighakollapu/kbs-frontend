import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import SkillHubHero from "@/components/skill-hub/SkillHubHero";
import SkillBenefits from "@/components/skill-hub/SkillBenefits";
import PopularCourses from "@/components/skill-hub/PopularCourses";
import LearningPaths from "@/components/skill-hub/LearningPaths";
import UpcomingSessions from "@/components/skill-hub/UpcomingSessions";
import SkillHubCTA from "@/components/skill-hub/SkillHubCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Skill Hub | KBS Information Technology",
  description:
    "Upskill yourself with industry-relevant courses, hands-on projects, roadmaps, and live masterclasses at KBS Information Technology Skill Hub.",
};

export default function SkillHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Skill Hub Dark Learning Hero */}
        <SkillHubHero />

        {/* 3. Floating Learning Benefits Panel */}
        <SkillBenefits />

        {/* 4. Popular Courses Section */}
        <PopularCourses />

        {/* 5. Learning Paths Section */}
        <LearningPaths />

        {/* 6. Upcoming Sessions Section */}
        <UpcomingSessions />

        {/* 7. Closing CTA Panel */}
        <SkillHubCTA />
      </main>

      {/* 8. Shared Footer */}
      <Footer />
    </div>
  );
}
