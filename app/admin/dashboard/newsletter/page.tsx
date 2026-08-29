"use client";

import React, { useEffect, useState, useCallback } from "react";
import {
  Mail,
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  Trash2,
  AlertCircle,
  Clock,
  RefreshCw,
  Dot,
  CheckCircle2,
  MinusCircle,
  Users,
  Download,
  Filter,
} from "lucide-react";
import { adminFetchJson, adminFetch } from "@/lib/adminApi";

interface Subscriber {
  id: number;
  email: string;
  is_active: number;
  ip_address: string | null;
  subscribed_at: string;
  unsubscribed_at: string | null;
  created_at: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

function formatDateTime(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function AdminNewsletterPage() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Subscriber[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 50,
    total: 0,
    totalPages: 0,
  });
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "inactive">("all");
  const [search, setSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams();
      params.set("page", String(pagination.page));
      params.set("limit", String(pagination.limit));
      if (activeFilter === "active") params.set("active", "true");
      else if (activeFilter === "inactive") params.set("active", "false");
      if (appliedSearch) params.set("search", appliedSearch);

      const result = await adminFetchJson<{
        data: Subscriber[];
        pagination: Pagination;
      }>(`/api/newsletter?${params.toString()}`);

      setRows(result.data);
      setPagination(result.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load newsletter subscribers.");
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, activeFilter, appliedSearch]);

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (!cancelled) {
        load();
      }
    });
    return () => {
      cancelled = true;
    };
  }, [load]);

  const deleteItem = async (id: number) => {
    if (!window.confirm("Delete this subscriber? This action cannot be undone.")) return;
    try {
      setActionLoading(id);
      await adminFetch(`/api/newsletter/${id}`, { method: "DELETE" });
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete subscriber.");
    } finally {
      setActionLoading(null);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSearch(search.trim());
    setPagination((p) => ({ ...p, page: 1 }));
  };

  const setPage = (p: number) =>
    setPagination((cur) => ({ ...cur, page: Math.max(1, Math.min(cur.totalPages, p)) }));

  const exportCsv = () => {
    if (rows.length === 0) return;
    const header = ["Email", "Status", "IP Address", "Subscribed At", "Unsubscribed At"];
    const csv = [
      header.join(","),
      ...rows.map((r) =>
        [
          `"${r.email.replace(/"/g, '""')}"`,
          r.is_active ? "Active" : "Inactive",
          r.ip_address ? `"${r.ip_address}"` : "",
          r.subscribed_at,
          r.unsubscribed_at || "",
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `newsletter-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A52BFF] to-[#6657FF] flex items-center justify-center shadow-md shadow-[#A52BFF]/20">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
              Email Marketing
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-1.5">
            Newsletter Subscribers
          </h1>
          <p className="text-sm text-[#5B6475]">
            {pagination.total.toLocaleString()} total email subscribers.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={exportCsv}
            disabled={rows.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#0F2346]/10 text-sm font-semibold text-[#111827] hover:bg-slate-50 active:scale-[0.98] transition-all shadow-sm disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button
            onClick={load}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#0F2346]/10 text-sm font-semibold text-[#111827] hover:bg-slate-50 active:scale-[0.98] transition-all shadow-sm"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-bold text-rose-800">Error</p>
            <p className="text-xs text-rose-700 mt-0.5">{error}</p>
          </div>
          <button onClick={() => setError(null)} className="text-rose-400 hover:text-rose-600">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SummaryCard
          label="Total Subscribers"
          value={pagination.total}
          icon={Users}
          gradient="from-[#168BFF] to-[#6657FF]"
        />
        <SummaryCard
          label="Currently Active"
          value={loading ? 0 : rows.reduce((a, r) => a + (r.is_active ? 1 : 0), 0)}
          subtext={`Showing page ${pagination.page}`}
          icon={CheckCircle2}
          gradient="from-[#10B981] to-[#059669]"
        />
        <SummaryCard
          label="Inactive / Opted-Out"
          value={loading ? 0 : rows.reduce((a, r) => a + (r.is_active ? 0 : 1), 0)}
          subtext={`Showing page ${pagination.page}`}
          icon={MinusCircle}
          gradient="from-slate-500 to-slate-700"
        />
      </div>

      {/* Filter chips */}
      <div className="bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm p-3 sm:p-4">
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["all", "All", Users],
              ["active", "Active", CheckCircle2],
              ["inactive", "Inactive", MinusCircle],
            ] as const
          ).map(([key, label, Icon]) => {
            const active = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveFilter(key);
                  setPagination((p) => ({ ...p, page: 1 }));
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active
                    ? "bg-gradient-to-r from-[#A52BFF] via-[#6657FF] to-[#168BFF] text-white shadow-md shadow-[#6657FF]/20"
                    : "text-[#5B6475] hover:text-[#111827] hover:bg-slate-50 border border-transparent hover:border-[#0F2346]/8"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm p-4 sm:p-5">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Filter className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search subscriber email address..."
              className="w-full pl-12 pr-12 py-3 rounded-2xl bg-[#F8FAFF] border border-[#0F2346]/12 text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#A52BFF] focus:bg-white focus:ring-4 focus:ring-[#A52BFF]/10 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {appliedSearch && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setAppliedSearch("");
                  setPagination((p) => ({ ...p, page: 1 }));
                }}
                className="px-4 py-3 rounded-2xl text-sm font-semibold text-[#5B6475] hover:text-[#111827] border border-[#0F2346]/10 hover:border-[#0F2346]/15 bg-white transition-all"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#A52BFF] via-[#6657FF] to-[#168BFF] text-white text-sm font-bold hover:opacity-95 active:scale-[0.98] transition-all shadow-md shadow-[#6657FF]/20"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFF] border-b border-[#0F2346]/8">
              <tr>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Email
                </th>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Status
                </th>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  IP Address
                </th>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Subscribed
                </th>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Unsubscribed
                </th>
                <th className="px-5 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0F2346]/6">
              {loading ? (
                Array.from({ length: 10 }).map((_, i) => <TableRowSkeleton key={i} />)
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-10 text-center">
                    <div className="w-16 h-16 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-7 h-7 text-slate-400" />
                    </div>
                    <p className="text-base font-bold text-[#111827] mb-1">
                      No subscribers yet
                    </p>
                    <p className="text-sm text-[#5B6475]">
                      {appliedSearch
                        ? "No emails match your search."
                        : "Newsletter signups from the website will appear here."}
                    </p>
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.id} className="hover:bg-[#F8FAFF] transition-colors group">
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            r.is_active
                              ? "bg-gradient-to-br from-[#A52BFF]/10 to-[#168BFF]/10"
                              : "bg-slate-100"
                          }`}
                        >
                          <Mail
                            className={`w-4 h-4 ${
                              r.is_active ? "text-[#A52BFF]" : "text-slate-400"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#111827] break-all">{r.email}</p>
                          {r.is_active ? (
                            <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                              <Dot className="w-3 h-3 -ml-1" />
                              Receiving newsletters
                            </p>
                          ) : (
                            <p className="text-[11px] text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                              Has opted out
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          r.is_active
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        {r.is_active ? (
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                        ) : (
                          <MinusCircle className="w-3 h-3 mr-1" />
                        )}
                        {r.is_active ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <span className="text-xs font-mono text-[#5B6475] bg-slate-50 border border-slate-100 px-2 py-1 rounded-lg">
                        {r.ip_address || "—"}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <span className="text-xs font-semibold text-[#5B6475] inline-flex items-center gap-1 whitespace-nowrap">
                        <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                        {formatDateTime(r.subscribed_at)}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top">
                      {r.unsubscribed_at ? (
                        <span className="text-xs font-semibold text-rose-600 inline-flex items-center gap-1 whitespace-nowrap">
                          <Clock className="w-3 h-3 text-rose-400 shrink-0" />
                          {formatDateTime(r.unsubscribed_at)}
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 italic">—</span>
                      )}
                    </td>
                    <td className="px-5 py-4 align-top">
                      <div className="flex justify-end">
                        <button
                          type="button"
                          title="Delete subscriber"
                          onClick={() => deleteItem(r.id)}
                          disabled={actionLoading === r.id}
                          className="p-2 rounded-xl text-rose-500 hover:text-rose-700 hover:bg-rose-50 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:hover:bg-transparent"
                        >
                          {actionLoading === r.id ? (
                            <RefreshCw className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 border-t border-[#0F2346]/6 bg-[#FCFDFF]">
          <p className="text-xs font-semibold text-[#5B6475]">
            Showing{" "}
            <span className="text-[#111827]">
              {pagination.total === 0
                ? 0
                : (pagination.page - 1) * pagination.limit + 1}
              -
              {Math.min(pagination.page * pagination.limit, pagination.total)}
            </span>{" "}
            of <span className="text-[#111827]">{pagination.total.toLocaleString()}</span>
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(pagination.page - 1)}
              disabled={pagination.page <= 1}
              className="p-2 rounded-xl text-[#5B6475] hover:text-[#111827] hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {buildPageButtons(pagination.page, pagination.totalPages).map((p, i) =>
              p === "..." ? (
                <span
                  key={`e${i}`}
                  className="w-9 h-9 flex items-center justify-center text-xs font-bold text-slate-400"
                >
                  ⋯
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p as number)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                    p === pagination.page
                      ? "bg-gradient-to-br from-[#A52BFF] via-[#6657FF] to-[#168BFF] text-white shadow-md shadow-[#6657FF]/25"
                      : "text-[#5B6475] hover:text-[#111827] hover:bg-slate-100"
                  }`}
                >
                  {p}
                </button>
              )
            )}
            <button
              onClick={() => setPage(pagination.page + 1)}
              disabled={pagination.page >= pagination.totalPages}
              className="p-2 rounded-xl text-[#5B6475] hover:text-[#111827] hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildPageButtons(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const out: (number | "...")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) out.push("...");
  for (let i = start; i <= end; i++) out.push(i);
  if (end < total - 1) out.push("...");
  out.push(total);
  return out;
}

function TableRowSkeleton() {
  return (
    <tr>
      {Array.from({ length: 6 }).map((_, i) => (
        <td key={i} className="px-5 py-4">
          <div
            className="h-10 rounded-xl bg-slate-100 animate-pulse"
            style={{ width: `${50 + ((i * 23) % 60)}%` }}
          />
        </td>
      ))}
    </tr>
  );
}

function SummaryCard({
  label,
  value,
  subtext,
  icon: Icon,
  gradient,
}: {
  label: string;
  value: number;
  subtext?: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white border border-[#0F2346]/8 shadow-sm p-5 sm:p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div
        className={`absolute -right-12 -top-12 w-40 h-40 rounded-full bg-gradient-to-br ${gradient} opacity-[0.08] blur-2xl`}
      />
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-wider text-[#5B6475] mb-1">
          {label}
        </p>
        <p className="text-3xl font-extrabold text-[#111827] tracking-tight mb-1 tabular-nums">
          {value.toLocaleString()}
        </p>
        {subtext && <p className="text-xs font-semibold text-[#5B6475]">{subtext}</p>}
      </div>
    </div>
  );
}
