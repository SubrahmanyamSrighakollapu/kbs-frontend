import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import SkillHubHero from "@/components/skill-hub/SkillHubHero";
import GapAddressSection from "@/components/skill-hub/GapAddressSection";
import WhatWeOfferSection from "@/components/skill-hub/WhatWeOfferSection";
import SkillBenefits from "@/components/skill-hub/SkillBenefits";
import PopularCourses from "@/components/skill-hub/PopularCourses";
import LearningPaths from "@/components/skill-hub/LearningPaths";
import UpcomingSessions from "@/components/skill-hub/UpcomingSessions";
import SkillHubCTA from "@/components/skill-hub/SkillHubCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Skill Hub | KBS Information Technology",
  description:
    "KBS Skill Hub — Bridging the Gap Between Classrooms and Careers. Industry-expert led IT software and Civil engineering software training built for real employability.",
};

export default function SkillHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <SkillHubHero />

        {/* 3. The Gap We Address & Vision / Mission */}
        <GapAddressSection />

        {/* 4. What We Offer (IT & Civil Software Training) */}
        <WhatWeOfferSection />

        {/* 5. Popular Courses Section */}
        <PopularCourses />

        {/* 6. Learning Paths Section */}
        <LearningPaths />

        {/* 7. Why KBS Skill Hub Pillars */}
        <SkillBenefits />

        {/* 8. Upcoming Sessions Section */}
        <UpcomingSessions />

        {/* 9. Closing CTA Panel */}
        <SkillHubCTA />
      </main>

      {/* 10. Shared Footer */}
      <Footer />
    </div>
  );
}
