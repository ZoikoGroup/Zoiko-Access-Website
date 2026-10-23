"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SecureCommunicationHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F9FD] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-[#E7E9F4]">
      {/* Ambient Texture / Map Background */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-30">
        <Image
          src="/secure-communication/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* Ambient Radial Lighting */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[600px] w-[600px] rounded-full opacity-35 blur-3xl select-none"
        style={{
          background: "radial-gradient(circle, #7B3FF2 0%, rgba(66,103,213,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading and Description */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Kick / Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
              <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
                CLINICIANS / CLINICAL WORKFLOWS
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="mt-4 text-[38px] font-bold leading-[1.15] tracking-[-0.0225em] text-[#031974] sm:text-[50px] lg:text-[62px]">
              <span className="bg-gradient-to-b from-[#292A71] to-[#4267D5] bg-clip-text text-transparent">
                Secure communication
                <br />
                that makes responsibilities clear.
              </span>
            </h1>

            {/* Lead Paragraph */}
            <p className="mt-6 max-w-[720px] text-[16px] font-normal leading-[1.68] text-[#273444] sm:text-[17.5px]">
              Healthcare teams often coordinate across separate organizations, systems and care
              settings. Zoiko Access is designed to support authorized professional communication
              and traceable handoffs where participating services, permissions and local
              requirements allow. Sending a message does not mean it has been clinically reviewed
              or acted upon.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#what-it-means"
                className="inline-flex h-[48px] items-center justify-center rounded-[20px] bg-[#4267D5] px-7 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-[#3453b3] hover:shadow-md"
              >
                Explore communication principles
              </a>
              <a
                href="#sender-recipient"
                className="inline-flex h-[48px] items-center justify-center rounded-[20px] border-2 border-[#00074A] px-7 text-[15px] font-semibold text-[#020246] transition-all hover:bg-[#00074A]/5"
              >
                Understand clinician coordination
              </a>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Staggered Image Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[440px] lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 - Shifted slightly up */}
              <div className="relative -mt-4 overflow-hidden rounded-[22px] border-3 border-white/70 bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF] p-1 shadow-lg aspect-[172/229]">
                <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                  <Image
                    src="/secure-communication/hero-card-1.png"
                    alt="Healthcare professional reviewing clinical workflow"
                    fill
                    priority
                    sizes="(max-width: 640px) 160px, 200px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative overflow-hidden rounded-[22px] border-3 border-white/70 bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF] p-1 shadow-lg aspect-[186/243]">
                <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                  <Image
                    src="/secure-communication/hero-card-2.png"
                    alt="Clinical team coordination"
                    fill
                    priority
                    sizes="(max-width: 640px) 160px, 200px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card 3 - Shifted down */}
              <div className="relative -mt-4 overflow-hidden rounded-[22px] border-3 border-white/70 bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF] p-1 shadow-lg aspect-[174/232]">
                <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                  <Image
                    src="/secure-communication/hero-card-3.png"
                    alt="Care setting communication"
                    fill
                    sizes="(max-width: 640px) 160px, 200px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative overflow-hidden rounded-[22px] border-3 border-white/70 bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF] p-1 shadow-lg aspect-[187/243]">
                <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                  <Image
                    src="/secure-communication/hero-card-4.png"
                    alt="Specialist handoff overview"
                    fill
                    sizes="(max-width: 640px) 160px, 200px"
                    className="object-cover"
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
