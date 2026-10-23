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

const states = [
  "Discovery approved",
  "Requests approved",
  "Temporarily unavailable",
  "Informational",
];

export default function LocationContext() {
  const selectId = useId();
  const [location, setLocation] = useState("");

  return (
    <section className="w-full bg-gradient-to-b from-[#F6F4FF] to-[#E6E0FE] py-[70px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,560fr)_minmax(0,628fr)] lg:gap-x-[112px] lg:px-[70px]">
        <div>
          <SectionHeading
            badge="Availability by care location"
            title={
              <>
                Location provides context. It
                <br className="hidden sm:block" /> does not grant access.
              </>
            }
            description="Services and permission processes vary by location and participating organization. Your care location is a preference, not proof of residence, authorization or consent."
          />
          <ul className="mt-4 flex flex-wrap gap-2">
            {states.map((state) => (
              <li
                key={state}
                className="rounded-full border border-[#E4E0F7] bg-white px-3.5 py-2 text-[13px] font-semibold text-[#1D1857]"
              >
                {state}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[#E4E0F7] bg-white px-8 pb-24 pt-9 shadow-[0_18px_44px_rgba(36,28,89,0.12)]">
          <label
            htmlFor={selectId}
            className="block text-[15px] font-semibold text-[#1D1857] [font-family:var(--font-poppins)]"
          >
            Care location
          </label>
          <select
            id={selectId}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-3 min-h-[52px] w-full rounded-xl border border-[#B9AEF2] bg-white px-[18px] text-[16px] text-[#1D1857] focus:border-[#5B45D6] focus:outline-none"
          >
            <option value="">Choose care location</option>
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <p
            className="mt-5 rounded-r-xl border-l-[3px] border-[#A996F5] bg-[#F3F0FF] px-5 py-5 text-[15px] leading-6 text-[#5B5880]"
            aria-live="polite"
          >
            No patient-account or live care capability is verified for this
            preview. Educational guidance remains available.
          </p>
        </div>
      </div>
    </section>
  );
}
