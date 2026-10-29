"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InstitutionalEnquiry() {
  return (
    <section id="enquiry" className="w-full bg-[#F6F9FC] py-16 sm:py-20 lg:py-[70px]">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Media Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative w-full max-w-[565px] overflow-hidden rounded-[20px] border border-[#E3E8F2] shadow-sm bg-slate-100">
              <Image
                src="/become-partner/institutional-enquiry.png"
                alt="Institutional enquiry review and partnerships coordination"
                width={565}
                height={459}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Information & Gated Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col lg:col-span-7"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
                Institutional enquiry
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.2] tracking-tight text-[#16245A] sm:text-[38px] lg:text-[40px]">
              Enquiries open only when we can
              <br className="hidden sm:inline" /> receive them properly.
            </h2>

            {/* Lead */}
            <p className="mt-3.5 text-[15.5px] font-normal leading-[1.65] text-[#5B6678] sm:text-[17px]">
              An enquiry form appears here only once staffing, routing, a privacy notice and a receipt
              process are verified. An enquiry is never an approval.
            </p>

            {/* Panel */}
            <div className="mt-7 rounded-[16px] border border-[#E3E8F2] bg-white p-7 sm:p-8 shadow-sm">
              <h3 className="text-[19px] font-semibold leading-[26px] text-[#16245A]">
                Until then
              </h3>

              <ul className="mt-4 flex flex-col gap-3.5">
                {/* Item 1 */}
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEE9FD]">
                    <Image
                      src="/become-partner/check-tick.svg"
                      alt=""
                      width={8}
                      height={6}
                      aria-hidden="true"
                    />
                  </span>
                  <Link
                    href="#next-step"
                    className="text-[15px] font-normal leading-[24px] text-[#4267D5] hover:underline"
                  >
                    Read the implementation approach
                  </Link>
                </li>

                {/* Item 2 */}
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEE9FD]">
                    <Image
                      src="/become-partner/check-tick.svg"
                      alt=""
                      width={8}
                      height={6}
                      aria-hidden="true"
                    />
                  </span>
                  <Link
                    href="#technical-diligence"
                    className="text-[15px] font-normal leading-[24px] text-[#4267D5] hover:underline"
                  >
                    Review payer integrations &amp; governance
                  </Link>
                </li>

                {/* Item 3 */}
                <li className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEE9FD]">
                    <Image
                      src="/become-partner/check-tick.svg"
                      alt=""
                      width={8}
                      height={6}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[15px] font-normal leading-[24px] text-[#273444]">
                    Members: contact your plan or provider directly
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
