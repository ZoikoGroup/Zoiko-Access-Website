"use client";

import React, { useState } from "react";

const marketTiers = [
  {
    code: "P0",
    color: "text-[#3b82f6]",
    title: "Education",
    description: "Available to everyone. Current state.",
  },
  {
    code: "P1",
    color: "text-[#3b82f6]",
    title: "Approved listings",
    description: "Only verified, published pharmacy information.",
  },
  {
    code: "P2",
    color: "text-[#3b82f6]",
    title: "Authorized pathways",
    description: "Only on specialized, released pilots.",
  },
  {
    code: "PX",
    color: "text-rose-500",
    title: "Suspended",
    description: "Falls back honestly to education.",
  },
];

export const LocationAndAccessRegion: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState("Select a region");

  return (
    <section className="w-full bg-[#fcfbff] py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] font-semibold text-xs sm:text-sm tracking-wider uppercase">
              LOCATION &amp; ACCESS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
            Your region is context, not consent.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Choosing a region only changes what this page explains. Features stay gated by market, partner and permission.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Interactive Region Selector Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#5949ea] to-[#4338ca] text-white rounded-3xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
            <div>
              <label
                htmlFor="region-select"
                className="block font-bold text-sm sm:text-base text-white mb-3"
              >
                Choose a region
              </label>
              <select
                id="region-select"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-white text-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium shadow-sm outline-none cursor-pointer focus:ring-2 focus:ring-purple-300 transition-all"
              >
                <option value="Select a region">Select a region</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="European Union">European Union</option>
                <option value="Other International">Other International</option>
              </select>

              <div className="mt-5 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-xs text-purple-100 leading-relaxed">
                Educational information only. No pharmacy service is shown as available.
              </div>
            </div>

            <p className="text-[11px] text-purple-200/70 mt-6 pt-4 border-t border-white/10">
              Not saved. Never treated as consent or eligibility.
            </p>
          </div>

          {/* Right Column: 4 Market Tiers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {marketTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span
                    className={`block text-xs font-mono font-bold tracking-wider mb-1.5 ${tier.color}`}
                  >
                    {tier.code}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-[#0f172a] mb-1">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
