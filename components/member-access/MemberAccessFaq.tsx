"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "What does member access mean?",
    answer:
      "Helping members understand their plan's information and reach the right organization for next steps — through payer-controlled pathways.",
  },
  {
    question: "Is eligibility a guarantee?",
    answer:
      "No. Eligibility confirms whether you are enrolled on a given date under your plan's terms. It does not guarantee that a specific service is covered, authorized, or that payment will be made.",
  },
  {
    question: "Can a caregiver view my information?",
    answer:
      "Only with explicit, verified legal authority or scoped delegation. Family relationship or sponsorship alone does not create access to member records.",
  },
  {
    question: "Who decides prior authorization?",
    answer:
      "Your health plan or authorized payer organization makes prior authorization decisions based on clinical criteria, policy rules, and member eligibility.",
  },
  {
    question: "Can Zoiko Access see all my records?",
    answer:
      "No. Zoiko Access coordinates authorized steps under strict role-based access and least privilege. Zoiko Access does not have access to full provider clinical records or unauthorized plan data.",
  },
  {
    question: "Are services available everywhere?",
    answer:
      "Availability depends on your specific health plan, geographic jurisdiction, network participation, and local regulatory requirements.",
  },
];

export default function MemberAccessFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#FBFAFF] py-16 md:py-20 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Doctor Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <div className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 border border-[#DCD3FB] shadow-[0px_4px_14px_0px_rgba(118,87,232,0.1)]">
              <span className="text-[13px] font-semibold leading-[20.8px] text-[#7657E8]">
                Direct answers
              </span>
            </div>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-[#16245A] tracking-[-0.01em]">
              Questions members
              <br />
              ask.
            </h2>

            {/* Doctor Photo Card */}
            <div className="relative mt-2 w-full max-w-[360px] aspect-square rounded-[28px] overflow-hidden shadow-[0px_16px_40px_0px_rgba(36,59,115,0.12)] border border-white bg-gradient-to-tr from-[#DCD3FB] to-[#C7D3F5]">
              <Image
                src="/member-access/faq-clinician.png"
                alt="Healthcare professional smiling"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col gap-3 lg:col-span-7">
            {faqList.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between p-5 sm:p-6 text-left transition-all duration-200 cursor-pointer ${
                      isOpen
                        ? "rounded-t-[20px] bg-[#FBFAFF] border border-[#B9A8FF] border-b-0 shadow-sm"
                        : "rounded-[20px] bg-white border border-[#E3E8F2] shadow-[0px_4px_12px_0px_rgba(36,59,115,0.04)] hover:border-[#B9A8FF]/60"
                    }`}
                  >
                    <span className="font-poppins text-[16px] sm:text-[17px] font-semibold leading-[23px] text-[#16245A] pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-[20px] font-semibold transition-colors duration-200 ${
                        isOpen
                          ? "bg-[#7657E8] text-white"
                          : "bg-[#EEE9FD] text-[#7657E8]"
                      }`}
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="rounded-b-[20px] bg-[#FBFAFF] border border-t-0 border-[#B9A8FF] px-6 pb-6 pt-1 text-[15px] sm:text-[15.5px] font-normal leading-[24.8px] text-[#5B6678]"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
