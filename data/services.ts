export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: "Cpu" | "Bot" | "Cloud" | "Headphones" | "BarChart" | "Palette" | "ShieldCheck";
  accentColor: string;
  badgeBg: string;
  href: string;
}

export interface ShowcaseProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  iconType: string;
  accentColor: string;
  href: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  iconName: "Search" | "FileText" | "Palette" | "Code" | "ShieldCheck" | "Rocket";
  accentColor: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: string;
  iconType: string;
  brandColor: string;
}

export interface CaseStudySnapshotData {
  title: string;
  subtitle: string;
  description: string;
  metrics: {
    value: string;
    label: string;
  }[];
  href: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: "product-engineering",
    slug: "product-engineering",
    title: "Product Engineering",
    description: "Scalable web, mobile, and API platforms with modern architectures.",
    iconName: "Cpu",
    accentColor: "#6657FF",
    badgeBg: "rgba(102, 87, 255, 0.12)",
    href: "/services-products/product-engineering",
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Automation",
    description: "Intelligent automation, AI-driven agents, and workflow optimization.",
    iconName: "Bot",
    accentColor: "#D82DFF",
    badgeBg: "rgba(216, 45, 255, 0.12)",
    href: "/services-products/ai-automation",
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Robust infrastructure, CI/CD, and scalable cloud implementations.",
    iconName: "Cloud",
    accentColor: "#168BFF",
    badgeBg: "rgba(22, 139, 255, 0.12)",
    href: "/services-products/cloud-devops",
  },
  {
    id: "end-to-end-support",
    slug: "end-to-end-support",
    title: "End-to-End Support",
    description: "From ideation to launch and continuous support.",
    iconName: "Headphones",
    accentColor: "#FF9F1C",
    badgeBg: "rgba(255, 159, 28, 0.12)",
    href: "/services-products/end-to-end-support",
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data & Analytics",
    description: "Transform data into actionable insights with advanced analytics.",
    iconName: "BarChart",
    accentColor: "#00A8FF",
    badgeBg: "rgba(0, 168, 255, 0.12)",
    href: "/services-products/data-analytics",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UX / UI Design",
    description: "Human-centered design that creates beautiful, usable experiences.",
    iconName: "Palette",
    accentColor: "#00C9A7",
    badgeBg: "rgba(0, 201, 167, 0.12)",
    href: "/services-products/ui-ux-design",
  },
  {
    id: "qa-testing",
    slug: "qa-testing",
    title: "QA & Testing",
    description: "Quality engineering to ensure performance, security, and reliability.",
    iconName: "ShieldCheck",
    accentColor: "#A52BFF",
    badgeBg: "rgba(165, 43, 255, 0.12)",
    href: "/services-products/qa-testing",
  },
];

export const showcaseProducts: ShowcaseProduct[] = [
  {
    id: "finjo",
    name: "Finjo",
    category: "Fintech",
    description: "Fintech infrastructure for payments, payout, and business lending for enterprises.",
    image: "/it.png",
    iconType: "shield",
    accentColor: "#6657FF",
    href: "/about#case-studies",
  },
  {
    id: "desidukan",
    name: "DesiDukan",
    category: "Marketplace",
    description: "Hyperlocal multi-vendor marketplace connecting local stores and customers.",
    image: "/business.png",
    iconType: "store",
    accentColor: "#E52B2F",
    href: "/about#case-studies",
  },
  {
    id: "helyi",
    name: "Helyi",
    category: "Hyperlocal",
    description: "Hyperlocal commerce platform with multi-tenant architecture & scale.",
    image: "/services-bg.png",
    iconType: "map",
    accentColor: "#00A8FF",
    href: "/about#case-studies",
  },
  {
    id: "winwala",
    name: "WinWala",
    category: "Gaming",
    description: "Skill-based fantasy platform with rewards, leaderboards & real-time analytics.",
    image: "/skills-hub-bg.png",
    iconType: "trophy",
    accentColor: "#168BFF",
    href: "/about#case-studies",
  },
  {
    id: "creavo",
    name: "Creavo",
    category: "Studio",
    description: "Design platform enabling small businesses to create stunning brand experiences.",
    image: "/design.png",
    iconType: "sparkles",
    accentColor: "#A52BFF",
    href: "/about#case-studies",
  },
  {
    id: "nayaleader",
    name: "Naya Leader",
    category: "Civic Tech",
    description: "Political tech platform connecting leaders with their constituents.",
    image: "/civil.png",
    iconType: "award",
    accentColor: "#D82DFF",
    href: "/about#case-studies",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    stepNumber: "01",
    title: "Discovery",
    description: "Understand goals, users and challenges.",
    iconName: "Search",
    accentColor: "#6657FF",
  },
  {
    id: "strategy",
    stepNumber: "02",
    title: "Strategy",
    description: "Define roadmap and key outcomes.",
    iconName: "FileText",
    accentColor: "#168BFF",
  },
  {
    id: "design",
    stepNumber: "03",
    title: "Design",
    description: "Create experiences that delight.",
    iconName: "Palette",
    accentColor: "#00A8FF",
  },
  {
    id: "development",
    stepNumber: "04",
    title: "Development",
    description: "Build scalable and secure.",
    iconName: "Code",
    accentColor: "#D82DFF",
  },
  {
    id: "testing",
    stepNumber: "05",
    title: "Testing",
    description: "Ensure quality & performance.",
    iconName: "ShieldCheck",
    accentColor: "#A52BFF",
  },
  {
    id: "launch-support",
    stepNumber: "06",
    title: "Launch & Support",
    description: "Deploy and support for long-term wins.",
    iconName: "Rocket",
    accentColor: "#FF9F1C",
  },
];

export const techStack: TechItem[] = [
  { id: "react", name: "React", category: "Frontend", iconType: "react", brandColor: "#61DAFB" },
  { id: "nextjs", name: "Next.js", category: "Framework", iconType: "nextjs", brandColor: "#111827" },
  { id: "nodejs", name: "Node.js", category: "Backend", iconType: "nodejs", brandColor: "#339933" },
  { id: "python", name: "Python", category: "AI & ML", iconType: "python", brandColor: "#3776AB" },
  { id: "dotnet", name: ".NET", category: "Enterprise", iconType: "dotnet", brandColor: "#512BD4" },
  { id: "aws", name: "AWS", category: "Cloud", iconType: "aws", brandColor: "#FF9900" },
  { id: "docker", name: "Docker", category: "DevOps", iconType: "docker", brandColor: "#2496ED" },
  { id: "kubernetes", name: "Kubernetes", category: "DevOps", iconType: "kubernetes", brandColor: "#326CE5" },
];

export const caseStudyData: CaseStudySnapshotData = {
  title: "Finjo — Fintech Infrastructure",
  subtitle: "CASE STUDY SNAPSHOT",
  description:
    "Built a secure and scalable fintech platform handling government payouts, BNPL and business lending for enterprises.",
  metrics: [
    { value: "99.9%", label: "Uptime" },
    { value: "10M+", label: "Transactions" },
    { value: "40%", label: "Faster Processing" },
  ],
  href: "/about#case-studies",
};
