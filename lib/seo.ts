import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kbs.group";

export const SITE_NAME = "KBS Group";
export const COMPANY_NAME = "KBS Information Technology";
export const TAGLINE = "One Group. Every Solution.";

export const DEFAULT_KEYWORDS = [
  "KBS Group",
  "KBS Group 360",
  "KBS Group Hyderabad",
  "KBS Information Technology",
  "KBS IT Solutions",
  "KBS Enterprise Group",
];

interface SEOConfig {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/kbs-group-logo.png",
  type = "website",
  noIndex = false,
}: SEOConfig): Metadata {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE_URL}${normalizedPath}`;
  const fullTitle = title.includes("KBS Group") ? title : `${title} | KBS Group`;
  const combinedKeywords = Array.from(new Set([...keywords, ...DEFAULT_KEYWORDS]));

  return {
    title: { absolute: fullTitle },
    description,
    keywords: combinedKeywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type,
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - KBS Group`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    icons: {
      icon: "/kbs-group-favicon.png",
      shortcut: "/kbs-group-favicon.png",
      apple: "/kbs-group-favicon.png",
    },
  };
}

// JSON-LD Generators
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${SITE_URL}/#organization`,
    name: "KBS Group",
    legalName: "KBS PVT LTD",
    alternateName: [
      "KBS Group 360",
      "KBS Information Technology",
      "KBS IT Solutions",
      "KBS Civil Engineering Services",
      "KBS Financial Services",
      "KBS Business Automation & SaaS",
      "KBS Skill Hub",
    ],
    url: SITE_URL,
    logo: `${SITE_URL}/kbs-group-logo.png`,
    image: `${SITE_URL}/kbs-group-logo.png`,
    description:
      "KBS Group is a multi-vertical enterprise integrating Civil Engineering, Information Technology, Business Automation, Financial Services, and Skill Development.",
    telephone: "+91 8750749299",
    email: "info@kbs.group",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1010, 10th Floor, Manjeera Trinity Corporate, KPHB Phase 3, Kukatpally",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500072",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.4937,
      longitude: 78.3995,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 8750749299",
      contactType: "customer service",
      email: "info@kbs.group",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "KBS Group",
    description: "One Group. Every Solution. Civil Engineering, IT, Automation, Finance & Skill Hub.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item.startsWith("http") ? it.item : `${SITE_URL}${it.item}`,
    })),
  };
}

export function getServiceSchema({
  name,
  description,
  serviceType,
  path,
}: {
  name: string;
  description: string;
  serviceType: string;
  path?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: "Worldwide",
  };
}

export function getArticleSchema({
  title,
  description,
  slug,
  datePublished,
  authorName,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  authorName: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/insights/${slug}`,
    },
    headline: title,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    datePublished,
  };
}

export function getCourseSchema({ name, description, path, image }: { name: string; description: string; path: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: `${SITE_URL}${path}`,
    image: image ? `${SITE_URL}${image}` : undefined,
    provider: { "@type": "Organization", name: "KBS Skill Hub", sameAs: `${SITE_URL}/skill-hub` },
    inLanguage: "en-IN",
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
