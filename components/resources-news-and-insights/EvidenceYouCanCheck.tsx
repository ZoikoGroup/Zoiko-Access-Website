import React from "react";
import Image from "next/image";

const claimsRows = [
  { claim: "[claim]", owner: "[owner]", date: "[date]" },
  { claim: "[claim]", owner: "[owner]", date: "[date]" },
];

export const EvidenceYouCanCheck: React.FC = () => {
  return (
    <section
      id="article-layout"
      className="w-full bg-gradient-to-br from-[#faf8ff] via-[#f4f1ff] to-[#ebe5ff] py-16 md:py-20 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              INSIDE EVERY ARTICLE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Evidence you can <span className="text-[#7c5cff]">check</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Each article carries its summary, owner, scope, claim sources and correction history.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Article Specimen Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden">
            <div className="relative w-full aspect-[16/9] bg-slate-100">
              <Image
                src="/resources-news-and-insights/rnai13.jpg"
                alt="Person reading a newspaper outdoors"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-7">
              <div className="inline-flex items-center gap-1.5 mb-2">
                <span className="w-3 h-[2px] bg-[#6366f1]" />
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#6366f1]">
                  EXPLAINER
                </span>
              </div>

              <h3 className="font-extrabold text-lg sm:text-xl text-[#0f172a] mb-1.5">
                [Clear, specific headline]
              </h3>
              <p className="text-[11px] text-slate-400 mb-4">
                By [editorial owner] · Published [date] · Updated [date] · Scope: [region]
              </p>

              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5 text-xs text-slate-600 mb-4 leading-relaxed">
                <strong className="font-bold text-[#0f172a]">Summary:</strong> a
                40–60 word answer-first summary of the article.
              </div>

              {/* Skeleton Lines */}
              <div className="space-y-2" aria-hidden="true">
                <div className="h-2.5 bg-slate-100 rounded-full w-full" />
                <div className="h-2.5 bg-slate-100 rounded-full w-5/6" />
                <div className="h-2.5 bg-slate-100 rounded-full w-4/6" />
              </div>
            </div>
          </div>

          {/* Right Column: Claims Ledger & Corrections Timeline */}
          <div className="lg:col-span-6">
            {/* Dark Navy Claims Ledger Card */}
            <div className="bg-[#0d1642] text-white rounded-2xl p-6 shadow-xl mb-7">
              <h3 className="font-bold text-sm text-white mb-4">
                Claims ledger
              </h3>

              <div className="grid grid-cols-12 gap-2 text-[10px] font-bold uppercase tracking-wider text-purple-200/75 pb-2 border-b border-white/10">
                <div className="col-span-5">Claim</div>
                <div className="col-span-4">Source owner</div>
                <div className="col-span-3 text-right">Source date</div>
              </div>

              <div className="divide-y divide-white/10 text-xs text-slate-300">
                {claimsRows.map((row, idx) => (
                  <div key={idx} className="py-3 grid grid-cols-12 gap-2">
                    <div className="col-span-5">{row.claim}</div>
                    <div className="col-span-4">{row.owner}</div>
                    <div className="col-span-3 text-right">{row.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corrections & Updates Timeline */}
            <div>
              <h3 className="font-bold text-sm text-[#0f172a] mb-4">
                Corrections &amp; updates
              </h3>

              <div className="relative border-l-2 border-[#6366f1]/40 pl-5 ml-2 space-y-5">
                <div className="relative">
                  <span
                    className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#6366f1]"
                    aria-hidden="true"
                  />
                  <span className="block font-bold text-xs text-[#0f172a]">
                    Rev [id] · [date]
                  </span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    [What changed, and the editor responsible]
                  </span>
                </div>

                <div className="relative">
                  <span
                    className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#6366f1]"
                    aria-hidden="true"
                  />
                  <span className="block font-bold text-xs text-[#0f172a]">
                    Original · [date]
                  </span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    First published
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
