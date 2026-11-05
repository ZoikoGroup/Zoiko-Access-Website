import React from "react";
import Image from "next/image";

interface Stage {
  number: string;
  title: string;
  description: string;
}

const stages: Stage[] = [
  {
    number: "01",
    title: "Detect",
    description: "A failure is recorded with time and context.",
  },
  {
    number: "02",
    title: "Retry",
    description: "Tried again within agreed limits, without duplicates.",
  },
  {
    number: "03",
    title: "Hold",
    description: "Unresolved items are held, never shown as success.",
  },
  {
    number: "04",
    title: "Escalate",
    description: "A named person takes over.",
  },
];

export const SafeFailureStages: React.FC = () => {
  return (
    <section className="w-full bg-[#fafbfc] py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              ERRORS, RETRIES &amp; SUPPORT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
            Safe failure, in four stages.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            General lifecycle concepts. No specific response codes or service levels are claimed.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#6366f1] mb-2 block">
                  {stage.number}
                </span>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Developer Support Navy Bar */}
        <div className="rounded-2xl bg-[#0f172a] text-white p-4.5 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-8 shadow-sm">
          <span className="text-xs sm:text-sm font-bold text-white shrink-0">
            Developer support
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-500" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            No support channel or response-time commitment is open yet. It will be linked here once staffed.
          </p>
        </div>

        {/* Feature Wide Image Container */}
        <div className="relative w-full aspect-[16/7] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
          <Image
            src="/partners-developer-documentation/pdd13.png"
            alt="Three wooden mannequins sitting thoughtfully on a box"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
