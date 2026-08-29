"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Mail,
  Inbox,
  TrendingUp,
  TrendingDown,
  Clock,
  Eye,
  CheckCircle2,
  Archive,
  Users,
  ArrowRight,
  AlertCircle,
  Dot,
  RefreshCw,
  BarChart3,
  Activity,
} from "lucide-react";
import { adminFetchJson } from "@/lib/adminApi";

interface StatsData {
  total_contacts: number;
  new_contacts: number;
  read_contacts: number;
  replied_contacts: number;
  archived_contacts: number;
  contacts_last_7_days: number;
  contacts_last_30_days: number;
  total_subscribers: number;
  active_subscribers: number;
  inactive_subscribers: number;
  subscribers_last_7_days: number;
  subscribers_last_30_days: number;
}

interface RecentContact {
  id: number;
  full_name: string;
  email: string;
  subject: string;
  status: "new" | "read" | "replied" | "archived";
  created_at: string;
}

interface RecentSubscriber {
  id: number;
  email: string;
  subscribed_at: string;
}

interface SubjectCount {
  subject: string;
  count: number;
}

interface TrendPoint {
  date: string;
  count: number;
}

const statusStyles: Record<string, string> = {
  new: "bg-rose-50 text-rose-700 border-rose-200",
  read: "bg-sky-50 text-sky-700 border-sky-200",
  replied: "bg-emerald-50 text-emerald-700 border-emerald-200",
  archived: "bg-slate-100 text-slate-600 border-slate-200",
};

const statusLabel: Record<string, string> = {
  new: "New",
  read: "Read",
  replied: "Replied",
  archived: "Archived",
};

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const min = Math.floor(diff / 60000);
    const hr = Math.floor(diff / 3600000);
    const day = Math.floor(diff / 86400000);
    if (min < 1) return "just now";
    if (min < 60) return `${min}m ago`;
    if (hr < 24) return `${hr}h ago`;
    if (day < 7) return `${day}d ago`;
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

export default function AdminDashboardHomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<StatsData | null>(null);
  const [recentContacts, setRecentContacts] = useState<RecentContact[]>([]);
  const [recentSubscribers, setRecentSubscribers] = useState<RecentSubscriber[]>([]);
  const [contactBySubject, setContactBySubject] = useState<SubjectCount[]>([]);
  const [contactTrend, setContactTrend] = useState<TrendPoint[]>([]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await adminFetchJson<{
        stats: StatsData;
        recentContacts: RecentContact[];
        recentSubscribers: RecentSubscriber[];
        contactBySubject: SubjectCount[];
        contactTrend: TrendPoint[];
      }>("/api/dashboard/stats");
      setStats(result.stats);
      setRecentContacts(result.recentContacts);
      setRecentSubscribers(result.recentSubscribers);
      setContactBySubject(result.contactBySubject);
      setContactTrend(result.contactTrend);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (!cancelled) {
        loadData();
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const maxTrend = Math.max(1, ...contactTrend.map((t) => t.count));
  const maxSubject = Math.max(1, ...contactBySubject.map((s) => s.count));

  return (
    <div className="space-y-6 lg:space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#168BFF] to-[#A52BFF] flex items-center justify-center shadow-md shadow-[#6657FF]/20">
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
              CMS Overview
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-1.5">
            Welcome back 👋
          </h1>
          <p className="text-sm text-[#5B6475]">
            Here&apos;s what&apos;s happening across KBS Group today.
          </p>
        </div>
        <button
          onClick={loadData}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#0F2346]/10 text-sm font-semibold text-[#111827] hover:bg-slate-50 active:scale-[0.98] transition-all shadow-sm"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {/* Alert */}
      {error && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-rose-800">Failed to load</p>
            <p className="text-xs text-rose-700 mt-0.5">{error}</p>
          </div>
        </div>
      )}

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
        <StatCard
          title="Total Queries"
          value={stats?.total_contacts ?? 0}
          delta={`${stats?.contacts_last_30_days ?? 0} last 30d`}
          icon={Inbox}
          gradient="from-[#168BFF] to-[#6657FF]"
          shadow="shadow-[#168BFF]/15"
          loading={loading}
        />
        <StatCard
          title="New Unread"
          value={stats?.new_contacts ?? 0}
          delta="Needs attention"
          icon={Dot}
          gradient="from-[#E52B2F] to-[#FF6B35]"
          shadow="shadow-[#E52B2F]/15"
          iconClass="w-7 h-7"
          loading={loading}
        />
        <StatCard
          title="Replied"
          value={stats?.replied_contacts ?? 0}
          delta={`${stats?.contacts_last_7_days ?? 0} this week`}
          icon={CheckCircle2}
          gradient="from-[#10B981] to-[#059669]"
          shadow="shadow-[#10B981]/15"
          loading={loading}
        />
        <StatCard
          title="Newsletter Subscribers"
          value={stats?.total_subscribers ?? 0}
          delta={`${stats?.active_subscribers ?? 0} active`}
          icon={Mail}
          gradient="from-[#A52BFF] via-[#6657FF] to-[#168BFF]"
          shadow="shadow-[#A52BFF]/15"
          loading={loading}
        />
      </div>

      {/* Mid section: trend + breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Trend chart */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-7 border-b border-[#0F2346]/6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#168BFF]/15 to-[#A52BFF]/15 flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#168BFF]" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#111827] tracking-tight">
                  Contact Volume
                </h3>
                <p className="text-xs text-[#5B6475]">Last 14 days</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200">
              <BarChart3 className="w-3.5 h-3.5" />
              Inquiries
            </div>
          </div>
          <div className="p-6 sm:p-7">
            {loading ? (
              <SkeletonBars />
            ) : contactTrend.length === 0 ? (
              <EmptyStateSmall title="No data yet" text="Submit some contact forms to see the trend." />
            ) : (
              <div className="flex items-end justify-between gap-1.5 sm:gap-2 h-44 sm:h-52">
                {Array.from({ length: 14 }).map((_, idx) => {
                  const point = contactTrend[idx];
                  const date = point
                    ? new Date(point.date)
                    : (() => {
                        const d = new Date();
                        d.setDate(d.getDate() - (13 - idx));
                        return d;
                      })();
                  const count = point?.count ?? 0;
                  const height = (count / maxTrend) * 100;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="w-full flex-1 flex items-end">
                        <div
                          className="w-full rounded-t-lg bg-gradient-to-t from-[#168BFF] via-[#6657FF] to-[#A52BFF]/80 relative transition-all hover:opacity-90"
                          style={{ height: `${Math.max(height, count > 0 ? 6 : 1)}%` }}
                        >
                          {count > 0 && (
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                              <div className="px-1.5 py-0.5 rounded-md bg-[#03142B] text-white text-[10px] font-bold whitespace-nowrap">
                                {count}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-[#5B6475]">
                        {date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Subject breakdown */}
        <div className="bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-7 border-b border-[#0F2346]/6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A52BFF]/15 to-[#168BFF]/15 flex items-center justify-center">
              <Eye className="w-5 h-5 text-[#A52BFF]" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#111827] tracking-tight">
                By Subject
              </h3>
              <p className="text-xs text-[#5B6475]">Query type distribution</p>
            </div>
          </div>
          <div className="p-6 sm:p-7 space-y-4">
            {loading ? (
              <>
                <SkeletonLine />
                <SkeletonLine />
                <SkeletonLine />
                <SkeletonLine />
              </>
            ) : contactBySubject.length === 0 ? (
              <EmptyStateSmall title="No subjects" text="Once queries arrive, they'll appear here." />
            ) : (
              contactBySubject.slice(0, 6).map((s) => (
                <div key={s.subject}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-semibold text-[#111827] truncate">
                      {s.subject}
                    </span>
                    <span className="text-xs font-bold text-[#5B6475] ml-2 shrink-0">
                      {s.count}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-[#F4F7FB] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF]"
                      style={{ width: `${(s.count / maxSubject) * 100}%` }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Quick status cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MiniCard label="New" count={stats?.new_contacts ?? 0} icon={Dot} color="rose" loading={loading} />
        <MiniCard label="Read" count={stats?.read_contacts ?? 0} icon={Eye} color="sky" loading={loading} />
        <MiniCard label="Replied" count={stats?.replied_contacts ?? 0} icon={CheckCircle2} color="emerald" loading={loading} />
        <MiniCard label="Archived" count={stats?.archived_contacts ?? 0} icon={Archive} color="slate" loading={loading} />
      </div>

      {/* Bottom section: recent contacts + subscribers */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
        {/* Recent contacts */}
        <div className="xl:col-span-3 bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-7 border-b border-[#0F2346]/6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-indigo-100 flex items-center justify-center">
                <Inbox className="w-5 h-5 text-[#168BFF]" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#111827] tracking-tight">
                  Recent Contact Queries
                </h3>
                <p className="text-xs text-[#5B6475]">Latest 5 submissions</p>
              </div>
            </div>
            <Link
              href="/admin/dashboard/contacts"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold text-[#168BFF] hover:text-[#6657FF] hover:bg-[#168BFF]/5 transition-all"
            >
              View all
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div>
            {loading ? (
              <div className="p-6 space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SkeletonRow key={i} />
                ))}
              </div>
            ) : recentContacts.length === 0 ? (
              <div className="p-10">
                <EmptyStateSmall title="No queries yet" text="Contact inquiries from the website will appear here." />
              </div>
            ) : (
              <ul className="divide-y divide-[#0F2346]/6">
                {recentContacts.map((c) => (
                  <li
                    key={c.id}
                    className="p-4 sm:p-5 hover:bg-[#F8FAFF] transition-colors cursor-pointer group"
                  >
                    <Link href={`/admin/dashboard/contacts?id=${c.id}`} className="block">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3.5 min-w-0">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#168BFF]/10 to-[#A52BFF]/10 flex items-center justify-center shrink-0">
                            <Users className="w-4.5 h-4.5 text-[#168BFF]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap mb-0.5">
                              <p className="text-sm font-bold text-[#111827] truncate">
                                {c.full_name}
                              </p>
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                                  statusStyles[c.status]
                                }`}
                              >
                                {c.status === "new" && <Dot className="w-3 h-3 -ml-1" />}
                                {statusLabel[c.status]}
                              </span>
                            </div>
                            <p className="text-xs text-[#5B6475] truncate mb-1">{c.email}</p>
                            <p className="text-xs text-[#5B6475] truncate">
                              <span className="font-semibold text-[#111827]">{c.subject}</span>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-[#5B6475] shrink-0">
                          <Clock className="w-3 h-3" />
                          {formatDate(c.created_at)}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Recent subscribers */}
        <div className="xl:col-span-2 bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-7 border-b border-[#0F2346]/6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#A52BFF]" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#111827] tracking-tight">
                  Latest Subscribers
                </h3>
                <p className="text-xs text-[#5B6475]">New newsletter signups</p>
              </div>
            </div>
            <Link
              href="/admin/dashboard/newsletter"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold text-[#A52BFF] hover:text-[#6657FF] hover:bg-[#A52BFF]/5 transition-all"
            >
              List
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div>
            {loading ? (
              <div className="p-6 space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <SkeletonRow key={i} />
                ))}
              </div>
            ) : recentSubscribers.length === 0 ? (
              <div className="p-10">
                <EmptyStateSmall title="No subscribers yet" text="Newsletter signups will show up here." />
              </div>
            ) : (
              <ul className="divide-y divide-[#0F2346]/6">
                {recentSubscribers.map((s) => (
                  <li key={s.id} className="p-4 sm:p-5 hover:bg-[#F8FAFF] transition-colors">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#A52BFF]/10 to-[#168BFF]/10 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-[#A52BFF]" />
                        </div>
                        <p className="text-sm font-semibold text-[#111827] truncate">
                          {s.email}
                        </p>
                      </div>
                      <span className="text-[11px] font-semibold text-[#5B6475] shrink-0">
                        {formatDate(s.subscribed_at)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function StatCard({
  title,
  value,
  delta,
  icon: Icon,
  gradient,
  shadow,
  loading,
  iconClass = "w-5 h-5",
}: {
  title: string;
  value: number;
  delta: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  shadow: string;
  loading: boolean;
  iconClass?: string;
}) {
  return (
    <div className="relative group bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm p-5 sm:p-6 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <div
        className={`absolute -right-12 -top-12 w-40 h-40 rounded-full bg-gradient-to-br ${gradient} opacity-[0.08] blur-2xl group-hover:opacity-[0.14] transition-opacity`}
      />
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg ${shadow}`}
        >
          <Icon className={`${iconClass} text-white`} />
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-50 text-[10px] font-bold text-[#5B6475] border border-slate-100">
          <TrendingUp className="w-3 h-3 text-emerald-600" />
        </span>
      </div>
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-wider text-[#5B6475] mb-1">
          {title}
        </p>
        {loading ? (
          <div className="h-9 w-24 rounded-lg bg-slate-100 animate-pulse" />
        ) : (
          <p className="text-3xl font-extrabold text-[#111827] tracking-tight mb-1 tabular-nums">
            {value.toLocaleString()}
          </p>
        )}
        <p className="text-xs font-semibold text-[#5B6475] flex items-center gap-1">
          <TrendingDown className="w-3 h-3 text-slate-400" />
          {delta}
        </p>
      </div>
    </div>
  );
}

function MiniCard({
  label,
  count,
  icon: Icon,
  color,
  loading,
}: {
  label: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
  color: "rose" | "sky" | "emerald" | "slate";
  loading: boolean;
}) {
  const palettes = {
    rose: "bg-rose-50 text-rose-700 border-rose-100 icon:from-rose-500 icon:to-rose-600",
    sky: "bg-sky-50 text-sky-700 border-sky-100 icon:from-sky-500 icon:to-indigo-500",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-100 icon:from-emerald-500 icon:to-teal-500",
    slate: "bg-slate-50 text-slate-700 border-slate-200 icon:from-slate-500 icon:to-slate-700",
  }[color];

  const iconBg = {
    rose: "from-rose-500 to-rose-600",
    sky: "from-sky-500 to-indigo-500",
    emerald: "from-emerald-500 to-teal-500",
    slate: "from-slate-500 to-slate-700",
  }[color];

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 bg-white border-[#0F2346]/8 shadow-sm hover:shadow-md transition-all`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center shadow-sm`}>
          <Icon className="w-4.5 h-4.5 text-white" />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${palettes.split(" ").slice(0, 3).join(" ")}`}>
          {label}
        </span>
      </div>
      {loading ? (
        <div className="h-7 w-16 rounded bg-slate-100 animate-pulse" />
      ) : (
        <p className="text-2xl font-extrabold text-[#111827] tracking-tight tabular-nums">
          {count.toLocaleString()}
        </p>
      )}
    </div>
  );
}

function SkeletonBars() {
  return (
    <div className="flex items-end justify-between gap-1.5 h-44 sm:h-52">
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full flex-1 flex items-end">
            <div
              className="w-full rounded-t-lg bg-slate-100 animate-pulse"
              style={{ height: `${20 + ((i * 7) % 80)}%` }}
            />
          </div>
          <div className="h-2.5 w-10 rounded bg-slate-100 animate-pulse" />
        </div>
      ))}
    </div>
  );
}

function SkeletonLine() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="h-3.5 w-32 rounded bg-slate-100 animate-pulse" />
        <div className="h-3.5 w-8 rounded bg-slate-100 animate-pulse" />
      </div>
      <div className="h-2.5 w-full rounded bg-slate-100 animate-pulse" />
    </div>
  );
}

function SkeletonRow() {
  return (
    <div className="flex items-center gap-3.5">
      <div className="w-10 h-10 rounded-xl bg-slate-100 animate-pulse shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="flex gap-2 items-center">
          <div className="h-3.5 w-32 rounded bg-slate-100 animate-pulse" />
          <div className="h-4 w-12 rounded-full bg-slate-100 animate-pulse" />
        </div>
        <div className="h-3 w-40 rounded bg-slate-100 animate-pulse" />
      </div>
    </div>
  );
}

function EmptyStateSmall({ title, text }: { title: string; text: string }) {
  return (
    <div className="py-6 text-center">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-3">
        <AlertCircle className="w-5 h-5 text-slate-400" />
      </div>
      <p className="text-sm font-bold text-[#111827] mb-1">{title}</p>
      <p className="text-xs text-[#5B6475] leading-relaxed">{text}</p>
    </div>
  );
}
