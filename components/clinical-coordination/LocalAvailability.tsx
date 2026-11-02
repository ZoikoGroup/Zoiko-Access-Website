import React from "react";
import { ChevronDown } from "lucide-react";

export default function LocalAvailability() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F5F2FF] to-[#ECE6FE] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column Content */}
        <div className="flex flex-col justify-center">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#635BFF]"></span>
            <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
              LOCAL AVAILABILITY
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-4 leading-[1.15]">
            What you see depends on where you work.
          </h1>

          {/* Description */}
          <p className="text-[#425466] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Information shown here describes planned and approved design.
            Availability varies by country and provider. Use the care-location
            selector to preview each state.
          </p>

          {/* Card / Selection Area */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-l-4 border-l-[#7657E8] border-y border-r border-[#E6EBF1] max-w-md">
            <span className="text-[11px] font-bold tracking-wider text-[#635BFF] uppercase block mb-1">
              CURRENT SELECTION
            </span>
            <h2 className="text-base font-bold text-[#0A2540] mb-1">
              No care location selected
            </h2>
            <p className="text-xs text-[#697386] leading-relaxed mb-4">
              You are reading the general design narrative. We do not infer a
              licence or live coverage from your location.
            </p>

            {/* Selector Button / Dropdown */}
            <div className="relative">
              <button
                type="button"
                className="w-full bg-white border border-[#E6EBF1] rounded-xl px-4 py-3 flex items-center justify-between text-sm text-[#425466] hover:border-[#635BFF] focus:outline-none transition-colors"
              >
                <span>Choose a care location</span>
                <ChevronDown className="w-4 h-4 text-[#697386]" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-lg lg:max-w-none h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-[#02125F]">
            <img
              src="/cor/12.png"
              alt="Healthcare professional standing outdoors"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
