"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MessagesAndStatus() {
  return (
    <section
      id="messages-status"
      className="relative w-full overflow-hidden py-16 md:py-20 lg:py-[72px]"
      style={{
        background: `
          radial-gradient(circle at 85% 20%, rgba(183, 0, 220, 0.45) 0%, rgba(118, 87, 232, 0) 60%),
          linear-gradient(135deg, rgba(10, 26, 75, 1) 51%, rgba(53, 80, 184, 1) 100%),
          linear-gradient(150deg, rgba(75, 52, 201, 0.25) 0%, rgba(118, 87, 232, 0.25) 57%, rgba(66, 103, 213, 0.25) 100%)
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            <div className="inline-flex w-fit items-center rounded-full bg-white/14 px-4 py-1.5 border border-white/30 backdrop-blur-md">
              <span className="text-[13px] font-semibold leading-[20.8px] text-white">
                Messages &amp; status
              </span>
            </div>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-white tracking-[-0.01em]">
              Every update should say who sent it.
            </h2>

            <p className="max-w-[480px] text-[16px] sm:text-[17px] font-normal leading-[27.2px] text-white/85">
              A future live service would need a named issuer and a verified
              timestamp on every status. Statuses use words, never color alone.
            </p>
          </motion.div>

          {/* Right Column: Photo Card with Layered Floating Status Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-7 flex justify-center lg:justify-end"
          >
            {/* Composition Wrapper */}
            <div className="relative w-full max-w-[660px] pt-4 pb-6 sm:py-6 lg:py-4">
              {/* Central Photo Card */}
              <div className="relative mx-auto lg:mr-4 w-full max-w-[580px] sm:max-w-[620px] aspect-[641/369] min-h-[300px] sm:min-h-[350px] lg:min-h-[369px] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/20 shadow-[0px_24px_50px_0px_rgba(10,26,75,0.4)]">
                {/* Full-color Crisp Photo of Couple at Laptop */}
                <Image
                  src="/member-access/messages-workflow-bg.png"
                  alt="Couple reviewing healthcare workflow information together on a laptop"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 620px"
                  className="object-cover object-[center_35%]"
                />

                {/* Subtle soft gradient highlight to ensure readability of internal pill */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Tag Header in upper-left inside photo */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                  <span className="inline-flex items-center rounded-full bg-[#FFF4E0] px-3.5 py-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.06em] text-[#7A4B00] shadow-sm">
                    Example workflow — not live
                  </span>
                </div>
              </div>

              {/* Floating Status Badges - Desktop Absolute Layout (Exact Figma Placement) */}
              <div className="hidden sm:block pointer-events-none">
                {/* 1. White Card: Submitted (Upper-Right) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className="absolute top-0 right-0 lg:-right-3 z-20 pointer-events-auto rounded-[18px] rounded-br-[5px] bg-white px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0px_14px_30px_0px_rgba(0,0,0,0.18)] border border-white/80"
                >
                  <b className="block font-poppins text-[14px] sm:text-[15px] font-semibold leading-[21px] text-[#16245A]">
                    Submitted
                  </b>
                  <span className="block text-[12.5px] sm:text-[13px] font-normal leading-[19px] text-[#5B6678]">
                    Request sent by the member
                  </span>
                </motion.div>

                {/* 2. White Card: Transport-received (Upper-Right below Submitted) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  className="absolute top-[72px] sm:top-[76px] right-0 lg:-right-3 z-20 pointer-events-auto rounded-[18px] rounded-br-[5px] bg-white px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0px_14px_30px_0px_rgba(0,0,0,0.18)] border border-white/80"
                >
                  <b className="block font-poppins text-[14px] sm:text-[15px] font-semibold leading-[21px] text-[#16245A]">
                    Transport-received
                  </b>
                  <span className="block text-[12.5px] sm:text-[13px] font-normal leading-[19px] text-[#5B6678]">
                    Delivery confirmed — no review yet
                  </span>
                </motion.div>

                {/* 3. Purple Card: Payer-acknowledged (Mid-Left) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  className="absolute top-[162px] sm:top-[170px] left-0 lg:-left-6 z-20 pointer-events-auto rounded-[18px] rounded-bl-[5px] bg-[#4B3FB8] px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0px_14px_30px_0px_rgba(0,0,0,0.25)] border border-[#5E51D4]/60 text-white"
                >
                  <b className="block font-poppins text-[14px] sm:text-[15px] font-semibold leading-[21px] text-white">
                    Payer-acknowledged
                  </b>
                  <span className="block text-[12.5px] sm:text-[13px] font-normal leading-[19px] text-white/85">
                    Issuer: plan · verified time required
                  </span>
                </motion.div>

                {/* 4. Purple Card: Information needed (Lower-Left) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.45 }}
                  className="absolute top-[236px] sm:top-[248px] left-0 lg:-left-6 z-20 pointer-events-auto rounded-[18px] rounded-bl-[5px] bg-[#4B3FB8] px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0px_14px_30px_0px_rgba(0,0,0,0.25)] border border-[#5E51D4]/60 text-white"
                >
                  <b className="block font-poppins text-[14px] sm:text-[15px] font-semibold leading-[21px] text-white">
                    Information needed
                  </b>
                  <span className="block text-[12.5px] sm:text-[13px] font-normal leading-[19px] text-white/85">
                    Issuer: plan · what&apos;s needed and why
                  </span>
                </motion.div>

                {/* 5. Purple Card: Determination issued (Bottom-Left) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.55 }}
                  className="absolute top-[310px] sm:top-[326px] left-0 lg:-left-6 z-20 pointer-events-auto rounded-[18px] rounded-bl-[5px] bg-[#4B3FB8] px-4 py-2.5 sm:px-5 sm:py-3 shadow-[0px_14px_30px_0px_rgba(0,0,0,0.25)] border border-[#5E51D4]/60 text-white"
                >
                  <b className="block font-poppins text-[14px] sm:text-[15px] font-semibold leading-[21px] text-white">
                    Determination issued
                  </b>
                  <span className="block text-[12.5px] sm:text-[13px] font-normal leading-[19px] text-white/85">
                    Issuer: plan · official notice
                  </span>
                </motion.div>
              </div>

              {/* Mobile View: Clean Flow Below Card */}
              <div className="flex sm:hidden flex-col gap-2.5 mt-4">
                <div className="rounded-[16px] rounded-br-[4px] bg-white p-3.5 shadow-md">
                  <b className="block font-poppins text-[14px] font-semibold text-[#16245A]">
                    Submitted
                  </b>
                  <span className="text-[12.5px] text-[#5B6678]">
                    Request sent by the member
                  </span>
                </div>
                <div className="rounded-[16px] rounded-br-[4px] bg-white p-3.5 shadow-md">
                  <b className="block font-poppins text-[14px] font-semibold text-[#16245A]">
                    Transport-received
                  </b>
                  <span className="text-[12.5px] text-[#5B6678]">
                    Delivery confirmed — no review yet
                  </span>
                </div>
                <div className="rounded-[16px] rounded-bl-[4px] bg-[#4B3FB8] p-3.5 text-white shadow-md">
                  <b className="block font-poppins text-[14px] font-semibold">
                    Payer-acknowledged
                  </b>
                  <span className="text-[12.5px] text-white/85">
                    Issuer: plan · verified time required
                  </span>
                </div>
                <div className="rounded-[16px] rounded-bl-[4px] bg-[#4B3FB8] p-3.5 text-white shadow-md">
                  <b className="block font-poppins text-[14px] font-semibold">
                    Information needed
                  </b>
                  <span className="text-[12.5px] text-white/85">
                    Issuer: plan · what&apos;s needed and why
                  </span>
                </div>
                <div className="rounded-[16px] rounded-bl-[4px] bg-[#4B3FB8] p-3.5 text-white shadow-md">
                  <b className="block font-poppins text-[14px] font-semibold">
                    Determination issued
                  </b>
                  <span className="text-[12.5px] text-white/85">
                    Issuer: plan · official notice
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
