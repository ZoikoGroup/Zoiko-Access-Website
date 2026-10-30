"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

const locations = [
  "Choose care location",
  "England",
  "Scotland",
  "Wales",
  "Northern Ireland",
  "Greater London",
  "Manchester & North West",
  "Birmingham & Midlands",
];

export default function LocationSection() {
  const [selectedLocation, setSelectedLocation] = useState("Choose care location");

  const isLocationSelected = selectedLocation !== "Choose care location";

  return (
    <section className="w-full bg-[#FBFAFF] py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Heading & Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                03 / Location
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] sm:text-[40px] [font-family:var(--font-poppins)]">
              3. Your care location changes available information.
            </h2>

            {/* Description */}
            <p className="mt-4 text-[16px] leading-[25.6px] text-[#273444]">
              Choose where you need care to see what&apos;s published for that area.
            </p>

            {/* Muted */}
            <p className="mt-3 text-[15px] leading-[24px] text-[#5B6678]">
              Your choice is a preference only — it doesn&apos;t grant permission,
              isn&apos;t inferred from your device, and doesn&apos;t switch any
              service on.
            </p>
          </motion.div>

          {/* Right Column: Interactive Location Simulator Panel */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-[18px] border border-[#E3E8F2] bg-white p-6 shadow-[0px_14px_36px_0px_rgba(36,59,115,0.07)] sm:p-8"
          >
            {/* Header */}
            <h3 className="text-[17px] font-semibold leading-[22.95px] text-[#16245A] [font-family:var(--font-poppins)]">
              Context first. Permission separately.
            </h3>

            {/* Select Input */}
            <div className="mt-5">
              <label
                htmlFor="care-location"
                className="block text-[14px] font-semibold leading-[22.4px] text-[#16245A]"
              >
                Care location
              </label>

              <div className="relative mt-2">
                <select
                  id="care-location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full appearance-none rounded-[10px] border border-[#CBD2E3] bg-[#F6F9FC] py-3 pl-4 pr-10 text-[15px] leading-[19px] text-[#16245A] transition-colors focus:border-[#7657E8] focus:bg-white focus:outline-none"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#5B6678]">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Dynamic Status Message */}
            <div className="mt-4 flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#7657E8]" />
              <p className="text-[13px] leading-[20px] text-[#5B6678]">
                {isLocationSelected
                  ? `Showing published options for ${selectedLocation}.`
                  : "No location selected. General information is shown."}
              </p>
            </div>

            {/* Additional Criteria Notice */}
            <div className="mt-6 border-t border-[#F0F4F8] pt-4">
              <b className="block text-[15px] font-semibold leading-[24px] text-[#16245A] [font-family:var(--font-poppins)]">
                Eligibility & identity
              </b>
              <p className="mt-1 text-[14px] leading-[22.4px] text-[#5B6678]">
                Require their own verified conditions before any operational action.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
