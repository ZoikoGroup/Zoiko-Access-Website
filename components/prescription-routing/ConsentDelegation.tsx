"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ConsentDelegation() {
  return (
    <section
      id="consent"
      className="w-full py-[70px] border-y border-[#DCD6F2] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #A508BD 0%, #00248F 36%, #01003F 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[36px] items-center">
          {/* Left Column: Eyebrow, H2, Lede, Link */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold leading-[21px] text-[#B49CFA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B49CFA]" aria-hidden="true" />
              <span>Consent and delegation</span>
            </div>

            {/* H2 Title */}
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[36.8px] font-semibold leading-[1.12] text-white">
              Privacy and appropriate
              <br />
              permissions.
            </h2>

            {/* Lede Text */}
            <p className="text-[16.8px] font-normal leading-[28px] text-[#B6A6E4] max-w-[550px] pt-1">
              Only information necessary for an authorized routing step should be shared.
              Caregiver or guardian access requires verified legal or delegated authority.
            </p>

            {/* Link */}
            <div className="pt-2">
              <Link
                href="/privacy-permissions"
                className="inline-flex items-center gap-1.5 font-inter text-[16px] font-semibold leading-[26px] text-[#C1B1FD] transition-colors hover:text-white group"
              >
                <span>Patients: Privacy &amp; permissions</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative w-full max-w-[632px] aspect-[632/340] sm:aspect-[632/380] rounded-[18px] overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-br from-[#4267D5] to-[#7657E8]"
          >
            <Image
              src="/prescription-routing/consent-consultation.webp"
              alt="Healthcare professional consulting with patient regarding prescription consent"
              fill
              sizes="(max-width: 1024px) 100vw, 632px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
