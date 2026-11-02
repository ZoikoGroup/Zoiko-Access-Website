import React from "react";
import { ChevronDown } from "lucide-react";

export default function SupportAvailability() {
  return (
    <div className="min-h-[320px] bg-gradient-to-r from-[#F2EFFF] to-[#D1C5FE] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-16 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E6EBF1] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Subtitle / Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#635BFF]"></span>
              <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
                SUPPORT AVAILABILITY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#16245A] tracking-tight leading-[1.15]">
              Staffed support depends on location.
            </h1>
          </div>

          {/* Right Column Dropdown & Note */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <label className="text-sm font-bold text-[#0A2540] mb-2 block">
              Where do you need help?
            </label>

            {/* Custom Styled Select / Dropdown */}
            <div className="relative mb-3">
              <button
                type="button"
                className="w-full bg-[#EFEFEF] border border-[#E6EBF1] rounded-xl px-4 py-3.5 flex items-center justify-between text-sm text-[#425466] hover:border-[#635BFF] focus:outline-none transition-colors"
              >
                <span>Choose a location</span>
                <ChevronDown className="w-4 h-4 text-[#0A2540]" />
              </button>
            </div>

            {/* Subtext Note */}
            <p className="text-xs text-[#697386] leading-relaxed">
              Accessibility guidance and the Help Center are always available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
