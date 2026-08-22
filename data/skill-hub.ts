export interface SkillBenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: "Package" | "GraduationCap" | "Users";
  accentColor: string;
}

export interface PopularCourseItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  badge: "Bestseller" | "Trending" | "Popular";
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  image: string;
  href: string;
}

export interface LearningPathItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  coursesCount: number;
  image: string;
  href: string;
}

export interface UpcomingSessionItem {
  id: string;
  slug: string;
  day: string;
  month: string;
  title: string;
  format: string;
  time: string;
  href: string;
  registerHref: string;
}

export const skillBenefitsList: SkillBenefitItem[] = [
  {
    id: "industry-relevant",
    title: "Industry Relevant",
    description: "Courses aligned with real-world needs.",
    iconName: "Package",
    accentColor: "#6657FF",
  },
  {
    id: "hands-on-learning",
    title: "Hands-on Learning",
    description: "Practical projects, not just theories.",
    iconName: "GraduationCap",
    accentColor: "#168BFF",
  },
  {
    id: "expert-mentors",
    title: "Expert Mentors",
    description: "Learn from experienced professionals.",
    iconName: "Users",
    accentColor: "#A52BFF",
  },
];

export const popularCoursesList: PopularCourseItem[] = [
  {
    id: "full-stack-web-development",
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    description: "HTML, CSS, JavaScript, React, Node.js & more",
    badge: "Bestseller",
    level: "Beginner",
    lessons: 20,
    image: "/it.png",
    href: "/skill-hub/courses/full-stack-web-development",
  },
  {
    id: "ui-ux-design-masterclass",
    slug: "ui-ux-design-masterclass",
    title: "UI/UX Design Masterclass",
    description: "Design thinking, Figma, Prototyping",
    badge: "Trending",
    level: "Beginner",
    lessons: 18,
    image: "/design.png",
    href: "/skill-hub/courses/ui-ux-design-masterclass",
  },
  {
    id: "data-science-fundamentals",
    slug: "data-science-fundamentals",
    title: "Data Science Fundamentals",
    description: "Python, Data Analysis, ML Basics",
    badge: "Popular",
    level: "Intermediate",
    lessons: 20,
    image: "/services-bg.png",
    href: "/skill-hub/courses/data-science-fundamentals",
  },
];

export const learningPathsList: LearningPathItem[] = [
  {
    id: "web-developer",
    slug: "web-developer",
    title: "Web Developer Path",
    description: "Beginner to Advanced",
    coursesCount: 24,
    image: "/skills-hub-bg.png",
    href: "/skill-hub/paths/web-developer",
  },
  {
    id: "data-scientist",
    slug: "data-scientist",
    title: "Data Scientist Path",
    description: "Beginner to Advanced",
    coursesCount: 16,
    image: "/business.png",
    href: "/skill-hub/paths/data-scientist",
  },
  {
    id: "devops-engineer",
    slug: "devops-engineer",
    title: "DevOps Engineer Path",
    description: "Beginner to Advanced",
    coursesCount: 20,
    image: "/civil.png",
    href: "/skill-hub/paths/devops-engineer",
  },
];

export const upcomingSessionsList: UpcomingSessionItem[] = [
  {
    id: "building-scalable-apis-nodejs",
    slug: "building-scalable-apis-nodejs",
    day: "25",
    month: "MAY",
    title: "Building Scalable APIs with Node.js",
    format: "Live Workshop by KBS Experts",
    time: "07:00 PM IST",
    href: "/skill-hub/sessions/building-scalable-apis-nodejs",
    registerHref: "/skill-hub/sessions/building-scalable-apis-nodejs/register",
  },
  {
    id: "react-performance-optimization",
    slug: "react-performance-optimization",
    day: "28",
    month: "MAY",
    title: "React Performance Optimization",
    format: "Live Webinar",
    time: "07:00 PM IST",
    href: "/skill-hub/sessions/react-performance-optimization",
    registerHref: "/skill-hub/sessions/react-performance-optimization/register",
  },
  {
    id: "docker-for-developers",
    slug: "docker-for-developers",
    day: "30",
    month: "MAY",
    title: "Docker for Developers",
    format: "Hands-on Lab",
    time: "07:00 PM IST",
    href: "/skill-hub/sessions/docker-for-developers",
    registerHref: "/skill-hub/sessions/docker-for-developers/register",
  },
];
