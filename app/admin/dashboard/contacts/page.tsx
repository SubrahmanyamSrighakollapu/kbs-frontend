"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import {
  Inbox,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  X,
  Mail,
  Phone,
  Building2,
  Clock,
  Tag,
  Globe,
  CheckCircle2,
  Archive,
  Eye,
  Trash2,
  AlertCircle,
  Dot,
  RefreshCw,
  MessageSquare,
} from "lucide-react";
import { adminFetchJson, adminFetch } from "@/lib/adminApi";

type StatusKey = "new" | "read" | "replied" | "archived";

interface ContactRow {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string;
  message_preview: string;
  status: StatusKey;
  created_at: string;
  updated_at: string;
}

interface ContactDetail extends ContactRow {
  message: string;
  ip_address: string | null;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

const statusStyles: Record<StatusKey, string> = {
  new: "bg-rose-50 text-rose-700 border-rose-200",
  read: "bg-sky-50 text-sky-700 border-sky-200",
  replied: "bg-emerald-50 text-emerald-700 border-emerald-200",
  archived: "bg-slate-100 text-slate-600 border-slate-200",
};

const statusLabel: Record<StatusKey, string> = {
  new: "New",
  read: "Read",
  replied: "Replied",
  archived: "Archived",
};

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

export default function AdminContactsPage() {
  const searchParams = useSearchParams();
  const openId = searchParams.get("id");

  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<ContactRow[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 0,
  });
  const [statusBreakdown, setStatusBreakdown] = useState<Record<StatusKey, number>>({
    new: 0,
    read: 0,
    replied: 0,
    archived: 0,
  });
  const [activeFilter, setActiveFilter] = useState<StatusKey | "all">("all");
  const [search, setSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [detail, setDetail] = useState<ContactDetail | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState<number | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams();
      params.set("page", String(pagination.page));
      params.set("limit", String(pagination.limit));
      if (activeFilter !== "all") params.set("status", activeFilter);
      if (appliedSearch) params.set("search", appliedSearch);

      const result = await adminFetchJson<{
        data: ContactRow[];
        pagination: Pagination;
        statusBreakdown: Record<StatusKey, number>;
      }>(`/api/contact?${params.toString()}`);

      setRows(result.data);
      setPagination(result.pagination);
      setStatusBreakdown(result.statusBreakdown);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load contact queries.");
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, activeFilter, appliedSearch]);

  const openDetail = useCallback(async (id: number) => {
    try {
      setDetailLoading(true);
      setDetailOpen(true);
      const data = await adminFetchJson<{ data: ContactDetail }>(`/api/contact/${id}`);
      setDetail(data.data);
      setRows((prev) =>
        prev.map((r) =>
          r.id === id ? { ...r, status: (data.data.status || "read") as StatusKey } : r
        )
      );
    } catch (err) {
      console.error(err);
    } finally {
      setDetailLoading(false);
    }
  }, []);

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

  useEffect(() => {
    if (!openId) return;
    const id = parseInt(openId, 10);
    if (!Number.isNaN(id)) {
      queueMicrotask(() => openDetail(id));
    }
  }, [openId, openDetail]);

  const updateStatus = async (id: number, status: StatusKey) => {
    try {
      setActionLoading(id);
      await adminFetch(`/api/contact/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      if (detail && detail.id === id) {
        setDetail({ ...detail, status });
      }
      setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update status.");
    } finally {
      setActionLoading(null);
    }
  };

  const deleteItem = async (id: number) => {
    if (!window.confirm("Delete this contact query? This action cannot be undone.")) return;
    try {
      setActionLoading(id);
      await adminFetch(`/api/contact/${id}`, { method: "DELETE" });
      if (detail?.id === id) {
        setDetailOpen(false);
        setDetail(null);
      }
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete.");
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

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#168BFF] to-[#6657FF] flex items-center justify-center shadow-md shadow-[#6657FF]/20">
              <Inbox className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
              Contact Form Submissions
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight mb-1.5">
            Contact Queries
          </h1>
          <p className="text-sm text-[#5B6475]">
            {pagination.total.toLocaleString()} total messages collected.
          </p>
        </div>
        <button
          onClick={load}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#0F2346]/10 text-sm font-semibold text-[#111827] hover:bg-slate-50 active:scale-[0.98] transition-all shadow-sm"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
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

      {/* Status tabs */}
      <div className="bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm p-3 sm:p-4">
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["all", "All", Inbox, null],
              ["new", "New", Dot, "new"],
              ["read", "Read", Eye, "read"],
              ["replied", "Replied", CheckCircle2, "replied"],
              ["archived", "Archived", Archive, "archived"],
            ] as const
          ).map(([key, label, Icon, st]) => {
            const count =
              key === "all"
                ? Object.values(statusBreakdown).reduce((a, b) => a + b, 0)
                : statusBreakdown[st as StatusKey] ?? 0;
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
                    ? "bg-gradient-to-r from-[#168BFF] to-[#A52BFF] text-white shadow-md shadow-[#6657FF]/20"
                    : "text-[#5B6475] hover:text-[#111827] hover:bg-slate-50 border border-transparent hover:border-[#0F2346]/8"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${key === "new" && !active ? "text-rose-500" : ""}`}
                />
                {label}
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-[#5B6475]"
                  }`}
                >
                  {count.toLocaleString()}
                </span>
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
              placeholder="Search name, email, phone, company, subject, message..."
              className="w-full pl-12 pr-12 py-3 rounded-2xl bg-[#F8FAFF] border border-[#0F2346]/12 text-sm text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#168BFF] focus:bg-white focus:ring-4 focus:ring-[#168BFF]/10 transition-all"
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
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] text-white text-sm font-bold hover:opacity-95 active:scale-[0.98] transition-all shadow-md shadow-[#6657FF]/20"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Table card */}
      <div className="bg-white rounded-3xl border border-[#0F2346]/8 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8FAFF] border-b border-[#0F2346]/8">
              <tr>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  From
                </th>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Subject
                </th>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Preview
                </th>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Status
                </th>
                <th className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Received
                </th>
                <th className="px-5 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-[#5B6475]">
                  Actions
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
                      <Inbox className="w-7 h-7 text-slate-400" />
                    </div>
                    <p className="text-base font-bold text-[#111827] mb-1">
                      No contact queries
                    </p>
                    <p className="text-sm text-[#5B6475]">
                      {appliedSearch
                        ? "No results match your search filters."
                        : activeFilter !== "all"
                        ? `No ${statusLabel[activeFilter].toLowerCase()} messages right now.`
                        : "Contact form submissions will appear here."}
                    </p>
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr
                    key={r.id}
                    className="hover:bg-[#F8FAFF] transition-colors group cursor-pointer"
                    onClick={() => openDetail(r.id)}
                  >
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#168BFF]/10 to-[#A52BFF]/10 flex items-center justify-center shrink-0">
                          <MessageSquare className="w-4 h-4 text-[#168BFF]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-[#111827] truncate flex items-center gap-1">
                            {r.full_name}
                            {r.status === "new" && (
                              <span className="w-2 h-2 rounded-full bg-[#E52B2F] shrink-0 inline-block" />
                            )}
                          </p>
                          <p className="text-xs text-[#5B6475] truncate flex items-center gap-1.5">
                            <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                            {r.email}
                          </p>
                          {r.phone && (
                            <p className="text-xs text-[#5B6475] truncate flex items-center gap-1.5 mt-0.5">
                              <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                              {r.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top max-w-[200px]">
                      <span className="text-xs font-bold text-[#111827] inline-flex items-center gap-1">
                        <Tag className="w-3 h-3 text-slate-400" />
                        {r.subject}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top max-w-[320px]">
                      <p className="text-xs text-[#5B6475] leading-relaxed line-clamp-2">
                        {r.message_preview}
                        {r.message_preview && r.message_preview.length >= 110 ? "..." : ""}
                      </p>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${statusStyles[r.status]}`}
                      >
                        {r.status === "new" && <Dot className="w-3 h-3 -ml-1" />}
                        {statusLabel[r.status]}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <span className="text-xs font-semibold text-[#5B6475] inline-flex items-center gap-1 whitespace-nowrap">
                        <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                        {formatDateTime(r.created_at)}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <div
                        className="flex items-center justify-end gap-1.5"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <QuickAction
                          title="Mark Read"
                          onClick={() => updateStatus(r.id, "read")}
                          disabled={r.status === "read" || actionLoading === r.id}
                        >
                          <Eye className="w-4 h-4" />
                        </QuickAction>
                        <QuickAction
                          title="Mark Replied"
                          onClick={() => updateStatus(r.id, "replied")}
                          disabled={r.status === "replied" || actionLoading === r.id}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </QuickAction>
                        <QuickAction
                          title="Archive"
                          onClick={() => updateStatus(r.id, "archived")}
                          disabled={r.status === "archived" || actionLoading === r.id}
                        >
                          <Archive className="w-4 h-4" />
                        </QuickAction>
                        <QuickAction
                          title="Delete"
                          onClick={() => deleteItem(r.id)}
                          disabled={actionLoading === r.id}
                          danger
                        >
                          <Trash2 className="w-4 h-4" />
                        </QuickAction>
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
                      ? "bg-gradient-to-br from-[#168BFF] to-[#6657FF] text-white shadow-md shadow-[#6657FF]/25"
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

      {/* Detail Modal */}
      {detailOpen && (
        <div className="fixed inset-0 z-[100] flex items-stretch justify-end sm:items-center sm:justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full sm:max-w-3xl sm:rounded-3xl bg-white shadow-2xl h-full sm:h-auto sm:max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 p-6 sm:p-7 border-b border-[#0F2346]/8">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#168BFF] to-[#A52BFF] flex items-center justify-center shadow-lg shadow-[#6657FF]/25 shrink-0">
                  <MessageSquare className="w-5.5 h-5.5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-xl font-extrabold text-[#111827] tracking-tight truncate">
                      {detail?.full_name ?? "Loading..."}
                    </h2>
                    {detail && (
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${statusStyles[detail.status]}`}
                      >
                        {detail.status === "new" && <Dot className="w-3 h-3 -ml-1" />}
                        {statusLabel[detail.status]}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#5B6475] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {detail?.created_at ? formatDateTime(detail.created_at) : "—"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => detail && window.open(`mailto:${detail.email}`)}
                  className="p-2.5 rounded-xl text-[#5B6475] hover:text-[#168BFF] hover:bg-[#168BFF]/5 transition-all"
                  title="Reply via email"
                  disabled={!detail}
                >
                  <Mail className="w-4.5 h-4.5" />
                </button>
                <button
                  onClick={() => {
                    setDetailOpen(false);
                    setDetail(null);
                  }}
                  className="p-2.5 rounded-xl text-[#5B6475] hover:text-[#111827] hover:bg-slate-100 transition-all"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal body */}
            <div className="flex-1 overflow-y-auto">
              {detailLoading && !detail ? (
                <div className="p-8 space-y-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-5 rounded bg-slate-100 animate-pulse" />
                  ))}
                </div>
              ) : detail ? (
                <div className="p-6 sm:p-8 space-y-7">
                  {/* Contact info grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <InfoTile label="Email Address" icon={Mail} value={detail.email} href={`mailto:${detail.email}`} />
                    <InfoTile label="Phone Number" icon={Phone} value={detail.phone} href={detail.phone ? `tel:${detail.phone}` : undefined} />
                    <InfoTile label="Company" icon={Building2} value={detail.company} />
                    <InfoTile label="Subject" icon={Tag} value={detail.subject} />
                    {detail.ip_address && (
                      <InfoTile label="IP Address" icon={Globe} value={detail.ip_address} />
                    )}
                  </div>

                  {/* Message */}
                  <div className="rounded-3xl bg-[#F8FAFF] border border-[#0F2346]/8 p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-3.5">
                      <div className="w-8 h-8 rounded-xl bg-white border border-[#0F2346]/8 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-[#168BFF]" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#5B6475]">
                        Message
                      </p>
                    </div>
                    <p className="text-sm text-[#111827] leading-relaxed whitespace-pre-wrap">
                      {detail.message}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Modal footer */}
            {detail && (
              <div className="p-5 sm:p-6 border-t border-[#0F2346]/8 bg-[#FCFDFF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6475] mr-1">
                    Mark as:
                  </span>
                  <StatusAction
                    label="Read"
                    active={detail.status === "read"}
                    onClick={() => updateStatus(detail.id, "read")}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Read
                  </StatusAction>
                  <StatusAction
                    label="Replied"
                    active={detail.status === "replied"}
                    onClick={() => updateStatus(detail.id, "replied")}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Replied
                  </StatusAction>
                  <StatusAction
                    label="Archived"
                    active={detail.status === "archived"}
                    onClick={() => updateStatus(detail.id, "archived")}
                  >
                    <Archive className="w-3.5 h-3.5" />
                    Archived
                  </StatusAction>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => deleteItem(detail.id)}
                    className="px-4 py-2.5 rounded-xl text-sm font-bold text-rose-700 hover:bg-rose-50 border border-rose-200 transition-all inline-flex items-center gap-1.5"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
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

function InfoTile({
  label,
  icon: Icon,
  value,
  href,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string | null | undefined;
  href?: string;
}) {
  const content = (
    <div className="rounded-2xl border border-[#0F2346]/8 bg-white p-4 hover:border-[#168BFF]/30 transition-all group">
      <p className="text-[10px] font-bold uppercase tracking-wider text-[#5B6475] mb-1 flex items-center gap-1">
        <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#168BFF] transition-colors" />
        {label}
      </p>
      <p className="text-sm font-semibold text-[#111827] truncate">
        {value || <span className="text-slate-400 font-normal italic">Not provided</span>}
      </p>
    </div>
  );
  if (href && value) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}

function QuickAction({
  title,
  onClick,
  children,
  disabled,
  danger,
}: {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-xl transition-all opacity-0 group-hover:opacity-100 ${
        danger
          ? "text-rose-500 hover:text-rose-700 hover:bg-rose-50"
          : "text-[#5B6475] hover:text-[#111827] hover:bg-slate-100"
      } disabled:opacity-30 disabled:hover:bg-transparent`}
    >
      {children}
    </button>
  );
}

function StatusAction({
  active,
  onClick,
  children,
}: {
  label?: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition-all ${
        active
          ? "bg-gradient-to-br from-[#168BFF] to-[#6657FF] text-white shadow-md shadow-[#6657FF]/20"
          : "bg-white text-[#5B6475] hover:text-[#111827] border border-[#0F2346]/10 hover:border-[#0F2346]/15"
      }`}
    >
      {children}
    </button>
  );
}
