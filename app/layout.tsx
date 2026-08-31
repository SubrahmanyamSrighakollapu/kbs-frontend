import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KBS Group | One Group. Every Solution.",
    template: "%s | KBS Group",
  },
  description:
    "KBS Group is a multi-vertical enterprise bringing engineering, technology, finance, and talent together — powering Civil Engineering, Information Technology, Business Automation, Financial Services, and Skill Development.",
  keywords: [
    "KBS Group",
    "Civil Engineering Services",
    "Information Technology",
    "Business Automation Tools",
    "Financial Services",
    "Skill Hub",
  ],
  icons: {
    icon: "/kbs-group-favicon.png",
    shortcut: "/kbs-group-favicon.png",
    apple: "/kbs-group-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
