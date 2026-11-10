import React from "react";
import Image from "next/image";
import Link from "next/link";

const onboardingSteps = [
  { num: 1, label: "Read the principles", active: true },
  { num: 2, label: "Fit review", active: false },
  { num: 3, label: "Scope & diligence", active: false },
  { num: 4, label: "Authorization decision", active: false },
  { num: 5, label: "Pilot & release", active: false },
];

export const PartnerOnboardingHero: React.FC = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#faf9ff] via-[#f4f1ff] to-[#e4dcff] pt-24 lg:pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[520px] lg:min-h-[560px]">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 px-4 sm:px-6 lg:px-8 py-12 lg:py-24 flex flex-col justify-center relative z-10">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-white/95 border border-purple-200/80 text-[#4f46e5] text-[10px] sm:text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6d4aff]" />
                  PARTNERS &amp; DEVELOPERS / PARTNER ONBOARDING
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] text-[#0f172a] mb-5">
                Partner
                <br />
                <span className="bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] bg-clip-text text-transparent">
                  Onboarding
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mb-8">
                The steps and prerequisites for partner assessment, explained without implying admission, certification, technical access or approved contracting.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/partners-certification-framework"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#6d4aff] hover:bg-[#5a36ee] text-white font-medium text-xs sm:text-sm transition-all shadow-md"
                >
                  <span>Explore Certification framework</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/partners-developer-documentation"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#0f172a] border border-slate-200 font-medium text-xs sm:text-sm transition-all shadow-xs"
                >
                  Review Developer documentation
                </Link>
              </div>
            </div>

            {/* Right Column: Full-bleed Photo + Floating Onboarding Path Card */}
            <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[440px] lg:min-h-full">
              <Image
                src="/partners-group-partner-onboarding/pgpo1.png"
                alt="Partners shaking hands across a meeting table"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Floating Onboarding Path Card */}
              <div className="relative lg:absolute bottom-4 lg:bottom-6 left-4 right-4 sm:left-6 sm:right-auto lg:-left-10 z-20 mx-auto sm:mx-0 max-w-[290px] bg-white rounded-2xl p-5 shadow-2xl border border-slate-100 mt-48 lg:mt-0 mb-6 lg:mb-0">
                <h2 className="font-bold text-sm text-[#0f172a] mb-0.5">
                  Onboarding path
                </h2>
                <p className="text-[11px] text-slate-400 leading-snug mb-4">
                  Example only. Nothing on this page starts an application.
                </p>

                <div className="space-y-2.5">
                  {onboardingSteps.map((step) => (
                    <div key={step.num} className="flex items-center gap-2.5">
                      {step.active ? (
                        <span className="w-5 h-5 rounded-full bg-[#6d4aff] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                          ✓
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full border border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-semibold flex items-center justify-center shrink-0">
                          {step.num}
                        </span>
                      )}
                      <span
                        className={`text-xs ${
                          step.active
                            ? "font-bold text-[#0f172a]"
                            : "text-slate-500"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Qualification Purple Strip */}
      <div className="w-full bg-[#6d4aff] text-white py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5">
          <span className="bg-white text-[#4f46e5] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
            NOT LIVE
          </span>
          <p className="text-xs text-purple-50 leading-relaxed">
            <strong className="font-bold text-white">
              Capability qualification:
            </strong>{" "}
            These pages describe proposed or published integration principles. Technical access, partner intake and live connections depend on separate verification and authorization.
          </p>
        </div>
      </div>
    </>
  );
};
