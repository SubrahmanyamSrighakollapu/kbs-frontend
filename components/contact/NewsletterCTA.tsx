"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to subscribe.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="relative w-full bg-[#06131E] py-16 lg:py-24 text-white overflow-hidden">
      {/* Red & Blue Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#E52B2F]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Stay Updated with KBS IT
        </h2>

        <p className="text-base sm:text-lg font-normal text-slate-300 max-w-xl mx-auto">
          Get the latest insights, updates and events.
        </p>

        <div className="max-w-md mx-auto pt-2">
          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 py-3.5 px-6 text-sm font-semibold text-emerald-300">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Thank you for subscribing to KBS IT updates!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-white/20 bg-white/10 py-3.5 px-6 text-sm text-white placeholder-slate-400 focus:border-[#E52B2F] focus:outline-none backdrop-blur-md"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto shrink-0 rounded-full bg-[#E52B2F] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#c92226] active:scale-95 transition-all cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-2 text-xs text-red-400 font-semibold">{errorMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
}
