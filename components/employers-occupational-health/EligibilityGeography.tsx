"use client";

import { useState } from "react";
import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";

const regions = [
  "United States",
  "United Kingdom",
  "European Union",
  "Canada",
  "India",
  "Australia",
  "Other region",
];

export default function EligibilityGeography() {
  const [region, setRegion] = useState("");

  return (
    <section
      id="eligibility-geography"
      className="w-full scroll-mt-24 bg-[#F5F8FC] py-16 font-sans sm:py-[70px]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#E5E8F0] bg-white shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)] lg:grid-cols-[686px_1fr]">
          <div className="p-8 sm:px-9 sm:py-12">
            <Eyebrow>Eligibility &amp; geography</Eyebrow>
            <h2
              className={`mt-3 text-3xl font-semibold leading-tight text-[#16245A] sm:text-[44px] sm:leading-[50px] ${headingFont}`}
            >
              Availability is never
              <br className="hidden sm:block" /> assumed.
            </h2>
            <p className="mt-4 max-w-[560px] text-base leading-[27px] text-[#5B6478]">
              Program availability depends on verified contracts, partners,
              legal authority and activation. &quot;Unconfirmed&quot; never means
              &quot;not eligible&quot;.
            </p>
          </div>

          <div className="bg-[#F5F8FC] p-8 sm:px-9 sm:py-12">
            <label
              htmlFor="eoh-region"
              className="block text-[15px] font-semibold text-[#16245A]"
            >
              Where does your organization operate?
            </label>
            <select
              id="eoh-region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-3 w-full rounded-lg border border-[#C9CED9] bg-[#EEEEEE] px-4 py-3 text-[15px] text-[#16245A] focus:border-[#7C5CFC] focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]/30"
            >
              <option value="">Choose a country or region</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <p
              aria-live="polite"
              className="mt-4 rounded-lg bg-[#EDE8FF] px-3.5 py-3 text-[13px] leading-5 text-[#3B2E8A]"
            >
              {region
                ? `${region}: program status unconfirmed. This doesn't mean your organization isn't eligible — availability is published only once verified.`
                : "Select a region to see its program status."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
