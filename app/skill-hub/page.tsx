import React from "react";
import { constructMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import SkillHubHero from "@/components/skill-hub/SkillHubHero";
import GapAddressSection from "@/components/skill-hub/GapAddressSection";
import WhatWeOfferSection from "@/components/skill-hub/WhatWeOfferSection";
import SkillBenefits from "@/components/skill-hub/SkillBenefits";
import PopularCourses from "@/components/skill-hub/PopularCourses";
import LearningPaths from "@/components/skill-hub/LearningPaths";
import SkillHubCTA from "@/components/skill-hub/SkillHubCTA";
import Footer from "@/components/layout/Footer";

export const metadata = constructMetadata({
  title: "KBS Skill Hub | IT & Civil Software Training",
  description: "Build job-ready skills with practitioner-led IT and civil engineering software training from KBS Skill Hub in Hyderabad.",
  path: "/skill-hub",
  keywords: ["KBS Skill Hub", "IT training Hyderabad", "civil software training Hyderabad"],
  image: "/skills-hub-ui-design.png",
});

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

        {/* 8. Closing CTA Panel */}
        <SkillHubCTA />
      </main>

      {/* 10. Shared Footer */}
      <Footer />
    </div>
  );
}
