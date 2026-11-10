import React from "react";

interface StatusCardItem {
  symbol: string;
  label: string;
  badgeStyle: string;
  description: string;
  footer: string;
}

const statusCards: StatusCardItem[] = [
  {
    symbol: "📄",
    label: "Submitted",
    badgeStyle: "bg-white text-[#0f172a]",
    description: "Your information was sent.",
    footer: "Not a review or approval",
  },
  {
    symbol: "✓",
    label: "Acknowledged",
    badgeStyle: "bg-white text-[#0f172a]",
    description: "A named team received it.",
    footer: "Reviewer: Partnerships",
  },
  {
    symbol: "◔",
    label: "Under review",
    badgeStyle: "bg-amber-100 text-amber-800",
    description: "Evidence is being assessed.",
    footer: "Reviewer: assigned owner",
  },
  {
    symbol: "?",
    label: "Request for evidence",
    badgeStyle: "bg-amber-100 text-amber-800",
    description: "More evidence is needed.",
    footer: "Reviewer: assigned owner",
  },
  {
    symbol: "✕",
    label: "Declined",
    badgeStyle: "bg-rose-100 text-rose-700",
    description: "Not progressing, with a reason.",
    footer: "Decision: accountable owner",
  },
  {
    symbol: "▶",
    label: "Approved for pilot",
    badgeStyle: "bg-emerald-100 text-emerald-700",
    description: "A bounded, monitored test only.",
    footer: "Decision: sponsor + owners",
  },
  {
    symbol: "●",
    label: "Approved for specific release",
    badgeStyle: "bg-emerald-100 text-emerald-700",
    description: "One version, market and scope.",
    footer: "Decision: release board",
  },
  {
    symbol: "⏸",
    label: "Suspended",
    badgeStyle: "bg-rose-100 text-rose-700",
    description: "Paused or withdrawn.",
    footer: "Decision: Security / Clinical Safety",
  },
];

export const DecisionEscalationStatuses: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b103b] via-[#1a1868] to-[#581c87] text-white py-16 md:py-20 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block bg-white/10 border border-white/15 text-purple-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            07 · Decision &amp; escalation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
            Eight statuses, never confused
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed">
            Each status names the accountable reviewer. Statuses use words and symbols, never colour alone.
          </p>
        </div>

        {/* 8 Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-5 backdrop-blur-md transition-colors flex flex-col justify-between min-h-[128px]"
            >
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-3 shadow-xs ${item.badgeStyle}`}
                >
                  <span aria-hidden="true">{item.symbol}</span>
                  <span>{item.label}</span>
                </span>
                <p className="text-xs text-white font-medium leading-relaxed mb-2">
                  {item.description}
                </p>
              </div>
              <span className="text-[10px] text-purple-200/75 font-medium">
                {item.footer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
