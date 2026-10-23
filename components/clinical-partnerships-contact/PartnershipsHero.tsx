"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnershipsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F9FD] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28">
      {/* Background Hero Texture / Image */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-40">
        <Image
          src="/clinical-partnerships-contact/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Decorative Radial Glows */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl select-none"
        style={{
          background: "radial-gradient(circle, #7160D5 0%, rgba(113,96,213,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading and Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Tag / Kick */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
              <span className="text-[12.2px] font-semibold tracking-wide text-[#7B3FF2]">
                Clinicians / Clinical partnerships
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="mt-4 text-[38px] font-bold leading-[1.14] tracking-tight sm:text-[52px] lg:text-[67px]">
              <span className="bg-gradient-to-b from-[#241C59] to-[#4267D5] bg-clip-text text-transparent">
                Connect with the
                <br />
                clinical partnerships team
              </span>
            </h1>

            {/* Lead Description */}
            <p className="mt-6 max-w-[690px] text-[16px] font-normal leading-[1.65] text-black sm:text-[17.9px]">
              Explore how Zoiko Access is designed to support appropriate care coordination
              between independent healthcare organizations. Qualified professionals and
              organizations can request a conversation where an authorized partnerships channel
              is available.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/healthcare-professionals"
                className="inline-flex h-[48px] items-center justify-center rounded-[6px] bg-[#4267D5] px-7 text-[16px] font-semibold text-white shadow-sm transition-all hover:bg-[#3453b3] hover:shadow-md"
              >
                Explore clinician solutions
              </Link>
              <a
                href="#faq"
                className="inline-flex h-[48px] items-center justify-center rounded-[6px] border border-[#001B6A] px-7 text-[16px] font-semibold text-[#282467] transition-all hover:bg-[#001B6A]/5"
              >
                Read the questions
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Photo Collage & Gated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[590px] lg:col-span-5"
          >
            <div className="relative h-[480px] sm:h-[520px] w-full">
              {/* Image 1 - Clinician (Left large card) */}
              <div className="absolute top-[30px] left-0 h-[320px] w-[270px] sm:h-[360px] sm:w-[330px] overflow-hidden rounded-tl-[26px] rounded-tr-[26px] rounded-br-[90px] rounded-bl-[26px] bg-gradient-to-br from-[#7160D5] to-[#031462] p-[1.5px] shadow-lg">
                <div className="relative h-full w-full overflow-hidden rounded-tl-[25px] rounded-tr-[25px] rounded-br-[89px] rounded-bl-[25px]">
                  <Image
                    src="/clinical-partnerships-contact/hero-clinician.png"
                    alt="A clinician in conversation"
                    fill
                    sizes="(max-width: 640px) 270px, 330px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Image 2 - Hospital Team (Top right) */}
              <div className="absolute top-0 right-0 h-[200px] w-[205px] sm:h-[230px] sm:w-[236px] overflow-hidden rounded-tl-[26px] rounded-tr-[90px] rounded-br-[26px] rounded-bl-[26px] bg-gradient-to-br from-[#7160D5] to-[#031462] p-[1.5px] shadow-lg">
                <div className="relative h-full w-full overflow-hidden rounded-tl-[25px] rounded-tr-[89px] rounded-br-[25px] rounded-bl-[25px]">
                  <Image
                    src="/clinical-partnerships-contact/hero-hospital.png"
                    alt="A hospital team"
                    fill
                    sizes="(max-width: 640px) 205px, 236px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Image 3 - Care Coordinator (Middle right) */}
              <div className="absolute top-[218px] right-[10px] sm:top-[250px] sm:right-[15px] h-[150px] w-[220px] sm:h-[170px] sm:w-[260px] overflow-hidden rounded-tl-[26px] rounded-tr-[26px] rounded-br-[26px] rounded-bl-[90px] bg-gradient-to-br from-[#7160D5] to-[#031462] p-[1.5px] shadow-lg">
                <div className="relative h-full w-full overflow-hidden rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[89px]">
                  <Image
                    src="/clinical-partnerships-contact/hero-coordinator.png"
                    alt="A care coordinator at a desk"
                    fill
                    sizes="(max-width: 640px) 220px, 260px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Gated Badge Illustration */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-[67px] sm:translate-x-0 w-[95%] sm:w-[426px] z-10">
                <div className="relative overflow-hidden rounded-[24px] bg-white p-2 shadow-2xl border border-[#E1DBF9]">
                  <Image
                    src="/clinical-partnerships-contact/hero-gate-illustration.svg"
                    alt="Gated contact channel illustration: healthcare organization and partnerships team with locked gate"
                    width={390}
                    height={148}
                    className="w-full h-auto object-contain"
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
