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
  iconName: "CheckCircle2" | "ShieldCheck" | "Layers" | "TrendingUp" | "HeartHandshake";
  accentColor: string;
  badgeBg: string;
}

export interface IndustryServed {
  id: string;
  title: string;
  description: string;
  iconName: "CreditCard" | "ShoppingBag" | "Vote" | "Activity" | "Building2" | "GraduationCap";
  accentColor: string;
}

export interface BuiltProductCategory {
  id: string;
  category: string;
  tagline: string;
  description: string;
  products?: string[];
  iconName: "ShieldCheck" | "Store" | "Trophy" | "Landmark" | "HeartPulse" | "HardHat";
  accentColor: string;
}

export const aboutHeroData = {
  titlePrefix: "Technology That Moves",
  titleHighlight: "Your Business Forward",
  description:
    "We design, build, and scale digital products — from fintech platforms to hyperlocal marketplaces — with the reliability of a group that's been solving hard technical problems since 2021.",
  whoWeAre:
    "KBS Information Technology is the technology arm of KBS Group, building software that runs real businesses — not demo-ware. Since 2021, we've engineered products across payments, commerce, civic-tech, and consumer platforms, giving us a rare mix: engineering depth paired with an owner's understanding of what actually drives a business.",
  closingCtaTitle: "Ready to Build Something That Lasts?",
  closingCtaDescription:
    "Let's talk about where technology can remove friction from your business — a new product, a platform overhaul, or infrastructure that's overdue for an upgrade.",
};

export const strengthItems: StrengthItem[] = [
  {
    id: "engineering-depth",
    title: "Engineering Depth",
    description: "Deep technical expertise across modern architectures and cloud platforms.",
    iconName: "Code",
    accentColor: "#6657FF",
  },
  {
    id: "business-understanding",
    title: "Owner's Understanding",
    description: "Engineering depth paired with what actually drives business performance.",
    iconName: "Target",
    accentColor: "#168BFF",
  },
  {
    id: "product-mindset",
    title: "Built to Scale",
    description: "Architectural decisions engineered for long-term growth from day one.",
    iconName: "RefreshCw",
    accentColor: "#A52BFF",
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
    iconName: "Target",
  },
];

export const industriesServed: IndustryServed[] = [
  {
    id: "fintech",
    title: "Fintech & Financial Services",
    description: "Payments, lending, BNPL, and business finance infrastructure built for enterprise scale.",
    iconName: "CreditCard",
    accentColor: "#6657FF",
  },
  {
    id: "commerce",
    title: "Hyperlocal Commerce & Retail",
    description: "Multi-vendor marketplaces, grocery platforms, and SMB retail store solutions.",
    iconName: "ShoppingBag",
    accentColor: "#168BFF",
  },
  {
    id: "civic-tech",
    title: "Civic & Political Technology",
    description: "Voter engagement, constituency management, and campaign platforms.",
    iconName: "Vote",
    accentColor: "#D82DFF",
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    description: "Dietitian-led nutrition coaching and structured B2B2C wellness platforms.",
    iconName: "Activity",
    accentColor: "#00C9A7",
  },
  {
    id: "construction",
    title: "Construction & Engineering",
    description: "AI-driven drawing analysis and automated architectural RFI generation tools.",
    iconName: "Building2",
    accentColor: "#FF9F1C",
  },
  {
    id: "skill-development",
    title: "Skill Development & Education",
    description: "Industry-oriented training in software engineering and civil design software.",
    iconName: "GraduationCap",
    accentColor: "#A52BFF",
  },
];

export const whatWeHaveBuilt: BuiltProductCategory[] = [
  {
    id: "fintech-finjo",
    category: "Fintech",
    tagline: "Under Finjo (Financial Services Vertical)",
    description:
      "We've engineered infrastructure for payment gateways, payouts, buy-now-pay-later (BNPL), and business lending — giving enterprises the rails to move and access money without stitching together third-party tools.",
    products: ["Finjo Payment Gateway", "Payout Infrastructure", "Retail BNPL", "Business Lending Rails"],
    iconName: "ShieldCheck",
    accentColor: "#6657FF",
  },
  {
    id: "commerce",
    category: "Commerce",
    tagline: "Hyperlocal Marketplace Platforms",
    description:
      "We've built hyperlocal, multi-tenant marketplace platforms (Desi Dukan, Helyi) connecting local grocery stores, restaurants, and service providers to nearby customers, complete with franchise, regional-manager, and admin hierarchies for scale.",
    products: ["Desi Dukan", "Helyi", "Franchise & Admin Portals"],
    iconName: "Store",
    accentColor: "#168BFF",
  },
  {
    id: "retail-tech",
    category: "Retail Tech",
    tagline: "Gamified Loyalty & Marketing Automation",
    description:
      "WinWala brings gamified loyalty — spin wheels, stamp cards, VIP tiers — to Indian SMB retailers, while Creavo gives small businesses an easy way to design their own marketing creatives.",
    products: ["WinWala", "Creavo Studio"],
    iconName: "Trophy",
    accentColor: "#A52BFF",
  },
  {
    id: "civic-tech",
    category: "Civic Tech",
    tagline: "Political & Constituency Platforms",
    description:
      "Naya Leader is a political technology platform built for the Andhra Pradesh–Telangana ecosystem, connecting leaders with their constituencies seamlessly.",
    products: ["Naya Leader Platform"],
    iconName: "Landmark",
    accentColor: "#D82DFF",
  },
  {
    id: "health-tech",
    category: "Health Tech",
    tagline: "Dietitian-Client Wellness",
    description:
      "A dietitian-client wellness platform bringing structured, B2B2C nutrition coaching online with progress tracking and personalized meal plans.",
    products: ["B2B2C Wellness Platform"],
    iconName: "HeartPulse",
    accentColor: "#00C9A7",
  },
  {
    id: "construction-tech",
    category: "Construction Tech",
    tagline: "AI-Driven Document Automation",
    description:
      "An AI-driven platform that reads and cross-compares architectural and structural drawings, auto-generating RFIs to cut down manual review time.",
    products: ["AI Drawing RFI Analyzer"],
    iconName: "HardHat",
    accentColor: "#FF9F1C",
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "KBS IT was founded with a mission to blend real operational business problems with scalable software.",
  },
  {
    year: "2022",
    title: "Building Foundations",
    description:
      "Engineered core products across fintech (Finjo), commerce (Desi Dukan, Helyi), and enterprise platforms.",
  },
  {
    year: "2023",
    title: "Scaling Impact",
    description:
      "Expanded into retail tech (WinWala, Creavo), civic tech (Naya Leader), and construction AI tools.",
  },
  {
    year: "2024+",
    title: "Future Ready",
    description:
      "Continuing to scale SaaS automation products, BNPL infrastructure, and industry-oriented Skill Hub programs.",
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
    id: "built-not-advised",
    title: "Built, Not Just Advised",
    description: "Every solution above is a product we've engineered end-to-end, not a slide deck.",
    iconName: "CheckCircle2",
    accentColor: "#6657FF",
    badgeBg: "rgba(102, 87, 255, 0.1)",
  },
  {
    id: "group-backed-stability",
    title: "Group-Backed Stability",
    description: "Part of KBS Group: One Group, Every Solution.",
    iconName: "ShieldCheck",
    accentColor: "#168BFF",
    badgeBg: "rgba(22, 139, 255, 0.1)",
  },
  {
    id: "cross-industry-fluency",
    title: "Cross-Industry Fluency",
    description: "From fintech to construction, we bring patterns learned in one vertical to solve problems in another.",
    iconName: "Layers",
    accentColor: "#A52BFF",
    badgeBg: "rgba(165, 43, 255, 0.1)",
  },
  {
    id: "built-to-scale",
    title: "Built to Scale",
    description: "Architecture decisions made for growth from day one.",
    iconName: "TrendingUp",
    accentColor: "#D82DFF",
    badgeBg: "rgba(216, 45, 255, 0.1)",
  },
  {
    id: "we-stay",
    title: "We Stay",
    description: "Support and iteration are part of the engagement, not an afterthought.",
    iconName: "HeartHandshake",
    accentColor: "#FF9F1C",
    badgeBg: "rgba(255, 159, 28, 0.1)",
  },
];
