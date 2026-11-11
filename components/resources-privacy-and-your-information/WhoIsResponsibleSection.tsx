import React from "react";

const responsibleParties = [
  {
    code: "ZA",
    badgeColor: "bg-[#8b5cf6]",
    title: "Zoiko Access",
    description:
      "Its role depends on the service and agreement. It is not the controller for every healthcare activity.",
  },
  {
    code: "HP",
    badgeColor: "bg-[#3b82f6]",
    title: "Healthcare provider",
    description:
      "Owns clinical records it creates and decides clinical matters.",
  },
  {
    code: "SI",
    badgeColor: "bg-[#4f46e5]",
    title: "Sponsoring institution",
    description: "Decides the purposes of services it provides to its people.",
  },
  {
    code: "SP",
    badgeColor: "bg-[#6366f1]",
    title: "Service providers",
    description: "Process information only on documented instructions.",
  },
];

export const WhoIsResponsibleSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f4f5f9] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-10">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider mb-1">
            04
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Who is responsible
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            There is no one-size-fits-all controller. Responsibility depends on the service and the agreement behind it.
          </p>
        </div>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {responsibleParties.map((party) => (
            <div
              key={party.code}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs flex items-start gap-4"
            >
              <span
                className={`w-8 h-8 rounded-lg ${party.badgeColor} font-bold text-[11px] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs`}
              >
                {party.code}
              </span>
              <div>
                <h3 className="font-bold text-sm text-[#0f172a] mb-1">
                  {party.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {party.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
