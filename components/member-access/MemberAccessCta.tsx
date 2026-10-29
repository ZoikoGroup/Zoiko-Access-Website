"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MemberAccessCta() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden py-16 md:py-20 lg:py-[72px]"
      style={{
        background: `
          radial-gradient(circle at 85% 20%, rgba(183, 0, 220, 0.45) 0%, rgba(118, 87, 232, 0) 60%),
          linear-gradient(135deg, rgba(10, 26, 75, 1) 51%, rgba(53, 80, 184, 1) 100%),
          radial-gradient(circle at 15% 0%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 70%),
          linear-gradient(163deg, rgba(118, 87, 232, 0.5) 0%, rgba(66, 103, 213, 0.5) 100%)
        `,
      }}
    >
      <div className="mx-auto flex flex-col items-center text-center w-full max-w-[800px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          {/* H2 Title */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-white tracking-[-0.01em]">
            Explore a governed member-access
            <br />
            approach.
          </h2>

          {/* Description */}
          <p className="max-w-[620px] text-[16px] sm:text-[17px] font-normal leading-[27.2px] text-white/90 pt-1">
            For payer organizations evaluating access and coordination design,
            review the implementation approach and available institutional routes.
          </p>

          {/* CTA Button */}
          <div className="mt-4">
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[16px] font-semibold leading-[25.6px] text-[#3A4DE0] shadow-[0px_12px_26px_0px_rgba(118,87,232,0.3)] transition-all duration-200 hover:bg-slate-50 hover:shadow-[0px_16px_32px_0px_rgba(118,87,232,0.4)] hover:-translate-y-0.5"
            >
              Review the implementation approach →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
