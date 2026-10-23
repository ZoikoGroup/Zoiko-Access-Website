"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ParticipationCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#041464] py-18 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      {/* Background Graphic Image on Right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[65%] sm:w-[60%] lg:w-[62%] select-none">
        <Image
          src="/private-practices/cta-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft blue tint over the image itself */}
        <div className="absolute inset-0 bg-[#0c229e]/45 mix-blend-multiply" />
      </div>

      {/* Deep Blue Gradient Fading from Solid Blue on Left across the Image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #041464 0%, #041464 36%, rgba(4, 20, 100, 0.92) 50%, rgba(12, 34, 158, 0.6) 72%, rgba(12, 34, 158, 0.35) 100%)",
        }}
      />

      {/* Left-Aligned Content Container */}
      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left"
        >
          {/* Eyebrow */}
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9BDF5] uppercase">
            PARTICIPATION
          </span>

          {/* H2 Title */}
          <h2 className="mt-3 text-[32px] sm:text-[40px] lg:text-[42px] font-semibold tracking-[-0.02em] text-white">
            Learn about Zoiko Access
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-[540px] text-[15.5px] sm:text-[17px] font-normal leading-[1.62] text-[#E6E9FF]">
            Institutional contact is shown only when an approved operational
            endpoint and recipient exist. Do not send patient or health details
            through any commercial inquiry.
          </p>

          {/* Action CTA Button */}
          <div className="mt-8">
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[15px] font-semibold text-[#031974] shadow-md transition-all hover:bg-[#F1EEFE] hover:shadow-lg active:scale-[0.98]"
            >
              Learn about Zoiko Access
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
