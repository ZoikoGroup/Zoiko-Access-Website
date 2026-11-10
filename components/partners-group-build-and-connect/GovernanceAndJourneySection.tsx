import React from "react";

const governanceRows = [
  {
    label: "Purpose limitation",
    description: "Data is used only for the specific, agreed purpose.",
  },
  {
    label: "Region",
    description: "Processing follows the approved region for each market.",
  },
  {
    label: "Lawful authority",
    description: "Every exchange needs a lawful basis held by the right party.",
  },
  {
    label: "Source of truth",
    description: "The source system remains the record of truth.",
  },
  {
    label: "Security review",
    description: "Connections pass security review before any activation.",
  },
  {
    label: "Minimum necessary",
    description: "Only the data needed for the purpose is in scope.",
  },
  {
    label: "Retention",
    description:
      "Retention periods are defined and enforced, then data is removed.",
  },
];

const journeyStages = [
  "Inquiry",
  "Qualification",
  "Scope",
  "Diligence",
  "Validation",
  "Decision",
];

const plainTerms = [
  {
    title: "Interest",
    description:
      "You told us you would like to explore working together. Nothing has been assessed yet.",
  },
  {
    title: "Review",
    description:
      "A team is looking at purpose, scope and evidence. It is not an approval.",
  },
  {
    title: "Authorization",
    description:
      "The responsible institution has formally approved a defined scope. Still not live.",
  },
  {
    title: "Operational",
    description:
      "A connection is deployed and monitored in a named market, with evidence on file.",
  },
];

export const GovernanceAndJourneySection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f8f7ff] via-[#f4f1ff] to-[#ece7fe] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: 10 / DATA GOVERNANCE */}
          <div className="lg:col-span-6">
            <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-2">
              10 / DATA GOVERNANCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
              Deny by default
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-7">
              Purpose, market, organisation, role and data type are independent checks.
            </p>

            <div className="space-y-2.5">
              {governanceRows.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/70 px-5 py-3.5 shadow-xs grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-3 items-center"
                >
                  <div className="sm:col-span-4 text-xs font-bold text-[#0f172a]">
                    {row.label}
                  </div>
                  <div className="sm:col-span-8 text-xs text-slate-600 leading-relaxed">
                    {row.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 11 / PROPOSED EVIDENCE JOURNEY + 12 / PLAIN-LANGUAGE TERMS */}
          <div className="lg:col-span-6">
            {/* Block 11 */}
            <div className="mb-8">
              <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-2">
                11 / PROPOSED EVIDENCE JOURNEY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
                Explanatory states, not an application
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5">
                How a technical relationship would be evaluated.
              </p>

              {/* Stage Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {journeyStages.map((stage, idx) => (
                  <span
                    key={stage}
                    className="bg-white border border-slate-200/80 rounded-full px-3.5 py-1.5 text-xs font-bold text-[#0f172a] shadow-xs inline-flex items-center gap-1.5"
                  >
                    <span>{stage}</span>
                    {idx < journeyStages.length - 1 && (
                      <span className="text-[#6366f1]" aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {/* Closed Intake Notice */}
              <div className="bg-white rounded-xl border border-slate-200/80 border-l-4 border-l-[#6366f1] p-4 shadow-xs flex items-start gap-3">
                <span className="w-4 h-4 rounded-full border border-slate-300 text-slate-500 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  i
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Partner intake is currently closed. No form, credential or sandbox is offered from this page.
                </p>
              </div>
            </div>

            {/* Block 12 */}
            <div>
              <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-4">
                12 / PLAIN-LANGUAGE TERMS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {plainTerms.map((term, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/70 p-4 sm:p-5 shadow-xs"
                  >
                    <h3 className="font-bold text-sm text-[#0f172a] mb-1.5">
                      {term.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {term.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
