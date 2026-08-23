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
  iconType: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "What We Are", href: "/about" },
  { label: "Services & Products", href: "/services-products" },
  { label: "Skill Hub", href: "/skill-hub" },
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
    value: 50,
    suffix: "+",
    label: "Products Delivered",
    iconName: "PackageCheck",
  },
  {
    id: "clients",
    value: 100,
    suffix: "+",
    label: "Happy Clients",
    iconName: "Users",
  },
  {
    id: "industries",
    value: 6,
    suffix: "+",
    label: "Industries Served",
    iconName: "Globe",
  },
];

export const verticals: VerticalCard[] = [
  {
    id: "creavo",
    title: "Creavo",
    subtitle: "Creative Design & Media",
    description: "Bringing ideas to life through stunning design, branding and digital creativity.",
    image: "/vertical-one.png",
    link: "/services-products",
    accentColor: "#A52BFF",
    badgeBg: "rgba(165, 43, 255, 0.12)",
  },
  {
    id: "build-right",
    title: "Build Right",
    subtitle: "Construction & Infrastructure",
    description: "Delivering quality construction, smart infrastructure and sustainable living spaces.",
    image: "/vertical-two.png",
    link: "/services-products",
    accentColor: "#FF6B35",
    badgeBg: "rgba(255, 107, 53, 0.12)",
  },
  {
    id: "vividuss",
    title: "Vividuss",
    subtitle: "Business Solutions",
    description: "Driving growth with strategic insights, smart solutions and future-ready approaches.",
    image: "/vertical-three.png",
    link: "/services-products",
    accentColor: "#00A8FF",
    badgeBg: "rgba(0, 168, 255, 0.12)",
  },
  {
    id: "it-solutions",
    title: "IT Solutions",
    subtitle: "Technology & Innovation",
    description: "Building scalable, secure and intelligent tech solutions for a digital-first world.",
    image: "/vertical-four.png",
    link: "/services-products",
    accentColor: "#168BFF",
    badgeBg: "rgba(22, 139, 255, 0.12)",
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
    id: "management",
    category: "Management",
    title: "Strategic Management & Digital Leadership",
    description: "Orchestrating technology ecosystems, cross-functional teams, and enterprise growth strategies.",
    image: "/about-us-bg.png",
    link: "/services-products",
  },
  {
    id: "development",
    category: "Development",
    title: "Full-Stack Custom Software & Web Engineering",
    description: "Building resilient, high-performance digital platforms with modern frameworks and robust security.",
    image: "/it.png",
    link: "/services-products",
  },
  {
    id: "marketing",
    category: "Marketing",
    title: "Data-Driven Brand Strategy & Growth Marketing",
    description: "Accelerating customer acquisition and digital presence with creative campaigns and actionable insights.",
    image: "/design.png",
    link: "/services-products",
  },
  {
    id: "consulting",
    category: "Consulting",
    title: "AI-Powered Solutions for Digital Innovation",
    description: "Leverage AI, data, and modern engineering to build smarter products and accelerate digital transformation.",
    image: "/services-bg.png",
    link: "/services-products",
  },
  {
    id: "data-science",
    category: "Data Science",
    title: "Predictive Analytics & Machine Learning Models",
    description: "Transforming complex datasets into actionable foresight and intelligent automation systems.",
    image: "/business.png",
    link: "/services-products",
  },
  {
    id: "cyber-security",
    category: "Cyber Security",
    title: "Zero-Trust Defense & Enterprise Cloud Security",
    description: "Protecting critical assets, data integrity, and compliance across multi-cloud environments.",
    image: "/skills-hub-bg.png",
    link: "/services-products",
  },
  {
    id: "data-strategy",
    category: "Data Strategy",
    title: "Enterprise Data Governance & Modern Infrastructure",
    description: "Structuring scalable data pipelines, warehouses, and real-time streaming architectures.",
    image: "/civil.png",
    link: "/services-products",
  },
];

export const partnerBrands: PartnerBrand[] = [
  { id: "finjo", name: "Finjo", tagline: "Fintech Platform", iconType: "shield" },
  { id: "helyi", name: "Helyi", tagline: "Hyperlocal Tech", iconType: "map" },
  { id: "desidukan", name: "DesiDukan", tagline: "E-Commerce", iconType: "store" },
  { id: "winwala", name: "WinWala", tagline: "Gaming & Engagement", iconType: "trophy" },
  { id: "creavo", name: "Creavo", tagline: "Creative Studio", iconType: "sparkles" },
  { id: "nayaleader", name: "NAYA LEADER", tagline: "Leadership Network", iconType: "award" },
];

export const footerLinks = {
  company: [
    { label: "Who We Are", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Newsroom", href: "/about#newsroom" },
    { label: "Contact Us", href: "/contact" },
  ],
  whatWeDo: [
    { label: "Services & Products", href: "/services-products" },
    { label: "Industries", href: "/services-products#industries" },
    { label: "Our Products", href: "/services-products#products" },
    { label: "Skill Hub", href: "/skill-hub" },
  ],
  resources: [
    { label: "Case Studies", href: "/about#case-studies" },
    { label: "Blog", href: "/about#blog" },
    { label: "Insights", href: "/about#insights" },
    { label: "Events", href: "/about#events" },
  ],
  contact: {
    address: "KBS IT, HITEC City,\nHyderabad, Telangana, India",
    phone: "+91 91234 56789",
    email: "hello@kbsit.com",
  },
};

