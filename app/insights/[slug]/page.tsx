import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { insightPosts } from "@/data/insights";
import { Calendar, Clock, ArrowLeft, CheckCircle2, Share2, Sparkles } from "lucide-react";

interface InsightDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return insightPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: InsightDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | KBS Group Insights",
    };
  }

  return {
    title: `${post.title} | KBS Group Insights`,
    description: post.excerpt,
  };
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const post = insightPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = insightPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-[#168BFF] selection:text-white">
      {/* Header Navigation */}
      <Header />

      <main className="flex-grow pt-24 sm:pt-28 pb-20">
        {/* Article Breadcrumbs & Back Nav */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 pt-4">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#168BFF] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights & Updates</span>
          </Link>
        </div>

        {/* Article Header & Meta */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="space-y-6 mb-10">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#168BFF]/15 text-[#168BFF] border border-[#168BFF]/30 uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#168BFF]" />
                {post.date}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {post.excerpt}
            </p>

            {/* Author Profile Card */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full bg-[#061A36] border border-[#168BFF]/40 overflow-hidden flex items-center justify-center shrink-0">
                  <Image
                    src="/kbs-group-favicon.png"
                    alt="KBS Group Favicon"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{post.author.name}</h4>
                  <p className="text-xs text-slate-400">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  aria-label="Share article"
                  className="p-2.5 rounded-full bg-[#061A36] border border-[#82A0FF]/20 text-slate-300 hover:text-white hover:border-[#168BFF] transition-all"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          {/* Hero Cover Image */}
          <div className="relative h-64 sm:h-96 lg:h-[450px] w-full rounded-3xl overflow-hidden border border-slate-800 mb-12 shadow-2xl">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Key Takeaways Box */}
          {post.content.takeaways && post.content.takeaways.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#061A36] to-[#03142B] border border-[#168BFF]/30 shadow-lg mb-12 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#168BFF]">
                <Sparkles className="w-4 h-4" />
                <span>Key Article Takeaways</span>
              </div>
              <ul className="space-y-3">
                {post.content.takeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Main Sections */}
          <div className="space-y-10 text-slate-200 leading-relaxed font-normal text-sm sm:text-base mb-14">
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight border-b border-slate-800 pb-2">
                  {section.heading}
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}

            {/* Optional Quote Block */}
            {post.content.quote && (
              <blockquote className="my-8 p-6 sm:p-8 rounded-2xl bg-[#061A36]/60 border-l-4 border-[#168BFF] text-slate-200 italic space-y-2">
                <p className="text-base sm:text-lg font-medium text-white">
                  &ldquo;{post.content.quote.text}&rdquo;
                </p>
                <footer className="text-xs font-semibold text-[#168BFF] not-italic">
                  — {post.content.quote.author}
                </footer>
              </blockquote>
            )}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800 flex items-center gap-2 flex-wrap mb-16">
            <span className="text-xs font-bold text-slate-400 mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#061A36] text-slate-300 border border-slate-800"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <section className="pt-12 border-t border-slate-800 space-y-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Related Insights & Updates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/insights/${related.slug}`}
                    className="group flex flex-col bg-[#061A36]/80 rounded-2xl border border-slate-800 overflow-hidden hover:border-[#168BFF]/40 transition-all p-4 space-y-3"
                  >
                    <div className="relative h-36 w-full rounded-xl overflow-hidden">
                      <Image
                        src={related.featuredImage}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#168BFF] uppercase">
                      {related.category}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#168BFF] transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
