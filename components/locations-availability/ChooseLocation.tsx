"use client";

import { useId, useState } from "react";
import SectionHeading from "./SectionHeading";

// Placeholder list — no location is verified in this preview.
const locations = [
  "United States",
  "United Kingdom",
  "Canada",
  "India",
  "Other / not listed",
];

export default function ChooseLocation() {
  const selectId = useId();
  const [location, setLocation] = useState("");

  const viewAvailability = () => {
    document
      .getElementById("browse-locations")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="care-location" className="w-full scroll-mt-24 bg-white py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,559fr)_minmax(0,579fr)] lg:gap-x-[146px] lg:px-[78px]">
        <SectionHeading
          badge="Care location"
          title="Choose where you need care"
          description="Country and regional service availability are separate from language preference. Selecting a location changes the information shown on this public website. It does not create an account, change your account region, decide benefit eligibility, or move medical records."
        />

        <div className="rounded-3xl border border-[#E6E3F5] bg-white p-8 shadow-[0_18px_44px_rgba(36,28,89,0.14)]">
          <label
            htmlFor={selectId}
            className="block text-[16px] font-semibold text-[#211A5A] [font-family:var(--font-sora)]"
          >
            Where do you need care?
          </label>
          <select
            id={selectId}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-2.5 min-h-12 w-full rounded-xl border border-[#B9AEF2] bg-white px-4 py-3 text-[16px] text-[#211A5A] focus:border-[#4267D5] focus:outline-none"
          >
            <option value="">Select a care location</option>
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <p className="mt-2.5 text-[14px] leading-6 text-[#615D7E]">
            This changes information shown on this public website. It does not
            change your account region, determine benefit eligibility or move
            medical records.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={viewAvailability}
              className="inline-flex min-h-12 items-center rounded-xl bg-[#4267D5] px-6 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              View availability
            </button>
            <button
              type="button"
              onClick={() => setLocation("")}
              className="inline-flex min-h-12 items-center px-1 text-[16px] font-semibold text-[#4267D5] hover:underline"
            >
              Clear selection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
