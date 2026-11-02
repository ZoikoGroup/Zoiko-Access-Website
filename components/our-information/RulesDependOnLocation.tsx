import React from "react";
import { ChevronDown } from "lucide-react";

export default function RulesDependOnLocation() {
  return (
    <div className="w-full bg-[#FFFFFF] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-16 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-6 leading-tight">
          Rules depend on where you are.
        </h2>

        {/* Card Container */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E6EBF1] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* Label */}
          <span className="text-sm font-bold text-[#0A2540] shrink-0">
            Care location
          </span>

          {/* Select Input Dropdown */}
          <div className="relative w-full md:w-64">
            <button
              type="button"
              className="w-full bg-[#EFEFEF] border border-[#E2E8F0] rounded-xl px-4 py-3 flex items-center justify-between text-xs md:text-sm text-[#425466] hover:border-[#635BFF] focus:outline-none transition-colors"
            >
              <span className="truncate">Choose a care location</span>
              <ChevronDown className="w-4 h-4 text-[#0A2540] shrink-0 ml-2" />
            </button>
          </div>

          {/* Subtext Note */}
          <p className="text-xs text-[#697386] leading-relaxed">
            General guidance is shown. Local privacy rules apply where you
            receive care.
          </p>
        </div>
      </div>
    </div>
  );
}
