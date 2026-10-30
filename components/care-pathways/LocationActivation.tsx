"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Placeholder list — no location is verified in this preview.
const locations = [
  "United States",
  "United Kingdom",
  "Canada",
  "India",
  "Other / not listed",
];

export default function LocationActivation() {
  const selectId = useId();
  const [location, setLocation] = useState("");

  return (
    <section className="w-full bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#DCD0FF] py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[1fr_510px] lg:gap-16 lg:px-20">
        <div>
          <SectionHeading
            badge="Location & activation"
            title={
              <>
                Local context.
                <br />
                Independent permissions.
              </>
            }
          />

          <div className="mt-6 max-w-[720px] space-y-3 text-[16px] leading-[1.75] text-[#4B5563]">
            <p>
              Care location is distinct from language, residence, insurance
              eligibility, patient identity, clinical jurisdiction, and data
              residency.
            </p>
            <p>
              Reading general information does not activate a directory,
              booking, referral, or private account. Unknown or unavailable
              capabilities stay informational.
            </p>
          </div>

          <Link
            href="/locations-availability"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#C9D3F2] bg-white px-5 py-3.5 text-[14px] font-semibold text-[#2F55C7] transition-colors hover:bg-[#F7F8FF]"
          >
            Explore availability principles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
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
            <span
              className="pointer-events-none absolute right-5 top-1/2 h-0 w-0 -translate-y-1/2 border-x-[7px] border-t-[8px] border-x-transparent border-t-[#111827]"
              aria-hidden="true"
            />
          </div>

          <p
            className="mt-3 rounded-lg bg-[#F0EDFB] px-4 py-6 text-[13px] leading-[1.75] text-[#23327A]"
            aria-live="polite"
          >
            No local service capability is verified in this preview. All
            general educational content remains available.
          </p>

          <p className="mt-4 text-[12px] leading-[1.75] text-[#6B7280]">
            No live status, catalog, partner, or source-update date is
            invented. A production service requires independent evidence and
            current authorization.
          </p>
        </div>
      </div>
    </section>
  );
}
