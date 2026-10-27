"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PrescriptionRoutingCta() {
  return (
    <section
      id="final-cta"
      className="relative w-full py-20 lg:py-[100px] px-6 sm:px-12 lg:px-[140px] overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #243B73 0%, #3150B8 70%, #1A2B56 100%)",
      }}
    >
      {/* Decorative Radial Ambient Glow */}
      <div
        className="pointer-events-none absolute right-[-100px] top-[-100px] h-[550px] w-[550px] rounded-full opacity-40 blur-3xl select-none"
        style={{
          background: "radial-gradient(circle, #5B45D6 0%, rgba(91,69,214,0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full opacity-30 blur-3xl select-none"
        style={{
          background: "radial-gradient(circle, #A508BD 0%, rgba(165,8,189,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1160px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 text-left"
        >
          {/* H2 Title */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[36.8px] font-semibold leading-[1.15] text-white max-w-[850px]">
            Explore a responsible integration conversation.
          </h2>

          {/* Paragraph */}
          <p className="max-w-[545px] text-[16px] font-normal leading-[26px] text-[#D6DCFF]">
            Healthcare organizations evaluating authorized routing and pharmacy coordination
            can review supported integration and governance information.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Link
              href="/clinical-partnerships-contact"
              className="inline-flex items-center justify-center rounded-[8px] bg-white px-[22px] py-[12px] font-poppins text-[15.2px] font-semibold text-[#4267D5] shadow-md transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
            >
              Explore partnership information
            </Link>

            <span className="inline-flex items-center rounded-[10px] border border-white/60 bg-white/10 px-3 py-1 font-inter text-[11.5px] font-semibold leading-[19px] text-white backdrop-blur-sm">
              Only when destination approved
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
