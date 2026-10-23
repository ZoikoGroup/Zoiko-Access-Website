"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SchedulingCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#182CB7] py-16 sm:py-20 lg:py-24">
      {/* Right-Aligned Lab Background Photo */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 h-full w-full select-none sm:w-[65%] lg:w-[60%]">
        <Image
          src="/scheduling-patient-access/cta-bg.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-right"
        />
      </div>

      {/* Blue Gradient Overlay: Solid on left for text readability, translucent on right to reveal the lab */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          background:
            "linear-gradient(90deg, #182CB7 0%, #182CB7 38%, rgba(24, 44, 183, 0.85) 62%, rgba(10, 24, 120, 0.45) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex max-w-[660px] flex-col items-start gap-3.5 text-left"
        >
          {/* Eyebrow (Left-aligned, Melrose) */}
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
            NEXT STEP
          </span>

          {/* Heading (Left-aligned, White) */}
          <h2 className="text-[34px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[42px] lg:text-[46px]">
            Discuss institutional workflows
          </h2>

          {/* Lead Paragraph (Left-aligned, Titan White) */}
          <p className="max-w-[620px] text-[15.5px] leading-[1.65] text-[#E6E9FF] sm:text-[17px]">
            An institutional conversation is offered only when a verified recipient
            and route exist. Until then, read how coordination works.
          </p>

          {/* Action Button (Left-aligned, Catalina Blue text on White pill) */}
          <div className="mt-4">
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[15px] font-semibold text-[#031974] shadow-md transition-all hover:bg-[#F1EEFE] hover:shadow-lg active:scale-95"
            >
              See how coordination works
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
