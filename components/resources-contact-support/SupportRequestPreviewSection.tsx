import React from "react";
import Link from "next/link";

const neverIncludeItems = [
  "Symptoms, diagnoses or test results",
  "Medical record numbers or documents",
  "Passwords or payment details",
];

const helpfulIncludeItems = [
  "The page or step where it happened",
  "What you expected and what you saw",
  "Your device and browser",
];

export const SupportRequestPreviewSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#faf8ff] via-[#f4f1ff] to-[#ebe5ff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              SUPPORT REQUEST
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            When requests open,{" "}
            <span className="text-[#7c5cff]">this is how it will work</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The form is shown disabled. It becomes active only with a staffed channel, secure handling and accurate confirmations.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Disabled Form Preview */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm">
            <h3 className="font-bold text-base text-[#0f172a] mb-5">
              Support request
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="support-name"
                  className="block text-[11px] font-semibold text-slate-600 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="support-name"
                  type="text"
                  disabled
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-400 w-full cursor-not-allowed"
                />
              </div>
              <div>
                <label
                  htmlFor="support-email"
                  className="block text-[11px] font-semibold text-slate-600 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="support-email"
                  type="email"
                  disabled
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-400 w-full cursor-not-allowed"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="support-issue"
                className="block text-[11px] font-semibold text-slate-600 mb-1.5"
              >
                Issue type
              </label>
              <input
                id="support-issue"
                type="text"
                value="Account & sign-in"
                disabled
                readOnly
                className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-400 w-full cursor-not-allowed"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="support-details"
                className="block text-[11px] font-semibold text-slate-600 mb-1.5"
              >
                What happened? (no health details)
              </label>
              <textarea
                id="support-details"
                rows={3}
                disabled
                className="bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-400 w-full cursor-not-allowed resize-none"
              />
            </div>

            <button
              type="button"
              disabled
              className="w-full bg-slate-200 text-slate-400 font-semibold text-xs py-3 rounded-xl cursor-not-allowed mb-3"
            >
              Submit a support request
            </button>

            <Link
              href="/help-center"
              className="bg-[#6d4aff] hover:bg-[#5a36ee] text-white font-semibold text-xs px-5 py-2.5 rounded-xl inline-flex items-center gap-2 shadow-sm transition-colors"
            >
              <span>Use the Help Center instead</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Right Column: 3 Guidance Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Never include */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] mb-3">
                Never include
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {neverIncludeItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-rose-500 font-bold text-xs">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Helpful to include */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] mb-3">
                Helpful to include
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {helpfulIncludeItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold text-xs">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attachments */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
              <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] mb-1.5">
                Attachments
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Off by default. When available, files are checked and scanned for sensitive information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
