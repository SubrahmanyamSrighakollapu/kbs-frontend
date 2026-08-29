"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Mail,
  Users,
  LogOut,
  Shield,
  Menu,
  X,
  ChevronRight,
  UserCog,
  MessageSquare,
  Inbox,
} from "lucide-react";
import { getToken, getStoredUser, clearToken } from "@/lib/adminApi";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  description: string;
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    description: "Overview & Analytics",
  },
  {
    label: "Contact Queries",
    href: "/admin/dashboard/contacts",
    icon: Inbox,
    description: "Manage submissions",
    badge: "new",
  },
  {
    label: "Newsletter",
    href: "/admin/dashboard/newsletter",
    icon: Mail,
    description: "Subscribers list",
  },
];

export default function AdminAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const initial = () => {
    const token = typeof window !== "undefined" ? getToken() : null;
    const user = token ? getStoredUser() : null;
    return { hasToken: !!token, name: user?.name ?? "", email: user?.email ?? "" };
  };
  const [isAuthed, setIsAuthed] = useState(false);
  const [userName, setUserName] = useState(() => initial().name);
  const [userEmail, setUserEmail] = useState(() => initial().email);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/admin/login");
      return;
    }
    const { name, email } = initial();
    queueMicrotask(() => {
      setUserName(name);
      setUserEmail(email);
      setIsAuthed(true);
    });
  }, [router]);

  const handleLogout = () => {
    clearToken();
    document.cookie =
      "kbs_admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.replace("/admin/login");
  };

  if (!isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F7FB]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#168BFF] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-[#5B6475] font-medium">Verifying access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#F4F7FB]">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen z-50 w-[280px] shrink-0 flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#03142B] via-[#061A36] to-[#0A1F44] shadow-2xl" />
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col h-full p-5">
          {/* Logo */}
          <div className="flex items-center justify-between pb-6 mb-2 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#168BFF] via-[#6657FF] to-[#A52BFF] flex items-center justify-center shadow-lg shadow-[#6657FF]/30">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <span className="text-xl font-extrabold tracking-tighter text-white">
                    KBS
                  </span>
                  <span className="text-[8px] tracking-widest font-semibold text-white/60 uppercase ml-1 border-l border-white/30 pl-1">
                    GROUP
                  </span>
                </div>
                <p className="text-[10px] text-white/50 mt-0.5">CMS Admin</p>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User card */}
          <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#168BFF] to-[#A52BFF] flex items-center justify-center shrink-0">
                <UserCog className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-white truncate">
                  {userName || "Administrator"}
                </p>
                <p className="text-[11px] text-white/50 truncate">
                  {userEmail || "admin@kbsgroup.com"}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-semibold border border-white/10 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 flex flex-col gap-1">
            <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-white/40">
              Management
            </p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/admin/dashboard"
                  ? pathname === "/admin/dashboard"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group relative flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#168BFF]/25 to-[#A52BFF]/15 border border-white/15 text-white shadow-lg shadow-[#168BFF]/10"
                      : "text-white/65 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-7 rounded-r-full bg-gradient-to-b from-[#168BFF] to-[#A52BFF]" />
                  )}
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      isActive
                        ? "bg-white/10 text-[#00A8FF]"
                        : "bg-white/[0.03] text-white/50 group-hover:bg-white/10 group-hover:text-[#00A8FF]"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold truncate">{item.label}</p>
                      {item.badge && isActive && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-[#E52B2F] text-[9px] font-bold uppercase tracking-wider text-white">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10.5px] text-white/40 truncate leading-tight mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-all ${
                      isActive
                        ? "text-[#00A8FF] translate-x-0 opacity-100"
                        : "text-white/30 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="pt-4 mt-4 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#168BFF]/10 to-[#A52BFF]/10 border border-white/10">
              <div className="flex items-start gap-2.5 mb-2">
                <MessageSquare className="w-4 h-4 text-[#00A8FF] shrink-0 mt-0.5" />
                <p className="text-[11px] text-white/80 font-semibold leading-relaxed">
                  Need help? Contact IT support for access management.
                </p>
              </div>
            </div>
            <p className="mt-4 text-[10px] text-white/30 text-center">
              v1.0.0 · © {new Date().getFullYear()} KBS IT
            </p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-[#0F2346]/8 shadow-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl hover:bg-slate-100 text-[#111827] transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden sm:block">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  {navItems.find((i) =>
                    i.href === "/admin/dashboard"
                      ? pathname === "/admin/dashboard"
                      : pathname.startsWith(i.href)
                  )?.label || "Dashboard"}
                </p>
                <p className="text-xs text-[#5B6475]/80">
                  {navItems.find((i) =>
                    i.href === "/admin/dashboard"
                      ? pathname === "/admin/dashboard"
                      : pathname.startsWith(i.href)
                  )?.description || "KBS Group CMS"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#5B6475] hover:text-[#111827] hover:bg-slate-100 transition-all border border-transparent hover:border-[#0F2346]/8"
              >
                <Users className="w-3.5 h-3.5" />
                View Public Site
              </Link>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#168BFF] to-[#A52BFF] flex items-center justify-center shadow-md shadow-[#6657FF]/20 ring-2 ring-white">
                <Users className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
