"use client";

import React, { useState } from "react";
import { MapPin, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="w-full bg-slate-50/50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column (55%): Contact Form */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E52B2F]">
                GET IN TOUCH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-sm text-slate-600 font-normal">
                Tell us a little about what you need and our team will get back to you.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-3 animate-fade-in">
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thanks for reaching out. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ fullName: "", email: "", phone: "", company: "", subject: "General Inquiry", message: "" });
                  }}
                  className="mt-2 text-xs font-bold text-[#E52B2F] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-xs font-semibold text-red-600">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none focus:ring-1 focus:ring-[#E52B2F]"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none focus:ring-1 focus:ring-[#E52B2F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none focus:ring-1 focus:ring-[#E52B2F]"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none focus:ring-1 focus:ring-[#E52B2F]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none focus:ring-1 focus:ring-[#E52B2F] bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Product Engineering Services</option>
                    <option>AI & Automation Solutions</option>
                    <option>Skill Hub & Corporate Training</option>
                    <option>Partnerships & Careers</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-[#E52B2F] focus:outline-none focus:ring-1 focus:ring-[#E52B2F]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#E52B2F] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#c92226] active:scale-95 transition-all cursor-pointer disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column (45%): Location & Map Container */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm relative min-h-[420px]">
            {/* Styled Map Graphic Background Container */}
            <div className="absolute inset-0 bg-[#e5e9ec] bg-cover bg-center" style={{ backgroundImage: `url('/contact-us-ui-desing.png')` }}>
              <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
            </div>

            {/* Map Pin Visual Overlay */}
            <div className="relative z-10 p-6 flex justify-center pt-16">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E52B2F] text-white shadow-2xl animate-bounce">
                <MapPin className="w-7 h-7" />
              </div>
            </div>

            {/* Location Info Card Overlay at Bottom */}
            <div className="relative z-10 p-6">
              <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 backdrop-blur-md shadow-xl space-y-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Hyderabad
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    Telangana, India
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <a
                    href="https://maps.google.com/?q=Hyderabad,+Telangana,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E52B2F] hover:text-[#c92226] group transition-colors"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
