import React from "react";
import Link from "next/link";

const barrierTags = [
  "Keyboard",
  "Screen reader",
  "Contrast",
  "Content",
  "Other",
];

const reportFields = [
  "The page or journey affected",
  "What happened, in your words",
  "Your device or assistive technology (optional)",
  "How you would like a reply (optional)",
];

const feedbackSteps = [
  {
    num: "1",
    title: "Receipt",
    description: "You would see a clear confirmation that your report was received.",
  },
  {
    num: "2",
    title: "Review",
    description: "An accessibility owner reviews the barrier and the affected journey.",
  },
  {
    num: "3",
    title: "Plan",
    description:
      "A fix or workaround is planned. We don't promise a response time we can't prove.",
  },
  {
    num: "4",
    title: "Update",
    description:
      "Known limitations are updated with the date and any workaround.",
  },
];

export const ReportBarrierSafelySection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              REPORT AN ACCESSIBILITY PROBLEM
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Tell us about a barrier,{" "}
            <span className="text-[#7c5cff]">safely</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            We will open reporting only when it has an owner and a tested way to respond.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left White Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm">
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200/80 text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Reporting not active yet
            </span>

            <h3 className="font-bold text-base text-[#0f172a] mb-1">
              What a report would ask
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              The minimum needed to find and fix the barrier:
            </p>

            {/* Barrier Category Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {barrierTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-600 px-3 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Numbered Fields */}
            <ol className="space-y-2 text-xs text-slate-600 mb-5">
              {reportFields.map((field, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-slate-400">{idx + 1}.</span>
                  <span>{field}</span>
                </li>
              ))}
            </ol>

            {/* Red Warning Banner */}
            <div className="bg-rose-50 border border-rose-200/70 rounded-xl px-4 py-2.5 text-xs font-medium text-rose-600 mb-5 flex items-center gap-2">
              <span aria-hidden="true">✕</span>
              <span>
                Never include medical or personal health details. Attachments are off by default.
              </span>
            </div>

            <Link
              href="/help-center"
              className="bg-[#6d4aff] hover:bg-[#5a36ee] text-white font-semibold text-xs px-5 py-2.5 rounded-xl inline-flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Use the Help Center meanwhile</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right Column: What happens after feedback */}
          <div className="lg:col-span-5">
            <h3 className="font-bold text-sm text-[#0f172a] mb-4">
              What happens after feedback
            </h3>

            <div className="space-y-3">
              {feedbackSteps.map((step) => (
                <div
                  key={step.num}
                  className="bg-[#0d1642] text-white rounded-xl p-4 shadow-sm flex items-start gap-3.5"
                >
                  <span className="w-6 h-6 rounded-md bg-white text-[#0d1642] text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white mb-0.5">
                      {step.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
