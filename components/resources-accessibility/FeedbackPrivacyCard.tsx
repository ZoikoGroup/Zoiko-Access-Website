import React from "react";
import Image from "next/image";

const feedbackRules = [
  {
    allowed: false,
    text: "No patient or medical details in general feedback",
  },
  {
    allowed: false,
    text: "No attachments or screenshots by default",
  },
  {
    allowed: true,
    text: "Only the page, the barrier and your device",
  },
  {
    allowed: true,
    text: "Anonymous, aggregate measurement only",
  },
];

export const FeedbackPrivacyCard: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b103b] via-[#1a1868] to-[#581c87] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Photo */}
          <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] lg:min-h-full bg-slate-100">
            <Image
              src="/resources-accessibility/ara14.jpg"
              alt="Person working on laptop and smartphone"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center text-slate-800">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
                PRIVACY, CONSENT &amp; SENSITIVE DATA
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6">
              Accessibility feedback never needs your health details
            </h2>

            <div className="space-y-3">
              {feedbackRules.map((rule, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {rule.allowed ? (
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 border border-rose-200 flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✕
                    </span>
                  )}
                  <span className="text-xs sm:text-sm text-slate-600">
                    {rule.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
