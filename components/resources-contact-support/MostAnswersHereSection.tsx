import React from "react";
import Image from "next/image";
import Link from "next/link";

const quickAnswers = [
  {
    title: "Help Center",
    description:
      "Reviewed guidance on care, accounts, referrals and privacy.",
    actionLabel: "Visit the Help Center →",
    imageSrc: "/resources-contact-support/rcs8.jpg",
    href: "/help-center",
  },
  {
    title: "Frequently asked questions",
    description: "Short, reviewed answers to the most common questions.",
    actionLabel: "Browse FAQs →",
    imageSrc: "/resources-contact-support/rcs9.jpg",
    href: "/resources-frequently-asked-questions",
  },
];

export const MostAnswersHereSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              TRY THESE FIRST
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Most answers are{" "}
            <span className="text-[#7c5cff]">already here</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Free to read, no sign-in needed.
          </p>
        </div>

        {/* 2 Horizontal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {quickAnswers.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden grid grid-cols-1 sm:grid-cols-12 items-stretch"
            >
              <div className="sm:col-span-5 relative min-h-[160px] bg-slate-100">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover"
                />
              </div>

              <div className="sm:col-span-7 p-6 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  AVAILABLE
                </span>
                <h3 className="font-bold text-base text-[#0f172a] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="text-xs font-bold text-[#6366f1] hover:text-[#4f46e5] inline-flex items-center gap-1 transition-colors"
                >
                  {item.actionLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
