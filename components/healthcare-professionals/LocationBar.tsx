"use client";

import { useId, useState } from "react";

// Placeholder list — no location is verified in this preview.
export const locations = [
  "United States",
  "United Kingdom",
  "Canada",
  "India",
  "Other / not listed",
];

export default function LocationBar() {
  const selectId = useId();
  const [location, setLocation] = useState("");

  return (
    <section className="w-full border-y border-[#E5E7EB] bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-20">
        <div>
          <p className="text-[12px] font-bold leading-6 text-[#23327A]">
            Global informational guide
          </p>
          <label
            htmlFor={selectId}
            className="text-[12px] leading-5 text-[#5E6B85]"
          >
            Professional titles and permitted responsibilities vary by
            location.
          </label>
        </div>

        <div className="relative w-full sm:w-72">
          <select
            id={selectId}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="min-h-11 w-full appearance-none rounded-md border border-[#D9CEFB] bg-[#EEEAFE] py-2.5 pl-[22px] pr-10 text-[13px] text-[#23327A] focus:border-[#4267D5] focus:outline-none"
          >
            <option value="">Choose care location</option>
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span
            className="pointer-events-none absolute right-5 top-1/2 h-0 w-0 -translate-y-1/2 border-x-[7px] border-t-[8px] border-x-transparent border-t-[#111827]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
