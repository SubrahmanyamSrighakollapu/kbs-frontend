import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileInput,
  HardHat,
  Layers3,
  Users,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { DrawingCarouselSlot, SectionImageSlot } from "@/components/civil/CivilServiceMediaSlots";
import { civilServiceDetails, getCivilServiceDetail, tiltUpProjectImages, selfStorageProjectImages } from "@/data/civil-services";
import { constructMetadata, getBreadcrumbSchema, getServiceSchema } from "@/lib/seo";

interface CivilServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return civilServiceDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CivilServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getCivilServiceDetail(slug);

  if (!service) {
    return constructMetadata({
      title: "Civil Engineering Service Not Found",
      description: "The requested KBS Civil Engineering service could not be found.",
      path: `/verticals/civil/${slug}`,
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${service.name} | KBS Civil Engineering`,
    description: service.description,
    path: `/verticals/civil/${service.slug}`,
    keywords: service.keywords,
    image: service.slug === "tilt-up-detailing" ? tiltUpProjectImages[0].src : service.slug === "self-storage-detailing" ? selfStorageProjectImages[0].src : "/Civil Services.png",
  });
}

export default async function CivilServicePage({ params }: CivilServicePageProps) {
  const { slug } = await params;
  const service = getCivilServiceDetail(slug);
  if (!service) notFound();

  const path = `/verticals/civil/${service.slug}`;
  const relatedServices = civilServiceDetails.filter((item) => item.slug !== service.slug);
  const projectImages = service.slug === "tilt-up-detailing" ? tiltUpProjectImages : service.slug === "self-storage-detailing" ? selfStorageProjectImages : [];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#FF6B35] selection:text-white">
      <JsonLd
        data={[
          getServiceSchema({
            name: service.name,
            description: service.description,
            serviceType: service.shortName,
            path,
          }),
          getBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Civil Engineering", item: "/verticals/civil" },
            { name: service.shortName, item: path },
          ]),
        ]}
      />
      <Header />

      <main className="flex-grow">
        <section className="relative pt-28 sm:pt-36 pb-18 sm:pb-24 bg-[#03142B] text-white overflow-hidden">
          <div className="absolute -top-24 right-0 w-[560px] h-[560px] rounded-full blur-3xl opacity-15" style={{ backgroundColor: service.accent }} />
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/verticals/civil#services" className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Civil Engineering Services
            </Link>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-bold tracking-wider mb-6" style={{ color: service.accent }}>
                <HardHat className="w-4 h-4" /> {service.eyebrow}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">{service.name}</h1>
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl mb-5">{service.tagline}</p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8">{service.description}</p>
              <Link
                href={`/contact?service=${encodeURIComponent(service.shortName)}`}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-white font-bold text-sm sm:text-base shadow-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: service.accent }}
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {projectImages.length > 0 && (
          <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: service.accent }}>Project Drawing Showcase</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">Drawing &amp; Project Gallery</h2>
              </div>
              <DrawingCarouselSlot images={projectImages} accent={service.accent} />
            </div>
          </section>
        )}

        <section className="py-20 sm:py-28">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest" style={{ color: service.accent }}>Service Overview</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-7">Detailing Built Around Real Project Workflows</h2>
              <div className="space-y-5">
                {service.overview.map((paragraph) => (
                  <p key={paragraph} className="text-base sm:text-lg text-[#5B6475] leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
            {projectImages.length > 0 ? (
              <SectionImageSlot label={`${service.shortName} overview image`} image={projectImages[0]} />
            ) : (
              <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest block" style={{ color: service.accent }}>Quality &amp; Precision Highlights</span>
                <h3 className="text-2xl font-extrabold text-[#111827]">Engineered For Manufacturing &amp; Field Execution</h3>
                <div className="space-y-4">
                  {service.qualityPriorities.map((item) => (
                    <div key={item.title} className="p-4.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                      <h4 className="text-base font-extrabold mb-1" style={{ color: service.accent }}>{item.title}</h4>
                      <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest" style={{ color: service.accent }}>
                {service.slug === "tilt-up-detailing" ? "What We Provide" : "Scope & Deliverables"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 mb-5">
                {service.slug === "tilt-up-detailing" ? "Comprehensive Tilt-Up Detailing Services" : "What Our Team Can Deliver"}
              </h2>
              <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed">
                {service.slug === "tilt-up-detailing"
                  ? "We provide accurate and construction-ready Tilt-Up Shop Drawings and Embed Panel Detailing Services tailored to meet contractor and engineer requirements."
                  : "The final scope is aligned to the available design information, project stage, client standards, and agreed deliverable requirements."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.deliverables.map((item) => (
                <article key={item.title} className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex gap-4">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-1" style={{ color: service.accent }} />
                  <div>
                    <h3 className="text-lg font-extrabold mb-2">{item.title}</h3>
                    <p className="text-sm text-[#5B6475] leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-[#03142B] text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest" style={{ color: service.accent }}>Delivery Workflow</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3">From Project Information to Coordinated Deliverables</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.workflow.map((step) => (
                <article key={step.number} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <span className="text-2xl font-black" style={{ color: service.accent }}>{step.number}</span>
                  <h3 className="text-xl font-extrabold mt-5 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {projectImages.length > 0 ? (
              <SectionImageSlot label={`${service.shortName} coordination image`} image={projectImages[1]} />
            ) : (
              <div className="rounded-3xl bg-[#03142B] text-white p-8 sm:p-10 flex flex-col justify-between h-full min-h-[340px]">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4" style={{ color: service.accent }}>
                    <Layers3 className="w-5 h-5" />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">Multi-Disciplinary Coordination</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">Eliminating Conflicts Before Construction Begins</h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                    Our engineering and detailing workflow identifies geometry discrepancies, reinforcement congestion, embed clearances, and structural interfaces early to streamline production and erection on site.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold w-fit" style={{ color: service.accent }}>
                  <CheckCircle2 className="w-4 h-4" /> Coordinated &amp; Fabrication-Ready
                </div>
              </div>
            )}
            <div>
              <div className="inline-flex items-center gap-2 mb-4" style={{ color: service.accent }}>
                <Layers3 className="w-5 h-5" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">Coordination Focus</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-7">Details We Review Together</h2>
              <div className="space-y-4">
                {service.coordination.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: service.accent }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-6" style={{ color: service.accent }}>
                  <Building2 className="w-6 h-6" />
                  <h2 className="text-2xl font-extrabold text-[#111827]">Project Applications</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {service.projectTypes.map((item) => <span key={item} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-semibold">{item}</span>)}
                </div>
              </div>
              <div className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-6" style={{ color: service.accent }}>
                  <Users className="w-6 h-6" />
                  <h2 className="text-2xl font-extrabold text-[#111827]">Who We Support</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {service.partners.map((item) => <span key={item} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-semibold">{item}</span>)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              {service.qualityPriorities.map((item) => (
                <article key={item.title} className="rounded-2xl bg-white border border-slate-200 p-7">
                  <ClipboardCheck className="w-7 h-7 mb-5" style={{ color: service.accent }} />
                  <h3 className="text-xl font-extrabold mb-3">{item.title}</h3>
                  <p className="text-sm text-[#5B6475] leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <FileInput className="w-7 h-7" style={{ color: service.accent }} />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Getting Started</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">Typical Project Information</h2>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.projectInputs.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: service.accent }} />
                    <span className="text-sm text-[#4B5563]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: service.accent }}>Related Civil Services</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">Explore Our Other Detailing Capabilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((item) => (
                <Link key={item.slug} href={`/verticals/civil/${item.slug}`} className="rounded-2xl border border-slate-200 p-6 hover:border-[#FF6B35]/50 hover:shadow-lg transition-all group">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: item.accent }}>{item.eyebrow}</span>
                  <h3 className="text-xl font-extrabold mt-3 mb-3">{item.shortName}</h3>
                  <span className="inline-flex items-center text-sm font-bold text-[#168BFF]">View service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 bg-[#03142B] text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest" style={{ color: service.accent }}>Discuss Your Requirements</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold max-w-4xl mx-auto mt-3 mb-6">Turn Your Project Information Into Coordinated, Construction-Ready Deliverables</h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8">Share your drawings, specifications, scope, and expected delivery requirements with the KBS Civil Engineering team.</p>
            <Link href={`/contact?service=${encodeURIComponent(service.shortName)}`} className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-bold shadow-xl hover:opacity-90 transition-opacity" style={{ backgroundColor: service.accent }}>
              Talk to Our Engineering Team <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
