"use client";

import React, { useState } from "react";
import Image from "next/image";

const countryEntries: Record<
  string,
  { title: string; details: string; source: string }
> = {
  "Select a country": {
    title: "No country selected",
    details: "If you need help now, contact your local emergency services.",
    source: "Manual selection only — never inferred automatically.",
  },
  "United Kingdom": {
    title: "United Kingdom — Official public numbers: 999 or 112 (Emergency) · 111 (NHS Urgent Advice)",
    details:
      "Call 999 or 112 immediately for life-threatening emergencies. Use NHS 111 when you need urgent medical guidance.",
    source: "Public NHS / GOV.UK directory · Reference only",
  },
  "United States": {
    title: "United States — Official public numbers: 911 (Emergency) · 988 (Suicide & Crisis Lifeline)",
    details:
      "Call 911 immediately for medical, fire, or police emergencies. Call or text 988 for free, confidential mental health crisis support.",
    source: "Public US federal emergency directory · Reference only",
  },
  Canada: {
    title: "Canada — Official public numbers: 911 (Emergency) · 988 (Suicide Crisis Helpline)",
    details:
      "Call 911 immediately in life-threatening emergencies. Dial or text 988 for crisis intervention across Canada.",
    source: "Public Government of Canada directory · Reference only",
  },
  "European Union (112)": {
    title: "European Union — Official public number: 112 (EU-wide Emergency)",
    details:
      "Dial 112 free of charge from any telephone or mobile phone across all EU member states for urgent medical, fire, or police response.",
    source: "Public European Commission 112 directory · Reference only",
  },
  Australia: {
    title: "Australia — Official public numbers: 000 (Emergency) · 112 (Mobile)",
    details:
      "Dial 000 (Triple Zero) immediately for urgent ambulance, fire, or police services anywhere in Australia.",
    source: "Public Australian Government directory · Reference only",
  },
};

export const ChooseYourCountryCard: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("Select a country");
  const entry =
    countryEntries[selectedCountry] ?? countryEntries["Select a country"];

  return (
    <section className="w-full bg-gradient-to-br from-[#faf8ff] via-[#f4f1ff] to-[#ebe5ff] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/70 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Photo */}
          <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] lg:min-h-full bg-slate-100">
            <Image
              src="/resources-safety-and-emergencies/rsae5.jpg"
              alt="City skyline overlooking water"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* Right Form / Info Box */}
          <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-[#6366f1]" />
              <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
                FIND OFFICIAL LOCAL EMERGENCY INFORMATION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
              Choose your country
            </h2>

            <p className="text-xs text-slate-500 leading-relaxed mb-5 max-w-lg">
              Optional and manual. We show only reviewed public information, with its source and review date.
            </p>

            <label
              htmlFor="safety-country-select"
              className="block text-xs font-bold text-[#0f172a] mb-1.5"
            >
              Country
            </label>
            <select
              id="safety-country-select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 w-full shadow-xs outline-none mb-4 cursor-pointer focus:ring-2 focus:ring-purple-200"
            >
              {Object.keys(countryEntries).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-4 mb-4">
              <h3 className="font-bold text-xs text-[#0f172a] mb-1">
                {entry.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {entry.details}
              </p>
            </div>

            <p className="text-[10px] text-slate-400">
              Source, last reviewed date and coverage limits appear with every reviewed entry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
