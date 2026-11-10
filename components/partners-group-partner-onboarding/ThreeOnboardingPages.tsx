import React from "react";
import Image from "next/image";
import Link from "next/link";

interface OnboardingDestination {
  imageSrc: string;
  badgeText: string;
  isInfo: boolean;
  title: string;
  description: string;
  slug: string;
  actionLabel: string;
  prefixText?: string;
  href: string;
}

const destinations: OnboardingDestination[] = [
  {
    imageSrc: "/partners-group-partner-onboarding/pgpo3.jpg",
    badgeText: "INFO · published if approved",
    isInfo: true,
    title: "Certification framework",
    description: "Proposed onboarding assessment. Not an issued certification.",
    slug: "/partners-developers/certification",
    actionLabel: "Explore Certification framework →",
    href: "/partners-certification-framework",
  },
  {
    imageSrc: "/partners-group-partner-onboarding/pgpo4.png",
    badgeText: "GATED · not active",
    isInfo: false,
    title: "Developer documentation",
    description: "Appears only when audited public docs are deployed.",
    slug: "/developers/docs",
    prefixText: "Not available yet. Meanwhile: ",
    actionLabel: "API & interoperability overview →",
    href: "/partners-developer-documentation",
  },
  {
    imageSrc: "/partners-group-partner-onboarding/pgpo5.png",
    badgeText: "GATED · not active",
    isInfo: false,
    title: "Become a partner",
    description:
      "Opens only after staffed, governed intake and notices are operational.",
    slug: "/partners-developers/apply",
    prefixText: "Not available yet. Meanwhile: ",
    actionLabel: "Partner ecosystem overview →",
    href: "/partners-become-a-partner",
  },
];

export const ThreeOnboardingPages: React.FC = () => {
  return (
    <section className="w-full bg-[#fbfaff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
            02 · Destinations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Three onboarding pages
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            In their original order. One is informational; two stay gated until their conditions are met, with an informational alternative.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              {/* Top Image */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full border mb-3 ${
                      card.isInfo
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200/80"
                        : "bg-amber-50 text-amber-700 border-amber-200/80"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        card.isInfo ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                    />
                    {card.badgeText}
                  </span>

                  <h3 className="font-bold text-base text-[#0f172a] mb-1.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                    {card.description}
                  </p>
                  <span className="block text-[11px] font-mono text-slate-400 mb-5">
                    {card.slug}
                  </span>
                </div>

                <div className="text-xs leading-relaxed">
                  {card.prefixText && (
                    <span className="text-slate-500">{card.prefixText}</span>
                  )}
                  <Link
                    href={card.href}
                    className={`font-bold text-[#6366f1] hover:text-[#4f46e5] transition-colors ${
                      card.prefixText ? "underline underline-offset-2" : ""
                    }`}
                  >
                    {card.actionLabel}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
