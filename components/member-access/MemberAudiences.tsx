"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const audiences = [
  {
    title: "For plan members",
    description:
      "Understand where your plan's information lives and who answers benefit questions.",
    linkText: "See the journey →",
    href: "#journey",
    image: "/member-access/audience-plan-members.png",
    imageAlt: "Plan member reviewing information",
  },
  {
    title: "For caregivers",
    description:
      "Learn how verified legal delegation works before acting for someone else.",
    linkText: "See delegation →",
    href: "#delegation",
    image: "/member-access/audience-caregivers.png",
    imageAlt: "Caregiver assisting family member",
  },
  {
    title: "For payer organizations",
    description:
      "Evaluate how an accessible, accountable member journey could be structured.",
    linkText: "See the concept →",
    href: "#concept-integration",
    image: "/member-access/audience-payer-orgs.png",
    imageAlt: "Payer product team in a planning session",
  },
];

export default function MemberAudiences() {
  return (
    <section
      id="audiences"
      className="w-full bg-[#FBFAFF] py-16 md:py-20 lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[780px]">
          <div className="inline-flex w-fit items-center rounded-full bg-white px-4 py-1.5 border border-[#DCD3FB] shadow-[0px_4px_14px_0px_rgba(118,87,232,0.1)]">
            <span className="text-[13px] font-semibold leading-[20.8px] text-[#7657E8]">
              Who this is for
            </span>
          </div>

          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.2] text-[#16245A] tracking-[-0.01em]">
            Three ways in. One set of rules.
          </h2>
        </div>

        {/* 3 Audience Cards */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
          {audiences.map((aud, index) => (
            <motion.div
              key={aud.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex flex-col overflow-hidden rounded-[28px] bg-white shadow-[0px_16px_40px_0px_rgba(36,59,115,0.1)] border border-[#E3E8F2]/60 transition-all duration-300 hover:shadow-[0px_22px_50px_0px_rgba(36,59,115,0.16)] hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative h-[290px] sm:h-[306px] w-full overflow-hidden bg-gradient-to-br from-[#DCD3FB] to-[#C7D3F5]">
                <Image
                  src={aud.image}
                  alt={aud.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="font-poppins text-[21px] font-semibold leading-[28.35px] text-[#16245A]">
                    {aud.title}
                  </h3>
                  <p className="text-[15px] font-normal leading-[24px] text-[#5B6678]">
                    {aud.description}
                  </p>
                </div>

                <Link
                  href={aud.href}
                  className="inline-flex items-center text-[15px] font-semibold leading-[24px] text-[#7657E8] transition-colors duration-200 group-hover:text-[#5a3bd4]"
                >
                  {aud.linkText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
