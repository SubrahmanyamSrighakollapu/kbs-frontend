export interface VerticalCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  hoverDetails?: string;
  tags?: string[];
  image: string;
  link: string;
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
  iconName: "Palette" | "Building2" | "TrendingUp" | "Lightbulb";
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
  { label: "Who We Are", href: "/about" },
  { label: "Services & Products", href: "/services" },
  { label: "Skill Hub", href: "/skill-hub" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contacts" },
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
    id: "design",
    title: "Design",
    subtitle: "Creative thinking.",
    description: "Visual experiences.",
    hoverDetails: "Human-centered UI/UX design, brand identity systems, motion graphics, and interactive prototyping built to elevate digital products.",
    tags: ["UI/UX", "Branding", "Design Systems"],
    image: "/design.png",
    link: "/services/ui-ux-design",
  },
  {
    id: "civil",
    title: "Civil & Infrastructure",
    subtitle: "Building spaces.",
    description: "Building the future.",
    hoverDetails: "Precision BIM modeling, structural engineering, clash detection, 3D architectural detailing, and smart construction management.",
    tags: ["BIM Modeling", "Structural", "3D Detailing"],
    image: "/civil.png",
    link: "/services",
  },
  {
    id: "business",
    title: "Business Solutions",
    subtitle: "Business growth.",
    description: "Operational excellence.",
    hoverDetails: "Enterprise SaaS platforms, financial infrastructure, automated payouts, workflow optimization, and business venture scaling.",
    tags: ["Fintech", "Automation", "SaaS Tools"],
    image: "/business.png",
    link: "/services",
  },
  {
    id: "it",
    title: "Information Technology",
    subtitle: "Intelligent systems.",
    description: "Digital innovation.",
    hoverDetails: "Scalable web & mobile platforms, cloud architecture, microservices API engineering, AI integration, and 24/7 product support.",
    tags: ["Full Stack", "Cloud & DevOps", "AI Integration"],
    image: "/it.png",
    link: "/services/product-engineering",
  },
];

export const impactItems: ImpactItem[] = [
  {
    id: "design-tech",
    title: "Design + Technology",
    description: "Digital experiences that engage.",
    iconName: "Palette",
  },
  {
    id: "civil-tech",
    title: "Civil + Technology",
    description: "Smarter construction through technology.",
    iconName: "Building2",
  },
  {
    id: "business-tech",
    title: "Business + Technology",
    description: "Scalable platforms for growth.",
    iconName: "TrendingUp",
  },
  {
    id: "group-strength",
    title: "Group Strength",
    description: "One Group. Every Solution.",
    iconName: "Lightbulb",
  },
];

export const industries: IndustryItem[] = [
  {
    id: "it-software",
    category: "Technology",
    title: "Scalable Cloud Platforms & Enterprise Software",
    description: "Architecting resilient cloud-native solutions, microservices, and enterprise applications engineered for extreme speed and bank-grade security.",
    image: "/it.png",
    link: "/services/product-engineering",
  },
  {
    id: "fintech",
    category: "Fintech",
    title: "Financial Infrastructure & Digital Payments",
    description: "Building secure fintech platforms for payments, payouts, BNPL, lending engines, and real-time transaction processing.",
    image: "/services-bg.png",
    link: "/services",
  },
  {
    id: "commerce",
    category: "Commerce",
    title: "Multi-Vendor Marketplaces & Retail Systems",
    description: "Empowering hyperlocal commerce with multi-tenant merchant engines, dynamic delivery logistics, and unified inventory.",
    image: "/business.png",
    link: "/services",
  },
  {
    id: "business-solutions",
    category: "Business",
    title: "AI-Driven Enterprise Automation & SaaS Tools",
    description: "KBS IT empowers enterprises to optimize workflows, team operations, and business performance through intelligent automation.",
    image: "/about-us-bg.png",
    link: "/services/ai-automation",
  },
  {
    id: "civil-infra",
    category: "Civil & Infra",
    title: "BIM Modeling & Smart Construction Tech",
    description: "Delivering precision 3D BIM modeling, structural detailing, clash detection, and digital engineering for modern spaces.",
    image: "/civil.png",
    link: "/about",
  },
  {
    id: "ui-ux-design",
    category: "Design",
    title: "Human-Centered Product Design & Branding",
    description: "Crafting engaging digital experiences, scalable Figma design systems, motion graphics, and brand identity systems.",
    image: "/about-us-ui-design.png",
    link: "/services/ui-ux-design",
  },
  {
    id: "skill-hub",
    category: "Skill Hub",
    title: "Next-Gen Technical Training & Upskilling",
    description: "Transforming workforce learning with hands-on technical bootcamps, skill validation, and industry certification hubs.",
    image: "/skills-hub-bg.png",
    link: "/skill-hub",
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
    { label: "Who We Are", href: "#who-we-are" },
    { label: "Careers", href: "#careers" },
    { label: "Newsroom", href: "#newsroom" },
    { label: "Contact Us", href: "#contact" },
  ],
  whatWeDo: [
    { label: "Services & Products", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Our Products", href: "#products" },
    { label: "Skill Hub", href: "#skill-hub" },
  ],
  resources: [
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blogs", href: "#blogs" },
    { label: "Insights", href: "#insights" },
    { label: "Events", href: "#events" },
  ],
  contact: {
    address: "KBS IT, KBS Group\nHyderabad, Telangana, India",
    phone: "+91 91234 56789",
    email: "hello@kbsit.com",
  },
};
