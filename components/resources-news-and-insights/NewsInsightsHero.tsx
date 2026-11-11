import React from "react";
import Image from "next/image";
import Link from "next/link";

const heroBadges = [
  "Reviewed",
  "Dated",
  "Scoped by country",
  "Corrected openly",
];

export const NewsInsightsHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0e1548] via-[#17216b] to-[#2e389e] text-white pt-20 lg:pt-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px] lg:min-h-[500px]">
        {/* Left Half: Indigo/Blue Hero Content */}
        <div className="lg:col-span-6 relative px-6 sm:px-10 lg:px-16 py-14 lg:py-24 flex flex-col justify-center overflow-hidden">
          {/* Decorative Topographic Rings */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full border border-white/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-16 -left-16 h-[320px] w-[320px] rounded-full border border-white/5"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-xl lg:ml-auto lg:mr-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-purple-300/70" />
              <span className="text-purple-200/80 text-[11px] font-semibold tracking-wider uppercase">
                RESOURCES / KEEP INFORMED
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] mb-4">
              News and <span className="text-[#8ba8ff]">insights</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-5">
              Dated, reviewed updates and explanatory articles about Zoiko Access, healthcare navigation, accessibility and how our platform is being developed. An article is not confirmation that a service is available where you are.
            </p>

            {/* 4 Check Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-7">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 border border-white/15 text-purple-100 text-[10px] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1"
                >
                  <span aria-hidden="true">✓</span>
                  <span>{badge}</span>
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/help-center"
                className="bg-white hover:bg-slate-100 text-[#0f172a] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl inline-flex items-center gap-2 shadow-md transition-all"
              >
                <span>Explore the Help Center</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#article-layout"
                className="border border-white/25 bg-white/5 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
              >
                See the article layout
              </Link>
            </div>
          </div>
        </div>

        {/* Right Half: Full-Bleed Newspapers Photo + Floating Notice Card */}
        <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full bg-[#0b1033]">
          <Image
            src="/resources-news-and-insights/rnai1.jpg"
            alt="Stack of business and healthcare newspapers"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#090d2e]/50 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating Bottom-Right White Card */}
          <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 bg-white text-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 max-w-[240px] sm:max-w-[260px] z-20">
            <h2 className="font-bold text-xs text-[#0f172a] mb-1">
              No articles published yet
            </h2>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              The first reviewed articles will appear here, each with date, scope and owner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
