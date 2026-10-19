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

export default function CareLocation() {
  const selectId = useId();
  const [location, setLocation] = useState("");

  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,508px)] lg:gap-x-[72px] lg:px-20">
        <div>
          <SectionHeading
            badge="Care location & supported services"
            title={
              <>
                Location provides context.
                <br />
                It does not grant access.
              </>
            }
          />
          <div className="mt-9 max-w-[700px] space-y-3 text-[16px] leading-7 text-[#5E6B85]">
            <p>
              Care location is different from language, residence, coverage,
              identity, consent, and data residency. No automatic IP-based
              choice or patient-region reassignment happens here.
            </p>
            <p>
              Directory discovery, authenticated requests, and personal
              information views require separate evidence. If a capability is
              unknown or unavailable, learning remains accessible.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white px-7 pb-12 pt-7">
          <label
            htmlFor={selectId}
            className="text-[12px] font-semibold text-[#1E293B]"
          >
            Care location
          </label>
          <div className="relative mt-2.5">
            <select
              id={selectId}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="min-h-12 w-full appearance-none rounded-md border border-[#E5E7EB] bg-[#F5F8FC] py-3 pl-4 pr-10 text-[16px] text-[#111827] focus:border-[#4267D5] focus:outline-none"
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
          <p
            className="mt-2.5 rounded-lg bg-[#F0EDFB] px-4 pb-4 pt-6 text-[12px] leading-6 text-[#23327A]"
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
