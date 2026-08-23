"use client";

import React from "react";
import { TechnologyItem } from "@/data/services";
import { 
  Code2, 
  Layers, 
  Server, 
  Terminal, 
  Globe, 
  Cloud, 
  Container, 
  Database 
} from "lucide-react";

const techIconsMap: Record<string, React.ElementType> = {
  react: Code2,
  nextjs: Layers,
  nodejs: Server,
  typescript: Terminal,
  python: Terminal,
  dotnet: Globe,
  aws: Cloud,
  docker: Container,
  postgres: Database,
  mongodb: Database,
};

interface ServiceTechnologiesProps {
  technologies: TechnologyItem[];
}

export default function ServiceTechnologies({ technologies }: ServiceTechnologiesProps) {
  return (
    <section className="w-full bg-slate-50/60 py-14 border-b border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="mb-8 text-center space-y-1">
          <span className="text-xs font-bold tracking-widest text-[#E52B2F] uppercase">
            TECHNOLOGIES WE USE
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
            Built with Modern Production Tech Stacks
          </h3>
        </div>

        {/* Tech Logo Tiles */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
          {technologies.map((tech) => {
            const IconComp = techIconsMap[tech.id] || Code2;
            return (
              <div
                key={tech.id}
                className="group flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E52B2F]/40 hover:shadow-md hover:text-[#E52B2F]"
              >
                <IconComp 
                  className="h-4 w-4 transition-transform group-hover:scale-110" 
                  style={{ color: tech.color }}
                />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
