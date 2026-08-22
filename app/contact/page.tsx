import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoPanel from "@/components/contact/ContactInfoPanel";
import ContactFormMapSection from "@/components/contact/ContactFormMapSection";
import ContactFAQ from "@/components/contact/ContactFAQ";
import NewsletterCTA from "@/components/contact/NewsletterCTA";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us | KBS Information Technology",
  description:
    "Get in touch with KBS Information Technology. Reach out for project inquiries, technical consultations, partnerships, or visit our engineering headquarters in HITEC City, Hyderabad.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Contact Hero */}
        <ContactHero />

        {/* 3. Floating Contact Information Panel */}
        <ContactInfoPanel />

        {/* 4. Contact Form + Map Section */}
        <ContactFormMapSection />

        {/* 5. Frequently Asked Questions */}
        <ContactFAQ />

        {/* 6. Stay Updated Newsletter CTA */}
        <NewsletterCTA />
      </main>

      {/* 7. Shared Footer */}
      <Footer />
    </div>
  );
}
