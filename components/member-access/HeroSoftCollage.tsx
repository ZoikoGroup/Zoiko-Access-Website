"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSoftCollage() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden py-16 md:py-20 lg:py-[70px]"
      style={{
        background: `
          radial-gradient(circle at 85% 20%, rgba(183, 0, 220, 0.45) 0%, rgba(118, 87, 232, 0) 60%),
          linear-gradient(135deg, rgba(10, 26, 75, 1) 51%, rgba(53, 80, 184, 1) 100%),
          radial-gradient(circle at 90% 10%, rgba(227, 218, 255, 0.25) 0%, rgba(227, 218, 255, 0) 60%),
          radial-gradient(circle at 0% 100%, rgba(221, 231, 255, 0.2) 0%, rgba(221, 231, 255, 0) 60%),
          #FBFAFF
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Eyebrow, Title, Description, Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 lg:col-span-6"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 shadow-[0px_4px_14px_0px_rgba(118,87,232,0.1)] border border-[#8E7BEF]/30 bg-white/10 backdrop-blur-md">
              <span className="text-[13px] font-semibold leading-[20.8px] text-[#A58BF5]">
                Payers &amp; Insurers · Member access
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] font-semibold leading-[1.08] tracking-[-0.0227em] text-white">
              Member access, with{" "}
              <span className="text-[#8E7BEF] drop-shadow-sm">
                clear responsibilities.
              </span>
            </h1>

            {/* Lede Paragraph */}
            <p className="max-w-[560px] pt-1 text-[16px] sm:text-[18px] font-normal leading-[28.8px] text-[#DBE5ED]">
              Explore how a health plan may guide members through benefits
              information, approved service pathways, and next steps. What is
              available depends on the plan, location, identity and permissions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <Link
                href="#journey"
                className="inline-flex items-center justify-center rounded-full bg-[#7657E8] px-7 py-3.5 text-[16px] font-semibold leading-[25.6px] text-white shadow-[0px_12px_26px_0px_rgba(118,87,232,0.3)] transition-all duration-200 hover:bg-[#6745e3] hover:shadow-[0px_16px_32px_0px_rgba(118,87,232,0.4)] hover:translate-y-[-1px]"
              >
                Explore the member journey →
              </Link>
              <Link
                href="#audiences"
                className="inline-flex items-center justify-center rounded-full border border-[#DCD3FB] bg-white px-7 py-3 text-[16px] font-semibold leading-[25.6px] text-[#243B73] transition-all duration-200 hover:bg-slate-50 hover:shadow-md"
              >
                Eligibility &amp; benefits
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Soft Human Photo Collage with Floating Chat Bubbles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative lg:col-span-6 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[560px] h-[460px] sm:h-[500px]">
              {/* Photo 1: Top-center primary photo */}
              <div className="absolute left-[8%] sm:left-[10%] top-0 w-[65%] sm:w-[385px] h-[280px] sm:h-[340px] rounded-[32px] overflow-hidden shadow-[0px_24px_50px_0px_rgba(36,59,115,0.18)] border border-white/20">
                <Image
                  src="/member-access/hero-collage-1.png"
                  alt="Member accessing healthcare information on tablet"
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, 385px"
                  className="object-cover object-center"
                />
              </div>

              {/* Photo 2: Top-right arch portrait */}
              <div className="absolute right-0 top-[18%] sm:top-[22%] w-[42%] sm:w-[248px] h-[180px] sm:h-[220px] rounded-t-[140px] sm:rounded-t-[200px] rounded-b-[32px] overflow-hidden shadow-[0px_24px_50px_0px_rgba(36,59,115,0.18)] border border-white/20">
                <Image
                  src="/member-access/hero-collage-2.png"
                  alt="Care provider smiling gently"
                  fill
                  priority
                  sizes="(max-width: 768px) 45vw, 248px"
                  className="object-cover object-center"
                />
              </div>

              {/* Photo 3: Bottom-left accent card */}
              <div className="absolute left-[-2%] sm:left-[0%] bottom-[4%] sm:bottom-[8%] w-[48%] sm:w-[273px] h-[140px] sm:h-[180px] rounded-[32px] overflow-hidden shadow-[0px_24px_50px_0px_rgba(36,59,115,0.18)] border border-white/20 bg-gradient-to-tr from-[#DCD3FB] to-[#C7D3F5]">
                <Image
                  src="/member-access/hero-collage-3.png"
                  alt="Family member reviewing documents"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 273px"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Chat Bubble 1 (White Question Bubble) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute right-[2%] sm:right-[14%] bottom-[22%] sm:bottom-[24%] z-20 w-[210px] sm:w-[230px] rounded-[18px] rounded-bl-[4px] bg-white p-3 sm:py-3 sm:px-4 shadow-[0px_14px_30px_0px_rgba(36,59,115,0.15)] border border-[#E3E8F2]/60"
              >
                <p className="text-[13px] sm:text-[14px] font-medium leading-[20px] sm:leading-[22.4px] text-[#16245A]">
                  Who answers my benefits question?
                </p>
              </motion.div>

              {/* Floating Chat Bubble 2 (Teal Answer Bubble) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute right-[16%] sm:right-[26%] bottom-[4%] sm:bottom-[6%] z-30 w-[210px] sm:w-[230px] rounded-[18px] rounded-br-[4px] bg-[#7657E8] p-3 sm:py-3 sm:px-4 shadow-[0px_14px_30px_0px_rgba(36,59,115,0.2)] text-white"
              >
                <p className="text-[13px] sm:text-[14px] font-medium leading-[20px] sm:leading-[22.4px] text-white">
                  Your plan does — here&apos;s how to reach them.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
