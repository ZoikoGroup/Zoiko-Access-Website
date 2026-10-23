"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Party {
  title: string;
  desc: string;
  img: string;
  isOffset?: boolean;
}

const parties: Party[] = [
  {
    title: "Source clinician",
    desc: "Starts the referral.",
    img: "/referral-intake-routing/party-source-clinician.png",
    isOffset: false,
  },
  {
    title: "Sender administration",
    desc: "Prepares the package.",
    img: "/referral-intake-routing/party-sender-admin.png",
    isOffset: true,
  },
  {
    title: "Transport",
    desc: "Carries the message.",
    img: "/referral-intake-routing/party-transport.png",
    isOffset: false,
  },
  {
    title: "Receiving administration",
    desc: "Logs and routes it.",
    img: "/referral-intake-routing/party-receiving-admin.png",
    isOffset: true,
  },
  {
    title: "Authorized reviewer",
    desc: "Reviews suitability.",
    img: "/referral-intake-routing/party-authorized-reviewer.png",
    isOffset: false,
  },
  {
    title: "Follow-up owner",
    desc: "Owns the next step.",
    img: "/referral-intake-routing/party-followup-owner.png",
    isOffset: true,
  },
];

export default function WhereIntakeSits() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            WHERE REFERRAL INTAKE SITS
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            From sending a referral to knowing
            <br />
            who owns the next step
          </h2>
          <p className="mt-3 max-w-[720px] text-[16px] font-normal leading-[1.65] text-[#273444] sm:text-[18px]">
            Six parties, in order. The illustrations are generic. No live screen is shown.
          </p>
        </motion.div>

        {/* 6-Party Stepped Chain */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {parties.map((party, idx) => (
              <motion.div
                key={party.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`flex flex-col items-center text-center transition-transform hover:-translate-y-1 ${
                  party.isOffset ? "lg:pt-10" : ""
                }`}
              >
                {/* Circular Figure Frame */}
                <div
                  className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full border-4 border-white shadow-[0_10px_24px_rgba(47,66,203,0.22)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(232, 226, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
                  }}
                >
                  <div className="relative h-[84px] w-[84px] overflow-hidden rounded-full">
                    <Image
                      src={party.img}
                      alt={party.title}
                      fill
                      sizes="84px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Title and Role */}
                <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.02em] text-[#031974] min-h-[42px] flex items-center justify-center">
                  {party.title}
                </h3>
                <p className="mt-1 text-[13px] font-normal leading-[1.5] text-[#273444]">
                  {party.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
