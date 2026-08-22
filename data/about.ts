export interface StrengthItem {
  id: string;
  title: string;
  description: string;
  iconName: "Code" | "Target" | "RefreshCw";
  accentColor: string;
}

export interface PurposeCard {
  id: string;
  title: string;
  description: string;
  iconName: "Eye" | "Target";
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
  iconName: "PackageCheck" | "Users" | "Globe" | "MapPin";
}

export interface GroupAdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: "Users" | "GraduationCap" | "Handshake" | "Rocket" | "Star";
  accentColor: string;
  badgeBg: string;
}

export const strengthItems: StrengthItem[] = [
  {
    id: "engineering-depth",
    title: "Engineering Depth",
    description: "Deep technical expertise across modern technologies.",
    iconName: "Code",
    accentColor: "#6657FF",
  },
  {
    id: "business-understanding",
    title: "Business Understanding",
    description: "We build solutions aligned with real business goals.",
    iconName: "Target",
    accentColor: "#168BFF",
  },
  {
    id: "product-mindset",
    title: "Product Mindset",
    description: "We solve beyond code to impact real usability.",
    iconName: "RefreshCw",
    accentColor: "#A52BFF",
  },
];

export const purposeCards: PurposeCard[] = [
  {
    id: "vision",
    title: "Vision",
    description:
      "To be the technology partner businesses turn to first — building software dependable enough to run on, and flexible enough to grow with.",
    iconName: "Eye",
  },
  {
    id: "mission",
    title: "Mission",
    description:
      "To deliver well-engineered, scalable digital products that solve real operational problems — on time, and built to last past the first release.",
    iconName: "Target",
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "KBS IT was founded with a mission to blend real business problems with technology.",
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
      "Expanded to new industries and strengthened product capabilities.",
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
  { id: "products", value: 50, suffix: "+", label: "Products Delivered", iconName: "PackageCheck" },
  { id: "clients", value: 100, suffix: "+", label: "Happy Clients", iconName: "Users" },
  { id: "industries", value: 6, suffix: "+", label: "Industries Served", iconName: "Globe" },
  { id: "cities", value: 20, suffix: "+", label: "Cities Reached", iconName: "MapPin" },
];

export const groupAdvantages: GroupAdvantageItem[] = [
  {
    id: "group-strength",
    title: "Group Strength",
    description: "Backed by the expertise and legacy of KBS Group.",
    iconName: "Users",
    accentColor: "#A52BFF",
    badgeBg: "rgba(165, 43, 255, 0.1)",
  },
  {
    id: "cross-industry",
    title: "Cross-Industry Knowledge",
    description: "Learning from every industry we serve.",
    iconName: "GraduationCap",
    accentColor: "#6657FF",
    badgeBg: "rgba(102, 87, 255, 0.1)",
  },
  {
    id: "end-to-end",
    title: "End-to-End Ownership",
    description: "From idea to launch and beyond.",
    iconName: "Handshake",
    accentColor: "#D82DFF",
    badgeBg: "rgba(216, 45, 255, 0.1)",
  },
  {
    id: "built-long-run",
    title: "Built for the Long Run",
    description: "Solutions that grow with your business.",
    iconName: "Rocket",
    accentColor: "#168BFF",
    badgeBg: "rgba(22, 139, 255, 0.1)",
  },
  {
    id: "client-first",
    title: "Client First",
    description: "Our client's success is our success.",
    iconName: "Star",
    accentColor: "#FF9F1C",
    badgeBg: "rgba(255, 159, 28, 0.1)",
  },
];

