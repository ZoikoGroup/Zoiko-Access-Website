"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const locations = [
  "Choose care location",
  "United Kingdom - England (NHS / Integrated Care Board)",
  "United Kingdom - Scotland (NHS Scotland)",
  "United Kingdom - Wales (NHS Wales)",
  "United Kingdom - Northern Ireland (HSC)",
  "United States - Regulated Health System (EPCS / Surescripts)",
  "European Union - Cross-border Health Directive",
];

export default function CareLocationMarket() {
  const [selectedLoc, setSelectedLoc] = useState(locations[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="market" className="w-full bg-[#F6F9FC] py-[70px] border-b border-[#DCD6F2]">
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Interactive Care Location Selection Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[16px] border border-[#DCD6F2] bg-white p-6 sm:p-7 shadow-sm">
              <label
                htmlFor="care-location-select"
                className="block font-inter text-[13.1px] font-semibold leading-[22px] text-[#243B73] pb-2"
              >
                Care location
              </label>

              {/* Custom Interactive Select Dropdown */}
              <div className="relative">
                <button
                  id="care-location-select"
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex w-full items-center justify-between rounded-[8px] border border-[#DCD6F2] bg-white px-[18px] py-[13px] text-left transition-colors hover:border-[#7657E8] focus:outline-none focus:ring-2 focus:ring-[#7657E8]/20"
                  aria-expanded={isOpen}
                  aria-haspopup="listbox"
                >
                  <span className="font-inter text-[16px] leading-[20px] text-[#243B73] truncate">
                    {selectedLoc}
                  </span>
                  <div className={`h-6 w-6 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    <Image
                      src="/prescription-routing/dropdown-caret.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      role="listbox"
                      className="absolute left-0 right-0 top-full z-30 mt-1 max-h-60 overflow-auto rounded-[8px] border border-[#DCD6F2] bg-white shadow-xl py-1 focus:outline-none"
                    >
                      {locations.map((loc, i) => (
                        <li
                          key={i}
                          role="option"
                          aria-selected={selectedLoc === loc}
                          onClick={() => {
                            setSelectedLoc(loc);
                            setIsOpen(false);
                          }}
                          className={`cursor-pointer px-4 py-2.5 font-inter text-[14.5px] transition-colors ${
                            selectedLoc === loc
                              ? "bg-[#EBE9FB] text-[#243B73] font-semibold"
                              : "text-[#273444] hover:bg-[#F6F3FE]"
                          }`}
                        >
                          {loc}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Notice Box below dropdown */}
              <div className="mt-4 rounded-[10px] bg-[#EBE9FB] p-4">
                <p className="font-inter text-[13.6px] font-normal leading-[22px] text-[#273444]">
                  No live local availability is shown. Educational guidance remains available.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Context Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-2.5 lg:col-span-5"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold leading-[21px] text-[#4267D5]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span>Pharmacy and market selection</span>
            </div>

            {/* H2 Title */}
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[36.8px] font-semibold leading-[1.12] text-[#243B73]">
              Routing depends on
              <br />
              local services.
            </h2>

            {/* Lede */}
            <p className="pt-1 text-[16.8px] font-normal leading-[28px] text-[#273444]">
              Not every jurisdiction, prescriber system or pharmacy participates in the same
              pathways. Selecting a care location helps explain applicable information; it does
              not guarantee service.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
