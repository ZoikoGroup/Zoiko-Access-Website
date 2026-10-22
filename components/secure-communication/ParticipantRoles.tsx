"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ParticipantCardData {
  title: string;
  image: string;
  canCoordinate: string;
  whoAuthorizes: string;
  staysRestricted: string;
}

const participants: ParticipantCardData[] = [
  {
    title: "Licensed or authorized clinicians",
    image: "/secure-communication/participant-clinicians.png",
    canCoordinate: "Their own professional communications",
    whoAuthorizes: "The organization and local rules",
    staysRestricted: "Another organization’s clinical decisions",
  },
  {
    title: "Care-team delegates",
    image: "/secure-communication/participant-delegates.png",
    canCoordinate: "Assigned administrative follow-up",
    whoAuthorizes: "The responsible clinician or organization",
    staysRestricted: "Clinical judgment",
  },
  {
    title: "Participating organizations",
    image: "/secure-communication/participant-organizations.png",
    canCoordinate: "Their own routing and intake",
    whoAuthorizes: "Their governance",
    staysRestricted: "Other organizations’ records",
  },
  {
    title: "Designated administrators",
    image: "/secure-communication/participant-administrators.png",
    canCoordinate: "Role setup and access reviews",
    whoAuthorizes: "The organization",
    staysRestricted: "Reading clinical content by default",
  },
];

export default function ParticipantRoles() {
  return (
    <section className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#D9D3F5]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[760px]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              WHO MAY COMMUNICATE AND WHY
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
            Four kinds of participant
          </h2>

          <p className="mt-3 text-[16px] sm:text-[17px] font-normal leading-[1.6] text-[#273444]">
            Role scope is different from account identity.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {participants.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-[22px] bg-white shadow-sm transition-all hover:shadow-md border border-[#E7E9F4]"
            >
              {/* Arched Photo Frame (999px 999px 18px 18px) */}
              <div className="p-3">
                <div className="relative h-[220px] w-full overflow-hidden rounded-t-[999px] rounded-b-[18px] border-3 border-white bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF] shadow-[0px_12px_28px_0px_rgba(47,66,203,0.18)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5 pt-3">
                <h3 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#031974] min-h-[44px]">
                  {item.title}
                </h3>

                <dl className="mt-4 flex flex-col gap-3.5 border-t border-[#EEF0F7] pt-4 text-left">
                  {/* Can Coordinate */}
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#7B3FF2]">
                      Can coordinate
                    </dt>
                    <dd className="text-[13.5px] font-normal leading-[1.5] text-[#273444]">
                      {item.canCoordinate}
                    </dd>
                  </div>

                  {/* Who Authorizes */}
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#7B3FF2]">
                      Who authorizes
                    </dt>
                    <dd className="text-[13.5px] font-normal leading-[1.5] text-[#273444]">
                      {item.whoAuthorizes}
                    </dd>
                  </div>

                  {/* Stays Restricted */}
                  <div className="flex flex-col gap-0.5">
                    <dt className="text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#7B3FF2]">
                      Stays restricted
                    </dt>
                    <dd className="text-[13.5px] font-normal leading-[1.5] text-[#273444]">
                      {item.staysRestricted}
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
