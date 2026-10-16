"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const LOCATIONS = [
  "Choose care location",
  "England (NHS)",
  "Scotland (NHS Scotland)",
  "Wales (NHS Wales)",
  "Northern Ireland (HSC)",
  "United States (Regional Information)",
  "Canada (Provincial Information)",
  "Australia (Medicare System)",
  "Other International Jurisdiction",
];

export default function CareLocationSelector() {
  const [selectedLocation, setSelectedLocation] = useState<string>("Choose care location");
  const [hasQueried, setHasQueried] = useState(false);

  const handleClear = () => {
    setSelectedLocation("Choose care location");
    setHasQueried(false);
  };

  const handleCheck = () => {
    setHasQueried(true);
  };

  return (
    <section id="care-location" className="w-full bg-white py-16 sm:py-20 lg:py-24 font-sans">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-7">
          {/* Left Column: Form & Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-2.5">
                <span
                  className="h-2 w-2 rounded-full bg-[#8E7BEF]"
                  aria-hidden="true"
                />
                <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
                  Care location
                </span>
              </div>

              {/* Heading 2 */}
              <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
                Choose where you are
                <br />
                looking for care.
              </h2>

              {/* Description */}
              <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[#5E5A86] sm:text-[16px]">
                Selecting a location supplies informational context. It does not
                create an account, grant eligibility, establish payer coverage,
                validate caregiver authority, or move health records.
              </p>
            </div>

            {/* Form Card */}
            <div className="mt-8 rounded-[22px] border border-[#E3DEF8] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(36,28,89,0.04)]">
              <label
                htmlFor="care-location-select"
                className="block text-[16px] font-semibold text-[#241C59]"
              >
                Care location
              </label>

              {/* Select dropdown */}
              <div className="relative mt-2.5">
                <select
                  id="care-location-select"
                  value={selectedLocation}
                  onChange={(e) => {
                    setSelectedLocation(e.target.value);
                    setHasQueried(true);
                  }}
                  className="w-full appearance-none rounded-[12px] border border-[#CBD5E1] bg-white px-4 py-3.5 pr-10 text-[16px] font-normal text-[#241C59] shadow-sm transition-all focus:border-[#4267D5] focus:outline-none focus:ring-1 focus:ring-[#4267D5]"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-500">
                  <Image
                    src="/request-appointment/icon-307-466.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="opacity-70"
                  />
                </div>
              </div>

              {/* Footnote */}
              <p className="mt-3 text-[14px] font-normal leading-[1.55] text-[#5E5A86]">
                Location choice is separate from language, identity, eligibility,
                and data residency.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  type="button"
                  onClick={handleCheck}
                  className="inline-flex h-[48px] items-center justify-center rounded-[12px] bg-[#4267D5] px-6 text-[14.4px] font-semibold text-white shadow-sm transition-all hover:bg-[#3457bf] hover:shadow active:scale-[0.98]"
                >
                  View request availability
                </button>

                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex h-[48px] items-center justify-center px-4 text-[14.4px] font-semibold text-[#4267D5] hover:text-[#2d4bb0] transition-colors"
                >
                  Clear selection
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Availability Status Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-7 rounded-[22px] border border-[#E3DEF8] bg-white p-7 sm:p-9 shadow-[0_4px_24px_rgba(36,28,89,0.03)] h-full justify-center">
              {/* Left Arrow Icon box */}
              <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#ECE7FF] to-[#D5C9FF] text-[40px] font-medium text-[#5B49C8] shadow-inner">
                ↗
              </div>

              {/* Right Content */}
              <div className="flex flex-col items-start">
                <span className="inline-flex items-center rounded-full bg-[#E8E8F8] px-3.5 py-1 text-[12.5px] font-semibold text-[#5B49C8]">
                  {selectedLocation !== "Choose care location" && hasQueried
                    ? `Status: ${selectedLocation}`
                    : "Requests not activated"}
                </span>

                <h3 className="mt-3 text-[17.5px] font-bold text-[#241C59]">
                  {selectedLocation !== "Choose care location" && hasQueried
                    ? `No verified service for ${selectedLocation}`
                    : "No verified appointment service is connected."}
                </h3>

                <p className="mt-2.5 max-w-[480px] text-[15.2px] font-normal leading-[1.6] text-[#5E5A86]">
                  Appointment requests are not available through this Zoiko
                  Access preview. You can still learn how care navigation works
                  and explore service education.
                </p>

                {/* 3 Pills */}
                <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
                  <span className="inline-flex items-center rounded-full border border-[#E3DEF8] bg-[#F4F2FF] px-3.5 py-1 text-[13px] font-semibold text-[#5B49C8]">
                    Provider authorization required
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#E3DEF8] bg-[#F4F2FF] px-3.5 py-1 text-[13px] font-semibold text-[#5B49C8]">
                    Current source required
                  </span>
                  <span className="inline-flex items-center rounded-full border border-[#E3DEF8] bg-[#F4F2FF] px-3.5 py-1 text-[13px] font-semibold text-[#5B49C8]">
                    Separate mode approval
                  </span>
                </div>

                {/* Link */}
                <div className="mt-7">
                  <Link
                    href="/how-it-works"
                    className="inline-flex h-[48px] items-center justify-center rounded-[12px] border border-[#4267D5] bg-white px-6 text-[15px] font-semibold text-[#4267D5] shadow-sm transition-all hover:bg-[#F4F1FF] active:scale-[0.98]"
                  >
                    How Zoiko Access works
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
