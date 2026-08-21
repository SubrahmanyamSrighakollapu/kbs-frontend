export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  iconName: "Code" | "Target" | "UserCheck";
}

export interface PurposeCard {
  id: string;
  title: string;
  description: string;
  iconName: "Eye" | "Rocket";
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  isLatest?: boolean;
}

export interface AboutStatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface GroupAdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: "Building" | "Layers" | "PackageCheck" | "TrendingUp";
}

export const strengthItems: StrengthItem[] = [
  {
    id: "engineering-depth",
    title: "Engineering Depth",
    description: "Deep technical expertise across modern technologies.",
    iconName: "Code",
  },
  {
    id: "business-understanding",
    title: "Business Understanding",
    description: "We build solutions aligned with real business goals.",
    iconName: "Target",
  },
  {
    id: "product-mindset",
    title: "Product Mindset",
    description: "We drive beyond code to impact real usability.",
    iconName: "UserCheck",
  },
];

export const purposeCards: PurposeCard[] = [
  {
    id: "vision",
    title: "Vision",
    description:
      "To be the technology partner businesses turn to first — building systems dependable enough to run on, and flexible enough to grow with.",
    iconName: "Eye",
  },
  {
    id: "mission",
    title: "Mission",
    description:
      "To deliver well-engineered, scalable digital products that solve real operational problems — on time, and built to last past the first release.",
    iconName: "Rocket",
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "KBS IT was founded with a mission to solve real business problems with technology.",
  },
  {
    year: "2022",
    title: "Building Foundations",
    description:
      "Engineered core products in fintech, commerce & enterprise platforms.",
  },
  {
    year: "2023",
    title: "Scaling Impact",
    description:
      "Expanded into new industries and strengthened product capabilities.",
  },
  {
    year: "2024+",
    title: "Future Ready",
    description:
      "Continuing to innovate and build solutions that scale globally.",
    isLatest: true,
  },
];

export const aboutStats: AboutStatItem[] = [
  { id: "products", value: 50, suffix: "+", label: "Products Delivered" },
  { id: "clients", value: 100, suffix: "+", label: "Happy Clients" },
  { id: "industries", value: 6, suffix: "+", label: "Industries Served" },
  { id: "cities", value: 20, suffix: "+", label: "Cities Reached" },
];

export const groupAdvantages: GroupAdvantageItem[] = [
  {
    id: "group-strength",
    title: "Group Strength",
    description: "Backed by the strength and legacy of KBS Group.",
    iconName: "Building",
  },
  {
    id: "cross-industry",
    title: "Cross-Industry Knowledge",
    description: "Learning from every industry we serve.",
    iconName: "Layers",
  },
  {
    id: "end-to-end",
    title: "End-to-End Ownership",
    description: "From idea to launch and beyond.",
    iconName: "PackageCheck",
  },
  {
    id: "built-long-run",
    title: "Built for the Long Run",
    description: "Solutions that grow with your business.",
    iconName: "TrendingUp",
  },
];
