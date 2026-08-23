export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: "Cpu" | "Bot" | "Cloud" | "Headphones" | "BarChart" | "Palette" | "ShieldCheck" | "Zap" | "CreditCard";
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

export interface AutomationSaaSCategory {
  id: string;
  categoryTitle: string;
  items: {
    name: string;
    description: string;
    badge?: string;
  }[];
  iconName: "ShoppingBag" | "Globe" | "Activity" | "FileCode";
  accentColor: string;
}

export interface FinancialOfferItem {
  id: string;
  title: string;
  description: string;
  iconName: "ShieldCheck" | "Send" | "Sparkles" | "Banknote";
  accentColor: string;
}

export interface WhyUsPillar {
  id: string;
  title: string;
  description: string;
  iconName: "CheckCircle2" | "Zap" | "ShieldCheck" | "Layers" | "RefreshCw";
  accentColor: string;
}

// Main Services Hero & Copy Data
export const servicesHeroData = {
  titlePrefix: "Software & Digital Products",
  titleHighlight: "Engineered for Growth",
  description:
    "We build software products that solve real operational problems and scale with your business — from financial infrastructure to automated SaaS tools.",
};

// Automation & SaaS Vertical Data
export const automationSaaSData = {
  slug: "business-automation-saas",
  title: "KBS Business Automation & SaaS Products",
  heroTitlePrefix: "Software That Runs",
  heroTitleHighlight: "While You Sleep",
  heroDescription:
    "We build automation tools and SaaS products that take repetitive, manual work off your team's plate — so people spend time on decisions, not data entry.",
  whoWeAre:
    "KBS Business Automation Tools is the product engineering vertical of KBS Group, focused on one problem: businesses lose time and money to manual, repeatable processes. We design SaaS tools and automation systems that plug straight into how a business already works — retail, marketing, monitoring, or project delivery — and quietly remove the busywork.",
  vision:
    "To make automation something every business can access — not just enterprises with big IT budgets — by building tools that are simple to adopt and fast to see value from.",
  mission:
    "To design and deliver SaaS products and automation systems that cut manual effort, reduce errors, and give business owners real-time visibility into what's happening in their operations.",
  categories: [
    {
      id: "retail-marketing",
      categoryTitle: "Retail & Marketing Automation",
      iconName: "ShoppingBag",
      accentColor: "#6657FF",
      items: [
        {
          name: "WinWala",
          description:
            "A store gamification and loyalty engine for SMB retailers: spin wheels, stamp cards, and VIP tiers that run automatically, turning one-time buyers into repeat customers without manual campaign management.",
          badge: "Live Retail SaaS",
        },
        {
          name: "Creavo",
          description:
            "A self-serve poster and marketing design platform, letting small business owners generate on-brand creatives in minutes instead of briefing a designer every time.",
          badge: "Self-Serve Studio",
        },
      ],
    },
    {
      id: "digital-presence",
      categoryTitle: "Website & Digital Presence",
      iconName: "Globe",
      accentColor: "#168BFF",
      items: [
        {
          name: "AI-Powered Static Website Builder",
          description:
            "Automated site generation and deployment pipeline, so businesses can stand up a professional web presence without hiring a dev team for every update.",
          badge: "AI Web Builder",
        },
      ],
    },
    {
      id: "operations-monitoring",
      categoryTitle: "Operations & Monitoring",
      iconName: "Activity",
      accentColor: "#00C9A7",
      items: [
        {
          name: "SCADA / Central Monitoring System",
          description:
            "Automation and monitoring infrastructure for tracking operational systems and facility metrics in real time.",
          badge: "Real-Time SCADA",
        },
        {
          name: "Custom Project Management Tooling",
          description:
            "Structured tracking systems built to bring visibility and accountability to complex project delivery.",
          badge: "Enterprise PM",
        },
      ],
    },
    {
      id: "engineering-document",
      categoryTitle: "Engineering & Document Automation",
      iconName: "FileCode",
      accentColor: "#FF9F1C",
      items: [
        {
          name: "AI-Driven Drawing Analysis Platform",
          description:
            "Reads and cross-compares architectural and structural drawings and auto-generates RFIs, replacing hours of manual document review with minutes.",
          badge: "Construction AI",
        },
      ],
    },
  ] as AutomationSaaSCategory[],
  whyUs: [
    {
      id: "real-operations",
      title: "Built for Real Operations",
      description: "Every product started as a solution to an actual operational bottleneck, not a feature checklist.",
      iconName: "CheckCircle2",
      accentColor: "#6657FF",
    },
    {
      id: "fast-adopt",
      title: "Fast to Adopt",
      description: "Designed for SMBs and growing teams, not months-long enterprise rollouts.",
      iconName: "Zap",
      accentColor: "#168BFF",
    },
    {
      id: "group-backed",
      title: "Group-Backed Stability",
      description: "Part of KBS Group: One Group, Every Solution.",
      iconName: "ShieldCheck",
      accentColor: "#A52BFF",
    },
    {
      id: "cross-vertical",
      title: "Cross-Vertical Insight",
      description: "Patterns from fintech, construction, and retail feed into every automation tool we build.",
      iconName: "Layers",
      accentColor: "#D82DFF",
    },
    {
      id: "we-iterate",
      title: "We Iterate",
      description: "Our products evolve with ongoing support, not a one-time handoff.",
      iconName: "RefreshCw",
      accentColor: "#FF9F1C",
    },
  ] as WhyUsPillar[],
  closingCtaTitle: "Ready to Automate the Busywork?",
  closingCtaDescription:
    "Let's find the process in your business that's eating the most hours — and talk about the tool that could take it off your plate.",
};

// Financial Services Vertical Data
export const financialServicesData = {
  slug: "financial-services",
  title: "Financial Services (Finjo)",
  heroTitlePrefix: "Financial Power for",
  heroTitleHighlight: "Every Business Owner",
  heroDescription:
    "KBS Financial Services is the fintech vertical of KBS Group, building the financial infrastructure that lets business owners — from the neighborhood retailer to the growing enterprise — access money, move money, and grow with money, without the friction of traditional banking.",
  whoWeAre:
    "KBS Financial Services exists to close the gap between what small and mid-sized business owners need financially and what traditional financial institutions are built to offer them. As the financial services vertical of KBS Group, we design payment, credit, and lending infrastructure with one audience in mind: business owners who've been underserved by conventional finance — and who deserve better.",
  vision:
    "To make sophisticated financial infrastructure accessible to every business owner — not just the largest ones — so that access to capital and payments is never the reason a good business stays small.",
  mission:
    "To deliver reliable, easy-to-adopt financial services — payments, credit, and lending — built around how small and mid-sized businesses actually operate, so owners spend less time chasing cash flow and more time running their business.",
  offers: [
    {
      id: "payment-gateway",
      title: "Payment Gateway Services",
      description:
        "Secure, reliable payment collection infrastructure that lets business owners accept payments the way their customers want to pay — built for uptime and built for scale.",
      iconName: "ShieldCheck",
      accentColor: "#6657FF",
    },
    {
      id: "payout-services",
      title: "Payout Services",
      description:
        "Fast, dependable disbursement infrastructure for businesses that need to pay out vendors, partners, or employees without manual, delay-prone processes.",
      iconName: "Send",
      accentColor: "#168BFF",
    },
    {
      id: "bnpl-retail",
      title: "Buy Now, Pay Later (BNPL)",
      description:
        "We're rolling out BNPL specifically for mid and small retail business owners — giving them the ability to offer flexible payment options to their customers, drive higher order values, and stay competitive with larger retail chains, all without carrying the credit risk themselves.",
      iconName: "Sparkles",
      accentColor: "#D82DFF",
    },
    {
      id: "business-loans",
      title: "Business Loans",
      description:
        "Lending built for business owners who don't fit the paperwork-heavy mold of traditional bank loans — faster access to working capital, sized and structured around real business cash flow.",
      iconName: "Banknote",
      accentColor: "#00C9A7",
    },
  ] as FinancialOfferItem[],
  whatsNext:
    "We're expanding BNPL access to mid and small retail business owners as a core focus — putting a financing tool once reserved for large retailers directly into the hands of neighborhood and growing businesses. Alongside this, we're introducing a new set of financial services designed specifically around what business owners actually need day-to-day — not repackaged consumer products, but tools built for the realities of running a business.",
  whyUs: [
    {
      id: "business-owners-first",
      title: "Built for Business Owners, Not Just Banks",
      description: "Every product starts from the business owner's cash-flow reality.",
      iconName: "CheckCircle2",
      accentColor: "#6657FF",
    },
    {
      id: "retail-bnpl",
      title: "Retail-First BNPL",
      description: "Designed to help small and mid-sized retailers compete, not just process payments.",
      iconName: "Zap",
      accentColor: "#168BFF",
    },
    {
      id: "group-backed-fin",
      title: "Group-Backed Stability",
      description: "Part of KBS Group: One Group, Every Solution.",
      iconName: "ShieldCheck",
      accentColor: "#A52BFF",
    },
    {
      id: "full-stack-fin",
      title: "Full-Stack Financial Infrastructure",
      description: "Payments, payouts, credit, and lending under one trusted partner.",
      iconName: "Layers",
      accentColor: "#D82DFF",
    },
    {
      id: "grow-with-you",
      title: "Built to Grow With You",
      description: "Services designed to scale as a business scales, not products that get outgrown.",
      iconName: "RefreshCw",
      accentColor: "#FF9F1C",
    },
  ] as WhyUsPillar[],
  closingCtaTitle: "Ready to Put Financial Power Behind Your Business?",
  closingCtaDescription:
    "Whether it's accepting payments, offering BNPL to your customers, or accessing capital to grow — let's talk about the financial infrastructure that moves your business forward.",
};

export const servicesList: ServiceItem[] = [
  {
    id: "financial-services",
    slug: "financial-services",
    title: "Financial Services (Finjo)",
    description: "Payments gateway, payouts, BNPL for SMB retailers, and cash-flow backed business lending.",
    iconName: "CreditCard",
    accentColor: "#6657FF",
    badgeBg: "rgba(102, 87, 255, 0.12)",
    href: "/services-products/financial-services",
  },
  {
    id: "business-automation-saas",
    slug: "business-automation-saas",
    title: "Automation & SaaS Products",
    description: "WinWala loyalty engine, Creavo studio, AI site builder, SCADA monitoring & AI document RFIs.",
    iconName: "Zap",
    accentColor: "#D82DFF",
    badgeBg: "rgba(216, 45, 255, 0.12)",
    href: "/services-products/business-automation-saas",
  },
  {
    id: "product-engineering",
    slug: "product-engineering",
    title: "Product Engineering",
    description: "Custom web, mobile, marketplace platforms & API infrastructure engineered for scale.",
    iconName: "Cpu",
    accentColor: "#168BFF",
    badgeBg: "rgba(22, 139, 255, 0.12)",
    href: "/services-products/product-engineering",
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Document Automation",
    description: "AI drawing analysis, automated RFI generation, and workflow optimization.",
    iconName: "Bot",
    accentColor: "#00C9A7",
    badgeBg: "rgba(0, 201, 167, 0.12)",
    href: "/services-products/ai-automation",
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Robust cloud architecture, automated CI/CD pipelines, and high availability hosting.",
    iconName: "Cloud",
    accentColor: "#A52BFF",
    badgeBg: "rgba(165, 43, 255, 0.12)",
    href: "/services-products/cloud-devops",
  },
  {
    id: "end-to-end-support",
    slug: "end-to-end-support",
    title: "End-to-End Support & Scale",
    description: "Product strategy, continuous iteration, maintenance, and multi-tenant scaling.",
    iconName: "Headphones",
    accentColor: "#FF9F1C",
    badgeBg: "rgba(255, 159, 28, 0.12)",
    href: "/services-products/end-to-end-support",
  },
];

export const showcaseProducts: ShowcaseProduct[] = [
  {
    id: "finjo",
    name: "Finjo",
    category: "Fintech",
    description: "Payment gateway, payouts, retail BNPL, and business lending infrastructure for enterprises & SMBs.",
    image: "/it.png",
    iconType: "shield",
    accentColor: "#6657FF",
    href: "/services-products/financial-services",
  },
  {
    id: "winwala",
    name: "WinWala",
    category: "Retail Loyalty SaaS",
    description: "Automated store gamification — spin wheels, stamp cards & VIP tiers — turning one-time buyers into repeat customers.",
    image: "/skills-hub-bg.png",
    iconType: "trophy",
    accentColor: "#168BFF",
    href: "/services-products/business-automation-saas",
  },
  {
    id: "creavo",
    name: "Creavo",
    category: "Design Studio SaaS",
    description: "Self-serve poster and marketing creative generator empowering SMB retailers to design on-brand graphics.",
    image: "/design.png",
    iconType: "sparkles",
    accentColor: "#A52BFF",
    href: "/services-products/business-automation-saas",
  },
  {
    id: "desidukan",
    name: "Desi Dukan & Helyi",
    category: "Hyperlocal Commerce",
    description: "Multi-tenant marketplace connecting grocery stores, restaurants, and service providers to nearby customers.",
    image: "/business.png",
    iconType: "store",
    accentColor: "#E52B2F",
    href: "/services-products/product-engineering",
  },
  {
    id: "nayaleader",
    name: "Naya Leader",
    category: "Civic Tech",
    description: "Political tech platform built for the AP–Telangana ecosystem, connecting leaders with their constituents.",
    image: "/civil.png",
    iconType: "award",
    accentColor: "#D82DFF",
    href: "/services-products/product-engineering",
  },
  {
    id: "ai-rfi-drawing",
    name: "AI Drawing RFI Analyzer",
    category: "Construction AI",
    description: "Reads and cross-compares architectural and structural drawings to auto-generate RFIs and cut review time.",
    image: "/services-bg.png",
    iconType: "map",
    accentColor: "#00A8FF",
    href: "/services-products/business-automation-saas",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    stepNumber: "01",
    title: "Discovery",
    description: "Understand operational goals, users and technical challenges.",
    iconName: "Search",
    accentColor: "#6657FF",
  },
  {
    id: "strategy",
    stepNumber: "02",
    title: "Strategy",
    description: "Define architecture roadmap and key business outcomes.",
    iconName: "FileText",
    accentColor: "#168BFF",
  },
  {
    id: "design",
    stepNumber: "03",
    title: "Design",
    description: "Create human-centered experiences that delight.",
    iconName: "Palette",
    accentColor: "#00A8FF",
  },
  {
    id: "development",
    stepNumber: "04",
    title: "Development",
    description: "Build scalable, secure digital platforms.",
    iconName: "Code",
    accentColor: "#D82DFF",
  },
  {
    id: "testing",
    stepNumber: "05",
    title: "Testing",
    description: "Quality engineering for reliability and high performance.",
    iconName: "ShieldCheck",
    accentColor: "#A52BFF",
  },
  {
    id: "launch-support",
    stepNumber: "06",
    title: "Launch & Support",
    description: "Deploy and iterate for continuous growth.",
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
    "Built a secure and scalable fintech platform handling payments, payouts, BNPL, and business lending for enterprises and SMBs.",
  metrics: [
    { value: "99.9%", label: "Uptime" },
    { value: "10M+", label: "Transactions" },
    { value: "40%", label: "Faster Processing" },
  ],
  href: "/services-products/financial-services",
};
