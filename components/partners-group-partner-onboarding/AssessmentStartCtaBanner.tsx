import React from "react";
import Image from "next/image";
import Link from "next/link";

export const AssessmentStartCtaBanner: React.FC = () => {
  return (
    <section className="w-full bg-white pb-16 md:pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-7 bg-gradient-to-r from-[#6d4aff] via-[#5e46e8] to-[#5243df] p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Start by reading how assessment works
            </h2>
            <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed max-w-lg mb-7">
              Partner intake is closed. The certification framework explains what a future assessment would look at.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/partners-certification-framework"
                className="bg-white hover:bg-slate-100 text-[#0f172a] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md inline-flex items-center gap-2 transition-all"
              >
                <span>Explore Certification framework</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/partners-developer-documentation"
                className="border border-white/35 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
              >
                Developer documentation
              </Link>
            </div>
          </div>

          {/* Right Column: Team Photo */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-full bg-slate-900">
            <Image
              src="/partners-group-partner-onboarding/pgpo12.jpg"
              alt="Team collaborating around laptops at a wooden table"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
