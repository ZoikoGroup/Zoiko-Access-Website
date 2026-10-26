import React from "react";
import Image from "next/image";

const privacyChecklist = [
  "Minimized health information, with regional authorization",
  "Identity, role, delegation and retention rules",
  "Least privilege, purpose binding and audit",
  "No health information in URLs, logs, analytics or contact leads",
];

export const TrustPrivacyPermissions: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative & Checklist */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
              <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
                Trust, privacy and local permission
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              No patient details on a public page.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              This page offers no sign-in, result retrieval, order search or personal-data entry. Private exchange would need separately approved controls.
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5">
              {privacyChecklist.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6d5ae6] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: White 4x4 Townhouse Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200 bg-slate-100">
              <Image
                src="/for-laboratories/fl6.jpg"
                alt="White vintage vehicle parked outside contemporary wooden townhouse"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
