import React from "react";

interface AudienceColumn {
  eyebrow: string;
  title: string;
  quote: string;
  body: string;
}

const audiences: AudienceColumn[] = [
  {
    eyebrow: "TECHNICAL",
    title: "Healthcare technology vendors - developers / architects",
    quote:
      "\"What would a permitted integration require? Are API, webhook, SDK or docs public and supported?\"",
    body: "Review technology and architecture information; view factual published material only.",
  },
  {
    eyebrow: "INSTITUTIONAL",
    title: "Institutional CIO / IT leads - partnership decision-makers",
    quote:
      "\"Can this connect to our systems in our market? How can we begin a legitimate evaluation?\"",
    body: "See availability qualification, security and source ownership; use informational guidance until intake is staffed.",
  },
  {
    eyebrow: "PRIVACY & COMPLIANCE",
    title: "Privacy and security reviewers",
    quote: "\"Who approves data access and monitors incidents?\"",
    body: "Inspect scope, control evidence and escalation routes.",
  },
  {
    eyebrow: "OPERATIONAL",
    title: "System integrators",
    quote: "\"Who authorizes the connection and owns exceptions?\"",
    body: "Review role boundaries and implementation responsibilities.",
  },
];

export const AudiencesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="block text-[#6366f1] font-semibold text-xs tracking-wider uppercase mb-2">
            01 / AUDIENCES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Who reads this, and what they need
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            No audience choice grants permissions or unlocks records.
          </p>
        </div>

        {/* 4-Column Divided Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {audiences.map((item, idx) => (
              <div key={idx} className="p-6 flex flex-col justify-between">
                <div>
                  <span className="block text-[10px] font-bold tracking-wider uppercase text-[#6366f1] mb-2">
                    {item.eyebrow}
                  </span>
                  <h3 className="font-bold text-sm text-[#0f172a] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs italic text-slate-500 mb-3 leading-relaxed">
                    {item.quote}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
