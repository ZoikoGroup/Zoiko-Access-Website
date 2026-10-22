"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "We review your topic",
    description: "The topic and your role help route it to the right place.",
    image: "/clinical-partnerships-contact/process-step-1.png",
    imageAlt: "Reviewing inquiry topic and organizational role",
  },
  {
    step: 2,
    title: "We may ask qualifying questions",
    description: "Some inquiries need more information before they can go further.",
    image: "/clinical-partnerships-contact/process-step-2.png",
    imageAlt: "Qualifying inquiries and governance readiness questions",
  },
  {
    step: 3,
    title: "A person may follow up",
    description: "Follow-up is discretionary. Receiving your message is not an acceptance.",
    image: "/clinical-partnerships-contact/process-step-3.png",
    imageAlt: "Discretionary follow-up and human review workflow",
  },
];

export default function WhatHappensNext() {
  return (
    <section
      id="what-happens-next"
      className="relative w-full border-b border-[#E1DBF9] bg-[#FAF9FD] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Rail / Section Tag */}
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
          <span className="text-[11.8px] font-semibold tracking-wide text-[#5B47D6]">
            What happens next
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="mt-3.5 max-w-[800px]">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-[#1B1750] sm:text-[36.8px]">
            Receipt, review and follow-up are different things
          </h2>
          <p className="mt-3 text-[15px] font-normal leading-[1.65] text-[#575387] sm:text-[16px]">
            Here is what to expect before you send anything. There is no published response time,
            and none is promised.
          </p>
        </div>

        {/* 3 Process Cards */}
        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 list-none p-0">
          {steps.map((item, idx) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col rounded-[16px] border border-[#E1DBF9] bg-white p-5 sm:p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Step Card Visual */}
              <div className="relative h-[190px] w-full overflow-hidden rounded-[10px] bg-[#EFEBFE]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Title & Description */}
              <div className="mt-5 flex flex-col flex-1">
                <b className="text-[16px] font-bold text-[#1B1750]">
                  {item.title}
                </b>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[#575387]">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
