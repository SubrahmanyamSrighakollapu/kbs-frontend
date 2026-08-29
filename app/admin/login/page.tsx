"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  Shield,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { setToken, setStoredUser } from "@/lib/adminApi";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:5000";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const existing = localStorage.getItem("kbs_admin_token");
      if (existing) {
        router.replace("/admin/dashboard");
      }
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.token) {
        setToken(data.token);
        if (data.user) {
          setStoredUser(data.user);
        }
        document.cookie = `kbs_admin_token=${encodeURIComponent(data.token)}; path=/; max-age=${60 * 60 * 24}; SameSite=Lax`;
        router.replace("/admin/dashboard");
      } else {
        setErrorMessage(data.message || "Invalid email or password.");
        setStatus("error");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not connect to the server.";
      setErrorMessage(msg + " Please ensure the backend is running.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-stretch">
      {/* Left decorative panel (~55%) */}
      <div className="hidden lg:flex lg:w-[55%] xl:w-[58%] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #03142B 0%, #061A36 25%, #162B5E 55%, #3B1979 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-30">
          <svg viewBox="0 0 1200 1200" fill="none" className="w-full h-full">
            <defs>
              <radialGradient id="glow1" cx="30%" cy="25%" r="45%">
                <stop offset="0%" stopColor="#168BFF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#168BFF" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow2" cx="75%" cy="80%" r="50%">
                <stop offset="0%" stopColor="#A52BFF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#A52BFF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="1200" fill="url(#glow1)" />
            <rect width="1200" height="1200" fill="url(#glow2)" />
          </svg>
        </div>
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col justify-between w-full p-12 xl:p-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold w-fit transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to KBS IT Website
          </Link>

          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#168BFF]/30 to-[#A52BFF]/30 border border-white/20 backdrop-blur flex items-center justify-center">
                <Shield className="w-7 h-7 text-[#00A8FF]" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold tracking-tighter text-white">
                    KBS
                  </span>
                  <span className="text-[10px] tracking-widest font-semibold text-white/70 uppercase ml-1.5 border-l border-white/30 pl-1.5">
                    GROUP
                  </span>
                </div>
                <p className="text-xs text-white/60 mt-0.5">Admin Control Panel</p>
              </div>
            </div>

            <h1 className="text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.05] mb-5">
              Welcome Back,
              <br />
              <span className="kbs-gradient-text">Administrator</span>
            </h1>
            <p className="text-base text-white/70 leading-relaxed mb-10">
              Securely manage contact inquiries, newsletter subscribers, and site content
              through the KBS Group CMS dashboard.
            </p>

            <div className="space-y-4">
              {[
                { title: "Contact Queries", desc: "View & respond to incoming messages" },
                { title: "Newsletter Subscribers", desc: "Manage email subscriber list" },
                { title: "Dashboard Analytics", desc: "Real-time insights and statistics" },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#168BFF]/30 to-[#6657FF]/30 border border-white/15 flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A8FF]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-white/60">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} KBS Information Technology. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right login form (~45%) */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-white">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tighter text-[#111827]">
                KBS
              </span>
              <span className="text-[10px] tracking-widest font-semibold text-[#5B6475] uppercase ml-1.5 border-l border-slate-300 pl-1.5">
                GROUP
              </span>
            </div>
            <Link
              href="/"
              className="text-xs font-semibold text-[#5B6475] hover:text-[#111827] inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </Link>
          </div>

          <div className="mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#168BFF] via-[#6657FF] to-[#A52BFF] flex items-center justify-center mb-6 shadow-lg shadow-[#6657FF]/25">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#111827] tracking-tight mb-2">
              Sign in to CMS
            </h2>
            <p className="text-sm text-[#5B6475] leading-relaxed">
              Enter your administrator credentials to access the dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@kbsgroup.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#F8FAFF] border border-[#0F2346]/15 text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#168BFF] focus:bg-white focus:ring-4 focus:ring-[#168BFF]/10 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider">
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-[#F8FAFF] border border-[#0F2346]/15 text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#168BFF] focus:bg-white focus:ring-4 focus:ring-[#168BFF]/10 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-[#111827] hover:bg-slate-100 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {status === "error" && errorMessage && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white font-bold text-base hover:opacity-95 active:scale-[0.98] transition-all shadow-lg shadow-[#6657FF]/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Sign In to Dashboard
                </>
              )}
            </button>
          </form>

          <div className="mt-10 p-5 rounded-2xl bg-[#F8FAFF] border border-[#0F2346]/8">
            <p className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2">
              Default Credentials
            </p>
            <p className="text-xs text-[#5B6475] leading-relaxed">
              <span className="font-semibold text-[#111827]">Email:</span>{" "}
              admin@kbsgroup.com
              <br />
              <span className="font-semibold text-[#111827]">Password:</span> admin123
            </p>
            <p className="text-[11px] text-[#5B6475]/80 mt-3 italic">
              Change the default admin credentials via environment variables in production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
