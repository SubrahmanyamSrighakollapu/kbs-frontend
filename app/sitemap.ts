import { MetadataRoute } from "next";
import { insightPosts } from "@/data/insights";
import { popularCoursesList, learningPathsList } from "@/data/skill-hub";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/services-products",
    "/verticals/it",
    "/verticals/civil",
    "/verticals/financial",
    "/verticals/automation",
    "/skill-hub",
    "/insights",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.9,
  }));

  // Services detail routes
  const serviceSlugs = [
    "financial-services",
    "business-automation-saas",
    "product-engineering",
    "ai-automation",
    "cloud-devops",
    "end-to-end-support",
  ];
  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services-products/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Insights articles
  const insightRoutes = insightPosts.map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Skill Hub courses & paths
  const courseRoutes = popularCoursesList.map((course) => ({
    url: `${SITE_URL}/skill-hub/courses/${course.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const pathRoutes = learningPathsList.map((path) => ({
    url: `${SITE_URL}/skill-hub/paths/${path.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...insightRoutes,
    ...courseRoutes,
    ...pathRoutes,
  ];
}
