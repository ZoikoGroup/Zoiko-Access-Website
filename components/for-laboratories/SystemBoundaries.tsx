import React from "react";

export const SystemBoundaries: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eee8fc] via-[#f5f0ff] to-[#e4d9fb] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              System boundaries
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            Independent systems, no universal record store.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Records stay federated. The laboratory LIS and the receiving provider&apos;s EHR each remain the authority for their own data.
          </p>
        </div>

        {/* 3 Federated System Cards with Connectors */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          {/* Card 1: Ordering system */}
          <div className="flex-1 bg-white rounded-2xl border border-white/90 p-6 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">
              Ordering system
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Issues the order. Holds the order record.
            </p>
          </div>

          {/* Connector 1 */}
          <div className="flex justify-center items-center py-1 md:py-0 shrink-0">
            <span className="text-xs font-semibold text-[#6d5ae6] px-3 py-1 bg-purple-100/60 rounded-full md:bg-transparent md:p-0">
              approved integration
            </span>
          </div>

          {/* Card 2: Laboratory LIS */}
          <div className="flex-1 bg-white rounded-2xl border border-white/90 p-6 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">
              Laboratory LIS
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Holds specimen, test and result records.
            </p>
          </div>

          {/* Connector 2 */}
          <div className="flex justify-center items-center py-1 md:py-0 shrink-0">
            <span className="text-xs font-semibold text-[#6d5ae6] px-3 py-1 bg-purple-100/60 rounded-full md:bg-transparent md:p-0">
              approved integration
            </span>
          </div>

          {/* Card 3: Receiving provider EHR */}
          <div className="flex-1 bg-white rounded-2xl border border-white/90 p-6 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5">
              Receiving provider EHR
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Holds review and care records.
            </p>
          </div>
        </div>

        {/* Footnote Bar */}
        <div className="mt-6 bg-white/70 backdrop-blur-sm border border-purple-100/80 rounded-xl p-4">
          <p className="text-xs text-slate-600 leading-relaxed">
            Interoperability standards are assessment topics only. No live certification or universal support is claimed, and each integration must be verified.
          </p>
        </div>
      </div>
    </section>
  );
};
