"use client";

import { useId, useState } from "react";
import SectionHeading from "./SectionHeading";
import { locations } from "./LocationBar";

export default function LocationAvailability() {
  const selectId = useId();
  const [location, setLocation] = useState("");

  return (
    <section className="w-full bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#DCD0FF] py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[1fr_510px] lg:gap-16 lg:px-20">
        <div>
          <SectionHeading
            badge="Care location & availability"
            title={
              <>
                Understanding a role
                <br />
                does not confirm local access.
              </>
            }
          />

          <div className="mt-6 max-w-[720px] space-y-3 text-[16px] leading-[1.75] text-[#4B5563]">
            <p>
              The kinds of services and permitted pathways can differ between
              countries and localities. Choosing a location does not confirm
              eligibility, an appointment, insurance participation, or
              personal-record access.
            </p>
            <p>
              Language, identity, care region, coverage, and data residency
              remain separate. No directory or booking control is offered in
              this educational preview.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-7 sm:p-8">
          <label
            htmlFor={selectId}
            className="text-[12px] font-semibold text-[#23327A]"
          >
            Care location
          </label>
          <div className="relative mt-3">
            <select
              id={selectId}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full appearance-none rounded-lg border border-[#DCE3F0] bg-[#F5F8FC] px-4 py-3.5 pr-10 text-[16px] text-[#111827] focus:border-[#4267D5] focus:outline-none"
            >
              <option value="">Choose care location</option>
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <p
            className="mt-3 rounded-lg bg-[#F0EDFB] px-4 py-6 text-[13px] leading-[1.75] text-[#23327A]"
            aria-live="polite"
          >
            No local professional directory or service availability is verified
            in this preview. General education remains available.
          </p>
        </div>
      </div>
    </section>
  );
}
