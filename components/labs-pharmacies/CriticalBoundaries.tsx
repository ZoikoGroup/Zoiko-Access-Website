import React from "react";

interface BoundaryRow {
  leftTitle: string;
  leftDesc: string;
  rightTitle: string;
  rightDesc: string;
}

const boundaryRows: BoundaryRow[] = [
  {
    leftTitle: "Result sent",
    leftDesc: "A result was transmitted to an authorized recipient.",
    rightTitle: "Result reviewed",
    rightDesc: "A responsible professional has confirmed review.",
  },
  {
    leftTitle: "Order received",
    leftDesc: "A referral or order arrived at an organization.",
    rightTitle: "Order accepted",
    rightDesc: "The responsible organization has accepted it.",
  },
  {
    leftTitle: "Prescription routed",
    leftDesc: "A request was passed to a pharmacy.",
    rightTitle: "Medicine dispensed",
    rightDesc: "A licensed pharmacy validated and supplied it.",
  },
];

export const CriticalBoundaries: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eee8fc] via-[#f5f0ff] to-[#e4d9fb] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              Critical boundaries
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Moving information is not the same as acting on it.
          </h2>
        </div>

        {/* 3 Boundary Comparison Cards */}
        <div className="space-y-4 sm:space-y-5">
          {boundaryRows.map((row, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-white/80 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Left Side */}
                <div className="md:col-span-5">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                    {row.leftTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {row.leftDesc}
                  </p>
                </div>

                {/* Unequal Symbol in Middle */}
                <div className="md:col-span-2 flex justify-center py-2 md:py-0">
                  <span
                    className="text-2xl sm:text-3xl font-bold text-[#8b5cf6]"
                    aria-label="is not equal to"
                  >
                    &ne;
                  </span>
                </div>

                {/* Right Side */}
                <div className="md:col-span-5">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1">
                    {row.rightTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {row.rightDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
