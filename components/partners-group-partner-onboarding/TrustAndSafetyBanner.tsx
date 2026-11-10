import React from "react";
import Image from "next/image";

const safetyPoints = [
  "Not for emergencies. Contact local emergency services.",
  "An application is never an approval.",
  "A pilot never grants automatic access.",
  "No patient information in intake or analytics.",
];

export const TrustAndSafetyBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#fcfbff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200/70 grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white">
          {/* Left Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#f8f7ff] to-[#f0ebff] p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <span className="inline-block bg-white text-[#6366f1] border border-purple-200/60 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit shadow-xs">
              11 · Trust &amp; safety
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
              Designed is not available
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Clinical decisions, source records and receiving acceptance remain with authorized healthcare institutions and professionals.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700">
              {safetyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#6366f1] font-bold leading-snug">
                    •
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Clinician Portrait */}
          <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full bg-slate-100">
            <Image
              src="/partners-group-partner-onboarding/pgpo7.jpg"
              alt="Smiling clinician in white lab coat"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
