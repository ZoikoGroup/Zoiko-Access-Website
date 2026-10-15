"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";

export default function Step1Location() {
  return (
    <section
      id="step-1"
      className="w-full bg-white py-16 sm:py-20 lg:py-[76px] font-sans border-b border-[#DFE5F0]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[80px]">
        {/* Top 2 Columns */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Context & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.1364em] text-[#6547BF]">
              01 / LOCATION
            </span>

            <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-[-0.0167em] text-[#243B73] sm:text-[36px] sm:leading-[43.2px]">
              1. Choose your care location.
            </h2>

            <p className="mt-5 text-[16px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[18px] sm:leading-[31.5px]">
              Select the location where you need care to understand which
              information or services are supported. Choosing a location does
              not establish eligibility or grant account or medical-record
              access.
            </p>

            <p className="mt-4 text-[15px] font-normal leading-[1.75] text-[#5E6B7D] sm:text-[16px] sm:leading-[28px]">
              Choose where care is needed, independently of the language you
              read. No IP address or GPS location is used to determine
              entitlement.
            </p>

            <div className="mt-8">
              <Link
                href="#local-context"
                className="inline-flex items-center justify-center rounded-[7px] bg-[#6547BF] px-5 py-[13px] text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-[#5237a3] hover:shadow-md active:scale-[0.98]"
              >
                Understand location context →
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Interactive / Card Preview */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[14px] border border-[#DFE5F0] bg-white p-7 shadow-sm sm:p-8"
          >
            <h3 className="text-[19px] font-bold leading-snug tracking-[-0.0316em] text-[#243B73]">
              Context first. Permission separately.
            </h3>

            {/* Dropdown UI Mockup */}
            <div className="mt-6 flex flex-col gap-2">
              <label
                htmlFor="care-location-preview"
                className="text-[12px] font-semibold text-[#273444]"
              >
                Care location
              </label>
              <div
                id="care-location-preview"
                className="flex h-12 w-full items-center justify-between rounded-[7px] border border-[#DFE5F0] bg-[#F6F9FC] px-4 text-[15px] font-normal text-[#273444]"
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-[#6547BF]" aria-hidden="true" />
                  <span>Choose care location</span>
                </div>
                <ChevronDown className="h-4 w-4 text-[#5E6B7D]" aria-hidden="true" />
              </div>
            </div>

            {/* 3 Clarification Items */}
            <div className="mt-6 divide-y divide-[#DFE5F0] pt-1">
              <div className="py-3.5 first:pt-2">
                <h4 className="text-[14px] font-bold text-[#243B73]">
                  Language preference
                </h4>
                <p className="mt-1 text-[13px] leading-[22.75px] text-[#5E6B7D]">
                  Determines reviewed page language—not service access.
                </p>
              </div>

              <div className="py-3.5">
                <h4 className="text-[14px] font-bold text-[#243B73]">
                  Data residency
                </h4>
                <p className="mt-1 text-[13px] leading-[22.75px] text-[#5E6B7D]">
                  Is governed by the applicable authorized service—not this
                  selector.
                </p>
              </div>

              <div className="py-3.5 last:pb-1">
                <h4 className="text-[14px] font-bold text-[#243B73]">
                  Eligibility and identity
                </h4>
                <p className="mt-1 text-[13px] leading-[22.75px] text-[#5E6B7D]">
                  Require their own verified conditions before an operational
                  action.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width Diagram Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mt-16 w-full overflow-hidden rounded-[12px] border border-[#DFE5F0] shadow-sm"
        >
          <Image
            src="/how-it-works/four-conceptual-stages.png"
            alt="Four conceptual stages: choose care location, explore published options, start an authorized next step, and understand what happens next"
            width={1280}
            height={438}
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
