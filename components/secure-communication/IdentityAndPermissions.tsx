"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IdentityAndPermissions() {
  return (
    <section className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#D9D3F5]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[800px]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              IDENTITY, DELEGATION AND PERMISSIONS
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
            Four things that are not the same
          </h2>

          <p className="mt-4 text-[16px] sm:text-[18px] font-normal leading-[1.65] text-[#273444]">
            Credential, role, organization assignment, care relationship and lawful proxy are each
            checked separately. Access is denied by default, can be revoked, and is reviewed in
            context.
          </p>
        </motion.div>

        {/* Identity Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-10 overflow-hidden rounded-[22px] bg-white p-4 sm:p-6 border border-[#D9D3F5] shadow-xs"
        >
          <div className="relative h-[160px] sm:h-[220px] md:h-[264px] w-full">
            <Image
              src="/secure-communication/identity-delegation-diagram.png"
              alt="Diagram illustrating separate verification for credentials, roles, organization assignments, care relationships, and lawful proxy"
              fill
              sizes="(max-width: 1340px) 100vw, 1340px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
