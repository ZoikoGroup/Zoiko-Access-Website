"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface Category {
  title: string;
  detail: string;
}

const categories: Category[] = [
  {
    title: "Destination",
    detail:
      "Facility, clinic, and specialty service identifiers matched against verified institutional directories to ensure accurate routing without ambiguity.",
  },
  {
    title: "Reason or category",
    detail:
      "Clinical objective, requested specialty evaluation, or diagnostic procedure category needed to assess initial departmental fit.",
  },
  {
    title: "Initiating authority",
    detail:
      "Identity, professional registration, authorized organization, and clinical role of the initiating sender.",
  },
  {
    title: "Consent or legal basis",
    detail:
      "Documented patient consent, direct care relationship, or statutory authority justifying the cross-organizational disclosure.",
  },
  {
    title: "Relevant clinical context",
    detail:
      "Essential summaries, recent lab values, or specific diagnostic indicators strictly required for clinical triage, omitting extraneous history.",
  },
  {
    title: "Source reference",
    detail:
      "Unique transaction identifiers, sender EHR order IDs, and immutable timestamps to maintain audit provenance across systems.",
  },
  {
    title: "Attachments, when necessary",
    detail:
      "Discrete diagnostic imaging, pathology reports, or prior letters included only when specifically needed for clinical decision-making.",
  },
];

export default function MinimumNecessaryIntake() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Lead & Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-7"
          >
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              MINIMUM NECESSARY INTAKE
            </span>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
              Share only what a lawful
              <br />
              purpose needs
            </h2>
            <p className="mt-3 text-[16px] font-normal leading-[1.65] text-[#273444] sm:text-[17px]">
              Seven categories of information a referral may carry. No health
              details are collected here.
            </p>

            {/* Accordion Categories */}
            <div className="mt-8 flex flex-col gap-2.5">
              {categories.map((cat, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={cat.title}
                    className="overflow-hidden rounded-[14px] border border-[#D9D3F5] bg-white transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-[#F8F9FE] cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[16px] font-semibold text-[#031974] sm:text-[16.5px]">
                          {cat.title}
                        </span>
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F1EEFE] text-[#7B3FF2]">
                        {isOpen ? (
                          <Minus className="h-3.5 w-3.5" />
                        ) : (
                          <Plus className="h-3.5 w-3.5" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#F1EEFE] px-5 py-3.5 text-[14.5px] leading-[1.65] text-[#273444]">
                            {cat.detail}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Visual Photo Figure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65 }}
            className="flex justify-center lg:col-span-5"
          >
            <div
              className="relative h-[480px] sm:h-[580px] w-full max-w-[500px] overflow-hidden rounded-[30px] shadow-2xl border border-white/50"
              style={{
                background:
                  "linear-gradient(129deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
              }}
            >
              {/* Decorative SVG background */}
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <Image
                  src="/referral-intake-routing/minimum-intake-bg.svg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main Photo */}
              <Image
                src="/referral-intake-routing/minimum-intake-photo.png"
                alt="Clinician Checking Referral Data Minimization"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
