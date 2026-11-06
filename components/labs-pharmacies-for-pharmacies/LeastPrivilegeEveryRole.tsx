import React from "react";

interface RolePrivilege {
  role: string;
  description: string;
  progressPercent: number;
  leftLabel: string;
  rightLabel: string;
}

const rolePrivileges: RolePrivilege[] = [
  {
    role: "Patient",
    description: "Their own information and pathway status.",
    progressPercent: 40,
    leftLabel: "Own record only",
    rightLabel: "scoped",
  },
  {
    role: "Prescriber",
    description: "Prescriptions they issued and their status.",
    progressPercent: 55,
    leftLabel: "Issued items",
    rightLabel: "scoped",
  },
  {
    role: "Pharmacy",
    description: "Prescriptions routed to that pharmacy.",
    progressPercent: 48,
    leftLabel: "Received items",
    rightLabel: "scoped",
  },
  {
    role: "Verified caregiver",
    description: "Only what the person has delegated.",
    progressPercent: 28,
    leftLabel: "Delegated only",
    rightLabel: "revocable",
  },
  {
    role: "Payer",
    description: "Only coverage information where permitted.",
    progressPercent: 22,
    leftLabel: "Coverage only",
    rightLabel: "scoped",
  },
  {
    role: "Coordination platform",
    description: "Handoff events, not clinical content decisions.",
    progressPercent: 18,
    leftLabel: "Events only",
    rightLabel: "audited",
  },
];

const policyTags = [
  "Delegation is revocable",
  "Rules vary by jurisdiction",
  "Rights rechecked on every access",
];

export const LeastPrivilegeEveryRole: React.FC = () => {
  return (
    <section className="w-full bg-[#fbfbff] py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title on Left and Note on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                AUTHORIZED ROLES &amp; PROXIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Least privilege for every role.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
            Illustrative relative access. Each role sees only what its job needs.
          </p>
        </div>

        {/* 6 Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {rolePrivileges.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-base text-[#0f172a] mb-1">
                  {item.role}
                </h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Horizontal progress/access bar */}
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full transition-all duration-500"
                    style={{ width: `${item.progressPercent}%` }}
                  />
                </div>

                {/* Sub labels */}
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>{item.leftLabel}</span>
                  <span className="font-medium text-slate-500">{item.rightLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Policy Tags */}
        <div className="flex flex-wrap items-center gap-3">
          {policyTags.map((tag, idx) => (
            <div
              key={idx}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs text-slate-600 shadow-sm font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
