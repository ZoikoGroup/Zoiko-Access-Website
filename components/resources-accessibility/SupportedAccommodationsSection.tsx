import React from "react";
import Image from "next/image";

const accommodations = [
  {
    title: "Keyboard-only navigation",
    description: "All primary navigation and actions",
  },
  {
    title: "Visible focus",
    description: "Clear focus outline on every control",
  },
  {
    title: "Reflow at 400% zoom",
    description: "No loss of content or function",
  },
  {
    title: "Text alternatives",
    description: "Meaningful images described",
  },
  {
    title: "Non-colour status",
    description: "Text and symbols, never colour alone",
  },
  {
    title: "Reduced motion",
    description: "Respects your device setting",
  },
  {
    title: "Plain language",
    description: "Short sentences, answer first",
  },
  {
    title: "Native disclosures",
    description: "Real buttons with expanded state",
  },
];

export const SupportedAccommodationsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Architectural Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <Image
                src="/resources-accessibility/ara8.png"
                alt="Architectural structure looking upward"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Goals & Status */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
                SUPPORTED ACCOMMODATIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
              What we build in,{" "}
              <span className="text-[#7c5cff]">and its status</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              We separate design goals from verified results. Nothing below is claimed as tested until it is.
            </p>

            {/* 8 Design Goal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {accommodations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-xs"
                >
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-[9px] font-bold px-2 py-0.5 rounded-full mb-1.5">
                    <span aria-hidden="true">◔</span> Design goal
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Legend */}
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <span className="text-amber-600 font-semibold">◔ Design goal</span>{" "}
              — designed, verification pending &nbsp;·&nbsp;{" "}
              <span className="text-emerald-600 font-semibold">● Verified</span>{" "}
              — tested, with date and configuration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
