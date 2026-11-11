import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

export const PrivacyInfoHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0b103b] via-[#13195c] to-[#311b7a] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
      {/* Ambient Decorative Glows */}
      <div
        className="pointer-events-none absolute -top-28 right-0 h-[460px] w-[460px] rounded-full bg-purple-500/20 blur-[130px]"
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
              RESOURCES / PRIVACY
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold tracking-tight leading-[1.1] mb-5">
              Privacy and <span className="text-[#9d8cff]">Your</span>
              <br />
              <span className="text-[#9d8cff]">Information</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-xl mb-5">
              Understand how information may be handled in the Zoiko Access experience, where the applicable privacy notices live, and how to find verified privacy assistance.
            </p>

            {/* Left-bordered Note Box */}
            <div className="border-l-2 border-[#7c5cff] bg-white/5 pl-4 pr-4 py-3 rounded-r-xl text-xs text-slate-300 leading-relaxed max-w-xl mb-7">
              Privacy responsibilities depend on the service, organization, country, information type and applicable legal relationship. This page explains those boundaries and directs you to authoritative notices.
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#what-this-page-covers"
                className="bg-white hover:bg-slate-100 text-[#0f172a] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl inline-flex items-center gap-2 shadow-md transition-all"
              >
                <span>Read applicable privacy notice</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#information-categories"
                className="border border-white/25 bg-white/5 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
              >
                Explore privacy choices and rights
              </Link>
            </div>
          </div>

          {/* Right Column: Shield Padlock Visual + Floating Callouts */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative py-6">
            <div className="relative w-full max-w-[440px]">
              {/* Main Shield Image Container */}
              <div className="relative w-full aspect-square rounded-[40px] overflow-hidden shadow-2xl border border-white/15 bg-[#090d2c]">
                <Image
                  src="/resources-privacy-and-your-information/pyi1.jpg"
                  alt="Digital privacy security padlock shield"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-center"
                />
                {/* Center White Lock Badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xl flex items-center justify-center text-[#6d4aff]">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating Top-Left White Card: "This page is" */}
              <div className="relative sm:absolute sm:top-6 sm:-left-10 bg-white text-slate-800 rounded-2xl p-4 shadow-2xl border border-slate-100 max-w-[215px] mt-4 sm:mt-0 z-20">
                <h2 className="font-bold text-xs text-[#0f172a] mb-1.5">
                  This page is
                </h2>
                <ul className="space-y-1 text-[11px] text-slate-600">
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>A plain-language explanation</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>A guide to the right notice</span>
                  </li>
                </ul>
              </div>

              {/* Floating Bottom-Left Dark Glass Card: "This page is not" */}
              <div className="relative sm:absolute sm:bottom-6 sm:-left-10 bg-[#141a4a]/95 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl border border-white/15 max-w-[215px] mt-3 sm:mt-0 z-20">
                <h2 className="font-bold text-xs text-white mb-1.5">
                  This page is not
                </h2>
                <ul className="space-y-1 text-[11px] text-purple-200/85">
                  <li className="flex items-center gap-1.5">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>The legal privacy notice</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>A records request form</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
