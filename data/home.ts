export interface VerticalCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
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
  { label: "Who We Are", href: "/about" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Services & Products", href: "/#services" },
  { label: "Skill Hub", href: "/#skill-hub" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact Us", href: "/#contact" },
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
    image: "/design.png",
    link: "#design",
  },
  {
    id: "civil",
    title: "Civil & Infrastructure",
    subtitle: "Building spaces.",
    description: "Building the future.",
    image: "/civil.png",
    link: "#civil",
  },
  {
    id: "business",
    title: "Business Solutions",
    subtitle: "Business growth.",
    description: "Operational excellence.",
    image: "/business.png",
    link: "#business",
  },
  {
    id: "it",
    title: "Information Technology",
    subtitle: "Intelligent systems.",
    description: "Digital innovation.",
    image: "/it.png",
    link: "#it",
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
    id: "technology",
    category: "Technology",
    title: "Scalable Cloud Architecture & Enterprise Platforms",
    description: "Architecting cloud-native solutions that empower global enterprises to innovate faster with unyielding security and speed.",
    image: "/it.png",
    link: "#technology",
  },
  {
    id: "education",
    category: "Education",
    title: "Next-Gen EdTech & Skill Learning Hubs",
    description: "Transforming learning environments through interactive digital learning hubs, skill validation, and adaptive assessment tools.",
    image: "/skills-hub-bg.png",
    link: "#education",
  },
  {
    id: "manufacturing",
    category: "Manufacturing",
    title: "IoT & Smart Factory Operations",
    description: "Connecting factory operations with real-time analytics, smart sensory monitoring, and predictive operational flow.",
    image: "/civil.png",
    link: "#manufacturing",
  },
  {
    id: "consulting",
    category: "Consulting",
    title: "AI-Powered Workforce for Digital Innovation",
    description: "RightlyHR enables IT organizations to manage teams, projects, freelancers, and workforce performance through intelligent automation.",
    image: "/about-us-bg.png",
    link: "#consulting",
  },
  {
    id: "logistics",
    category: "Logistics",
    title: "Hyperlocal & Global Supply Chain Systems",
    description: "Optimizing last-mile delivery, fleet management, and automated warehouse tracking with precision location technology.",
    image: "/services-bg.png",
    link: "#logistics",
  },
  {
    id: "retail",
    category: "Retail",
    title: "Omnichannel Commerce & Hyperlocal Marketplaces",
    description: "Empowering retailers with unified inventory systems, instant checkout experiences, and data-driven customer loyalty.",
    image: "/business.png",
    link: "#retail",
  },
  {
    id: "healthcare",
    category: "Healthcare",
    title: "Telehealth & Intelligent Health Record Platforms",
    description: "Building secure, compliant health platforms that connect patients, practitioners, and medical devices seamlessly.",
    image: "/design.png",
    link: "#healthcare",
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
