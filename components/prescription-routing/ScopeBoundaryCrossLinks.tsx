"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ScopeBoundaryCrossLinks() {
  return (
    <section
      id="scope-boundaries"
      className="w-full py-[70px] border-b border-[#DCD6F2]"
      style={{
        background: "radial-gradient(circle at 86% 31%, #AC96FF 0%, #E0D8FF 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10 lg:px-0">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 pb-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold leading-[21px] text-[#4267D5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span>Scope boundary cross-links</span>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[36.8px] font-semibold leading-[1.12] text-[#243B73]">
            Explore related information.
          </h2>
        </motion.div>

        {/* Visual Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-[1300/449] rounded-[24px] sm:rounded-[36px] lg:rounded-[50px] overflow-hidden shadow-xl border border-white/40"
        >
          <Image
            src="/prescription-routing/related-crosslinks-banner.webp"
            alt="Related Zoiko Access documentation, healthcare services, and clinical pathways"
            fill
            sizes="(max-width: 1400px) 100vw, 1300px"
            className="object-cover"
          />

          {/* Overlay Navigation Links over the cross-links graphic */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 bg-gradient-to-t from-black/40 via-transparent to-transparent">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/care-pathways"
                className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 font-inter text-[13px] font-semibold text-[#243B73] shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-lg"
              >
                Care pathways →
              </Link>
              <Link
                href="/care-transitions"
                className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 font-inter text-[13px] font-semibold text-[#243B73] shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-lg"
              >
                Care transitions →
              </Link>
              <Link
                href="/privacy-permissions"
                className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 font-inter text-[13px] font-semibold text-[#243B73] shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-lg"
              >
                Privacy &amp; permissions →
              </Link>
              <Link
                href="/clinical-responsibility"
                className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 font-inter text-[13px] font-semibold text-[#243B73] shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-lg"
              >
                Clinical responsibility →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
