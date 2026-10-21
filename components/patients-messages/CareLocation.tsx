"use client";

import { useId, useState } from "react";
import SectionHeading from "./SectionHeading";

// Placeholder list — no location is verified in this preview.
const locations = ["United States", "United Kingdom", "Canada", "India", "Other / not listed"];

export default function CareLocation() {
  const selectId = useId();
  const [location, setLocation] = useState("");

  return (
    <section className="w-full bg-gradient-to-r from-[#D8CEFD] via-[#E4DCFE] to-[#F1EDFE] py-[70px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,560fr)_minmax(0,652fr)] lg:gap-x-[88px] lg:px-[70px]">
        <SectionHeading
          badge="Care location & availability"
          title={
            <>
              Messaging depends on
              <br className="hidden sm:block" /> where you receive care.
            </>
          }
          description="Your care location is separate from your language. Private messaging only appears where a participating organization runs a secure, staffed messaging service."
        />

        <div className="rounded-xl bg-white px-7 pb-7 pt-7 shadow-[0_14px_36px_rgba(29,42,107,0.12)]">
          <label htmlFor={selectId} className="block text-[14px] font-semibold text-[#1D2A6B]">
            Care location
          </label>
          <div className="relative mt-2.5">
            <select
              id={selectId}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="min-h-[52px] w-full appearance-none rounded-md border border-[#E4E3EE] bg-white py-3 pl-4 pr-10 text-[16px] text-[#1D2A6B] focus:border-[#7C3AED] focus:outline-none"
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
          <p className="mt-2.5 rounded-md bg-[#F1EBFE] px-4 py-4 text-[14px] leading-[22px] text-[#2C3352]" aria-live="polite">
            No patient account or live messaging is verified for this preview. Educational guidance remains available.
          </p>
        </div>
      </div>
    </section>
  );
}
