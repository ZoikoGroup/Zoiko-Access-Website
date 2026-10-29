"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClaimsGovernanceCta() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: `
          radial-gradient(circle at 5% 19%, rgba(183, 0, 220, 0.85) 0%, rgba(118, 87, 232, 0) 60%),
          radial-gradient(circle at 50% 0%, rgba(118, 87, 232, 0.5) 0%, rgba(118, 87, 232, 0) 70%),
          linear-gradient(153deg, rgba(22, 36, 90, 1) 0%, rgba(46, 63, 158, 1) 67%, rgba(90, 67, 201, 1) 100%)
        `,
      }}
    >
      <div className="relative mx-auto max-w-[1300px] px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-[800px] flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-[2px] w-[22px] rounded-full bg-[#C9BDFB]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#C9BDFB]">
              Institutional evaluation
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[40px]">
            Evaluate claims coordination responsibly.
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[680px] text-[16px] font-normal leading-[1.6] text-white/85">
            Learn more about claims and remittance coordination and payer
            integrations.
          </p>

          {/* Gate Verification Notice */}
          <p className="mt-2 max-w-[680px] text-[13px] font-normal leading-[1.6] text-white/85">
            An institutional inquiry appears only once a receiving team is
            verified.
          </p>

          {/* Buttons Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/claims-remittance"
              className="inline-flex items-center justify-center rounded-[10px] bg-white px-[22px] py-[12px] text-[15px] font-semibold text-[#243B73] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              Claims &amp; remittance coordination →
            </Link>
            <Link
              href="/become-partner"
              className="inline-flex items-center justify-center rounded-[10px] border-2 border-white px-[22px] py-[12px] text-[15px] font-semibold text-white transition-all hover:bg-white/10"
            >
              Payer integrations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
