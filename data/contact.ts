import { MapPin, Mail, Phone, Clock } from "lucide-react";

export interface ContactInfoCardData {
  id: string;
  title: string;
  value: string;
  subValue?: string;
  href?: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const contactInfoCards: ContactInfoCardData[] = [
  {
    id: "office",
    title: "Office",
    value: "KBS IT / KBS Group",
    subValue: "Hyderabad, Telangana, India",
    href: "https://maps.google.com/?q=Hyderabad,+Telangana,+India",
    iconName: "MapPin",
  },
  {
    id: "email",
    title: "Email",
    value: "hello@kbsit.com",
    href: "mailto:hello@kbsit.com",
    iconName: "Mail",
  },
  {
    id: "phone",
    title: "Phone",
    value: "+91 91234 56789",
    href: "tel:+919123456789",
    iconName: "Phone",
  },
  {
    id: "working-hours",
    title: "Working Hours",
    value: "Mon – Sat",
    subValue: "09:00 AM – 06:00 PM",
    iconName: "Clock",
  },
];

export const contactFAQs: FAQItem[] = [
  {
    id: "services-offered",
    question: "What services does KBS IT offer?",
    answer: "KBS IT provides product engineering, AI & automation, cloud & DevOps, data & analytics, UI/UX design, QA & testing, and end-to-end technology support.",
  },
  {
    id: "start-project",
    question: "How can I start a project with KBS IT?",
    answer: "Submit the contact form or schedule a consultation. Our team will understand your requirements and discuss the right engagement model.",
  },
  {
    id: "ongoing-support",
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. We provide maintenance, monitoring, enhancements, optimization, and long-term product support based on project requirements.",
  },
  {
    id: "location",
    question: "Where is KBS IT located?",
    answer: "KBS Information Technology operates from Hyderabad, Telangana, India, while serving clients across multiple global locations.",
  },
  {
    id: "startups-enterprises",
    question: "Do you work with startups and established businesses?",
    answer: "Yes. We work with early-stage startups, growing companies, and established enterprise businesses across multiple industries.",
  },
  {
    id: "end-to-end",
    question: "Can KBS IT handle end-to-end product development?",
    answer: "Yes. We can support projects from initial strategy and design through engineering, testing, cloud deployment, and ongoing evolution.",
  },
];
