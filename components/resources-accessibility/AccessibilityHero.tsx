"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type TextScale = "A" | "A+" | "A++";

export const AccessibilityHero: React.FC = () => {
  const [textScale, setTextScale] = useState<TextScale>("A");
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    if (textScale === "A") main.style.fontSize = "";
    if (textScale === "A+") main.style.fontSize = "112%";
    if (textScale === "A++") main.style.fontSize = "125%";

    main.classList.toggle("contrast-125", highContrast);
    main.classList.toggle("motion-reduce", reduceMotion);

    return () => {
      main.style.fontSize = "";
      main.classList.remove("contrast-125", "motion-reduce");
    };
  }, [textScale, highContrast, reduceMotion]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0b103b] via-[#13195c] to-[#581c87] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
      {/* Ambient Lighting */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[460px] w-[460px] rounded-full bg-purple-500/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-blue-600/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] font-bold tracking-wider uppercase text-purple-200/80 mb-3 block">
              RESOURCES / ACCESSIBILITY
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] mb-5">
              Accessibility at
              <br />
              <span className="bg-gradient-to-r from-[#8b7cff] to-[#93c5fd] bg-clip-text text-transparent">
                Zoiko Access
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl mb-4">
              We are designing Zoiko Access so people can understand information and navigate supported experiences using accessible devices, methods and formats.
            </p>

            <p className="text-xs text-purple-200/80 leading-relaxed max-w-xl mb-7">
              Accessibility is part of design, content and service governance. Available assistance and alternatives depend on the verified service and region.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#how-to-use"
                className="bg-[#6d4aff] hover:bg-[#5a36ee] text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl inline-flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Explore accessibility options</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/help-center"
                className="bg-white hover:bg-slate-100 text-[#0f172a] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all"
              >
                Find answers in the Help Center
              </Link>
            </div>
          </div>

          {/* Right Column: Collage + Interactive "Adjust this page" Widget */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] min-h-[340px] sm:min-h-[380px] flex items-center justify-center">
              {/* Top-Right Large Circular Image (ara1.jpg) with Dashed Ring */}
              <div className="sm:absolute sm:top-0 sm:right-0 rounded-full border border-dashed border-purple-300/40 p-2.5">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-2 border-white/25 shadow-2xl bg-[#0d1438]">
                  <Image
                    src="/resources-accessibility/ara1.jpg"
                    alt="Inclusive team collaborating at meeting table"
                    fill
                    priority
                    sizes="(max-width: 640px) 192px, 240px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Middle-Left Small Circular Image (ara2.jpg) */}
              <div className="hidden sm:block absolute top-14 left-4 w-32 h-32 rounded-full overflow-hidden border-4 border-white/25 shadow-xl bg-[#0d1438] z-10">
                <Image
                  src="/resources-accessibility/ara2.jpg"
                  alt="Hands reaching toward one another"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>

              {/* Bottom-Right Rounded-Square Image (ara3.jpg) */}
              <div className="hidden sm:block absolute bottom-2 right-12 w-28 h-28 rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl bg-[#0d1438] z-10">
                <Image
                  src="/resources-accessibility/ara3.jpg"
                  alt="Engineers working in data center hallway"
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>

              {/* Interactive White Card: "Adjust this page" */}
              <div className="relative sm:absolute sm:bottom-2 sm:left-0 bg-white text-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 w-full max-w-[245px] z-20 mt-4 sm:mt-0">
                <h2 className="font-bold text-xs text-[#0f172a] mb-0.5">
                  Adjust this page
                </h2>
                <p className="text-[10px] text-slate-400 mb-3">
                  Try it now. Settings apply to this page only.
                </p>

                {/* Font Size Buttons */}
                <div className="grid grid-cols-3 gap-1.5 mb-2">
                  {(["A", "A+", "A++"] as TextScale[]).map((scale) => {
                    const active = textScale === scale;
                    return (
                      <button
                        key={scale}
                        type="button"
                        onClick={() => setTextScale(scale)}
                        aria-pressed={active}
                        className={`py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          active
                            ? "bg-[#0f1742] text-white shadow-xs"
                            : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {scale}
                      </button>
                    );
                  })}
                </div>

                {/* Contrast & Motion Toggles */}
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setHighContrast((v) => !v)}
                    aria-pressed={highContrast}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                      highContrast
                        ? "bg-[#0f1742] text-white"
                        : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    High contrast
                  </button>
                  <button
                    type="button"
                    onClick={() => setReduceMotion((v) => !v)}
                    aria-pressed={reduceMotion}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                      reduceMotion
                        ? "bg-[#0f1742] text-white"
                        : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Reduce motion
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
