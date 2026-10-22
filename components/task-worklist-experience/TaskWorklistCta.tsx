import React from "react";
import Image from "next/image";
import Link from "next/link";

export const TaskWorklistCta: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#0d1b54] via-[#0f236e] to-[#122e8a] py-20 lg:py-28 text-white">
      {/* Background Clinician Photo with Gradient Mask */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full opacity-25 lg:opacity-35 mix-blend-luminosity">
          <Image
            src="/task-worklist-experience/twe21.jpg"
            alt="Healthcare professionals collaborating in clinic"
            fill
            sizes="100vw"
            className="object-cover object-right"
          />
        </div>
        {/* Soft gradient overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0d1b54] via-[#0d1b54]/95 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="text-xs uppercase tracking-wider text-purple-300 font-bold mb-3">
            YOUR NEXT STEP
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Start with how coordination really works.
          </h2>

          {/* Subtitle */}
          <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            Read how referral coordination works first, then look at where clinical responsibility sits.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/for-clinicians"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-md shadow-black/10"
            >
              Explore clinician coordination
            </Link>
            <Link
              href="/how-referrals-work"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/25 text-white font-medium text-xs sm:text-sm transition-colors"
            >
              Referral coordination
            </Link>
            <Link
              href="/care-pathways"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/25 text-white font-medium text-xs sm:text-sm transition-colors"
            >
              Care transitions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
