"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrescriptionRoutingHero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden min-h-[615px] flex items-center"
      style={{
        background: "linear-gradient(180deg, #F6F9FC 0%, #EBE9FB 100%)",
      }}
    >
      {/* Background Graphic / Banner from Figma */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/prescription-routing/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Subtle Dark Gradient Overlay to ensure maximum contrast and readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(11, 21, 54, 0.92) 0%, rgba(11, 21, 54, 0.78) 55%, rgba(11, 21, 54, 0.45) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1309px] px-6 sm:px-10 lg:px-8 py-16 lg:py-[65px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Eyebrow, H1 Title, Lede Copy, Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold leading-[21px] text-white">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#F4F2FF]"
                aria-hidden="true"
              />
              <span>Labs &amp; Pharmacies / Prescription routing</span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-[54.4px] font-semibold leading-[1.12] text-white tracking-[-0.02em]">
              How Prescription
              <br />
              Routing Works
            </h1>

            {/* Lede Paragraph */}
            <p className="max-w-[646px] pt-1 text-[16px] font-normal leading-[26px] text-white/95 sm:text-[16px]">
              Prescription routing describes the authorized transfer of prescription
              information from a licensed prescriber&apos;s system toward a permitted pharmacy
              or dispensing service, where supported. Sending information does not confirm
              that the pharmacy has accepted, validated or dispensed a prescription. Local
              rules, professional judgment, patient permissions and the receiving organization
              determine what happens next.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="#routing-steps"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#7657E8] px-[22px] py-[12px] font-poppins text-[15.2px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#6847D9] hover:shadow-md"
              >
                Explore the steps
              </Link>
              <Link
                href="#roles"
                className="inline-flex items-center justify-center rounded-[8px] border border-[#DCD6F2] bg-white px-[22px] py-[12px] font-poppins text-[15.2px] font-semibold text-[#243B73] shadow-sm transition-all duration-200 hover:bg-white/90 hover:shadow-md"
              >
                See who is responsible
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Photo Card with Floating Proof Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[533px] aspect-[533/480] rounded-[20px] overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="/prescription-routing/hero-pharmacist-clinician.webp"
                alt="Pharmacist and clinician reviewing prescription routing details"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 533px"
                className="object-cover"
              />

              {/* Floating Badge 1: Prescriber authorizes */}
              <div
                className="absolute left-4 sm:left-6 top-[28%] z-20 flex items-center gap-2 rounded-[14px] border border-[#DCD6F2] bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#7657E8] shrink-0" aria-hidden="true" />
                <span className="font-poppins text-[12.8px] font-semibold leading-[21px] text-[#243B73]">
                  Prescriber authorizes
                </span>
              </div>

              {/* Floating Badge 2: Pharmacy verifies */}
              <div
                className="absolute right-4 sm:right-6 top-[50%] z-20 flex items-center gap-2 rounded-[14px] border border-[#DCD6F2] bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#7657E8] shrink-0" aria-hidden="true" />
                <span className="font-poppins text-[12.8px] font-semibold leading-[21px] text-[#243B73]">
                  Pharmacy verifies
                </span>
              </div>

              {/* Floating Badge 3: Dispensing decided separately */}
              <div
                className="absolute left-4 sm:left-6 bottom-5 z-20 flex items-center gap-2 rounded-[14px] border border-[#DCD6F2] bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm max-w-[calc(100%-2rem)]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#7657E8] shrink-0" aria-hidden="true" />
                <span className="font-poppins text-[12.8px] font-semibold leading-[21px] text-[#243B73]">
                  Dispensing decided separately
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
