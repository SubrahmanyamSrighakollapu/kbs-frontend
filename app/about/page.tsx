import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import StrengthCards from "@/components/about/StrengthCards";
import VisionMission from "@/components/about/VisionMission";
import IndustriesWeServe from "@/components/about/IndustriesWeServe";
import WhatWeHaveBuilt from "@/components/about/WhatWeHaveBuilt";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import AboutStats from "@/components/about/AboutStats";
import GroupAdvantage from "@/components/about/GroupAdvantage";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Who We Are | KBS Group",
  description:
    "KBS Group is a multi-vertical enterprise built on a simple belief: real transformation happens when engineering precision, digital innovation, financial access, and skilled talent come together under one roof.",
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

        {/* 6. Industries We Serve */}
        <IndustriesWeServe />

        {/* 7. What We've Built Showcase */}
        <WhatWeHaveBuilt />

        {/* 8. Journey / Timeline Section */}
        <JourneyTimeline />

        {/* 9. Stats Strip */}
        <AboutStats />

        {/* 10. KBS Group Advantage Section */}
        <GroupAdvantage />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
