"use client";

import Link from "next/link";

interface LayerCard {
  layer: string;
  title: string;
  description: string;
}

const layers: LayerCard[] = [
  {
    layer: "Layer 1",
    title: "Source truth",
    description:
      "Reports stay in the originating organization's system of record.",
  },
  {
    layer: "Layer 2",
    title: "Permissioned handoff",
    description: "Delivery only to recipients authorized for that purpose.",
  },
  {
    layer: "Layer 3",
    title: "Evidence of events",
    description: "Each event carries who recorded it and when, as reported.",
  },
  {
    layer: "Layer 4",
    title: "Regional controls",
    description: "Availability and data handling follow local authorization.",
  },
];

export default function PartnerIntegration() {
  return (
    <section className="w-full bg-gradient-to-br from-[#1432a6] via-[#102787] to-[#0c1f6d] py-16 lg:py-24 text-white">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#c4b5fd] uppercase">
          <span className="h-0.5 w-4 bg-[#c4b5fd]" />
          <span>INTEGRATION &amp; PARTNER APPROACH</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 text-[30px] sm:text-[36px] lg:text-[42px] font-bold tracking-tight text-white [font-family:var(--font-poppins)] leading-tight">
          Built around your systems, <br className="hidden sm:inline" />
          not in place of them.
        </h2>

        {/* Subtitle */}
        <p className="mb-10 max-w-[560px] text-[14px] sm:text-[15px] leading-relaxed text-blue-100/90">
          A standards-oriented approach where each participant keeps its own
          record. Compatibility is confirmed per partner, never assumed.
        </p>

        {/* 4 Layer Cards Grid */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xs transition-colors hover:bg-white/10"
            >
              <div>
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-blue-200/80">
                  {item.layer}
                </span>
                <h3 className="mb-2 text-[15px] sm:text-[16px] font-bold text-white [font-family:var(--font-poppins)]">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-blue-100/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-[13px] text-blue-200/80">
            Doesn&apos;t replace your EHR or local governance.
          </p>

          <Link
            href="/become-partner"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-[13px] font-semibold text-white shadow-xs backdrop-blur-sm transition hover:bg-white/20 self-start sm:self-auto"
          >
            See the partner &amp; developer overview
          </Link>
        </div>
      </div>
    </section>
  );
}
