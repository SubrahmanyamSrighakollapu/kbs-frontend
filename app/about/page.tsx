import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import StrengthCards from "@/components/about/StrengthCards";
import VisionMission from "@/components/about/VisionMission";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import AboutStats from "@/components/about/AboutStats";
import GroupAdvantage from "@/components/about/GroupAdvantage";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | KBS Information Technology",
  description:
    "Learn about KBS Information Technology — the technology arm of KBS Group, engineering software solutions across fintech, commerce, civic-tech, and enterprise platforms.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#E52B2F] selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. About Hero Banner */}
        <AboutHero />

        {/* 3. Who We Are Section */}
        <WhoWeAre />

        {/* 4. Engineering Strength Cards */}
        <StrengthCards />

        {/* 5. Vision & Mission Dark Section */}
        <VisionMission />

        {/* 6. Journey / Timeline Section */}
        <JourneyTimeline />

        {/* 7. Stats Strip */}
        <AboutStats />

        {/* 8. KBS Group Advantage Section */}
        <GroupAdvantage />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
