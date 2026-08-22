"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-14 border border-[#82A0FF]/25 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{
            background:
              "linear-gradient(135deg, #03142B 0%, #091D3A 50%, #3B1979 100%)",
          }}
        >
          {/* Subtle Atmospheric Wave Pattern */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg viewBox="0 0 1000 300" fill="none" className="w-full h-full">
              <path
                d="M -100 220 Q 300 40, 700 180 T 1200 80"
                stroke="url(#newsletterWave)"
                strokeWidth="3"
                strokeDasharray="6 8"
              />
              <defs>
                <linearGradient id="newsletterWave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#168BFF" />
                  <stop offset="50%" stopColor="#6657FF" />
                  <stop offset="100%" stopColor="#D82DFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Left Content */}
          <div className="relative z-10 flex items-center gap-5 text-center lg:text-left max-w-xl">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#168BFF]/25 to-[#6657FF]/25 border border-[#82A0FF]/30 text-[#00A8FF] flex items-center justify-center shrink-0 hidden sm:flex">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
                Stay Updated with KBS IT
              </h2>
              <p className="text-base text-slate-300 font-normal leading-relaxed">
                Get the latest insights, updates and events.
              </p>
            </div>
          </div>

          {/* Right Newsletter Form */}
          <div className="relative z-10 w-full lg:w-auto shrink-0 max-w-md">
            {status === "success" ? (
              <div className="p-4 rounded-2xl bg-white/10 border border-emerald-400/40 text-emerald-300 text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Subscribed successfully! Thank you.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-full bg-white text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#168BFF]"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-bold text-sm hover:opacity-95 active:scale-95 transition-all shadow-md shrink-0 disabled:opacity-50"
                >
                  {status === "submitting" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}

            <p className="text-xs text-slate-400 mt-2 text-center lg:text-left">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
