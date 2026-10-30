"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const regions = [
  "United States",
  "United Kingdom",
  "European Union",
  "Canada",
  "Australia",
];

export default function LocalRelevanceSelector() {
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  return (
    <section className="relative w-full overflow-hidden bg-[#F6F9FC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Heading & Description */}
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
                Local relevance
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[40px]">
              What applies where you are.
            </h2>

            <p className="mt-4 max-w-lg text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
              Choosing a region points to published local guidance where it
              exists. It never confirms residency, coverage or program
              availability.
            </p>
          </div>

          {/* Right Column - Selection Card */}
          <div className="lg:col-span-6">
            <div className="w-full rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-10">
              <label
                htmlFor="country-region-select"
                className="block text-[15px] font-bold text-[#1E1B4B]"
              >
                Country or region
              </label>

              {/* Custom Select Box Container */}
              <div className="relative mt-3">
                <select
                  id="country-region-select"
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-transparent bg-[#EFEFEF] px-4.5 py-3.5 pr-10 text-[14px] text-[#475569] transition-all focus:border-[#7C3AED] focus:bg-white focus:outline-none sm:text-[15px]"
                >
                  <option value="" disabled>
                    Choose a country or region
                  </option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />
              </div>

              {/* Guidance Message Box */}
              <div className="mt-4 rounded-xl bg-[#EEE9FD] px-4.5 py-3 text-[13px] text-[#4A3BA0] sm:text-[14px]">
                {selectedRegion
                  ? `Showing published local guidance for ${selectedRegion}.`
                  : "Select a region to see what guidance is available."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
