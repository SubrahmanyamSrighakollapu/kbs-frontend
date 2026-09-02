export interface ContactInfoItem {
  id: string;
  title: string;
  lines: string[];
  link?: string;
  iconName: "MapPin" | "Mail" | "Phone" | "Clock";
  accentColor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const contactInfoList: ContactInfoItem[] = [
  {
    id: "office",
    title: "Office",
    lines: [
      "KBS PVT LTD, Manjeera Trinity Corporate",
      "KPHB Phase 3, Kukatpally, Hyderabad 500072",
    ],
    iconName: "MapPin",
    accentColor: "#6657FF",
  },
  {
    id: "email",
    title: "Email",
    lines: ["info@kbs.group"],
    link: "mailto:info@kbs.group",
    iconName: "Mail",
    accentColor: "#168BFF",
  },
  {
    id: "phone",
    title: "Phone",
    lines: ["+91 8750749299"],
    link: "tel:+918750749299",
    iconName: "Phone",
    accentColor: "#A52BFF",
  },
  {
    id: "hours",
    title: "Working Hours",
    lines: ["Mon – Sat", "09:00 AM – 06:00 PM"],
    iconName: "Clock",
    accentColor: "#D82DFF",
  },
];

export const faqList: FAQItem[] = [
  {
    id: "faq-1",
    question: "What services does KBS IT offer?",
    answer:
      "KBS IT specializes in Product Engineering, AI & Automation, Cloud & DevOps, Data & Analytics, UX/UI Design, QA & Testing, and End-to-End Managed Support.",
  },
  {
    id: "faq-2",
    question: "How can I start a project with KBS IT?",
    answer:
      "You can get started by filling out our contact form, scheduling a consultation, or emailing us directly at info@kbs.group. Our team will review your requirements and respond within 24 hours.",
  },
  {
    id: "faq-3",
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes! We provide continuous maintenance, SLA-backed support, security patches, performance monitoring, and iterative feature development.",
  },
  {
    id: "faq-4",
    question: "Where is KBS IT located?",
    answer:
      "Our corporate headquarters is located at KBS PVT LTD, Manjeera Trinity Corporate, 1010, 10th floor, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072.",
  },
  {
    id: "faq-5",
    question: "Do you work with startups and established businesses?",
    answer:
      "Absolutely. We partner with fast-growing startups, mid-market companies, and large enterprises to build dependable digital products.",
  },
  {
    id: "faq-6",
    question: "Can KBS IT handle end-to-end product development?",
    answer:
      "Yes. We take full ownership from initial strategy and design through deployment, infrastructure, and long-term scaling.",
  },
];
