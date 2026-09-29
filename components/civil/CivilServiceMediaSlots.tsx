import { ChevronLeft, ChevronRight } from "lucide-react";

export function DrawingCarouselSlot() {
  return (
    <div className="relative">
      <div
        role="img"
        aria-label="Reserved area for the future project drawing carousel"
        className="aspect-[16/9] min-h-[260px] rounded-3xl border border-dashed border-slate-300 bg-white"
      >
        <span className="sr-only">Project drawing carousel images will be added after approval.</span>
      </div>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 pointer-events-none">
        <span aria-hidden="true" className="w-10 h-10 rounded-full border border-slate-200 bg-white/90 text-slate-300 flex items-center justify-center shadow-sm">
          <ChevronLeft className="w-5 h-5" />
        </span>
        <span aria-hidden="true" className="w-10 h-10 rounded-full border border-slate-200 bg-white/90 text-slate-300 flex items-center justify-center shadow-sm">
          <ChevronRight className="w-5 h-5" />
        </span>
      </div>
      <div aria-hidden="true" className="flex items-center justify-center gap-2 mt-4">
        <span className="w-5 h-1.5 rounded-full bg-slate-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}

export function SectionImageSlot({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`Reserved area for ${label}`}
      className="aspect-[4/3] min-h-[280px] rounded-3xl border border-dashed border-slate-300 bg-slate-50"
    >
      <span className="sr-only">{label} will be added after approval.</span>
    </div>
  );
}
