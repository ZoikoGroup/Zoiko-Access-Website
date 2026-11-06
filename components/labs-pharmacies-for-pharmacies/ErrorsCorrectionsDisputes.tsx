import React from "react";

interface SituationCard {
  title: string;
  description: string;
  action: string;
  isSpecial?: boolean;
}

const situations: SituationCard[] = [
  {
    title: "Rejected prescription",
    description: "The pharmacy can't accept it.",
    action: "→ Prescriber and patient told",
  },
  {
    title: "Invalid authorization",
    description: "Permission doesn't cover the request.",
    action: "→ Stopped, not sent",
  },
  {
    title: "Unavailable medicine",
    description: "The pharmacy can't supply it.",
    action: "→ Pharmacy advises next steps",
  },
  {
    title: "Outdated listing",
    description: "Published information is stale.",
    action: "→ Marked or removed",
  },
  {
    title: "Duplicate",
    description: "Same prescription sent twice.",
    action: "→ Pharmacy handles once",
  },
  {
    title: "Outage",
    description: "A system is unavailable.",
    action: "→ Shown as unavailable",
  },
  {
    title: "Disputed status",
    description: "Parties disagree on what happened.",
    action: "→ Source record decides",
  },
  {
    title: "Need help?",
    description: "Contact the pharmacy or prescriber directly.",
    action: "→ They own the record",
    isSpecial: true,
  },
];

export const ErrorsCorrectionsDisputes: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#fcfbff] to-[#f9f8fe] py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              ERRORS, CORRECTIONS &amp; DISPUTES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
            The source resolves it.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Seven situations, each resolved by the organization that owns the information, plus where to get help.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {situations.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border ${
                item.isSpecial
                  ? "border-emerald-300/80 border-t-2"
                  : idx % 2 === 0
                  ? "border-purple-200/80 border-t-2"
                  : "border-blue-200/80 border-t-2"
              }`}
            >
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div
                className={`text-xs font-semibold ${
                  item.isSpecial ? "text-emerald-600" : "text-[#4338ca]"
                }`}
              >
                {item.action}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
