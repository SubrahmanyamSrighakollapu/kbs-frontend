import Header from "@/components/layout/Header";
import SkillHubHero from "@/components/skill-hub/SkillHubHero";
import SkillBenefits from "@/components/skill-hub/SkillBenefits";
import PopularCourses from "@/components/skill-hub/PopularCourses";
import LearningPaths from "@/components/skill-hub/LearningPaths";
import UpcomingSessions from "@/components/skill-hub/UpcomingSessions";
import LearningStats from "@/components/skill-hub/LearningStats";
import SkillHubCTA from "@/components/skill-hub/SkillHubCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Skill Hub | KBS Information Technology",
  description: "Learn. Grow. Succeed. Upskill yourself with industry-relevant courses, hands-on projects and certifications by KBS Group IT.",
};

export default function SkillHubPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      {/* 1. Shared Header */}
      <Header />

      {/* Main Skill Hub Content Flow */}
      <main className="w-full overflow-hidden">
        {/* 2. Hero */}
        <SkillHubHero />

        {/* 3. Value Proposition / Benefits */}
        <SkillBenefits />

        {/* 4. Popular Courses */}
        <PopularCourses />

        {/* 5. Learning Paths */}
        <LearningPaths />

        {/* 6. Upcoming Sessions */}
        <UpcomingSessions />

        {/* 7. Learning Stats Strip */}
        <LearningStats />

        {/* 8. Closing CTA */}
        <SkillHubCTA />
      </main>

      {/* 9. Shared Footer */}
      <Footer />
    </div>
  );
}
