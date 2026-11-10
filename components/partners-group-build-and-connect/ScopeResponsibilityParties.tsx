import React from "react";

const partyCards = [
  {
    title: "Zoiko Access",
    description: "Coordinates permitted flow within the approved scope.",
    borderColor: "border-t-[#6366f1]",
  },
  {
    title: "Source system",
    description: "Independent; owns its records and changes.",
    borderColor: "border-t-[#3b82f6]",
  },
  {
    title: "Destination provider",
    description: "Decides to accept, review and act.",
    borderColor: "border-t-[#0ea5e9]",
  },
  {
    title: "Partner service",
    description: "Delivers its own service under contract.",
    borderColor: "border-t-[#1d4ed8]",
  },
];

export const ScopeResponsibilityParties: React.FC = () => {
  return (
    <section className="w-full bg-[#fbfaff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-2">
            09 / SCOPE &amp; RESPONSIBILITY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Four parties, four responsibilities
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Clinical decisions, source records and receiving acceptance remain with authorized healthcare institutions and professionals.
          </p>
        </div>

        {/* 4 Party Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {partyCards.map((party, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl border border-slate-200/80 border-t-2 ${party.borderColor} p-5 shadow-sm`}
            >
              <h3 className="font-bold text-sm text-[#0f172a] mb-1.5">
                {party.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {party.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Full-Width Status Card */}
        <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm">
          <h3 className="font-bold text-sm text-[#0f172a] mb-1">
            Market &amp; capability status
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Global architecture is not proof of regional availability. Current activation is shown only with evidence for each market, organisation, service, role and release.
          </p>
        </div>
      </div>
    </section>
  );
};
