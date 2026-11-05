import React from "react";
import Image from "next/image";

const checklistItems = [
  "An authorized partner organization",
  "An approved scope and purpose",
  "Agreed terms for test data (synthetic only)",
];

export const SandboxGatedAccess: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#fcfbfe] to-[#f8f5fe] py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative, Disabled Actions & Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                SANDBOX &amp; ACCESS ELIGIBILITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
              Sandbox access is gated.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              No sandbox exists yet, so these controls are switched off.
            </p>

            {/* Disabled Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <button
                type="button"
                disabled
                className="px-5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-400 font-semibold text-xs sm:text-sm cursor-not-allowed shadow-2xs"
              >
                Create key
              </button>
              <button
                type="button"
                disabled
                className="px-5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-400 font-semibold text-xs sm:text-sm cursor-not-allowed shadow-2xs"
              >
                Open sandbox
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mb-6">
              Disabled because no sandbox service is running. They will work only once one is released and your organization is authorized.
            </p>

            {/* Checklist */}
            <div className="space-y-3">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="w-4 h-4 rounded border border-slate-300 bg-white flex items-center justify-center shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Loft Office Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-slate-100">
              <Image
                src="/partners-developer-documentation/pdd12.jpg"
                alt="Colleagues in an open modern brick loft workspace meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
