"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OutpatientHero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F6F4FE] to-[#EFEFFE] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-[#E1DBF9]"
    >
      {/* Background lavender ambient map */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-35 mix-blend-multiply">
        <Image
          src="/outpatient-specialist-services/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Radial soft purple glow */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[650px] w-[650px] rounded-full opacity-40 blur-3xl select-none"
        style={{
          background: "radial-gradient(circle, #C1B1FD 0%, rgba(234, 247, 245, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, description, and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7 xl:col-span-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#6D4FE6]" aria-hidden="true" />
              <span className="text-[11.8px] sm:text-[12.5px] font-semibold tracking-[0.14em] text-[#6D4FE6] uppercase">
                HOSPITALS & CLINICS / Outpatient & Specialist Services
              </span>
            </div>

            {/* H1 Title with Figma gradient */}
            <h1 className="mt-4 text-[38px] font-bold leading-[1.08] tracking-[-0.023em] sm:text-[52px] lg:text-[62px]">
              <span className="bg-gradient-to-b from-[#061A78] to-[#714CFE] bg-clip-text text-transparent">
                Help make outpatient and specialist journeys easier to coordinate.
              </span>
            </h1>

            {/* Lead description */}
            <p className="mt-6 max-w-[680px] text-[16px] sm:text-[17.5px] font-normal leading-[1.66] text-[#575387]">
              Zoiko Access is designed to support clearer service information and authorized handoffs
              between participating outpatient clinics, specialists and referring organizations. Local
              availability, referral rules, scheduling and clinical decisions remain with the
              responsible organizations.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="#scheduling"
                className="inline-flex items-center justify-center rounded-[20px] bg-[#714CFE] px-7 py-3.5 text-[15.5px] sm:text-[16px] font-semibold text-white shadow-md shadow-[#714CFE]/25 transition-all hover:bg-[#5E3BD9] hover:shadow-lg active:scale-[0.98]"
              >
                Explore the coordination approach
              </Link>
              <Link
                href="#referrals"
                className="inline-flex items-center justify-center rounded-[20px] border border-[#1B1750] bg-white px-7 py-3.5 text-[15.5px] sm:text-[16px] font-semibold text-[#1B1750] shadow-xs transition-all hover:bg-[#F8F9FE] active:scale-[0.98]"
              >
                Understand referral intake
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3-Photo Layered Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative lg:col-span-5 xl:col-span-5 flex justify-center items-center min-h-[480px] sm:min-h-[520px]"
          >
            <div className="relative w-full max-w-[620px] h-[480px] sm:h-[520px]">
              {/* Photo 1: Specialist talking with colleague (Left: 0, Top: 60px) */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[60px] left-0 w-[270px] sm:w-[335px] h-[250px] sm:h-[310px] rounded-[18px] overflow-hidden border-[6px] border-white shadow-[0px_22px_50px_0px_rgba(27,23,80,0.28)] z-10 bg-gradient-to-br from-[#8E7BEF] to-[#08176D]"
              >
                <Image
                  src="/outpatient-specialist-services/hero-specialist-colleague.png"
                  alt="A specialist speaking with a colleague"
                  fill
                  priority
                  sizes="(max-width: 640px) 270px, 335px"
                  className="object-cover"
                />
              </motion.div>

              {/* Photo 2: Team members reviewing documents (Left: 315px, Top: 21px) */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[21px] right-0 sm:right-auto sm:left-[315px] w-[240px] sm:w-[305px] h-[180px] sm:h-[229px] rounded-[18px] overflow-hidden border-[6px] border-white shadow-[0px_22px_50px_0px_rgba(27,23,80,0.28)] z-20 bg-gradient-to-br from-[#8E7BEF] to-[#08176D]"
              >
                <Image
                  src="/outpatient-specialist-services/hero-team-documents.png"
                  alt="Team members reviewing documents"
                  fill
                  priority
                  sizes="(max-width: 640px) 240px, 305px"
                  className="object-cover"
                />
              </motion.div>

              {/* Photo 3: Clinic team around table (Left: 246px, Top: 254px) */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-2 sm:bottom-auto sm:top-[254px] right-2 sm:right-auto sm:left-[246px] w-[260px] sm:w-[325px] h-[190px] sm:h-[236px] rounded-[18px] overflow-hidden border-[6px] border-white shadow-[0px_22px_50px_0px_rgba(27,23,80,0.28)] z-30 bg-gradient-to-br from-[#8E7BEF] to-[#08176D]"
              >
                <Image
                  src="/outpatient-specialist-services/hero-clinic-table.png"
                  alt="A clinic team around a table"
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, 325px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
