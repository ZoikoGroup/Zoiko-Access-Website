"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

// Placeholder list — no location is verified in this preview.
const LOCATIONS = [
  "United States",
  "United Kingdom",
  "Canada",
  "India",
  "Other / not listed",
];

export default function LocalContext() {
  const selectId = useId();
  const [location, setLocation] = useState("");

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-14 sm:px-10 lg:px-[60px] lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,720fr)_minmax(0,525fr)] lg:gap-x-[75px]">
          <SectionHeading
            badge="Care by location"
            title="Local context matters."
            description="Country and service availability are separate from language preference. Choose a location to review the informational status of this preview."
          />

          <div className="rounded-2xl border border-[#DCE6EB] bg-white px-[30px] pb-10 pt-8">
            <label
              htmlFor={selectId}
              className="block text-[12px] font-bold text-[#243B73]"
            >
              Where are you exploring care?
            </label>
            <select
              id={selectId}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-3 block min-h-[50px] w-full rounded-lg border border-[#E1E9EE] bg-[#F5F8FC] px-[18px] text-[16px] text-[#243B73] outline-none focus-visible:ring-2 focus-visible:ring-[#4267D5]"
            >
              <option value="">Choose a care location</option>
              {LOCATIONS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <div className="mt-5 border-t border-[#E6EAF2] pt-6">
              <h3 className="text-[15px] font-bold text-[#243B73]">
                Global informational experience
              </h3>
              <p
                className="mt-2.5 text-[12px] leading-[21px] text-[#526174]"
                aria-live="polite"
              >
                No approved local directory or booking capability is connected.
                Choosing a location does not activate healthcare services.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 rounded-[20px] bg-[#4267D5] px-6 py-10 text-white sm:px-[45px] md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[24px] font-semibold tracking-[-0.01em] [font-family:var(--font-poppins)] sm:text-[30px]">
              Help shape better healthcare navigation.
            </h2>
            <p className="mt-4 max-w-[720px] text-[14px] text-[#E4EAFB]">
              Explore responsibilities and integration principles for healthcare
              institutions and technology partners.
            </p>
          </div>

          <Link
            href="/become-partner"
            className="inline-flex min-h-[50px] w-fit shrink-0 items-center gap-1.5 rounded-md bg-white px-[22px] text-[14px] font-semibold text-[#4267D5] transition-opacity hover:opacity-90"
          >
            Explore partner opportunities
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
