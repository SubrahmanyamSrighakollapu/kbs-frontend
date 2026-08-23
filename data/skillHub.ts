export interface Course {
  slug: string;
  title: string;
  category: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  image: string;
  instructor: {
    name: string;
    role: string;
  };
  whatYouWillLearn: string[];
  curriculum: {
    moduleNumber: string;
    title: string;
    topics: string[];
  }[];
  prerequisites: string[];
}

export interface LearningPath {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  courseCount: number;
  estimatedWeeks: string;
  image: string;
  targetRole: string;
  skillsGained: string[];
  includedCourses: string[];
}

export interface UpcomingSession {
  slug: string;
  day: string;
  month: string;
  title: string;
  category: string;
  type: string;
  time: string;
  dateString: string;
  speaker: string;
  speakerRole: string;
  description: string;
  topics: string[];
  prerequisites: string[];
}

export const coursesData: Course[] = [
  {
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    category: "Web Development",
    description: "HTML, CSS, JavaScript, React, Node.js, Express & PostgreSQL to build complete web applications.",
    level: "Beginner",
    lessons: 20,
    duration: "12 Weeks",
    image: "/skills-hub-bg.png",
    instructor: {
      name: "Ravi Teja",
      role: "Lead Full Stack Architect @ KBS IT",
    },
    whatYouWillLearn: [
      "Master modern HTML5, CSS3, Flexbox, Grid, and Tailwind CSS",
      "Build dynamic frontends with React 19 and Next.js App Router",
      "Develop secure REST & GraphQL APIs using Node.js & Express",
      "Architect PostgreSQL relational databases & Prisma ORM",
      "Deploy scalable production web apps on Vercel & AWS",
    ],
    curriculum: [
      {
        moduleNumber: "Module 01",
        title: "Web Foundations & Modern CSS",
        topics: ["HTML5 Semantic Elements", "Responsive Layouts with CSS Grid", "Tailwind CSS Design System"],
      },
      {
        moduleNumber: "Module 02",
        title: "JavaScript ES6+ Deep Dive",
        topics: ["Async/Await & Promises", "DOM Manipulation", "Functional Programming"],
      },
      {
        moduleNumber: "Module 03",
        title: "React & State Management",
        topics: ["React Components & Hooks", "Context API & State", "Server Components"],
      },
      {
        moduleNumber: "Module 04",
        title: "Node.js Backend & API Development",
        topics: ["Express.js Server Architecture", "JWT Authentication", "Middleware & Error Handling"],
      },
      {
        moduleNumber: "Module 05",
        title: "Databases & Deployment",
        topics: ["PostgreSQL Schema Design", "Prisma ORM Queries", "CI/CD & Cloud Deployment"],
      },
    ],
    prerequisites: ["Basic computer literacy", "Understanding of how web browsers work"],
  },
  {
    slug: "ui-ux-design-masterclass",
    title: "UI/UX Design Masterclass",
    category: "Design",
    description: "Design thinking, Figma, wireframing, interactive prototyping, and human-centered design principles.",
    level: "Beginner",
    lessons: 18,
    duration: "10 Weeks",
    image: "/design.png",
    instructor: {
      name: "Ananya Roy",
      role: "Principal Product Designer @ KBS Studio",
    },
    whatYouWillLearn: [
      "User research methods and empathy mapping",
      "Information architecture and wireframing in Figma",
      "Creating scalable design systems and component libraries",
      "Interactive high-fidelity prototyping and micro-animations",
      "Usability testing and developer handoff workflows",
    ],
    curriculum: [
      {
        moduleNumber: "Module 01",
        title: "Design Thinking & User Research",
        topics: ["User Personas", "Journey Mapping", "Problem Framing"],
      },
      {
        moduleNumber: "Module 02",
        title: "Wireframing & Figma Fundamentals",
        topics: ["Auto Layout & Constraints", "Vector Editing", "Typography & Color Theory"],
      },
      {
        moduleNumber: "Module 03",
        title: "Design Systems & Prototyping",
        topics: ["Component Variants", "Interactive Mockups", "Usability Testing"],
      },
    ],
    prerequisites: ["No prior design experience required"],
  },
  {
    slug: "data-science-fundamentals",
    title: "Data Science Fundamentals",
    category: "Data & AI",
    description: "Python, data analysis, Pandas, NumPy, Machine Learning basics, and data visualization.",
    level: "Intermediate",
    lessons: 22,
    duration: "14 Weeks",
    image: "/it.png",
    instructor: {
      name: "Dr. Vikram Sethi",
      role: "Head of AI Research @ KBS IT",
    },
    whatYouWillLearn: [
      "Python programming for data analytics & scientific computing",
      "Data wrangling and cleaning with Pandas & NumPy",
      "Exploratory Data Analysis (EDA) and Matplotlib visualization",
      "Supervised & Unsupervised Machine Learning algorithms",
      "Building predictive models and deploying ML APIs",
    ],
    curriculum: [
      {
        moduleNumber: "Module 01",
        title: "Python for Data Science",
        topics: ["NumPy Data Structures", "Pandas DataFrames", "Data Cleaning"],
      },
      {
        moduleNumber: "Module 02",
        title: "Exploratory Data Analysis",
        topics: ["Statistical Analysis", "Data Visualization", "Feature Engineering"],
      },
      {
        moduleNumber: "Module 03",
        title: "Machine Learning Basics",
        topics: ["Regression & Classification", "Scikit-Learn", "Model Evaluation"],
      },
    ],
    prerequisites: ["Basic programming concepts in Python or similar language"],
  },
];

export const learningPathsData: LearningPath[] = [
  {
    slug: "web-developer",
    title: "Web Developer Path",
    subtitle: "Beginner to Advanced",
    description: "Complete roadmap to master modern frontend, backend, and full-stack web engineering.",
    level: "Beginner to Advanced",
    courseCount: 24,
    estimatedWeeks: "24 Weeks",
    image: "/skills-hub-bg.png",
    targetRole: "Full Stack Engineer / Web Developer",
    skillsGained: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "TypeScript", "REST APIs"],
    includedCourses: [
      "Full Stack Web Development",
      "Advanced React Patterns",
      "Node.js Microservices",
      "Database Architecture & SQL",
    ],
  },
  {
    slug: "data-scientist",
    title: "Data Scientist Path",
    subtitle: "Beginner to Advanced",
    description: "Comprehensive pathway covering Python data analysis, machine learning algorithms, and AI deployment.",
    level: "Beginner to Advanced",
    courseCount: 16,
    estimatedWeeks: "20 Weeks",
    image: "/it.png",
    targetRole: "Data Scientist / Machine Learning Engineer",
    skillsGained: ["Python", "Pandas", "Scikit-Learn", "TensorFlow", "Statistics", "Data Visualization"],
    includedCourses: [
      "Data Science Fundamentals",
      "Applied Machine Learning",
      "Deep Learning & Neural Networks",
      "Data Analytics & Tableau",
    ],
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer Path",
    subtitle: "Beginner to Advanced",
    description: "Master cloud infrastructure, containerization, CI/CD pipelines, and automated deployments.",
    level: "Beginner to Advanced",
    courseCount: 20,
    estimatedWeeks: "22 Weeks",
    image: "/services-bg.png",
    targetRole: "DevOps Engineer / Cloud Architect",
    skillsGained: ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions", "CI/CD Pipelines"],
    includedCourses: [
      "Cloud & DevOps Essentials",
      "Docker for Enterprise",
      "Kubernetes Orchestration",
      "AWS Infrastructure as Code",
    ],
  },
];

export const upcomingSessionsData: UpcomingSession[] = [
  {
    slug: "building-scalable-apis-nodejs",
    day: "25",
    month: "MAY",
    title: "Building Scalable APIs with Node.js",
    category: "Live Workshop",
    type: "Live Workshop by KBS Experts",
    time: "07:00 PM IST",
    dateString: "May 25, 2026",
    speaker: "Ravi Teja",
    speakerRole: "Lead Full Stack Architect @ KBS IT",
    description: "Learn architectural strategies for building high-concurrency Node.js REST and GraphQL APIs with caching and rate limiting.",
    topics: [
      "Asynchronous I/O optimization in Node.js",
      "Redis caching layer integration",
      "JWT authentication & rate limiting",
      "Benchmarking API throughput with Autocannon",
    ],
    prerequisites: ["Basic familiarity with JavaScript / Node.js"],
  },
  {
    slug: "react-performance-optimization",
    day: "28",
    month: "MAY",
    title: "React Performance Optimization",
    category: "Live Webinar",
    type: "Live Webinar",
    time: "07:00 PM IST",
    dateString: "May 28, 2026",
    speaker: "Sneha Reddy",
    speakerRole: "Senior Frontend Engineer @ KBS IT",
    description: "Deep dive into React 19 rendering mechanics, memoization techniques, code splitting, and web vitals optimization.",
    topics: [
      "Understanding React Fiber reconciliation",
      "Preventing unnecessary re-renders with useMemo & useCallback",
      "Code splitting with dynamic imports & React Suspense",
      "Optimizing Core Web Vitals (LCP, CLS, INP)",
    ],
    prerequisites: ["Working knowledge of React"],
  },
  {
    slug: "docker-for-developers",
    day: "30",
    month: "MAY",
    title: "Docker for Developers",
    category: "Hands-on Lab",
    type: "Hands-on Lab",
    time: "07:00 PM IST",
    dateString: "May 30, 2026",
    speaker: "Karthik Verma",
    speakerRole: "DevOps Specialist @ KBS IT",
    description: "Hands-on session on containerizing web applications, writing multi-stage Dockerfiles, and orchestrating with Docker Compose.",
    topics: [
      "Containerization fundamentals & image layers",
      "Writing lightweight multi-stage Dockerfiles",
      "Docker Compose for multi-container development",
      "Volume mounting & networking basics",
    ],
    prerequisites: ["Basic command line knowledge"],
  },
];
