"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TierItem {
  code: string;
  description: string;
}

const tierLevels: TierItem[] = [
  {
    code: "P0",
    description: "Educational information",
  },
  {
    code: "P1",
    description: "Approved directory only",
  },
  {
    code: "P2",
    description: "Specifically authorized transactions, only on specialized pages",
  },
  {
    code: "PX",
    description: "Degraded or suspended: education and verified paths remain",
  },
];

const sampleLocations = [
  "Main University Health Campus",
  "Central Valley Outpatient Clinic",
  "Highland Specialty Care Center",
  "Coastal Regional Diagnostic Hub",
];

export const CareLocationContext: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-[#f5f3fa] via-[#eeeaf6] to-[#e8e4f2] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative & Tiers */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
              <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
                Care location
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Location gives context. It does not grant access.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Capabilities depend on the selected care location and verified partners. Choosing a location is optional and public. It is not a legal entitlement and is not health information.
            </p>

            {/* P0 / P1 / P2 / PX List */}
            <div className="space-y-3">
              {tierLevels.map((tier) => (
                <div key={tier.code} className="flex items-start gap-4">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 w-7 shrink-0">
                    {tier.code}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tier.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Care Location Dropdown Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm w-full max-w-md">
              <label
                htmlFor="care-location-select"
                className="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-2.5"
              >
                Care location
              </label>

              <div className="relative">
                <button
                  type="button"
                  id="care-location-select"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-white hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors text-left"
                >
                  <span
                    className={
                      selectedLocation ? "text-slate-900 font-medium" : "text-slate-400"
                    }
                  >
                    {selectedLocation || "Choose care location"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-20 overflow-hidden py-1">
                    {sampleLocations.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          setSelectedLocation(loc);
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Informational Box */}
              <div className="mt-4 rounded-xl bg-[#f4effc] border border-purple-100/80 p-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  No live local availability is shown. Educational guidance remains available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
