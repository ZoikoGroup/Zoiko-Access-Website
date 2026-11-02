"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface OptionCard {
  badge: string;
  isUrgent?: boolean;
  title: string;
  description: string;
  finePrint: string;
  linkText?: string;
  linkHref?: string;
}

const optionCards: OptionCard[] = [
  {
    badge: "A",
    title: "I want to contact a provider",
    description: "Send a request where scheduling is authorized for your location.",
    finePrint: "The provider decides whether to confirm.",
    linkText: "Request an appointment →",
    linkHref: "/request-appointment",
  },
  {
    badge: "B",
    title: "I've been told I need a referral",
    description: "Understand how referrals move and who accepts them.",
    finePrint: "Self-referral depends on local policy.",
    linkText: "How referrals work →",
    linkHref: "/how-referrals-work",
  },
  {
    badge: "C",
    title: "I need help using Zoiko Access",
    description: "Find platform help, or staffed support where available.",
    finePrint: "Support doesn't give medical advice.",
    linkText: "Talk to support →",
    linkHref: "/talk-to-support",
  },
  {
    badge: "!",
    isUrgent: true,
    title: "It's urgent",
    description: "Contact local emergency services straight away.",
    finePrint: "Zoiko Access isn't an emergency service.",
  },
];

export default function SelectionAid() {
  return (
    <section
      id="choose-path"
      className="w-full py-16 lg:py-[70px]"
      style={{
        background:
          "linear-gradient(270deg, rgba(210, 199, 255, 1) 0%, rgba(246, 243, 255, 1) 100%), #F6F9FC",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5">
          <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
            Selection aid
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
          Choose the right next step.
        </h2>

        {/* Lead */}
        <p className="mt-2.5 max-w-[720px] text-[16.5px] leading-[26.4px] text-[#5B6678]">
          Non-diagnostic guidance. These cards don&apos;t assess urgency.
        </p>

        {/* 4 Cards Grid */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {optionCards.map((card, idx) => (
            <motion.div
              key={card.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col justify-between rounded-[16px] p-6 shadow-[0px_8px_24px_0px_rgba(36,59,115,0.05)] transition-all hover:shadow-[0px_12px_28px_0px_rgba(36,59,115,0.09)] ${
                card.isUrgent
                  ? "border border-[#F0D49A] bg-[#FFF8EA]"
                  : "border border-[#E3E8F2] bg-white"
              }`}
            >
              <div>
                {/* Badge */}
                <div
                  className={`flex h-[38px] w-[38px] items-center justify-center rounded-[10px] text-[13px] font-semibold [font-family:var(--font-poppins)] ${
                    card.isUrgent
                      ? "border border-[#E6C27A] text-[#7A4B00]"
                      : "border border-[#D9CFFB] text-[#7657E8]"
                  }`}
                >
                  {card.badge}
                </div>

                {/* Title */}
                <h3 className="mt-4 min-h-[48px] text-[18px] font-semibold leading-[24.3px] text-[#16245A] [font-family:var(--font-poppins)]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Section: Divider + Fine print + Optional Link */}
              <div className="mt-6 flex flex-col justify-end">
                <div
                  className={`pt-3.5 border-t ${
                    card.isUrgent ? "border-[#F0D49A]" : "border-[#E3E8F2]"
                  }`}
                >
                  <p className="text-[12.5px] leading-[20px] text-[#5B6678]">
                    {card.finePrint}
                  </p>
                </div>

                {card.linkText && card.linkHref && (
                  <div className="mt-3">
                    <Link
                      href={card.linkHref}
                      className="inline-block text-[13.5px] font-semibold leading-[21.6px] text-[#7657E8] transition-colors hover:text-[#6547BF] hover:underline"
                    >
                      {card.linkText}
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
