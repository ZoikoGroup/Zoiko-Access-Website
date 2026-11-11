import React from "react";

export const WhatThisPageCovers: React.FC = () => {
  return (
    <section
      id="what-this-page-covers"
      className="w-full bg-white py-16 md:py-20 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider mb-1">
            01
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            What this page covers
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            An educational explanation, kept separate from the legally approved notice.
          </p>
        </div>

        {/* Two Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Left Card */}
          <div className="bg-[#f8f9fe] border border-slate-200/80 rounded-2xl p-6">
            <span className="block text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-2">
              THIS PAGE
            </span>
            <h3 className="font-bold text-base text-[#0f172a] mb-1.5">
              Educational explanation
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Plain-language guidance about categories, roles and where to go. It does not create legal terms.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-[#0d1642] text-white rounded-2xl p-6 shadow-md">
            <span className="block text-[10px] font-bold tracking-wider uppercase text-purple-200/75 mb-2">
              LEGAL NOTICE
            </span>
            <h3 className="font-bold text-base text-white mb-1.5">
              Legally operative notice
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Published by its accountable legal owner for each region, with an effective date and version.
            </p>
          </div>
        </div>

        {/* Bottom Metadata Strip */}
        <div className="bg-amber-50/90 border border-amber-200/70 rounded-xl px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-medium text-amber-800">
          <span>
            Notice owner: [legal entity] · Effective date: [date] · Version: [x.x]
          </span>
          <span className="text-amber-700/80 font-semibold">
            From the privacy registry
          </span>
        </div>
      </div>
    </section>
  );
};
