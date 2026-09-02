export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface ContentSection {
  heading: string;
  body: string;
}

export interface InsightContent {
  takeaways: string[];
  sections: ContentSection[];
  quote?: {
    text: string;
    author: string;
  };
}

export interface InsightPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Information Technology" | "Business Automation & SaaS" | "Civil Engineering" | "Financial Services" | "Skill Hub" | "KBS Group";
  author: Author;
  date: string;
  readTime: string;
  featuredImage: string;
  tags: string[];
  isFeatured?: boolean;
  content: InsightContent;
}

export const insightCategories = [
  "All Verticals",
  "Information Technology",
  "Business Automation & SaaS",
  "Civil Engineering",
  "Financial Services",
  "Skill Hub",
  "KBS Group",
] as const;

export const insightPosts: InsightPost[] = [
  {
    id: "ai-enterprise-software-2026",
    slug: "evolution-of-ai-enterprise-software-2026",
    title: "The Evolution of AI-Driven Enterprise Software in 2026",
    excerpt: "How modern AI architectures are transforming complex enterprise workflows, decision systems, and core IT operations.",
    category: "Information Technology",
    author: {
      name: "KBS Technology Team",
      role: "Enterprise Architecture Division",
      avatar: "/kbs-group-logo.png",
    },
    date: "Aug 28, 2026",
    readTime: "5 min read",
    featuredImage: "/It Services.png",
    tags: ["Artificial Intelligence", "Enterprise Tech", "Cloud Architecture"],
    isFeatured: true,
    content: {
      takeaways: [
        "AI agents are evolving from static copilots to fully autonomous workflow orchestrators.",
        "Hybrid multi-cloud infrastructure is essential for latency-sensitive enterprise deployment.",
        "Security, data privacy, and governance remain paramount in high-regulated industries.",
      ],
      sections: [
        {
          heading: "The Shift to Autonomous Enterprise Intelligence",
          body: "Over the past three years, artificial intelligence has shifted from exploratory generative demos into mission-critical operational infrastructure. Organizations no longer require simple chatbots; they require end-to-end intelligent systems that monitor databases, optimize data pipelines, and automate multi-step decision workflows across diverse enterprise stacks.",
        },
        {
          heading: "Hybrid Architectures & Real-Time Data Pipelines",
          body: "KBS IT Solutions builds decoupled, microservices-driven architectures optimized for high-throughput enterprise demands. By blending cloud intelligence with edge execution, legacy databases can safely communicate with next-generation neural search engines and automated workflow engines without compromising security.",
        },
        {
          heading: "Looking Ahead to Next-Gen Software Solutions",
          body: "As enterprise systems continue to integrate zero-trust security and predictive AI models, operational overhead drops drastically. KBS Group remains committed to pioneering resilient, scalable platforms that power future-ready enterprises across India and global markets.",
        },
      ],
      quote: {
        text: "The future of enterprise software lies in seamless intelligence—where systems anticipate business needs before bottlenecks occur.",
        author: "KBS Group Engineering Lead",
      },
    },
  },
  {
    id: "winwala-automated-workflows-smb",
    slug: "automated-workflows-winwala-scaling-smb",
    title: "How Automated Workflows & WinWala are Scaling Growing Businesses",
    excerpt: "Discover how SaaS platforms, automated lead routing, and Creavo studio tooling enable fast-growing companies to operating at 10x speed.",
    category: "Business Automation & SaaS",
    author: {
      name: "SaaS Innovation Lab",
      role: "Product Strategy",
      avatar: "/kbs-group-logo.png",
    },
    date: "Aug 20, 2026",
    readTime: "4 min read",
    featuredImage: "/Automation Tools.png",
    tags: ["Automation", "SaaS", "WinWala", "Creavo Studio"],
    isFeatured: false,
    content: {
      takeaways: [
        "Manual data entry costs growing SMBs over 15 hours per week per employee.",
        "WinWala streamlines lead acquisition, customer communication, and payout tracking.",
        "Creavo Creative Studio empowers rapid brand asset creation without massive design teams.",
      ],
      sections: [
        {
          heading: "Eliminating Friction in Daily Operations",
          body: "For mid-market enterprises and growing brands, operational bottlenecking is the silent growth killer. WinWala was engineered by KBS Group to solve repetitive customer onboarding, multi-channel messaging, and payment processing tasks through intelligent automated flow engines.",
        },
        {
          heading: "Creative Automation with Creavo Studio",
          body: "Pairing business logic with visual branding assets is seamless with Creavo Creative Studio. Marketing teams generate personalized collateral, dynamic landing assets, and promotional materials in minutes, freeing up key personnel for strategic expansion.",
        },
      ],
    },
  },
  {
    id: "smart-scada-structural-ai-civil",
    slug: "smart-scada-structural-ai-civil-engineering",
    title: "Transforming Infrastructure with SCADA Central Monitoring & Structural AI",
    excerpt: "Next-gen infrastructure engineering leverages AI-driven drawing analysis and real-time SCADA IoT monitoring for safer structural design.",
    category: "Civil Engineering",
    author: {
      name: "Civil Engineering Division",
      role: "Infrastructure Lead",
      avatar: "/kbs-group-logo.png",
    },
    date: "Aug 15, 2026",
    readTime: "6 min read",
    featuredImage: "/Civil Services.png",
    tags: ["Civil Engineering", "SCADA Monitoring", "Structural AI", "Smart Cities"],
    isFeatured: false,
    content: {
      takeaways: [
        "AI drawing analysis reduces architectural blueprint audit time by over 70%.",
        "SCADA IoT integration enables 24/7 structural stress and environmental monitoring.",
        "Predictive maintenance models prevent catastrophic structural failures in public infrastructure.",
      ],
      sections: [
        {
          heading: "The Convergence of Civil Design and Artificial Intelligence",
          body: "Modern civil infrastructure requires unprecedented precision. KBS Civil Engineering integrates advanced CAD/BIM drawing analysis tools with real-time SCADA telemetry, giving engineers instant insight into material stress, load distribution, and environmental impacts.",
        },
        {
          heading: "Centralized SCADA Monitoring Systems",
          body: "By placing IoT sensors across critical structural points, municipal projects and private developments gain real-time telemetry dashboards. Predictive algorithms flag micro-vibrations and thermal changes long before physical cracks develop.",
        },
      ],
    },
  },
  {
    id: "next-wave-fintech-embedded-payments",
    slug: "next-wave-fintech-embedded-payments-working-capital",
    title: "The Next Wave of Fintech: Embedded Payments & Working Capital",
    excerpt: "Finjo and KBS Financial Services break down how BNPL, instant payouts, and flexible merchant financing drive modern business commerce.",
    category: "Financial Services",
    author: {
      name: "KBS Financial Services",
      role: "Fintech Desk",
      avatar: "/kbs-group-logo.png",
    },
    date: "Aug 10, 2026",
    readTime: "5 min read",
    featuredImage: "/Financial services.png",
    tags: ["Fintech", "Finjo", "Payment Gateways", "Merchant Capital"],
    isFeatured: false,
    content: {
      takeaways: [
        "Embedded financial tools boost customer checkout conversion rates by up to 35%.",
        "Instant settlement payouts solve cash flow friction for hyperlocal marketplaces.",
        "Data-driven credit scoring empowers SMBs to access working capital faster.",
      ],
      sections: [
        {
          heading: "Why Embedded Finance is Mandatory for Commerce",
          body: "Customers expect instant, effortless payment experiences. Finjo Fintech provides modular payment gateway APIs, automated reconciliation, and flexible BNPL options tailored for digital platforms and physical retail networks.",
        },
        {
          heading: "Empowering Merchants with Working Capital",
          body: "Cash flow constraints often hold back high-performing vendors. Through intelligent risk scoring and cash flow analytics, KBS Financial Services delivers rapid working capital support, helping businesses stock inventory and expand operations safely.",
        },
      ],
    },
  },
  {
    id: "bridging-tech-skill-gap-practical-training",
    slug: "bridging-tech-skill-gap-practical-training",
    title: "Bridging the Skill Gap: Practical Engineering & Software Training",
    excerpt: "KBS Skill Hub empowers aspiring engineers and tech professionals with hands-on workplace skills, industry tools, and career guidance.",
    category: "Skill Hub",
    author: {
      name: "KBS Skill Hub Team",
      role: "Learning & Development",
      avatar: "/kbs-group-logo.png",
    },
    date: "Aug 04, 2026",
    readTime: "4 min read",
    featuredImage: "/Skill Hub.png",
    tags: ["Skill Hub", "Career Training", "Software Skills", "Civil Tools"],
    isFeatured: false,
    content: {
      takeaways: [
        "Academic curricula often lag behind real-world software and engineering workflows.",
        "KBS Skill Hub focuses on 100% practical, project-based workplace training.",
        "Mentorship from active industry veterans bridges the gap between hiring and readiness.",
      ],
      sections: [
        {
          heading: "Real-World Workplace Readiness",
          body: "Theoretical knowledge is only half the equation. KBS Skill Hub delivers intensive hands-on bootcamps in modern software stack engineering, full-stack web development, CAD structural drafting, and SCADA basics led by active industry professionals.",
        },
        {
          heading: "Building Tomorrow's Workforce",
          body: "By providing real project experience, students graduate with actual portfolios, ready to contribute to enterprise engineering teams from day one.",
        },
      ],
    },
  },
  {
    id: "one-group-every-solution-kbs-synergy",
    slug: "one-group-every-solution-kbs-synergy",
    title: "One Group. Every Solution: How KBS Integrates Engineering, Tech & Capital",
    excerpt: "An inside look at how KBS Group connects Civil Engineering, IT, SaaS Automation, Fintech, and Skill Hub into a multi-vertical ecosystem.",
    category: "KBS Group",
    author: {
      name: "KBS Leadership",
      role: "Corporate Strategy",
      avatar: "/kbs-group-logo.png",
    },
    date: "Jul 28, 2026",
    readTime: "5 min read",
    featuredImage: "/All Verticals.png",
    tags: ["KBS Group", "Corporate Strategy", "Multi-Vertical", "Innovation"],
    isFeatured: false,
    content: {
      takeaways: [
        "Cross-vertical synergy allows KBS Group to build end-to-end solutions under one roof.",
        "From digital software to physical infrastructure, KBS connects technology, talent, and capital.",
        "Our unified vision accelerates digital transformation for businesses of all sizes.",
      ],
      sections: [
        {
          heading: "The Power of Multi-Disciplinary Ecosystems",
          body: "Most corporations specialize in a single domain—either software, finance, or infrastructure. KBS Group was founded on a different principle: true transformation happens at the intersection of technology, physical infrastructure, talent development, and financial capital.",
        },
        {
          heading: "Scaling Together into the Future",
          body: "Whether it is deploying SCADA monitoring for civil projects, launching fintech payment rails with Finjo, building automation tools like WinWala, or training the next generation of engineers at Skill Hub, KBS Group provides complete ecosystem strength.",
        },
      ],
    },
  },
];
