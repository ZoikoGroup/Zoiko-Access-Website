import React from "react";
import Image from "next/image";

export const UpdatesByEmailBanner: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch bg-[#070b1a]">
          {/* Left Content */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0e1548] via-[#1c226d] to-[#2e2d8a] p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-purple-300/70" />
              <span className="text-purple-200/80 text-xs font-semibold tracking-wider uppercase">
                STAY INFORMED
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
              Updates by email
            </h2>

            <p className="text-xs sm:text-sm text-purple-100/85 leading-relaxed mb-5 max-w-md">
              Opens only with verified consent, reliable delivery and clear retention.
            </p>

            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full w-fit shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Not available yet
            </span>
          </div>

          {/* Right Photo */}
          <div className="lg:col-span-6 relative min-h-[200px] sm:min-h-[240px] lg:min-h-full bg-black">
            <Image
              src="/resources-news-and-insights/rnai14.jpg"
              alt="Glowing laptop in dark studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
