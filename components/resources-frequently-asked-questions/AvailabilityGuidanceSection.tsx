import React from "react";

const tiers = [
  {
    code: "P0",
    codeColor: "text-[#0f172a]",
    title: "Informational",
    description: "Reading and guidance are available everywhere.",
  },
  {
    code: "P1",
    codeColor: "text-[#0f172a]",
    title: "Approved discovery",
    description: "Discovery features only where approved.",
  },
  {
    code: "P2",
    codeColor: "text-[#0f172a]",
    title: "Authorized transaction",
    description: "Actions only where verified for your market and role.",
  },
  {
    code: "PX",
    codeColor: "text-rose-600",
    title: "Degraded / unavailable",
    description: "Affected actions removed; accurate information stays.",
  },
];

export const AvailabilityGuidanceSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b103b] via-[#1a1868] to-[#581c87] text-white py-16 md:py-20 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-purple-300/70" />
            <span className="text-purple-200/80 text-xs font-semibold tracking-wider uppercase">
              AVAILABILITY GUIDANCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
            Why an answer may differ where you are
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed">
            Availability is market × capability × provider × your role. Nothing is shown as live unless verified.
          </p>
        </div>

        {/* 4 Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.code}
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-5 backdrop-blur-md transition-colors flex flex-col justify-between"
            >
              <div>
                <span
                  className={`inline-block bg-white text-[10px] font-extrabold px-2 py-0.5 rounded mb-3 shadow-xs ${tier.codeColor}`}
                >
                  {tier.code}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-white mb-1.5">
                  {tier.title}
                </h3>
                <p className="text-xs text-purple-100/80 leading-relaxed">
                  {tier.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
