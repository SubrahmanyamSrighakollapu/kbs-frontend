import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "KBS Group Insights | Engineering, Technology & Business",
  description: "Read KBS Group insights on enterprise technology, AI, business automation, civil engineering, financial services, and career-ready skills.",
  path: "/insights",
  keywords: ["KBS Group insights", "technology insights India", "civil engineering insights", "business automation articles"],
  image: "/All Verticals.png",
});

export default function InsightsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}