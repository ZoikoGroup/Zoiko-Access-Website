"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HospitalCta() {
  return (
    <section className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[400px] flex items-center bg-[#07176E]">
      {/* Right-aligned Background Photo of Team with Headsets */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden">
        <Image
          src="/hospitals-clinics/cta_bg.png"
          alt="Healthcare Operations Support Team"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Soft blur overlay as specified in Figma */}
        <div className="absolute inset-0 backdrop-blur-[1.5px]" />
      </div>

      {/* Gradient Overlays: Rich Blue fade from left to right */}
      {/* 1. Base gradient across entire banner */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(165deg, rgba(2, 18, 95, 0.98) 0%, rgba(27, 47, 181, 0.88) 55%, rgba(123, 63, 242, 0.75) 100%)",
        }}
      />

      {/* 2. Strong horizontal directional gradient ensuring solid deep blue on the left and transparent blue over the photo on the right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #031464 0%, #051A7A 38%, rgba(8, 28, 130, 0.78) 58%, rgba(13, 37, 166, 0.48) 82%, rgba(13, 37, 166, 0.38) 100%)",
        }}
      />

      {/* Content Container: Exactly Left-Aligned matching Figma */}
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start text-left max-w-[680px]"
        >
          {/* Eyebrow */}
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
            NEXT STEP
          </span>

          {/* H2 Title */}
          <h2 className="mt-3.5 text-[32px] sm:text-[40px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
            Explore the care operations model
          </h2>

          {/* Description */}
          <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#E6E9FF] max-w-[620px]">
            A qualified contact route appears only once it is registered,
            staffed and privacy-reviewed. Until then, explore the model and the
            related pages.
          </p>

          {/* Action Button: Left-Aligned */}
          <div className="mt-7">
            <Link
              href="#care-operations"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[15px] font-semibold text-[#031974] shadow-md transition-all hover:bg-white/95 hover:shadow-lg active:scale-[0.98]"
            >
              Explore care operations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
