import React from "react";
import Link from "next/link";

export const PartnerReadyToExploreCta: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#5a57e8] via-[#4f46e5] to-[#3b49df] py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Text */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Ready to explore?
            </h2>
            <p className="text-purple-100/90 text-xs sm:text-sm md:text-base leading-relaxed">
              Start with what a partnership would require. Enquiries open once intake is staffed and approved.
            </p>
          </div>

          {/* Right Action Card */}
          <div className="w-full sm:w-auto min-w-[300px] bg-[#0c1448]/40 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 shadow-xl flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link
              href="#requirements"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0f172a] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-slate-100 hover:shadow-lg transition-all"
            >
              <span>Explore partnership requirements</span>
              <span aria-hidden="true">→</span>
            </Link>
            <span className="text-xs text-purple-200/80 mt-3 font-medium">
              Submit enquiry: not available yet.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
