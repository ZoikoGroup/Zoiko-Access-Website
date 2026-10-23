"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const tierBadges = [
  { label: "P0 Informational" },
  { label: "P1 Directory information" },
  { label: "P2 Approved live only" },
];

export const SourceSystemsRecord: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const locations = [
    "Northwest Regional Medical Center",
    "St. Jude Outpatient Clinic",
    "Metro Health Community Hospital",
    "Highland Care Network",
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative, Badges & Care Location Card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#6d5ae6]" />
              <span className="text-[#6d5ae6] font-semibold text-xs md:text-sm uppercase tracking-wider">
                INTEGRATION AND MARKET AVAILABILITY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Source systems keep the clinical record
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Interfaces need the participating organization, contractual terms and safety approvals. Where a partner route is unavailable, an explanation replaces the link.
            </p>

            {/* Badges Row */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {tierBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-[#6d28d9] border border-purple-200/80 shadow-xs"
                >
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Care Location Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm">
              <label
                htmlFor="care-location"
                className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5"
              >
                Where do you work?
              </label>

              <div className="relative">
                <button
                  type="button"
                  id="care-location"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-white hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-colors text-left"
                >
                  <span className={selectedLocation ? "text-slate-900 font-medium" : "text-slate-400"}>
                    {selectedLocation || "Choose a care location"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-20 overflow-hidden py-1">
                    {locations.map((loc) => (
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
              <div className="mt-4 rounded-xl bg-[#f6f2fe] border border-purple-100/70 p-3.5">
                <p className="text-xs text-slate-600 leading-relaxed">
                  No market profile is published in this preview, so you are reading the general design narrative. We do not infer a license or live coverage from your location.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clinician Photo */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10 ring-1 ring-slate-200">
              <Image
                src="/task-worklist-experience/twe19.jpg"
                alt="Smiling male clinician in blue scrubs with stethoscope"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
