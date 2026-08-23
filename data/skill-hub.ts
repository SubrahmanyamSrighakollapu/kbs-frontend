export interface SkillBenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: "UserCheck" | "Building2" | "Layers" | "ShieldCheck" | "Briefcase";
  accentColor: string;
}

export interface SkillOfferItem {
  id: string;
  title: string;
  description: string;
  iconName: "Code" | "HardHat" | "Users" | "Target";
  accentColor: string;
  badge: string;
}

export interface PopularCourseItem {
  id: string;
  slug: string;
  title: string;
  category: "IT Software" | "Civil Engineering" | "Design & AI";
  description: string;
  badge: "Bestseller" | "Trending" | "Live Project";
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

export const skillHubHeroData = {
  titlePrefix: "Bridging the Gap Between",
  titleHighlight: "Classrooms and Careers",
  description:
    "KBS Skill Hub trains students in the skills the industry is actually hiring for — IT and Civil software, taught with subject-oriented depth by professionals who work in these fields every day.",
  primaryCtaText: "Explore Our Programs",
  secondaryCtaText: "Talk to Our Team",
  whoWeAre:
    "KBS Skill Hub is the skill development vertical of KBS Group, built to close a gap we see across the industry firsthand: students graduate with degrees, but not always with the practical, tool-level skills employers need on day one. Backed by a group that actively runs IT and Civil Engineering businesses, we don't teach from theory alone — we teach what our own industry colleagues look for when they hire.",
  vision:
    "To close the gap between academic education and industry readiness, so no student is left having to learn on the job what they should have learned in training.",
  mission:
    "To deliver focused, subject-oriented training in IT and Civil software — led by working industry experts — that leaves students genuinely employable, not just certified.",
  gapAddress:
    "Most students step out of college with strong fundamentals but little exposure to the actual software, workflows, and tools used on real projects. Employers, in turn, spend months onboarding fresh graduates before they become productive. KBS Skill Hub sits directly in that gap — training students on real industry software, with real industry context, before they ever walk into their first job.",
  closingCtaTitle: "Ready to Close Your Own Skill Gap?",
  closingCtaDescription:
    "Whether you're a student aiming for a career in IT or Civil software, or a business looking for industry-ready talent — let's talk about training built around what the industry actually needs.",
};

export const whatWeOfferList: SkillOfferItem[] = [
  {
    id: "it-training",
    title: "IT Software Training",
    description:
      "Subject-oriented, hands-on training in software development, cloud, and IT tools — designed around what employers in the KBS Group ecosystem and the broader tech industry are actively hiring for.",
    iconName: "Code",
    accentColor: "#6657FF",
    badge: "IT & Software Engineering",
  },
  {
    id: "civil-software-training",
    title: "Civil Software Training",
    description:
      "Practical training on the civil and structural engineering software used in real project workflows — the exact same tools our own Civil Engineering Services vertical uses on live projects.",
    iconName: "HardHat",
    accentColor: "#FF9F1C",
    badge: "Civil & Structural Design",
  },
  {
    id: "industry-expert-instruction",
    title: "Industry-Expert-Led Instruction",
    description:
      "Every program is taught by working professionals in the field, not instructors teaching from a textbook alone — so students learn the tools, shortcuts, and standards that actually matter on the job.",
    iconName: "Users",
    accentColor: "#168BFF",
    badge: "Practitioner Led",
  },
  {
    id: "subject-oriented-specialization",
    title: "Subject-Oriented Specialization",
    description:
      "Rather than broad, generic courses, our training goes deep on specific subjects and software — giving students focused, job-ready expertise instead of a scattered overview.",
    iconName: "Target",
    accentColor: "#D82DFF",
    badge: "Deep Expertise",
  },
];

export const whyKbsSkillHubList: SkillBenefitItem[] = [
  {
    id: "industry-led",
    title: "Industry-Led, Not Textbook-Led",
    description: "Trainers are working professionals actively engineering projects, not disconnected from the field.",
    iconName: "UserCheck",
    accentColor: "#6657FF",
  },
  {
    id: "group-backed-insight",
    title: "Group-Backed Real-World Insight",
    description: "Direct visibility into what KBS's own IT and Civil Engineering verticals need from new hires.",
    iconName: "Building2",
    accentColor: "#168BFF",
  },
  {
    id: "subject-oriented-depth",
    title: "Subject-Oriented Depth",
    description: "Focused, tool-level mastery over broad, shallow course coverage.",
    iconName: "Layers",
    accentColor: "#A52BFF",
  },
  {
    id: "group-backed-stability",
    title: "Group-Backed Stability",
    description: "Part of KBS Group: One Group, Every Solution.",
    iconName: "ShieldCheck",
    accentColor: "#D82DFF",
  },
  {
    id: "built-for-employability",
    title: "Built for Employability",
    description: "The goal isn't just a certificate — it's a genuinely job-ready skill set.",
    iconName: "Briefcase",
    accentColor: "#FF9F1C",
  },
];

export const popularCoursesList: PopularCourseItem[] = [
  {
    id: "full-stack-web-development",
    slug: "full-stack-web-development",
    title: "Full Stack Web & API Engineering",
    category: "IT Software",
    description: "HTML, CSS, JavaScript, React, Node.js, Next.js & REST API architecture",
    badge: "Bestseller",
    level: "Beginner",
    lessons: 24,
    image: "/it.png",
    href: "/skill-hub/courses/full-stack-web-development",
  },
  {
    id: "civil-structural-design-autocad",
    slug: "civil-structural-design-autocad",
    title: "Civil & Structural Design Software",
    category: "Civil Engineering",
    description: "AutoCAD, STAAD Pro, REVIT Structure & live civil drafting workflows",
    badge: "Live Project",
    level: "Intermediate",
    lessons: 28,
    image: "/civil.png",
    href: "/skill-hub/courses/civil-structural-design-autocad",
  },
  {
    id: "ui-ux-design-masterclass",
    slug: "ui-ux-design-masterclass",
    title: "UI/UX & Product Design Masterclass",
    category: "Design & AI",
    description: "Design systems, Figma prototyping, user research & usability testing",
    badge: "Trending",
    level: "Beginner",
    lessons: 18,
    image: "/design.png",
    href: "/skill-hub/courses/ui-ux-design-masterclass",
  },
];

export const learningPathsList: LearningPathItem[] = [
  {
    id: "web-developer",
    slug: "web-developer",
    title: "Web & API Developer Path",
    description: "Beginner to Advanced",
    coursesCount: 24,
    image: "/skills-hub-bg.png",
    href: "/skill-hub/paths/web-developer",
  },
  {
    id: "civil-engineer-designer",
    slug: "civil-engineer-designer",
    title: "Civil Software & Structural Path",
    description: "AutoCAD, REVIT & STAAD Pro",
    coursesCount: 16,
    image: "/civil.png",
    href: "/skill-hub/paths/civil-engineer-designer",
  },
  {
    id: "devops-engineer",
    slug: "devops-engineer",
    title: "Cloud & DevOps Path",
    description: "Docker, AWS & CI/CD Pipelines",
    coursesCount: 20,
    image: "/business.png",
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
    format: "Live Workshop by KBS Engineers",
    time: "07:00 PM IST",
    href: "/skill-hub/sessions/building-scalable-apis-nodejs",
    registerHref: "/skill-hub/sessions/building-scalable-apis-nodejs/register",
  },
  {
    id: "civil-structural-drawing-workflows",
    slug: "civil-structural-drawing-workflows",
    day: "28",
    month: "MAY",
    title: "Civil & Structural Drawing Automation Workflows",
    format: "Live Workshop by KBS Civil Experts",
    time: "07:00 PM IST",
    href: "/skill-hub/sessions/civil-structural-drawing-workflows",
    registerHref: "/skill-hub/sessions/civil-structural-drawing-workflows/register",
  },
  {
    id: "docker-for-developers",
    slug: "docker-for-developers",
    day: "30",
    month: "MAY",
    title: "Docker & Cloud Deployment for Developers",
    format: "Hands-on Lab",
    time: "07:00 PM IST",
    href: "/skill-hub/sessions/docker-for-developers",
    registerHref: "/skill-hub/sessions/docker-for-developers/register",
  },
];
