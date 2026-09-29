import React from "react";
import { constructMetadata, getFAQSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { faqList } from "@/data/contact";
import Header from "@/components/layout/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoPanel from "@/components/contact/ContactInfoPanel";
import ContactFormMapSection from "@/components/contact/ContactFormMapSection";
import ContactFAQ from "@/components/contact/ContactFAQ";
import NewsletterCTA from "@/components/contact/NewsletterCTA";
import Footer from "@/components/layout/Footer";

export const metadata = constructMetadata({
  title: "Contact KBS Group Hyderabad",
  description: "Contact KBS Group in Hyderabad for IT, civil engineering, business automation, financial services, training, partnerships, and project consultations.",
  path: "/contact",
  keywords: ["contact KBS Group", "KBS Group Hyderabad address", "KBS Group phone"],
  image: "/contact-us-hero.png",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#168BFF] selection:text-white">
      <JsonLd data={getFAQSchema(faqList)} />
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
