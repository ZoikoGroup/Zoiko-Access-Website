import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ConceptItem {
  term: string;
  definition: string;
}

const concepts: ConceptItem[] = [
  {
    term: "SDK",
    definition:
      "An optional code library that may simplify authorized integration, once released.",
  },
  {
    term: "Event",
    definition: "A defined fact about a change, from an authoritative source.",
  },
  {
    term: "Webhook",
    definition: "A push notification to an approved, verified endpoint.",
  },
  {
    term: "Receipt",
    definition: "Proof of delivery, never proof of clinical review.",
  },
];

export const SdkEventConcepts: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              SDK &amp; EVENT CONCEPTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
            Concepts now. Install commands later.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Install commands are shown only for signed, released packages. None exist yet, so the terminal below is intentionally empty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Dark Terminal Window */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0f172a] border border-slate-800 shadow-xl overflow-hidden font-mono text-xs text-slate-300">
              {/* Terminal Window Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1e293b]/70 border-b border-slate-800/80">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] text-slate-400 font-sans ml-2">
                  terminal
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 space-y-3 min-h-[220px]">
                <div className="text-slate-100">
                  <span className="text-emerald-400 font-bold">$ </span>
                  <span className="text-slate-400"># install command withheld</span>
                </div>
                <div className="text-slate-500 text-[11px]">
                  # reason: no signed package artifacts released
                </div>
                {/* Redacted Block Lines */}
                <div className="space-y-1.5 pt-2 opacity-25">
                  <div className="h-3 bg-slate-600 rounded w-full" />
                  <div className="h-3 bg-slate-600 rounded w-5/6" />
                  <div className="h-3 bg-slate-600 rounded w-4/6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Definition Table & Link */}
          <div className="lg:col-span-6">
            <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
              {concepts.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                >
                  <span className="sm:col-span-3 font-bold text-sm text-slate-900">
                    {item.term}
                  </span>
                  <span className="sm:col-span-9 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.definition}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Link */}
            <div className="mt-6">
              <Link
                href="/ehr-interoperability"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6366f1] hover:text-[#4f46e5] transition-colors"
              >
                <span>Read SDKs, Webhooks &amp; Events</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
