"use client";

import React, { useState } from "react";
import { Send, Lock, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactFormMapSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        const data = await res.json();
        setErrorMessage(data.message || "Failed to submit message.");
        setStatus("error");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact-form" className="bg-white py-12 sm:py-16">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#0F2346]/10 shadow-xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN: Contact Form (~48%) */}
            <div className="lg:col-span-6">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-2">
                  Send Us a Message
                </h2>
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] mb-4" />
                <p className="text-sm text-[#5B6475] leading-relaxed font-normal">
                  Tell us a little about what you need and our team will get back to you.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-[#0F2346]/15 text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#168BFF] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-[#0F2346]/15 text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#168BFF] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-[#0F2346]/15 text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#168BFF] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-[#0F2346]/15 text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#168BFF] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-[#0F2346]/15 text-sm text-[#111827] focus:outline-none focus:border-[#168BFF] focus:bg-white transition-all"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Engineering">Product Engineering</option>
                    <option value="AI & Automation">AI &amp; Automation</option>
                    <option value="Cloud & DevOps">Cloud &amp; DevOps</option>
                    <option value="Skill Hub Training">Skill Hub Training</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-[#0F2346]/15 text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#168BFF] focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Status Alerts */}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold">
                    {errorMessage || "Submission failed. Please check your inputs and try again."}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-bold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                {/* Privacy Note */}
                <div className="flex items-center gap-1.5 text-xs text-[#5B6475] pt-2">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Your information is safe with us. We&apos;ll never share it.</span>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN: Map Section (~52%) */}
            <div className="lg:col-span-6 h-full min-h-[460px] flex flex-col">
              <div className="relative w-full h-full min-h-[460px] rounded-2xl overflow-hidden border border-[#0F2346]/10 shadow-sm bg-slate-100">
                {/* Embed Map Iframe */}
                <iframe
                  title="KBS IT Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3117462007817!2d78.3789438!3d17.4447385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "460px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[460px] object-cover"
                />

                {/* Map Bottom-Left Location Card Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#0F2346]/10 shadow-xl max-w-[260px]">
                  <h4 className="text-base font-extrabold text-[#111827] tracking-tight">
                    Hyderabad
                  </h4>
                  <p className="text-xs text-[#5B6475] font-medium mb-3">
                    Telangana, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=HITEC+City+Hyderabad+Telangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#168BFF] hover:text-[#6657FF] transition-colors group"
                  >
                    Get Directions
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
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
