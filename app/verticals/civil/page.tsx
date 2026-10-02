import React from "react";
import { constructMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Building2,
  HardHat,
  CheckCircle2,
  Layers,
  Ruler,
  Cpu,
  FileText,
  Briefcase,
  Users,
  Compass,
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  Warehouse,
  Building,
  Wrench,
  Truck,
  Factory,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "KBS Civil Engineering Services | Structural Detailing",
  description: "KBS Civil Engineering and Build Right Tec provide precast, tilt-up, PEMB, BIM, self-storage detailing, shop drawings, and engineering support.",
  path: "/verticals/civil",
  keywords: ["KBS Civil Engineering", "Build Right Tec", "Build Right Tech", "precast concrete detailing", "tilt-up detailing", "PEMB detailing", "self-storage shop drawings", "BIM services"],
  image: "/Civil Services.png",
});

export default function CivilPage() {
  const coreServices = [
    {
      id: "precast",
      title: "Precast Concrete Detailing",
      tagline: "Precision Detailing for Efficient Manufacturing & Installation",
      description:
        "We provide comprehensive Precast Concrete Detailing Services for commercial, residential, industrial, infrastructure, and institutional projects. Our detailing solutions focus on accurate structural coordination, efficient manufacturing, and smooth on-site installation.",
      capabilities: [
        "Precast shop drawings",
        "General arrangement drawings",
        "Panel and element detailing",
        "Reinforcement detailing",
        "Connection detailing",
        "Embed and insert coordination",
        "Erection drawings",
        "Production-ready documentation",
        "BIM-based coordination",
        "Drawing revisions and project support",
      ],
      footerNote:
        "Every deliverable is developed with a strong focus on dimensional accuracy, constructability, coordination, and fabrication requirements.",
      cta: "Explore Precast Services",
      href: "/verticals/civil/precast-concrete-detailing",
      icon: Building2,
      accent: "#FF6B35",
    },
    {
      id: "tilt-up",
      title: "Tilt-Up Detailing Services",
      tagline: "Construction-Ready Drawings for Efficient Tilt-Up Projects",
      description:
        "We provide precise Tilt-Up Shop Drawings and Embed Panel Detailing Services designed to support efficient fabrication, panel construction, and site erection. Our team develops detailed and coordinated documentation based on structural and architectural requirements.",
      capabilities: [
        "Complete panel layout drawings",
        "Casting layout plan",
        "Embed layout & placement drawings",
        "Individual panel sheets with dimensions & openings",
        "Comprehensive embed lists (plates, angles, anchors)",
        "Connection & bracing details coordination",
        "Lifting & Bracing design",
        "Floor plan layout references for site positioning",
        "Clash-free, fabrication-ready deliverables",
      ],
      footerNote:
        "Our objective is to identify coordination requirements early and provide clear drawings that help project teams execute with confidence.",
      cta: "Explore Tilt-Up Services",
      href: "/verticals/civil/tilt-up-detailing",
      icon: Layers,
      accent: "#A52BFF",
    },
    {
      id: "self-storage",
      title: "Mini & Self-Storage Detailing",
      tagline: "Structural Solutions Designed Around Space, Efficiency & Scalability",
      description:
        "We provide specialized detailing and engineering support for mini-storage and self-storage developments. Our solutions are designed to support efficient space utilization, structural accuracy, fabrication, installation, and future scalability.",
      capabilities: [
        "Structural shop drawings",
        "Fabrication drawings",
        "Framing layouts",
        "Wall and roof framing details",
        "Connection details",
        "Coordinated CAD drawings",
        "BIM models",
        "Material and component coordination",
        "Multi-building storage development support",
      ],
      footerNote:
        "From compact storage facilities to large multi-building developments, our team delivers organized and coordinated documentation for efficient construction.",
      cta: "Explore Self-Storage Services",
      href: "/verticals/civil/self-storage-detailing",
      icon: Compass,
      accent: "#168BFF",
    },
    {
      id: "pemb",
      title: "PEMB – Pre-Engineered Metal Buildings",
      tagline: "Efficient Building Systems Engineered for Performance",
      description:
        "We provide design and detailing support for Pre-Engineered Metal Building systems used across industrial, commercial, logistics, manufacturing, warehouse, and specialized facilities. Our PEMB solutions focus on structural efficiency, flexibility, constructability, and optimized use of materials.",
      capabilities: [
        "Structural modeling",
        "Primary framing systems",
        "Secondary framing systems",
        "Roof and wall framing",
        "Connection detailing",
        "Anchor bolt layouts",
        "Erection drawings",
        "Fabrication drawings",
        "Building component coordination",
        "BIM and CAD documentation",
      ],
      footerNote:
        "PEMB systems can help reduce construction complexity while providing adaptable structural solutions for a wide range of building requirements.",
      cta: "Explore PEMB Services",
      href: "/verticals/civil/pemb-detailing",
      icon: HardHat,
      accent: "#FF9F1C",
    },
  ];

  const digitalConstruction = [
    {
      title: "BIM Modeling",
      description:
        "Develop coordinated structural models that provide better visibility into complex building systems before fabrication and construction.",
      icon: Cpu,
      accent: "#FF6B35",
    },
    {
      title: "Clash & Coordination Review",
      description:
        "Identify potential conflicts between structural, architectural, and related project information before they become expensive site issues.",
      icon: ShieldCheck,
      accent: "#A52BFF",
    },
    {
      title: "CAD & Shop Drawing Development",
      description:
        "Produce detailed, organized, and construction-ready drawings for fabrication, manufacturing, erection, and site execution.",
      icon: FileText,
      accent: "#168BFF",
    },
    {
      title: "Constructability Coordination",
      description:
        "Review project information from a practical construction perspective to improve detailing and reduce avoidable complications during execution.",
      icon: Zap,
      accent: "#FF9F1C",
    },
  ];

  const expertiseProjects = [
    {
      title: "Industrial Facilities",
      description:
        "Structural detailing and engineering support for manufacturing, processing, warehouse, and industrial developments.",
      icon: Factory,
      accent: "#FF6B35",
    },
    {
      title: "Logistics & Distribution Centers",
      description:
        "Detailed structural solutions for large-scale warehouses, distribution facilities, and logistics infrastructure.",
      icon: Truck,
      accent: "#168BFF",
    },
    {
      title: "Commercial Buildings",
      description:
        "Coordinated structural documentation for commercial developments requiring accuracy, speed, and efficient execution.",
      icon: Building,
      accent: "#A52BFF",
    },
    {
      title: "Self-Storage Facilities",
      description:
        "Specialized detailing solutions for single-building and multi-building storage developments.",
      icon: Warehouse,
      accent: "#FF9F1C",
    },
    {
      title: "Infrastructure Projects",
      description:
        "Structural detailing and engineering support for infrastructure components requiring accurate coordination and documentation.",
      icon: Wrench,
      accent: "#00A8FF",
    },
    {
      title: "Institutional Projects",
      description:
        "Engineering and detailing support for facilities where structural performance, coordination, and documentation quality are critical.",
      icon: Building2,
      accent: "#6657FF",
    },
  ];

  const advantagePillars = [
    {
      title: "Specialized Structural Expertise",
      desc: "Our services are focused around structural engineering, detailing, BIM, and construction documentation for real-world building systems.",
      icon: HardHat,
    },
    {
      title: "Precision-Driven Delivery",
      desc: "Every drawing, model, and detail is developed with close attention to dimensions, connections, coordination, and project specifications.",
      icon: Target,
    },
    {
      title: "Construction-Ready Documentation",
      desc: "Our deliverables are developed to support practical fabrication, manufacturing, erection, and on-site construction requirements.",
      icon: FileText,
    },
    {
      title: "Technology-Enabled Workflows",
      desc: "We use modern CAD, BIM, modeling, and digital coordination tools to improve accuracy and project visibility.",
      icon: Cpu,
    },
    {
      title: "Multi-Discipline Coordination",
      desc: "We review structural and architectural information together to identify discrepancies and coordination requirements earlier.",
      icon: ShieldCheck,
    },
    {
      title: "Scalable Project Support",
      desc: "Whether supporting an individual project or working as an extension of an engineering team, our services can scale according to project requirements.",
      icon: Briefcase,
    },
    {
      title: "KBS Group Backed",
      desc: "Part of KBS Group — One Group. Every Solution.",
      icon: Building2,
    },
  ];

  const deliveryProcess = [
    {
      num: "01",
      title: "Understand",
      desc: "We review the project scope, structural requirements, architectural information, engineering drawings, specifications, and expected deliverables.",
    },
    {
      num: "02",
      title: "Analyze",
      desc: "Our engineers and detailing specialists study the available information and identify structural, detailing, and coordination requirements.",
    },
    {
      num: "03",
      title: "Model & Detail",
      desc: "We develop structural models, shop drawings, fabrication drawings, layouts, connections, and other required project documentation.",
    },
    {
      num: "04",
      title: "Coordinate",
      desc: "Structural information is coordinated with architectural drawings and relevant project requirements to identify discrepancies and potential conflicts.",
    },
    {
      num: "05",
      title: "Quality Review",
      desc: "Deliverables undergo detailed internal review for dimensional accuracy, consistency, constructability, and compliance with project information.",
    },
    {
      num: "06",
      title: "Deliver & Support",
      desc: "We provide organized, construction-ready deliverables and continue supporting revisions, coordination requirements, and project updates as needed.",
    },
  ];

  const whoWeWorkWith = [
    {
      title: "Structural Engineers",
      desc: "Detailed modeling, documentation, and drawing support that helps engineering teams convert designs into coordinated project deliverables.",
      icon: Compass,
      accent: "#FF6B35",
    },
    {
      title: "General Contractors",
      desc: "Construction-ready structural information that improves coordination between design, fabrication, and field execution.",
      icon: HardHat,
      accent: "#168BFF",
    },
    {
      title: "Precast Manufacturers",
      desc: "Detailed precast drawings and production information developed to support manufacturing and erection.",
      icon: Building2,
      accent: "#A52BFF",
    },
    {
      title: "Steel Fabricators",
      desc: "Accurate fabrication and erection documentation designed around practical production requirements.",
      icon: Wrench,
      accent: "#FF9F1C",
    },
    {
      title: "Developers",
      desc: "Scalable engineering and detailing support for commercial, industrial, storage, and infrastructure developments.",
      icon: Building,
      accent: "#00A8FF",
    },
    {
      title: "Architects",
      desc: "Structural coordination that helps align architectural intent with engineering and construction requirements.",
      icon: Layers,
      accent: "#6657FF",
    },
    {
      title: "Construction & Project Teams",
      desc: "Reliable technical documentation and coordination support throughout the project lifecycle.",
      icon: Users,
      accent: "#FF4757",
    },
  ];

  const approachPriorities = [
    {
      title: "Precision",
      desc: "Accurate drawings, models, dimensions, connections, and structural information.",
      accent: "#FF6B35",
    },
    {
      title: "Coordination",
      desc: "Better alignment between engineering, architecture, fabrication, and construction teams.",
      accent: "#168BFF",
    },
    {
      title: "Delivery",
      desc: "Clear, organized, practical deliverables developed around real project requirements and timelines.",
      accent: "#A52BFF",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] selection:bg-[#FF6B35] selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* 1. HERO SECTION WITH VIDEO BG & GRAPHIC */}
        <section className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#03142B] text-white">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center lg:object-right pointer-events-none scale-[1.06] brightness-[1.08] contrast-[1.05] saturate-[1.1]"
            >
              <source src="/All Verticals video.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(2, 12, 32, 0.98) 0%, rgba(3, 16, 42, 0.85) 35%, rgba(3, 16, 42, 0.2) 55%, transparent 75%)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-[#FF6B35] mb-6">
                <Building2 className="w-4 h-4 text-[#FF6B35]" />
                KBS CIVIL ENGINEERING SERVICES
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Structural Detailing & Engineering Solutions <br />
                <span className="bg-gradient-to-r from-[#FF6B35] via-[#FF9F1C] to-[#A52BFF] bg-clip-text text-transparent inline-block">
                  Built for Construction
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-4">
                Precision-driven structural detailing, BIM, and engineering support for commercial, industrial, infrastructure, residential, and storage projects.
              </p>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
                From complex precast structures and tilt-up buildings to pre-engineered metal buildings and self-storage facilities, we deliver accurate, coordinated, and construction-ready engineering solutions that support efficient fabrication and execution.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FF9F1C] to-[#A52BFF] text-white font-semibold text-sm sm:text-base hover:opacity-95 active:scale-95 transition-all shadow-lg hover:shadow-xl group"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 ml-2.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 active:scale-95 transition-all"
                >
                  Talk to Our Engineers
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom-Left Hero Section Design Graphic */}
          <div
            className="absolute bottom-0 left-0 w-[550px] sm:w-[750px] md:w-[950px] lg:w-[1100px] max-w-full pointer-events-none z-[1] select-none mix-blend-screen opacity-85"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse 85% 90% at 0% 100%, #000 40%, transparent 85%)",
              maskImage: "radial-gradient(ellipse 85% 90% at 0% 100%, #000 40%, transparent 85%)",
            }}
          >
            <Image
              src="/hero-section-design.png"
              alt=""
              width={2103}
              height={748}
              className="w-full h-auto object-contain object-bottom-left"
              priority
            />
          </div>
        </section>

        {/* 2. SECTION: ENGINEERING & DETAILING EXPERTISE */}
        <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-3">
                ENGINEERING & DETAILING EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-5">
                Precision From Design to Construction
              </h2>
              <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed font-normal">
                KBS Civil Engineering Services provides technology-driven structural detailing and digital construction solutions designed to bridge the gap between engineering design, fabrication, and on-site execution.
              </p>
            </div>

            {/* 3 Core Expertise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-3">
                  Lifecycle Precision
                </h3>
                <p className="text-sm text-[#5B6475] leading-relaxed font-normal">
                  Successful structural projects depend on more than drawings. They require accurate detailing, effective coordination, constructability, and reliable engineering information throughout the project lifecycle.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-[#168BFF]/10 text-[#168BFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-3">
                  Technology-Driven Solutions
                </h3>
                <p className="text-sm text-[#5B6475] leading-relaxed font-normal">
                  We leverage advanced CAD, BIM, and digital coordination tools to bridge the gap between structural engineering intent, plant manufacturing, and field erection.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-[#A52BFF]/10 text-[#A52BFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#111827] mb-3">
                  Constructability Focus
                </h3>
                <p className="text-sm text-[#5B6475] leading-relaxed font-normal">
                  Our detailing specialists work closely with project teams to produce coordinated, fabrication-ready deliverables that eliminate clashes, minimize RFIs, and ensure efficient execution.
                </p>
              </div>
            </div>

            {/* Bottom Highlight Banner */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#03142B] text-white text-sm sm:text-base font-extrabold tracking-wide shadow-lg border border-white/10">
                <Sparkles className="w-4 h-4 text-[#FF9F1C]" />
                <span>Precision in Every Detail. Coordination at Every Stage.</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTION: OUR CORE SERVICES */}
        <section id="services" className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                OUR CORE SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
                Engineering Precision at Every Scale
              </h2>
              <p className="text-base sm:text-lg text-[#5B6475]">
                Comprehensive structural detailing, BIM, and engineering solutions tailored to modern construction requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coreServices.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.id}
                    className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#FF6B35]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                          style={{ backgroundColor: `${s.accent}15`, color: s.accent }}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
                            {s.title}
                          </h3>
                          <h4 className="text-xs sm:text-sm font-bold mt-1" style={{ color: s.accent }}>
                            {s.tagline}
                          </h4>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-[#5B6475] leading-relaxed mb-6 font-normal">
                        {s.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
                          Key Capabilities & Deliverables
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                          <div className="flex flex-col gap-2">
                            {s.capabilities
                              .filter((_, idx) => idx % 2 === 0)
                              .map((cap, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/80 border border-slate-200/60 text-xs sm:text-sm text-[#374151] hover:border-slate-300 transition-colors"
                                >
                                  <CheckCircle2
                                    className="w-4 h-4 shrink-0 mt-0.5"
                                    style={{ color: s.accent }}
                                  />
                                  <span className="font-semibold leading-snug">{cap}</span>
                                </div>
                              ))}
                          </div>
                          <div className="flex flex-col gap-2">
                            {s.capabilities
                              .filter((_, idx) => idx % 2 === 1)
                              .map((cap, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/80 border border-slate-200/60 text-xs sm:text-sm text-[#374151] hover:border-slate-300 transition-colors"
                                >
                                  <CheckCircle2
                                    className="w-4 h-4 shrink-0 mt-0.5"
                                    style={{ color: s.accent }}
                                  />
                                  <span className="font-semibold leading-snug">{cap}</span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-slate-200/60 text-xs sm:text-sm text-[#4B5563] italic mb-8">
                        {s.footerNote}
                      </div>
                    </div>

                    <Link
                      href={s.href}
                      className="inline-flex items-center text-sm font-bold transition-colors group-hover:translate-x-1"
                      style={{ color: s.accent }}
                    >
                      {s.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. SECTION: DIGITAL CONSTRUCTION */}
        <section className="py-20 sm:py-28 bg-[#03142B] text-white relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF6B35]/15 text-[#FF6B35] border border-[#FF6B35]/25 text-xs font-extrabold uppercase tracking-widest mb-4">
                <Sparkles className="w-4 h-4" />
                DIGITAL CONSTRUCTION
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
                Engineering Powered by BIM & Technology
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Modern construction requires engineering information that can move seamlessly between designers, fabricators, contractors, and site teams. KBS combines engineering expertise with BIM, CAD, digital coordination, and modern detailing workflows to improve the quality and usability of project information.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {digitalConstruction.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FF6B35]/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shrink-0"
                        style={{ backgroundColor: `${item.accent}25`, color: item.accent }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-extrabold text-white mb-3">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. SECTION: OUR EXPERTISE */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                OUR EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
                Built Around Complex Structural Projects
              </h2>
              <p className="text-base sm:text-lg text-[#5B6475]">
                Our engineering and detailing capabilities support a wide variety of projects and building systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseProjects.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#FF6B35]/30 shadow-xs hover:shadow-lg transition-all"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${exp.accent}15`, color: exp.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#111827] mb-3">{exp.title}</h3>
                    <p className="text-sm text-[#5B6475] leading-relaxed font-normal">{exp.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. SECTION: THE KBS ADVANTAGE */}
        <section className="py-20 sm:py-28 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                THE KBS ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Why KBS Civil Engineering Services?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantagePillars.map((w, idx) => {
                const Icon = w.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-[#FF6B35]/30 shadow-xs hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#111827] mb-3">{w.title}</h3>
                    <p className="text-sm text-[#5B6475] leading-relaxed font-normal">{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. SECTION: OUR DELIVERY PROCESS */}
        <section className="py-20 sm:py-28 bg-slate-900 text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                OUR DELIVERY PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                From Project Information to Construction-Ready Deliverables
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliveryProcess.map((step) => (
                <div
                  key={step.num}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FF6B35]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-extrabold text-[#FF6B35] block mb-4">
                      {step.num}
                    </span>
                    <h3 className="text-xl font-extrabold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. SECTION: WHO WE WORK WITH */}
        <section className="py-20 sm:py-28 bg-slate-50">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                WHO WE WORK WITH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Engineering Support Across the Construction Ecosystem
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whoWeWorkWith.map((w, idx) => {
                const Icon = w.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all flex items-start gap-5"
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${w.accent}15`, color: w.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#111827] mb-2">{w.title}</h3>
                      <p className="text-sm text-[#5B6475] leading-relaxed font-normal">{w.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 9. SECTION: OUR APPROACH */}
        <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
                OUR APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6">
                Precision. Coordination. Dependable Delivery.
              </h2>
              <p className="text-base sm:text-lg text-[#5B6475] font-normal leading-relaxed">
                Every successful structure begins with reliable engineering information. Our approach is built around three priorities:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {approachPriorities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center"
                >
                  <h3 className="text-2xl font-extrabold mb-3" style={{ color: item.accent }}>
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5B6475] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-[#111827] font-semibold text-center max-w-3xl mx-auto">
              We aim to operate as more than a service provider. We work as an extension of project teams, supporting them with dependable engineering resources and scalable technical expertise.
            </p>
          </div>
        </section>

        {/* 10. SECTION: ENGINEERING FOR MODERN CONSTRUCTION */}
        <section className="py-20 sm:py-24 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
              ENGINEERING FOR MODERN CONSTRUCTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6">
              From Structural Design Information to Fabrication & Execution
            </h2>
            <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed mb-6 font-normal">
              The construction industry is increasingly driven by digital workflows, BIM coordination, prefabrication, and accurate project information.
            </p>
            <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed mb-6 font-normal">
              KBS Civil Engineering Services brings these capabilities together to help project teams move efficiently from engineering information to fabrication and construction.
            </p>
            <p className="text-sm sm:text-base text-[#111827] font-medium leading-relaxed mb-8">
              Whether the project involves <strong className="font-extrabold">Precast Concrete, Tilt-Up Construction, Mini/Self-Storage, PEMB, BIM, shop drawings, or structural coordination</strong>, our focus remains the same:
            </p>

            <div className="inline-block px-8 py-4 rounded-full bg-[#03142B] text-white text-base sm:text-lg font-extrabold tracking-wide shadow-xl">
              Deliver accurate information that helps teams build better.
            </div>
          </div>
        </section>

        {/* 11. CLOSING CTA BANNER */}
        <section className="py-20 sm:py-28 bg-[#03142B] text-white relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FF6B35] block mb-2">
              READY TO DISCUSS YOUR PROJECT?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Turn Your Structural Requirements Into Construction-Ready Solutions
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg mb-8 font-normal">
              Whether you need a complete detailing package, additional engineering resources, BIM support, fabrication drawings, or specialized structural coordination, KBS Civil Engineering Services is ready to support your project.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#FF9F1C] to-[#A52BFF] text-white font-semibold text-base hover:opacity-95 shadow-xl transition-all"
              >
                Explore Our Services
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all"
              >
                Talk to Our Engineers
              </Link>
            </div>

            {/* Bottom Final Callout Box */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-3xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Let&apos;s Build With Precision
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4 font-normal">
                Have structural drawings, project specifications, or an upcoming construction project? Share your project requirements with our engineering team and discover how KBS can support your project from detailing through delivery.
              </p>
              <p className="text-base sm:text-lg font-extrabold text-[#FF6B35] mb-6">
                Precision Engineering. Better Coordination. Smarter Construction.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#FF6B35] text-white font-bold text-sm sm:text-base hover:bg-[#FF9F1C] transition-colors"
              >
                Start a Conversation →
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-semibold tracking-wide uppercase mt-10">
              KBS Civil Engineering Services — Structural detailing and engineering solutions powered by precision and technology.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
