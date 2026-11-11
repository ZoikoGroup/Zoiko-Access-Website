import React from "react";

export const SafetySourcesTable: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              COUNTRY AND PUBLICATION TRANSPARENCY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Where our safety information comes from
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Every entry names its authority, jurisdiction and review date.
          </p>
        </div>

        {/* 4-Column Dark-Header Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-x-auto mb-4">
          <div className="min-w-[600px]">
            <div className="bg-[#0d1642] text-white px-6 py-3 grid grid-cols-12 gap-4 text-[11px] font-semibold">
              <div className="col-span-2">Country</div>
              <div className="col-span-4">Official source</div>
              <div className="col-span-3">Last reviewed</div>
              <div className="col-span-3 text-right">Limitations</div>
            </div>

            <div className="px-6 py-4 grid grid-cols-12 gap-4 text-xs text-slate-500">
              <div className="col-span-2">[country]</div>
              <div className="col-span-4">[official authority]</div>
              <div className="col-span-3">[date]</div>
              <div className="col-span-3 text-right">[coverage notes]</div>
            </div>
          </div>
        </div>

        {/* Bottom Correction Notice Strip */}
        <div className="bg-white rounded-2xl border border-slate-200/80 px-5 py-3.5 shadow-xs flex flex-col sm:flex-row sm:items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full shrink-0 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Correction route not active yet
          </span>
          <p className="text-xs text-slate-600 leading-relaxed">
            Spotted outdated safety information? A reporting route opens once it is staffed. It is never an emergency channel.
          </p>
        </div>
      </div>
    </section>
  );
};
