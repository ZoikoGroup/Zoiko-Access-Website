import React from "react";

const renewalRules = [
  {
    bold: "Retest changes",
    rest: "before any new version is released.",
  },
  {
    bold: "Security incidents",
    rest: "trigger review and can pause access.",
  },
  {
    bold: "Revocations",
    rest: "take effect at once and are recorded.",
  },
  {
    bold: "Renewal",
    rest: "happens on a set schedule with fresh evidence.",
  },
];

export const LaunchRenewalOrbit: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Orbital Diagram */}
          <div className="lg:col-span-5 flex justify-center items-center py-6">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
              {/* Dashed Orbital Track */}
              <div
                className="absolute inset-6 rounded-full border border-dashed border-indigo-200 pointer-events-none"
                aria-hidden="true"
              />

              {/* Central Gradient Sphere */}
              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#0f173d] via-[#312e81] to-[#7c3aed] text-white flex items-center justify-center text-center p-3 shadow-2xl">
                <span className="text-[11px] sm:text-xs font-bold leading-snug">
                  Per version, market &amp; scope
                </span>
              </div>

              {/* 5 Orbiting White Badges */}
              {/* Top (12 o'clock) */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <span className="bg-white border border-slate-200/80 shadow-md rounded-xl px-3.5 py-2 text-[11px] sm:text-xs font-bold text-[#0f172a] whitespace-nowrap">
                  Partner record
                </span>
              </div>

              {/* Top Right (~2:30) */}
              <div className="absolute top-[30%] right-0 translate-x-2 -translate-y-1/2 z-20">
                <span className="bg-white border border-slate-200/80 shadow-md rounded-xl px-3.5 py-2 text-[11px] sm:text-xs font-bold text-[#0f172a] whitespace-nowrap">
                  Retest changes
                </span>
              </div>

              {/* Bottom Right (~4:30) */}
              <div className="absolute bottom-[12%] right-2 translate-y-1/2 z-20">
                <span className="bg-white border border-slate-200/80 shadow-md rounded-xl px-3.5 py-2 text-[11px] sm:text-xs font-bold text-[#0f172a] whitespace-nowrap">
                  Security incidents
                </span>
              </div>

              {/* Bottom Left (~7:30) */}
              <div className="absolute bottom-[12%] left-2 translate-y-1/2 z-20">
                <span className="bg-white border border-slate-200/80 shadow-md rounded-xl px-3.5 py-2 text-[11px] sm:text-xs font-bold text-[#0f172a] whitespace-nowrap">
                  Revocations
                </span>
              </div>

              {/* Top Left (~9:30) */}
              <div className="absolute top-[30%] left-0 -translate-x-2 -translate-y-1/2 z-20">
                <span className="bg-white border border-slate-200/80 shadow-md rounded-xl px-3.5 py-2 text-[11px] sm:text-xs font-bold text-[#0f172a] whitespace-nowrap">
                  Renewal
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              08 · Launch &amp; renewal
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
              Approval is{" "}
              <span className="bg-[#ede9fe] px-1.5 py-0.5 rounded-md">
                not permanent
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              Each partner record is kept per version, market and scope.
            </p>

            {/* 4 Rule Rows */}
            <div className="space-y-3">
              {renewalRules.map((rule, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 px-5 py-3.5 shadow-xs text-xs sm:text-sm text-slate-600"
                >
                  <strong className="font-bold text-[#0f172a]">
                    {rule.bold}
                  </strong>{" "}
                  {rule.rest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
