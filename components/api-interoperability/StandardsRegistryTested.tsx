import React from "react";
import { Layout } from "lucide-react";

interface PillarCard {
  title: string;
  description: string;
}

const pillarsData: PillarCard[] = [
  {
    title: "Explicit",
    description: "Every contract names its format.",
  },
  {
    title: "Versioned",
    description: "Changes get a new version.",
  },
  {
    title: "Tested",
    description: "Results are kept, including failures.",
  },
];

export default function StandardsRegistryTested() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F2F2] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-[#F1F0FE] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#7C3AED]">
              // standards_registry
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Explicit, versioned and tested.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Standards and version labels appear here only when the technical
            registry has endorsed them.
          </p>
        </div>

        {/* Empty Standards Registry Table Container */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          {/* Table Header Bar */}
          <div className="grid grid-cols-12 bg-[#F8FAFC] px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#64748B] sm:px-8">
            <div className="col-span-6 sm:col-span-5">STANDARD / PROFILE</div>
            <div className="col-span-2 hidden sm:block">VERSION</div>
            <div className="col-span-2 hidden sm:block">SCOPE</div>
            <div className="col-span-6 text-right sm:col-span-3 sm:text-left">
              STATUS
            </div>
          </div>

          {/* Empty State Body Row */}
          <div className="flex items-center gap-4 px-6 py-8 sm:px-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <Layout className="h-5 w-5 text-[#94A3B8]" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#0E1646]">
                No endorsed standards published yet.
              </h3>
              <p className="mt-0.5 text-[14px] text-[#64748B]">
                This table fills in only from reviewed technical documents.
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Pillars Cards (Explicit, Versioned, Tested) */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillarsData.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] sm:p-8"
            >
              <h3 className="text-[17px] font-bold tracking-tight text-[#0E1646]">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.6] text-[#475569]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
