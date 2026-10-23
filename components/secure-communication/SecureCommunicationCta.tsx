"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SecureCommunicationCta() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(165deg, #02125F 0%, #2F42CB 62%, #4267D5 100%)",
      }}
    >
      {/* Background Image Texture with Blur */}
      <div className="pointer-events-none absolute inset-0 select-none opacity-40">
        <Image
          src="/secure-communication/cta-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right filter blur-[2px]"
        />
      </div>

      {/* Darkening Gradient Overlay */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          background: "linear-gradient(90deg, rgba(2, 18, 95, 0.88) 0%, rgba(47, 66, 203, 0.65) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[760px] text-left"
        >
          <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-white leading-[1.18]">
            Learn about clinician coordination
          </h2>

          <p className="mt-4 text-[16px] sm:text-[17.5px] font-normal leading-[1.65] text-[#E6E9FF]">
            Partner discussion is offered only when a verified, published contact route exists.
            Until then, explore the related pages below.
          </p>

          <div className="mt-8 flex items-center">
            <Link
              href="/healthcare-professionals"
              className="inline-flex h-[48px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-semibold text-[#031974] shadow-md transition-all hover:bg-[#F1EEFE] hover:shadow-lg"
            >
              Learn about clinician coordination
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
