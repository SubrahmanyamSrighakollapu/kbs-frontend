import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import { DEFAULT_KEYWORDS, SITE_URL, getOrganizationSchema, getWebSiteSchema } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "KBS Group | KBS Pvt Ltd Hyderabad", template: "%s | KBS Group" },
  description: "KBS Group (KBS Pvt Ltd) is a Hyderabad-based enterprise delivering IT, civil engineering, business automation, financial services and skill development.",
  applicationName: "KBS Group",
  authors: [{ name: "KBS Group", url: SITE_URL }],
  creator: "KBS Group",
  publisher: "KBS Group",
  keywords: DEFAULT_KEYWORDS,
  category: "Business Services",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "KBS Group",
    title: "KBS Group | KBS Pvt Ltd Hyderabad",
    description: "KBS Group (KBS Pvt Ltd) delivers engineering, technology, automation, finance, and skill development solutions from Hyderabad, India.",
    images: [{ url: "/kbs-group-logo.png", width: 1200, height: 630, alt: "KBS Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KBS Group | KBS Pvt Ltd Hyderabad",
    description: "KBS Group (KBS Pvt Ltd) delivers engineering, technology, automation, finance, and skill development solutions from Hyderabad, India.",
    images: ["/kbs-group-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/kbs-group-favicon.png", shortcut: "/kbs-group-favicon.png", apple: "/kbs-group-favicon.png" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
