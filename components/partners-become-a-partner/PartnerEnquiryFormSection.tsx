import React from "react";
import Image from "next/image";
import Link from "next/link";

const expectedFields = [
  "Name",
  "Work email",
  "Organization",
  "Organization type",
  "Partnership intent",
  "Country, if required",
  "A short description (optional)",
];

export const PartnerEnquiryFormSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              PARTNER ENQUIRY FORM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
            The form opens only when intake is ready.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            It appears once a secure backend, lawful basis, spam protection, routing and a staffed inbox are all verified.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Card: When open, it would ask for */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-5">
                When open, it would ask for
              </h3>
              <ol className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                {expectedFields.map((field, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-medium text-slate-400 shrink-0">
                      {idx + 1}.
                    </span>
                    <span>{field}</span>
                  </li>
                ))}
              </ol>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-6 pt-4 border-t border-slate-100">
              Nothing more. See what it would never ask for below.
            </p>
          </div>

          {/* Right Card: Image with Floating Form Unavailable Overlay */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/70 shadow-sm relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/partners-become-a-partner/bap6.png"
                alt="Students using microscopes in science laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
                priority
              />

              {/* Floating Dark Card Overlaid at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-8 sm:bottom-6 sm:right-auto sm:max-w-md bg-[#0f183d]/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-white border border-white/10 shadow-2xl z-20">
                <h4 className="font-bold text-sm sm:text-base text-white mb-1.5">
                  Form unavailable
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Partner intake is not open yet, so no form is shown and no details are collected.
                </p>
                <Link
                  href="#guidance"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white hover:text-indigo-200 underline underline-offset-4 transition-colors"
                >
                  <span>Read partnership guidance</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
