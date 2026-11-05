import React from "react";

const nonCommitments = [
  "Response-time promise",
  "Onboarding stage",
  "Contract commitment",
];

export const ReceivedNotApprovedSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              AFTER YOU SUBMIT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
            Received is not approved.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Once intake is open, this is what a confirmation would and would not mean.
          </p>
        </div>

        {/* What it means vs What it does not mean */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          {/* Card: What it means */}
          <div className="w-full md:flex-1 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm">
            <div className="text-[#6366f1] font-bold text-xs uppercase tracking-wider mb-2">
              WHAT IT MEANS
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#0f172a] mb-1.5">
              Request received for review
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Your enquiry reached the partnerships team.
            </p>
          </div>

          {/* Not Equal Symbol */}
          <div className="text-[#6366f1] font-extrabold text-3xl sm:text-4xl px-2 shrink-0 select-none">
            ≠
          </div>

          {/* Card: What it does not mean */}
          <div className="w-full md:flex-1 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm">
            <div className="text-[#6366f1] font-bold text-xs uppercase tracking-wider mb-2">
              WHAT IT DOES NOT MEAN
            </div>
            <h3 className="font-bold text-base sm:text-lg text-[#0f172a] mb-1.5">
              Approval or acceptance
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Submitting does not start onboarding or create a contract.
            </p>
          </div>
        </div>

        {/* Struck-through pills */}
        <div className="flex flex-wrap items-center gap-3">
          {nonCommitments.map((pill, idx) => (
            <div
              key={idx}
              className="rounded-full border border-slate-200 bg-slate-50/70 px-4 py-1.5 text-xs text-slate-400 line-through"
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
