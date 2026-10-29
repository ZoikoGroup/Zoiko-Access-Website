"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ClaimsRemittanceCta() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-[96px]"
      style={{
        background: `
          radial-gradient(circle at 5% 19%, rgba(183, 0, 220, 0.9) 0%, rgba(118, 87, 232, 0) 60%),
          linear-gradient(135deg, rgba(10, 26, 75, 1) 51%, rgba(53, 80, 184, 1) 100%),
          radial-gradient(circle at 50% 120%, rgba(118, 87, 232, 0.6) 0%, rgba(118, 87, 232, 0) 70%),
          #0F1A44
        `,
      }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center max-w-[700px] mx-auto"
        >
          {/* H2 */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-white">
            Explore payer coordination.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-white/85 max-w-[620px]">
            See how Zoiko Access is designed around source ownership, literal
            statuses and governed exchange.
          </p>

          {/* Gate note */}
          <p className="mt-2 text-[12.5px] sm:text-[13px] leading-[1.5] text-white/60 max-w-[620px]">
            &ldquo;Discuss institutional requirements&rdquo; appears only once a
            verified intake route exists.
          </p>

          {/* Action button */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/clinical-partnerships-contact"
              className="inline-flex items-center justify-center rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#243B73] transition-all hover:bg-white/90 shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:scale-[1.02]"
            >
              Explore payer coordination →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
