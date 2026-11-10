import React from "react";

const fieldDefinitions = [
  { field: "purpose", meaning: "Why the exchange exists" },
  { field: "source", meaning: "Originating system of record" },
  { field: "authorization_scope", meaning: "What the sponsor approved" },
  { field: "region", meaning: "Approved processing region" },
  { field: "version", meaning: "Contract version" },
  { field: "event_id", meaning: "Unique, idempotent identifier" },
  { field: "occurred_at", meaning: "When the event happened" },
  { field: "correlation_id", meaning: "Links related events" },
  { field: "outcome", meaning: "Result state, never clinical meaning" },
];

export const ContractPrerequisitesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-2">
            04 / API CONTRACT PREREQUISITES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            The fields every proposed contract needs
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            A synthetic specimen. It is not an endpoint, and it never contains secrets.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Synthetic JSON Card */}
          <div className="lg:col-span-6 bg-[#0d1538] rounded-2xl overflow-hidden shadow-lg border border-slate-800 text-white">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#121c4a] border-b border-white/10">
              <span className="bg-rose-500/80 text-white text-[10px] font-mono px-2.5 py-0.5 rounded">
                example-event.json
              </span>
              <span className="bg-rose-500 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded">
                SYNTHETIC
              </span>
            </div>

            {/* JSON Content */}
            <pre className="p-5 sm:p-6 text-[11px] sm:text-xs font-mono leading-relaxed overflow-x-auto text-slate-200">
              <code>
                <span className="text-slate-400">
                  {"// SYNTHETIC SPECIMEN · not an endpoint · no credentials\n"}
                </span>
                {"{\n"}
                {"  "}
                <span className="text-sky-300">&quot;purpose&quot;</span>
                {": "}
                <span className="text-emerald-300">
                  &quot;referral_status_update&quot;
                </span>
                {",\n  "}
                <span className="text-sky-300">&quot;source&quot;</span>
                {": "}
                <span className="text-emerald-300">
                  &quot;example-source-system&quot;
                </span>
                {",\n  "}
                <span className="text-sky-300">
                  &quot;authorization_scope&quot;
                </span>
                {": "}
                <span className="text-emerald-300">
                  &quot;referral.status:read&quot;
                </span>
                {",\n  "}
                <span className="text-sky-300">&quot;region&quot;</span>
                {": "}
                <span className="text-emerald-300">
                  &quot;example-region&quot;
                </span>
                {",\n  "}
                <span className="text-sky-300">&quot;version&quot;</span>
                {": "}
                <span className="text-emerald-300">&quot;0.0-proposed&quot;</span>
                {",\n  "}
                <span className="text-sky-300">&quot;event_id&quot;</span>
                {": "}
                <span className="text-emerald-300">
                  &quot;evt_000000000000&quot;
                </span>
                {",\n  "}
                <span className="text-sky-300">&quot;occurred_at&quot;</span>
                {": "}
                <span className="text-emerald-300">
                  &quot;2026-01-01T00:00:00Z&quot;
                </span>
                {",\n  "}
                <span className="text-sky-300">&quot;correlation_id&quot;</span>
                {": "}
                <span className="text-emerald-300">
                  &quot;cor_000000000000&quot;
                </span>
                {",\n  "}
                <span className="text-sky-300">&quot;outcome&quot;</span>
                {": "}
                <span className="text-emerald-300">
                  &quot;transport_acknowledged&quot;
                </span>
                {"\n}"}
              </code>
            </pre>
          </div>

          {/* Right: Field & Meaning Table */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="bg-[#162768] text-white text-xs font-semibold px-5 py-3.5 grid grid-cols-12 gap-2">
              <div className="col-span-5">Field</div>
              <div className="col-span-7">Meaning</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-100">
              {fieldDefinitions.map((row) => (
                <div
                  key={row.field}
                  className="px-5 py-3 grid grid-cols-12 gap-2 items-center text-xs hover:bg-slate-50/70 transition-colors"
                >
                  <div className="col-span-5 font-mono text-[#4f46e5] font-medium truncate">
                    {row.field}
                  </div>
                  <div className="col-span-7 text-slate-600">{row.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
