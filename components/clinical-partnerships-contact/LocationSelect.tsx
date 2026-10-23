"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const locations = [
  "Choose a country or region",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "European Union",
  "Singapore",
  "Other international jurisdictions",
];

export default function LocationSelect() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section
      id="location"
      className="relative w-full border-y border-[#E1DBF9] bg-gradient-to-br from-[#07176C] to-[#3F61D3] py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Rail / Section Tag */}
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-[28px] rounded-full bg-[#B6A6E4]" aria-hidden="true" />
          <span className="text-[11.8px] font-semibold tracking-wide text-[#B6A6E4]">
            Location
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Selector Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:col-span-7"
          >
            <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-white sm:text-[36.8px]">
              Choose the country or region of your inquiry
            </h2>
            <p className="mt-3 text-[15px] font-normal leading-[1.65] text-[#F3F3F6] sm:text-[16px]">
              The service region is not data residency, and it is not evidence that patient care is
              available there.
            </p>

            {/* Selection Card Container */}
            <div className="mt-8 rounded-[16px] bg-white/20 p-5 sm:p-7 backdrop-blur-md border border-white/25 shadow-lg">
              <label
                htmlFor="location-select"
                className="block text-[18px] sm:text-[20px] font-semibold text-[#DDD5F2]"
              >
                Country or region
              </label>

              {/* Styled Select Input */}
              <div className="relative mt-3.5">
                <select
                  id="location-select"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full appearance-none rounded-[8px] border border-[#B9B0EA] bg-white px-4 py-3.5 text-[16px] font-normal text-[#1B1750] shadow-sm focus:border-[#7B3FF2] focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/20 cursor-pointer"
                >
                  {locations.map((loc, idx) => (
                    <option key={idx} value={loc} className="text-[#1B1750]">
                      {loc}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <Image
                    src="/clinical-partnerships-contact/icon-select-arrow.svg"
                    alt=""
                    width={14}
                    height={8}
                    className="h-2 w-3.5"
                  />
                </div>
              </div>

              {/* Status Notice Box */}
              <div className="mt-4 rounded-[12px] border border-[#B49CFA] bg-white p-5 text-[#575387] shadow-sm">
                <p className="text-[14.8px] sm:text-[15.2px] leading-[1.65]">
                  A clinical partnerships contact channel is not currently available for the
                  selected location. You can review our clinician overview and published
                  participation guidance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: World Map Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative h-[320px] sm:h-[420px] w-full max-w-[515px] overflow-hidden rounded-[20px] bg-white p-2 shadow-2xl border border-white/20">
              <div className="relative h-full w-full overflow-hidden rounded-[14px]">
                <Image
                  src="/clinical-partnerships-contact/location-map.png"
                  alt="Global healthcare delivery network coverage map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
