import React from "react";

interface MetadataRow {
  num: number;
  label: string;
  value: string;
}

const metadataRows: MetadataRow[] = [
  {
    num: 1,
    label: "Source record",
    value: "originating_system",
  },
  {
    num: 2,
    label: "Timestamps",
    value: "authored • effective • sent",
  },
  {
    num: 3,
    label: "Corrections",
    value: "supersedes: —",
  },
  {
    num: 4,
    label: "Consent",
    value: "basis recorded by provider",
  },
  {
    num: 5,
    label: "Permissions",
    value: "scope: purpose_example",
  },
];

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "Source record",
    description: "The authoritative system it came from, which keeps ownership.",
  },
  {
    title: "Timestamps",
    description: "When it was written, when it applies, and when it was sent.",
  },
  {
    title: "Corrections",
    description: "Later versions point back to what they replace. Nothing is silently overwritten.",
  },
  {
    title: "Consent",
    description: "Recorded by the responsible organization, never assumed by an interface.",
  },
  {
    title: "Permissions",
    description: "The approved scope that allowed this exchange.",
  },
];

export const TraceableRecordAnatomy: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f1444] via-[#1a125a] to-[#45106e] py-16 md:py-24 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#c4b5fd]" />
            <span className="text-[#c4b5fd] font-medium text-xs sm:text-sm tracking-wider uppercase">
              INFORMATION EXCHANGE &amp; PROVENANCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            The anatomy of a traceable record.
          </h2>
          <p className="text-purple-200/85 text-xs sm:text-sm md:text-base leading-relaxed">
            Five things every exchanged record should carry. Placeholder values only.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Record Metadata White Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white text-slate-900 shadow-2xl border border-white/90 overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 bg-[#fbfbfe]">
                <span className="text-xs font-mono font-semibold text-slate-500">
                  record.metadata
                </span>
                <span className="text-[11px] font-medium text-slate-400 italic">
                  illustrative
                </span>
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                {metadataRows.map((row) => (
                  <div
                    key={row.num}
                    className="flex items-center justify-between px-6 py-4 hover:bg-slate-50/70 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#6366f1] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {row.num}
                      </div>
                      <span className="font-bold text-slate-900">
                        {row.label}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-600">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 5 Explanations with Circle Icons */}
          <div className="lg:col-span-6 space-y-6">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border-2 border-purple-300/40 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-purple-300/60" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white mb-0.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
