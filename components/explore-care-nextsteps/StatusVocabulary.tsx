"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const glossaryItems = [
  { term: "Not submitted", definition: "Nothing has been sent yet." },
  { term: "Submitted", definition: "Sent through an authorized pathway." },
  { term: "Delivered", definition: "The destination received it — not reviewed." },
  { term: "In review", definition: "The responsible team is reviewing it." },
  { term: "Action needed", definition: "More information is requested." },
  { term: "Accepted", definition: "Explicitly accepted by the responsible organization." },
  { term: "Declined", definition: "Not accepted; the reason and next step should be given." },
  { term: "Expired", definition: "No longer valid." },
  { term: "Unavailable", definition: "The status can't be confirmed right now." },
];

export default function StatusVocabulary() {
  return (
    <section className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column: Heading, description & Glossary Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Kicker */}
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
              04 / Status
            </span>

            {/* Heading */}
            <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
              4. Understand a status update.
            </h2>

            {/* Paragraph */}
            <p className="mt-3 text-[16px] leading-[25.6px] text-[#273444]">
              Each status means one specific thing. Read it literally, and check who issued it.
            </p>

            {/* Glossary Card */}
            <div className="mt-6 w-full rounded-[16px] border border-[#E3E8F2] bg-white p-5 sm:p-6 shadow-[0px_8px_24px_0px_rgba(36,59,115,0.05)]">
              <h3 className="text-[16px] font-semibold leading-[21.6px] text-[#16245A] [font-family:var(--font-poppins)]">
                A plain-language status glossary
              </h3>
              <p className="mt-1 text-[12.5px] leading-[20px] text-[#5B6678]">
                Illustrative — exact states depend on each integration.
              </p>

              {/* Definition List */}
              <dl className="mt-4 flex flex-col">
                {glossaryItems.map((item) => (
                  <div
                    key={item.term}
                    className="flex flex-col border-t border-[#E3E8F2] py-2.5 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <dt className="w-[140px] sm:w-[150px] shrink-0 text-[14px] font-semibold leading-[22.4px] text-[#16245A]">
                      {item.term}
                    </dt>
                    <dd className="mt-0.5 text-[14px] leading-[22.4px] text-[#5B6678] sm:mt-0">
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>

          {/* Right Column: Tall Device Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative h-[480px] sm:h-[540px] lg:h-[620px] w-full overflow-hidden rounded-[24px] shadow-[0px_20px_50px_0px_rgba(36,59,115,0.14)]"
            style={{
              background:
                "linear-gradient(140deg, rgba(220, 211, 251, 1) 0%, rgba(199, 211, 245, 1) 100%)",
            }}
          >
            <Image
              src="/explore-care-nextsteps/status-check.webp"
              alt="Person checking status on mobile device"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
