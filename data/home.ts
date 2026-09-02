export interface VerticalCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  accentColor: string;
  badgeBg: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  iconName: "Calendar" | "PackageCheck" | "Users" | "Globe";
}

export interface ImpactItem {
  id: string;
  title: string;
  description: string;
  iconName: "Palette" | "Cloud" | "PieChart" | "Bot" | "ShieldCheck" | "Headphones";
  accentColor: string;
}

export interface IndustryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  tagline?: string;
  logo: string;
  iconType?: string;
  logoClass?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface VerticalCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  accentColor: string;
  badgeBg: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  iconName: "Calendar" | "PackageCheck" | "Users" | "Globe";
}

export interface ImpactItem {
  id: string;
  title: string;
  description: string;
  iconName: "Palette" | "Cloud" | "PieChart" | "Bot" | "ShieldCheck" | "Headphones";
  accentColor: string;
}

export interface IndustryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface PartnerBrand {
  id: string;
  name: string;
  tagline?: string;
  logo: string;
  iconType?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Who We Are", href: "/#who-we-are" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Insights & Updates", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const stats: StatItem[] = [
  {
    id: "founded",
    value: 2021,
    suffix: "",
    label: "Year Founded",
    iconName: "Calendar",
  },
  {
    id: "products",
    value: 20000,
    suffix: "+",
    label: "Projects Done",
    iconName: "PackageCheck",
  },
  {
    id: "clients",
    value: 175,
    suffix: "+",
    label: "Team Members",
    iconName: "Users",
  },
  {
    id: "industries",
    value: 5,
    suffix: "",
    label: "Core Verticals",
    iconName: "Globe",
  },
];

export const verticals: VerticalCard[] = [
  {
    id: "it-solutions",
    title: "Information Technology",
    subtitle: "KBS Information Technology",
    description: "Web, mobile, AI platforms & custom software engineering designed for business growth.",
    image: "/It Services.png",
    link: "/verticals/it",
    accentColor: "#168BFF",
    badgeBg: "rgba(22, 139, 255, 0.12)",
  },
  {
    id: "automation-tools",
    title: "Automation Tools",
    subtitle: "KBS Automation & SaaS",
    description: "Automate repetitive tasks, simplify operations, and empower teams to work smarter.",
    image: "/Automation Tools.png",
    link: "/verticals/automation",
    accentColor: "#A52BFF",
    badgeBg: "rgba(165, 43, 255, 0.12)",
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering Services",
    subtitle: "KBS Infrastructure & Engineering",
    description: "Smart infrastructure, structural engineering, SCADA monitoring & AI drawing analysis.",
    image: "/Civil Services.png",
    link: "/verticals/civil",
    accentColor: "#FF6B35",
    badgeBg: "rgba(255, 107, 53, 0.12)",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    subtitle: "KBS Financial Services",
    description: "Fintech solutions, payment gateways, payouts, BNPL, and practical business financing.",
    image: "/Financial services.png",
    link: "/verticals/financial",
    accentColor: "#00A8FF",
    badgeBg: "rgba(0, 168, 255, 0.12)",
  },
  {
    id: "skill-hub",
    title: "Skill Hub",
    subtitle: "KBS Skill Hub",
    description: "Practical, industry-led training in IT & Civil software for career-ready skills.",
    image: "/Skill Hub.png",
    link: "/skill-hub",
    accentColor: "#6657FF",
    badgeBg: "rgba(102, 87, 255, 0.12)",
  },
];

export const impactItems: ImpactItem[] = [
  {
    id: "design-tech",
    title: "Design • Technology",
    description: "Human-centered Design.",
    iconName: "Palette",
    accentColor: "#A52BFF",
  },
  {
    id: "cloud-devops",
    title: "Cloud • DevOps",
    description: "Scalable and secure Cloud solutions.",
    iconName: "Cloud",
    accentColor: "#168BFF",
  },
  {
    id: "data-analytics",
    title: "Data • Analytics",
    description: "Turning data into actionable insights.",
    iconName: "PieChart",
    accentColor: "#00A8FF",
  },
  {
    id: "ai-automation",
    title: "AI • Automation",
    description: "Intelligent automation for growth.",
    iconName: "Bot",
    accentColor: "#D82DFF",
  },
  {
    id: "quality-testing",
    title: "Quality • Testing",
    description: "Delivering quality you can trust.",
    iconName: "ShieldCheck",
    accentColor: "#6657FF",
  },
  {
    id: "support-maintain",
    title: "Support • Maintain",
    description: "Continuous support and optimization.",
    iconName: "Headphones",
    accentColor: "#168BFF",
  },
];

export const industries: IndustryItem[] = [
  {
    id: "it-vertical",
    category: "Information Technology",
    title: "Web, Mobile, AI Platforms & Cloud Engineering",
    description: "Custom software solutions, SaaS platforms, and mobile applications built for scale and reliability.",
    image: "/It Services.png",
    link: "/verticals/it",
  },
  {
    id: "automation-vertical",
    category: "Automation & SaaS",
    title: "Workflow Automation & SaaS Products",
    description: "Eliminate repetitive tasks, retail loyalty platforms, marketing creative generators, and AI website builders.",
    image: "/Automation Tools.png",
    link: "/verticals/automation",
  },
  {
    id: "civil-vertical",
    category: "Civil Engineering",
    title: "Infrastructure, Structural & Drawing AI",
    description: "AI-driven drawing analysis, SCADA central monitoring, structural design, and smart infrastructure engineering.",
    image: "/Civil Services.png",
    link: "/verticals/civil",
  },
  {
    id: "financial-vertical",
    category: "Financial Services",
    title: "Fintech, Payment Gateways & Business Financing",
    description: "Accept payments, manage payouts, offer BNPL solutions, and access working capital for growing businesses.",
    image: "/Financial services.png",
    link: "/verticals/financial",
  },
  {
    id: "skill-hub-vertical",
    category: "Skill Hub",
    title: "Practical Workplace & Career Training",
    description: "Hands-on courses in IT software and Civil Engineering tools led by industry professionals.",
    image: "/Skill Hub.png",
    link: "/skill-hub",
  },
];

export const partnerBrands: PartnerBrand[] = [
  { id: "desidukan", name: "Desi Dukan", tagline: "Hyperlocal Commerce", logo: "/desi-dukan-org.jpeg" },
  { id: "helyi", name: "Helyi", tagline: "Hyperlocal Marketplace", logo: "/helyi-logo.png", logoClass: "h-11 sm:h-12 scale-125 origin-center" },
  { id: "tinytreasure", name: "Tiny Treasure", tagline: "E-Commerce & Retail", logo: "/tiny-treasure-logo.jpeg", logoClass: "h-11 sm:h-12 scale-125 origin-center" },
  { id: "digimart", name: "DigiMart", tagline: "Digital Commerce", logo: "/digimart-logo.png", logoClass: "h-11 sm:h-12 scale-125 origin-center" },
  { id: "mahatvaa", name: "Mahatvaa", tagline: "Enterprise Solutions", logo: "/mahatvaa-logo.png", logoClass: "h-10 sm:h-11 scale-110 object-contain" },
  { id: "desisafai", name: "Desi Safai", tagline: "On-Demand Services", logo: "/desi-safai-org.png", logoClass: "h-10 sm:h-11 scale-115" },
  { id: "landvestinfra", name: "Landvest Infra", tagline: "Infrastructure & Living", logo: "/landvestintra-org.png" },
  { id: "brightspark", name: "Bright Spark", tagline: "Creative Media", logo: "/bright-spark-org.png", logoClass: "h-10 sm:h-11 scale-115" },
  { id: "spoorthi", name: "Spoorthi", tagline: "Media & Broadcast", logo: "/spoorthi-news-logo.png" },
  { id: "tutershub", name: "Tuters Hub", tagline: "EdTech Platform", logo: "/tutershub-org.png" },
  { id: "sudharshan", name: "Sudarshan News Channel", tagline: "News Network", logo: "/sudarshan-news-logo.png", logoClass: "h-14 sm:h-16 scale-150 sm:scale-175 origin-center min-w-[60px] max-w-[220px]" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Skill Hub", href: "/skill-hub" },
    { label: "Contact Us", href: "/contact" },
  ],
  verticals: [
    { label: "Information Technology", href: "/verticals/it" },
    { label: "Business Automation & SaaS", href: "/verticals/automation" },
    { label: "Civil Engineering Services", href: "/verticals/civil" },
    { label: "Financial Services", href: "/verticals/financial" },
    { label: "KBS Skill Hub", href: "/skill-hub" },
  ],
  resources: [
    { label: "WinWala Platform", href: "/verticals/automation#winwala" },
    { label: "Creavo Creative Studio", href: "/verticals/automation#creavo" },
    { label: "Finjo Fintech", href: "/verticals/financial#finjo" },
    { label: "AI Drawing Analysis", href: "/verticals/civil#ai-drawing" },
  ],
  contact: {
    address: "KBS PVT LTD, Manjeera Trinity Corporate, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072",
    phone: "+91 8750749299",
    email: "info@kbs.group",
  },
};


