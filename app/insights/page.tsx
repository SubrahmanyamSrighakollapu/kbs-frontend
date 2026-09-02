"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { insightPosts, insightCategories } from "@/data/insights";
import { Search, Calendar, Clock, ArrowRight, Sparkles, Filter, Newspaper } from "lucide-react";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Information Technology": { bg: "bg-blue-500/10", text: "text-blue-600", border: "border-blue-500/20" },
  "Business Automation & SaaS": { bg: "bg-cyan-500/10", text: "text-cyan-600", border: "border-cyan-500/20" },
  "Civil Engineering": { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20" },
  "Financial Services": { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-emerald-500/20" },
  "Skill Hub": { bg: "bg-indigo-500/10", text: "text-indigo-600", border: "border-indigo-500/20" },
  "KBS Group": { bg: "bg-purple-500/10", text: "text-purple-600", border: "border-purple-500/20" },
};

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Verticals");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featuredPost = useMemo(() => {
    return insightPosts.find((p) => p.isFeatured) || insightPosts[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return insightPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Verticals" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-[#168BFF] selection:text-white">
      {/* Header Navigation */}
      <Header />

      <main className="flex-grow pt-24 sm:pt-28 pb-20">
        {/* Hero Banner Section */}
        <section className="relative py-12 sm:py-16 overflow-hidden">
          {/* Subtle Background Glow Elements */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#168BFF]/20 via-[#6657FF]/15 to-[#A52BFF]/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#168BFF]/10 border border-[#168BFF]/30 text-[#168BFF] text-xs sm:text-sm font-semibold mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>Knowledge, Tech Trends & Innovation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Insights & <span className="bg-gradient-to-r from-[#168BFF] via-[#6657FF] to-[#A52BFF] bg-clip-text text-transparent">Updates</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Explore thought leadership, engineering breakthroughs, fintech strategies, and group-wide updates across all KBS verticals.
            </p>
          </div>
        </section>

        {/* Featured Article Banner */}
        {featuredPost && selectedCategory === "All Verticals" && !searchQuery && (
          <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#061A36] to-[#03142B] border border-[#82A0FF]/20 shadow-2xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#168BFF]/20 text-[#168BFF] border border-[#168BFF]/30 uppercase tracking-wider">
                    Featured Insight
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.date}
                  </span>
                </div>

                <Link href={`/insights/${featuredPost.slug}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-[#168BFF] transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full bg-[#061A36] border border-[#168BFF]/40 overflow-hidden flex items-center justify-center shrink-0">
                      <Image
                        src="/kbs-group-favicon.png"
                        alt="KBS Group Favicon"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-200">{featuredPost.author.name}</p>
                      <p className="text-[11px] text-slate-400">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/insights/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#168BFF] to-[#6657FF] text-white text-xs sm:text-sm font-semibold hover:opacity-95 transition-all shadow-md"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[260px] rounded-2xl overflow-hidden border border-slate-700/60">
                <Image
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03142B] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </section>
        )}

        {/* Filter Bar & Search Input */}
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1 hidden sm:inline" />
              {insightCategories.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                      isSelected
                        ? "bg-[#168BFF] text-white font-bold shadow-lg shadow-[#168BFF]/25"
                        : "bg-[#061A36] text-slate-300 border border-[#82A0FF]/15 hover:border-[#168BFF]/40 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search topics, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#061A36] border border-[#82A0FF]/20 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#168BFF] transition-all"
              />
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const style = categoryColors[post.category] || {
                  bg: "bg-slate-500/10",
                  text: "text-slate-300",
                  border: "border-slate-500/20",
                };

                return (
                  <article
                    key={post.id}
                    className="group flex flex-col bg-[#061A36]/80 rounded-2xl border border-[#82A0FF]/15 overflow-hidden hover:border-[#168BFF]/40 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md ${style.bg} ${style.text} ${style.border}`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body Content */}
                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#168BFF]" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {post.readTime}
                          </span>
                        </div>

                        <Link href={`/insights/${post.slug}`}>
                          <h3 className="text-lg font-bold text-white group-hover:text-[#168BFF] transition-colors leading-snug line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-7 h-7 rounded-full bg-[#061A36] border border-[#168BFF]/40 overflow-hidden flex items-center justify-center shrink-0">
                            <Image
                              src="/kbs-group-favicon.png"
                              alt="KBS Group Favicon"
                              width={28}
                              height={28}
                              className="w-full h-full object-contain p-0.5"
                            />
                          </div>
                          <span className="text-xs font-semibold text-slate-300">
                            {post.author.name}
                          </span>
                        </div>

                        <Link
                          href={`/insights/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#168BFF] group-hover:text-[#6657FF] transition-colors"
                        >
                          <span>Read</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#061A36]/40 rounded-3xl border border-slate-800">
              <Newspaper className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No Articles Found</h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                We couldn&apos;t find any articles matching &quot;{searchQuery}&quot; under &quot;{selectedCategory}&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Verticals");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 rounded-full bg-[#168BFF] text-white text-xs font-bold hover:bg-[#168BFF]/90 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
