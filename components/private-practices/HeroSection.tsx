"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-[#F1EEFE] pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-[#DBE5ED]">
      {/* Background Subtle Map / Texture */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-25">
        <Image
          src="/private-practices/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Hero Gradient SVG Overlay */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-[850px] w-[1100px] select-none opacity-40">
        <Image
          src="/private-practices/hero-gradient-overlay.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Eyebrow & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-6 xl:col-span-7"
          >
            {/* Eyebrow / Breadcrumb */}
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              HOSPITALS &amp; CLINICS / FOR PRIVATE PRACTICES
            </span>

            {/* H1 Heading */}
            <h1 className="mt-4 text-[40px] sm:text-[54px] lg:text-[62px] font-bold leading-[1.06] tracking-[-0.0181em]">
              <span className="bg-gradient-to-b from-[#031974] via-[#241C59] to-[#724CFF] bg-clip-text text-transparent">
                Care coordination
                <br />
                designed with
                <br />
                independent
                <br />
                practices in mind.
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="mt-6 max-w-[560px] text-[16.5px] sm:text-[18px] font-normal leading-[1.65] text-[#273444]">
              Zoiko Access is designing digital pathways that may help
              participating practices guide patients, coordinate authorized
              requests and keep next steps clearer, where approved services
              and integrations are available.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-[20px] bg-[#6B49F7] px-6 py-2.5 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#5835ea] hover:shadow-lg active:scale-[0.98]"
              >
                Explore how it works
              </Link>
              <Link
                href="/hospitals-clinics"
                className="inline-flex items-center justify-center rounded-[20px] border border-[#031974] bg-white px-6 py-2.5 text-[15px] font-semibold text-[#031974] transition-all hover:bg-[#031974]/5 active:scale-[0.98]"
              >
                See care operations
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3 Overlapping Photo Cards Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:col-span-6 xl:col-span-5"
          >
            <div className="relative h-[480px] w-[540px] max-w-full">
              {/* Card 1: Main / Bottom-Left consultation scene */}
              <div
                className="absolute left-0 top-12 z-20 h-[280px] w-[300px] sm:h-[305px] sm:w-[335px] overflow-hidden rounded-[28px] border-[5px] border-white shadow-[0px_20px_44px_0px_rgba(47,66,203,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(138deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/private-practices/hero-card-1.png"
                    alt="Doctor in consultation"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 340px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Card 2: Top-Right clinical paperwork & review */}
              <div
                className="absolute right-0 top-0 z-10 h-[220px] w-[235px] sm:h-[245px] sm:w-[265px] overflow-hidden rounded-[28px] border-[5px] border-white shadow-[0px_20px_44px_0px_rgba(47,66,203,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(137deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/private-practices/hero-card-2.png"
                    alt="Clinical team reviewing records"
                    fill
                    priority
                    sizes="(max-width: 768px) 240px, 270px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Card 3: Bottom-Right digital care coordination */}
              <div
                className="absolute right-2 bottom-0 z-30 h-[205px] w-[285px] sm:h-[225px] sm:w-[315px] overflow-hidden rounded-[28px] border-[5px] border-white shadow-[0px_20px_44px_0px_rgba(47,66,203,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/private-practices/hero-card-3.png"
                    alt="Healthcare professional using coordination system"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
