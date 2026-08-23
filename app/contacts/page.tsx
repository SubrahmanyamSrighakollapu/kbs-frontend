import Header from "@/components/layout/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactFAQ from "@/components/contact/ContactFAQ";
import NewsletterCTA from "@/components/contact/NewsletterCTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact Us | KBS Information Technology",
  description: "Have a question, project idea, or want to partner with KBS IT? Contact our office in Hyderabad or send us a message.",
};

export default function ContactUsPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-[#E52B2F] selection:text-white">
      {/* 1. Shared Header */}
      <Header />

      {/* Main Content Flow */}
      <main className="w-full overflow-hidden">
        {/* 2. Contact Hero Banner */}
        <ContactHero />

        {/* 3. Contact Information Cards */}
        <ContactInfoCards />

        {/* 4. Contact Form + Map Section */}
        <ContactFormSection />

        {/* 5. Frequently Asked Questions */}
        <ContactFAQ />

        {/* 6. Newsletter / Stay Updated CTA */}
        <NewsletterCTA />
      </main>

      {/* 7. Shared Footer */}
      <Footer />
    </div>
  );
}
