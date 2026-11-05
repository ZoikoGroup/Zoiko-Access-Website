import React from "react";
import Link from "next/link";

const whyRequested = [
  "To route your enquiry to the right team",
  "To check basic partnership fit",
  "To reply to you about this enquiry only",
];

const neverRequested = [
  "Clinical information",
  "Patient data of any kind",
  "Financial secrets or credentials",
  "File attachments",
];

export const WhyWeAskAndNeverAsk: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              YOUR INFORMATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
            Why we would ask, and what we never ask.
          </h2>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left Card: Why details would be requested */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base sm:text-lg text-[#0f172a] mb-5">
                Why details would be requested
              </h3>
              <ul className="space-y-3.5 mb-8">
                {whyRequested.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-[#6366f1] font-bold text-sm shrink-0">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-dashed border-slate-200">
              <p className="text-xs text-slate-500 leading-relaxed">
                Marketing consent would be a separate, optional choice. See our{" "}
                <Link
                  href="/privacy-permissions"
                  className="text-[#6366f1] underline underline-offset-2 hover:text-[#4f46e5]"
                >
                  Privacy Notice
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Right Card: Never requested by default */}
          <div className="bg-[#11133d] rounded-3xl p-6 sm:p-8 text-white shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white mb-5">
                Never requested by default
              </h3>
              <ul className="space-y-3.5">
                {neverRequested.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-purple-300 font-semibold text-xs shrink-0">
                      ✕
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
