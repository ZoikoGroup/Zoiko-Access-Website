import React from "react";

const ownershipList = [
  { owner: "Sponsoring institution", role: "Owns authorization" },
  { owner: "Technology vendor", role: "Owns the source application" },
  { owner: "System integrator", role: "Implements" },
  { owner: "Receiving provider", role: "Accepts the next step" },
  { owner: "Zoiko Access", role: "Coordinates within scope" },
];

const journeyPills = [
  "Inquiry",
  "Qualification",
  "Scope",
  "Diligence",
  "Validation",
  "Decision",
];

const governancePills = [
  "Purpose limitation",
  "Region",
  "Lawful authority",
  "Source of truth",
  "Security review",
  "Minimum necessary",
  "Retention",
];

export const GroundRulesSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f8f7ff] via-[#f4f1ff] to-[#ebe5ff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="inline-block bg-white/90 border border-purple-200/70 text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3 shadow-xs">
            09 · Ground rules
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Responsibility, markets and data
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Clinical decisions, source records and receiving acceptance remain with authorized healthcare institutions and professionals.
          </p>
        </div>

        {/* 3 White Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Who owns what */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
            <h3 className="font-bold text-base text-[#0f172a] mb-4">
              Who owns what
            </h3>
            <div className="space-y-3">
              {ownershipList.map((item, idx) => (
                <div key={idx}>
                  <span className="block font-bold text-xs text-[#0f172a]">
                    {item.owner}
                  </span>
                  <span className="block text-[11px] text-slate-500">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Market & capability status + Proposed evidence journey */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
            <div className="mb-5">
              <h3 className="font-bold text-base text-[#0f172a] mb-2">
                Market &amp; capability status
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Global architecture is not proof of regional availability. Current activation is shown only with evidence for each market, organisation, service, role and release.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm text-[#0f172a] mb-3">
                Proposed evidence journey
              </h4>
              <div className="flex flex-wrap gap-2">
                {journeyPills.map((pill) => (
                  <span
                    key={pill}
                    className="bg-[#f1effd] text-[#4f46e5] text-[11px] font-semibold px-3 py-1 rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Data governance */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm flex flex-col justify-between">
            <div className="mb-5">
              <h3 className="font-bold text-base text-[#0f172a] mb-2">
                Data governance
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Separate checks for purpose, market, organisation, role and data type. Denied by default.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {governancePills.map((pill) => (
                <span
                  key={pill}
                  className="bg-[#f1effd] text-[#4f46e5] text-[11px] font-semibold px-3 py-1 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
