import { 
  Code2, 
  Bot, 
  Cloud, 
  LifeBuoy, 
  BarChart3, 
  Layout, 
  ShieldCheck,
  Search,
  Compass,
  PenTool,
  Code,
  CheckCircle2,
  Rocket,
  Target,
  Wrench,
  Cpu,
  Layers,
  Sparkles,
  Server,
  Terminal,
  Container,
  Database,
  Globe
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  slug?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoText: string;
  image: string;
  link: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  category?: string;
  color?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category?: string;
  description: string;
  image?: string;
  metrics: {
    value: string;
    label: string;
  }[];
  link: string;
}

export interface DetailedCapability {
  title: string;
  description: string;
  iconName: string;
  slug: string;
}

export interface ServiceOffering {
  title: string;
  description: string;
  points: string[];
}

export interface ServiceDetailConfig {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  capabilitiesHeading: string;
  capabilities: DetailedCapability[];
  offerings: ServiceOffering[];
  process: ProcessStep[];
  caseStudies: {
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
  }[];
  technologies: TechnologyItem[];
  whyKBS: {
    title: string;
    description: string;
  }[];
  relatedServices: {
    title: string;
    slug: string;
    description: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "product-engineering",
    slug: "product-engineering",
    title: "Product Engineering",
    description: "Scalable web, mobile and API platforms built with modern architectures.",
    iconName: "Code2",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UX / UI Design",
    description: "Human-centered design that creates beautiful and usable experiences.",
    iconName: "Layout",
  },
  {
    id: "software-development",
    slug: "software-development",
    title: "Engineering",
    description: "Scalable, secure and performant applications built with modern technologies.",
    iconName: "Code2",
  },
  {
    id: "qa-testing",
    slug: "qa-testing",
    title: "QA & Testing",
    description: "Quality engineering to ensure performance, security, and reliability.",
    iconName: "ShieldCheck",
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Reliable infrastructure, CI/CD and scalable cloud implementations.",
    iconName: "Cloud",
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data & Analytics",
    description: "Transform data into actionable insights with advanced analytics.",
    iconName: "BarChart3",
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Automation",
    description: "Intelligent automation, AI-driven insights and workflow optimization.",
    iconName: "Bot",
  },
  {
    id: "support-maintenance",
    slug: "support-maintenance",
    title: "Support & Maintenance",
    description: "Ongoing support, monitoring and continuous improvement for your products.",
    iconName: "LifeBuoy",
  },
];

export const productsData: ProductItem[] = [
  {
    id: "finjo",
    name: "Finjo",
    tagline: "Fintech Infrastructure",
    description: "Fintech infrastructure for payments, payouts, BNPL, and business lending.",
    logoText: "Finjo",
    image: "/services-bg.png",
    link: "/case-studies/finjo",
  },
  {
    id: "desidukan",
    name: "Desi Dukan",
    tagline: "Hyperlocal Marketplace",
    description: "Hyperlocal multi-vendor marketplace connecting local stores and customers.",
    logoText: "Desi Dukan",
    image: "/business.png",
    link: "/case-studies/desi-dukan",
  },
  {
    id: "helyi",
    name: "Helyi",
    tagline: "Commerce Platform",
    description: "Hyperlocal commerce platform with multi-tenant architecture for scale.",
    logoText: "Helyi",
    image: "/it.png",
    link: "/case-studies/helyi",
  },
  {
    id: "winwala",
    name: "WinWala",
    tagline: "Gamified Loyalty",
    description: "Gamified loyalty platform with rewards, stamp cards, VIP tiers for SMB retailers.",
    logoText: "WinWala",
    image: "/design.png",
    link: "/case-studies/winwala",
  },
  {
    id: "creavo",
    name: "Creavo",
    tagline: "Creative Studio",
    description: "Design platform enabling small businesses to create their own marketing creatives.",
    logoText: "Creavo",
    image: "/about-us-ui-design.png",
    link: "/case-studies/creavo",
  },
  {
    id: "naya-leader",
    name: "Naya Leader",
    tagline: "Political Technology",
    description: "Political technology platform connecting leaders with their constituencies.",
    logoText: "Naya Leader",
    image: "/skills-hub-bg.png",
    link: "/case-studies/naya-leader",
  },
];

export const processData: ProcessStep[] = [
  {
    step: "01",
    number: "01",
    title: "Discover",
    description: "Understand your goals, users and challenges.",
    iconName: "Search",
  },
  {
    step: "02",
    number: "02",
    title: "Define",
    description: "Define requirements, roadmap and success metrics.",
    iconName: "Compass",
  },
  {
    step: "03",
    number: "03",
    title: "Design",
    description: "Create wireframes, UI/UX and technical architecture.",
    iconName: "PenTool",
  },
  {
    step: "04",
    number: "04",
    title: "Develop",
    description: "Agile development with clean, scalable and secure code.",
    iconName: "Code",
  },
  {
    step: "05",
    number: "05",
    title: "Test",
    description: "Rigorous testing for quality, security and performance.",
    iconName: "CheckCircle2",
  },
  {
    step: "06",
    number: "06",
    title: "Deploy & Scale",
    description: "Deploy seamlessly and scale as your business grows.",
    iconName: "Rocket",
  },
];

export const technologiesData: TechnologyItem[] = [
  { id: "nextjs", name: "Next.js", color: "#000000" },
  { id: "react", name: "React", color: "#61DAFB" },
  { id: "nodejs", name: "Node.js", color: "#339933" },
  { id: "typescript", name: "TypeScript", color: "#3178C6" },
  { id: "python", name: "Python", color: "#3776AB" },
  { id: "aws", name: "AWS", color: "#FF9900" },
  { id: "docker", name: "Docker", color: "#2496ED" },
  { id: "postgres", name: "PostgreSQL", color: "#4169E1" },
  { id: "mongodb", name: "MongoDB", color: "#47A248" },
];

export const caseStudyData: CaseStudy = {
  id: "finjo-case-study",
  title: "Finjo — Fintech Infrastructure",
  subtitle: "Fintech Platform",
  description: "Built a secure and scalable fintech platform handling payments, payouts, BNPL, and business lending for enterprises.",
  metrics: [
    { value: "99.9%", label: "Uptime" },
    { value: "10M+", label: "Transactions" },
    { value: "40%", label: "Faster Processing" },
  ],
  link: "/case-studies/finjo",
};

export const caseStudiesList = [
  {
    title: "Finjo – Fintech Platform",
    category: "Fintech",
    description: "A full-stack fintech platform for payments, payouts, BNPL and business lending.",
    image: "/services-bg.png",
    link: "/case-studies/finjo",
  },
  {
    title: "DesiDukan Marketplace",
    category: "Marketplace",
    description: "Hyperlocal multi-vendor marketplace connecting local stores and customers.",
    image: "/business.png",
    link: "/case-studies/desi-dukan",
  },
  {
    title: "Helyi – Hyperlocal Commerce",
    category: "E-commerce",
    description: "Multi-tenant hyperlocal commerce platform with dynamic delivery management.",
    image: "/it.png",
    link: "/case-studies/helyi",
  },
  {
    title: "Naya Leader Platform",
    category: "GovTech",
    description: "Political technology platform connecting leaders with their constituencies.",
    image: "/skills-hub-bg.png",
    link: "/case-studies/naya-leader",
  },
];

// Common 8 capability items shown across service detail pages
export const common8Capabilities: DetailedCapability[] = [
  {
    title: "Product Strategy",
    description: "Validate ideas, analyze markets, and build winning product strategies.",
    iconName: "Target",
    slug: "product-engineering",
  },
  {
    title: "UI/UX Design",
    description: "Human-centered designs that deliver engaging user experiences.",
    iconName: "Layout",
    slug: "ui-ux-design",
  },
  {
    title: "Engineering",
    description: "Scalable, secure and performant applications built with modern technologies.",
    iconName: "Code2",
    slug: "software-development",
  },
  {
    title: "QA & Testing",
    description: "Ensure quality, reliability and performance across all devices and platforms.",
    iconName: "ShieldCheck",
    slug: "qa-testing",
  },
  {
    title: "Cloud & DevOps",
    description: "CI/CD, infrastructure automation and cloud-native solutions for scale.",
    iconName: "Cloud",
    slug: "cloud-devops",
  },
  {
    title: "Data & Analytics",
    description: "Turn data into actionable insights and drive business decisions.",
    iconName: "BarChart3",
    slug: "data-analytics",
  },
  {
    title: "AI & Automation",
    description: "Automate workflows and leverage AI to accelerate innovation.",
    iconName: "Bot",
    slug: "ai-automation",
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing support, monitoring and continuous improvement for your products.",
    iconName: "LifeBuoy",
    slug: "support-maintenance",
  },
];

// Service Detail Configurations Dictionary
export const detailedServicesMap: Record<string, ServiceDetailConfig> = {
  "product-engineering": {
    slug: "product-engineering",
    title: "Product Engineering Services",
    shortTitle: "Product Engineering",
    eyebrow: "PRODUCT ENGINEERING",
    description: "We design, build and scale digital products that solve real problems and create lasting impact.",
    heroImage: "/services-ui-desing.png",
    capabilitiesHeading: "End-to-end engineering services that empower your product vision.",
    capabilities: common8Capabilities,
    offerings: [
      {
        title: "Product Discovery & Strategy",
        description: "Requirement discovery, market validation, feature prioritization, technical feasibility, and product roadmap.",
        points: ["User Needs Analysis", "Technical Feasibility Study", "MVP Scope Definition"],
      },
      {
        title: "Web Application Development",
        description: "Modern React and Next.js web applications, enterprise portals, SaaS platforms, and internal tools.",
        points: ["Frontend Architecture", "API Integration", "High Performance Web Apps"],
      },
      {
        title: "Backend & Microservices Engineering",
        description: "Robust Node.js, Python, and REST/GraphQL backend API services built for extreme throughput.",
        points: ["Microservices Architecture", "Database Optimization", "Secure Authentication"],
      },
      {
        title: "Platform Modernization & Evolution",
        description: "Legacy code upgrades, architectural refactoring, performance tuning, and long-term product iteration.",
        points: ["Monolith to Microservices", "Cloud Migration", "Automated Testing"],
      },
    ],
    process: processData,
    caseStudies: caseStudiesList,
    technologies: technologiesData,
    whyKBS: [
      { title: "Built for Real Businesses", description: "We solve operational problems, not theoretical ones." },
      { title: "End-to-End Ownership", description: "One accountable team from strategy to launch." },
      { title: "Scalable by Design", description: "Architecture built for future growth and scale." },
      { title: "Long-Term Partnership", description: "We continue supporting and evolving your products." },
    ],
    relatedServices: [
      { title: "UI/UX Design", slug: "ui-ux-design", description: "Human-centered user interface & experience design." },
      { title: "Cloud & DevOps", slug: "cloud-devops", description: "CI/CD and cloud infrastructure automation." },
      { title: "QA & Testing", slug: "qa-testing", description: "Quality engineering, security, and performance testing." },
    ],
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design Services",
    shortTitle: "UI/UX Design",
    eyebrow: "USER EXPERIENCE & INTERFACE",
    description: "Human-centered designs that deliver intuitive, beautiful, and engaging digital experiences.",
    heroImage: "/about-us-ui-design.png",
    capabilitiesHeading: "User-centric design capabilities for web and mobile products.",
    capabilities: common8Capabilities,
    offerings: [
      {
        title: "User Research & Experience Strategy",
        description: "Empathy mapping, user interviews, information architecture, and user journey mapping.",
        points: ["Qualitative Research", "Information Architecture", "User Personas"],
      },
      {
        title: "Figma Wireframing & Prototyping",
        description: "Low and high-fidelity wireframing, interactive Figma prototypes, and micro-animations.",
        points: ["Rapid Wireframing", "Interactive Mockups", "Usability Testing"],
      },
      {
        title: "Design Systems & Component Libraries",
        description: "Scalable design tokens, UI components, typography scales, and developer handoff documentation.",
        points: ["Figma Design Systems", "Design Tokens", "Dev Handoff Guidelines"],
      },
    ],
    process: processData,
    caseStudies: caseStudiesList,
    technologies: technologiesData,
    whyKBS: [
      { title: "Human-Centered Focus", description: "Designs validated with real user testing." },
      { title: "Developer-Friendly Handoff", description: "Pixel-perfect component tokens ready for React." },
      { title: "Conversion-Oriented", description: "Focused on user engagement and conversion metrics." },
      { title: "Brand Identity Alignment", description: "Seamless alignment with your brand strategy." },
    ],
    relatedServices: [
      { title: "Product Engineering", slug: "product-engineering", description: "Turning UI/UX designs into production software." },
      { title: "Software Development", slug: "software-development", description: "Frontend and full-stack implementation." },
      { title: "QA & Testing", slug: "qa-testing", description: "Visual regression and usability testing." },
    ],
  },
  "software-development": {
    slug: "software-development",
    title: "Software Development Services",
    shortTitle: "Software Development",
    eyebrow: "CUSTOM SOFTWARE",
    description: "Custom software engineering, frontend web applications, backend APIs, and enterprise systems.",
    heroImage: "/it.png",
    capabilitiesHeading: "Comprehensive software engineering capabilities built for performance.",
    capabilities: common8Capabilities,
    offerings: [
      {
        title: "Custom Full-Stack Development",
        description: "React, Next.js, Node.js, Python, and TypeScript software engineered for performance.",
        points: ["Frontend React Apps", "REST & GraphQL APIs", "PostgreSQL & MongoDB"],
      },
      {
        title: "Enterprise Application Integration",
        description: "Integrating third-party APIs, payment gateways, CRM, and ERP systems seamlessly.",
        points: ["API Gateways", "Third-Party Connectors", "Event-Driven Messaging"],
      },
    ],
    process: processData,
    caseStudies: caseStudiesList,
    technologies: technologiesData,
    whyKBS: [
      { title: "Clean Codebase", description: "Structured TypeScript and modern architectural patterns." },
      { title: "Agile Execution", description: "Bi-weekly sprints with rapid feedback loops." },
      { title: "Enterprise Security", description: "Bank-grade encryption, JWT, and OWASP compliance." },
      { title: "High Throughput", description: "Built to handle thousands of concurrent requests." },
    ],
    relatedServices: [
      { title: "Product Engineering", slug: "product-engineering", description: "Full-cycle digital product creation." },
      { title: "Cloud & DevOps", slug: "cloud-devops", description: "Cloud infrastructure and automated CI/CD." },
      { title: "QA & Testing", slug: "qa-testing", description: "Automated test suites and performance testing." },
    ],
  },
  "qa-testing": {
    slug: "qa-testing",
    title: "QA & Testing Services",
    shortTitle: "QA & Testing",
    eyebrow: "QUALITY ENGINEERING",
    description: "Quality engineering, automated testing, security audits, and performance verification across all devices.",
    heroImage: "/services-bg.png",
    capabilitiesHeading: "Rigorous quality assurance standards for zero-defect releases.",
    capabilities: common8Capabilities,
    offerings: [
      {
        title: "Automated Test Engineering",
        description: "End-to-end Playwright, Cypress, and Jest automated test suites running in CI/CD pipelines.",
        points: ["E2E Test Automation", "API Integration Tests", "Continuous Testing"],
      },
      {
        title: "Performance & Security Audits",
        description: "Load testing, stress testing, security vulnerability scanning, and OWASP compliance.",
        points: ["Load & Stress Testing", "Vulnerability Audits", "Cross-Browser Testing"],
      },
    ],
    process: processData,
    caseStudies: caseStudiesList,
    technologies: technologiesData,
    whyKBS: [
      { title: "Zero Defect Focus", description: "Catch bugs before they reach production users." },
      { title: "Automated CI Pipelines", description: "Instant test execution on every Git commit." },
      { title: "Comprehensive Coverage", description: "Unit, integration, E2E, and security tests." },
      { title: "Multi-Platform", description: "Verified on desktop, iOS, Android, and web." },
    ],
    relatedServices: [
      { title: "Software Development", slug: "software-development", description: "Full-stack application engineering." },
      { title: "Cloud & DevOps", slug: "cloud-devops", description: "Automated testing inside deployment pipelines." },
      { title: "Support & Maintenance", slug: "support-maintenance", description: "24/7 monitoring and issue resolution." },
    ],
  },
  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps Services",
    shortTitle: "Cloud & DevOps",
    eyebrow: "CLOUD INFRASTRUCTURE",
    description: "Reliable AWS cloud architecture, Docker containerization, Kubernetes orchestration, and automated CI/CD.",
    heroImage: "/services-bg.png",
    capabilitiesHeading: "Automated cloud infrastructure built for high availability and 99.99% uptime.",
    capabilities: common8Capabilities,
    offerings: [
      {
        title: "Infrastructure as Code (IaC)",
        description: "Terraform, CloudFormation, AWS CDK, and automated environment provisioning.",
        points: ["Terraform Scripts", "AWS Architecture", "Multi-Region Redundancy"],
      },
      {
        title: "Containerization & CI/CD",
        description: "Docker, Kubernetes, GitHub Actions, and zero-downtime deployment pipelines.",
        points: ["Docker Containers", "Kubernetes Clusters", "Automated Releases"],
      },
    ],
    process: processData,
    caseStudies: caseStudiesList,
    technologies: technologiesData,
    whyKBS: [
      { title: "99.99% Uptime SLA", description: "Architected for high availability and failover." },
      { title: "Cost Optimization", description: "Right-sizing cloud resources to reduce monthly spend." },
      { title: "Automated Releases", description: "Zero-downtime rolling deployments." },
      { title: "24/7 Monitoring", description: "Instant alerts and proactive incident response." },
    ],
    relatedServices: [
      { title: "Software Development", slug: "software-development", description: "Cloud-native web and mobile development." },
      { title: "QA & Testing", slug: "qa-testing", description: "Automated test integration in pipelines." },
      { title: "Support & Maintenance", slug: "support-maintenance", description: "Continuous infrastructure monitoring." },
    ],
  },
  "data-analytics": {
    slug: "data-analytics",
    title: "Data & Analytics Services",
    shortTitle: "Data & Analytics",
    eyebrow: "DATA INTELLIGENCE",
    description: "Transform raw data into actionable intelligence with data pipelines, BI dashboards, and analytics engines.",
    heroImage: "/it.png",
    capabilitiesHeading: "End-to-end data engineering and analytics capabilities.",
    capabilities: common8Capabilities,
    offerings: [
      {
        title: "Data Pipelines & Warehousing",
        description: "ETL pipelines, PostgreSQL/Snowflake data warehousing, and real-time streaming.",
        points: ["ETL Data Pipelines", "Data Warehouse Schema", "Real-Time Streaming"],
      },
      {
        title: "BI Dashboards & Insights",
        description: "Interactive executive dashboards, metric reporting, and predictive data analytics.",
        points: ["Tableau & PowerBI", "Custom Metric Dashboards", "Predictive Models"],
      },
    ],
    process: processData,
    caseStudies: caseStudiesList,
    technologies: technologiesData,
    whyKBS: [
      { title: "Actionable Insights", description: "Turn data noise into clear business metrics." },
      { title: "Real-Time Processing", description: "Instant visibility into key KPIs and operations." },
      { title: "Enterprise Compliance", description: "GDPR and data privacy compliant pipelines." },
      { title: "Scalable Warehouses", description: "Architected to grow from Gigabytes to Terabytes." },
    ],
    relatedServices: [
      { title: "AI & Automation", slug: "ai-automation", description: "Machine learning models and AI integration." },
      { title: "Product Engineering", slug: "product-engineering", description: "Embedding analytics into digital products." },
      { title: "Cloud & DevOps", slug: "cloud-devops", description: "Cloud data lakes and warehouse hosting." },
    ],
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Automation Services",
    shortTitle: "AI & Automation",
    eyebrow: "ARTIFICIAL INTELLIGENCE",
    description: "Leverage machine learning, LLM integrations, intelligent workflow automation, and predictive analytics.",
    heroImage: "/skills-hub-bg.png",
    capabilitiesHeading: "Next-generation artificial intelligence and automation solutions.",
    capabilities: common8Capabilities,
    offerings: [
      {
        title: "LLM & Generative AI Integration",
        description: "Custom RAG pipelines, OpenAI / Claude API integrations, and domain-trained chatbots.",
        points: ["RAG Architecture", "Custom Assistants", "Vector Search"],
      },
      {
        title: "Intelligent Process Automation",
        description: "Automating repetitive business workflows, document processing, and data extraction.",
        points: ["Workflow Automation", "OCR & Document AI", "Automated Payouts"],
      },
    ],
    process: processData,
    caseStudies: caseStudiesList,
    technologies: technologiesData,
    whyKBS: [
      { title: "Pragmatic AI", description: "Real ROI focus rather than empty AI hype." },
      { title: "Secure & Private", description: "Private LLM deployments that keep data secure." },
      { title: "Seamless API Integration", description: "Embedding AI directly into existing software." },
      { title: "Automated Workflows", description: "Saving hundreds of operational hours monthly." },
    ],
    relatedServices: [
      { title: "Data & Analytics", slug: "data-analytics", description: "Data foundation for machine learning." },
      { title: "Product Engineering", slug: "product-engineering", description: "Building AI-native SaaS products." },
      { title: "Cloud & DevOps", slug: "cloud-devops", description: "GPU cloud infrastructure for AI." },
    ],
  },
  "support-maintenance": {
    slug: "support-maintenance",
    title: "Support & Maintenance Services",
    shortTitle: "Support & Maintenance",
    eyebrow: "CONTINUOUS CARE",
    description: "Ongoing 24/7 product support, proactive performance monitoring, security patches, and feature iteration.",
    heroImage: "/contact-us-hero.png",
    capabilitiesHeading: "Reliable, long-term engineering support for mission-critical software.",
    capabilities: common8Capabilities,
    offerings: [
      {
        title: "24/7 Monitoring & Incident Response",
        description: "Uptime monitoring, error tracking with Sentry, and rapid 15-minute incident response.",
        points: ["Sentry Error Tracking", "15-Min Incident SLA", "Proactive Patches"],
      },
      {
        title: "Continuous Feature Evolution",
        description: "Regular software updates, security patches, framework upgrades, and performance tuning.",
        points: ["Dependency Upgrades", "Security Audits", "Sprint Iterations"],
      },
    ],
    process: processData,
    caseStudies: caseStudiesList,
    technologies: technologiesData,
    whyKBS: [
      { title: "Guaranteed SLA", description: "Dedicated engineering response times." },
      { title: "Zero Downtime", description: "Seamless maintenance without user disruption." },
      { title: "Proactive Upgrades", description: "Keeping libraries and frameworks modern." },
      { title: "Cost Predictability", description: "Flat monthly support tiers for complete peace of mind." },
    ],
    relatedServices: [
      { title: "Product Engineering", slug: "product-engineering", description: "Full-cycle digital product engineering." },
      { title: "Cloud & DevOps", slug: "cloud-devops", description: "Infrastructure maintenance and monitoring." },
      { title: "QA & Testing", slug: "qa-testing", description: "Regression testing for every software update." },
    ],
  },
};
