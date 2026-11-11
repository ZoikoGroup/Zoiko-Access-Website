"use client";

import React, { useState } from "react";

const regionNotices: Record<string, { title: string; summary: string }> = {
  "Select a region": {
    title: "No region selected",
    summary: "Choose a region to see its approved notice.",
  },
  "United Kingdom": {
    title: "United Kingdom — No active regional notice published yet",
    summary:
      "Public educational guidance applies globally. A dedicated UK privacy notice will appear here once approved and published for live UK services.",
  },
  "United States": {
    title: "United States — No active regional notice published yet",
    summary:
      "Public educational guidance applies globally. Applicable US federal/state privacy and HIPAA notice details appear once authorized services launch.",
  },
  "European Union": {
    title: "European Union — No active regional notice published yet",
    summary:
      "Public educational guidance applies globally. A GDPR-compliant regional privacy notice will be published by the accountable legal entity once live.",
  },
  "Other Region": {
    title: "Other Region — No active regional notice published yet",
    summary:
      "Only approved, effective regional notices are displayed once local authorization and entity verification are complete.",
  },
};

export const YourRegionsNotice: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState("Select a region");
  const info = regionNotices[selectedRegion] ?? regionNotices["Select a region"];

  return (
    <section
      id="your-region-notice"
      className="w-full bg-white py-10 md:py-14 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider mb-1">
            07
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Your region&apos;s notice
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Choose a location yourself. We never infer your rights from your IP address.
          </p>
        </div>

        {/* Interactive Lavender Box */}
        <div className="bg-[#f1effd] border border-purple-200/60 rounded-2xl p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Selector */}
          <div className="lg:col-span-5">
            <label
              htmlFor="privacy-region-select"
              className="block font-bold text-xs text-[#0f172a] mb-2"
            >
              Choose your region
            </label>
            <select
              id="privacy-region-select"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-white border border-slate-200/80 rounded-xl px-4 py-2.5 text-xs text-slate-700 shadow-xs outline-none cursor-pointer focus:ring-2 focus:ring-purple-300"
            >
              {Object.keys(regionNotices).map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500 mt-2.5">
              Only approved, effective notices are shown.
            </p>
          </div>

          {/* Right Status Box */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs min-h-[76px] flex flex-col justify-center">
              <h3 className="font-bold text-xs sm:text-sm text-[#0f172a] mb-1">
                {info.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {info.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
