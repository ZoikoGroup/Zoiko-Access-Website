import React from "react";

const processingPurposes = [
  {
    title: "Provide and secure the site",
    description: "Keep public pages working and protected.",
  },
  {
    title: "Answer your request",
    description: "Respond to something you asked for, where a route is live.",
  },
  {
    title: "Coordinate permitted steps",
    description: "Support healthcare navigation within an authorized service.",
  },
  {
    title: "Meet legal obligations",
    description: "Comply with the law that applies to each service.",
  },
];

export const WhyInfoProcessedSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider mb-1">
            03
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Why information may be processed
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Every purpose needs a legal basis, which is set out in the notice for your region.
          </p>
        </div>

        {/* 4 Purpose Rows */}
        <div className="space-y-3">
          {processingPurposes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200/80 px-5 sm:px-6 py-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <h3 className="font-bold text-sm text-[#0f172a] mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500">{item.description}</p>
              </div>
              <span className="bg-[#f1effd] text-[#6366f1] text-[10px] font-semibold px-3 py-1 rounded-full whitespace-nowrap w-fit">
                Legal basis set out in the applicable notice
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
