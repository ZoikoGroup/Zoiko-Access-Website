"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ChildCardItem {
  status: string;
  statusVariant: "green" | "blue" | "amber";
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSrc: string;
  imageAlt: string;
}

const childCards: ChildCardItem[] = [
  {
    status: "Live only where enabled",
    statusVariant: "green",
    title: "Book or request an appointment",
    description: "Send a request to a participating provider where scheduling is authorized.",
    linkText: "Check availability →",
    linkHref: "/request-appointment",
    imageSrc: "/explore-care-nextsteps/book-appointment.webp",
    imageAlt: "Person requesting an appointment online",
  },
  {
    status: "Information",
    statusVariant: "blue",
    title: "How referrals work",
    description: "How referrals are created, sent, received and accepted — and by whom.",
    linkText: "Learn about referrals →",
    linkHref: "/how-referrals-work",
    imageSrc: "/explore-care-nextsteps/how-referrals-work.webp",
    imageAlt: "Clinician preparing a referral",
  },
  {
    status: "Staffed where available",
    statusVariant: "amber",
    title: "Talk to support",
    description: "Help with the platform — not clinical advice or emergency response.",
    linkText: "Get help →",
    linkHref: "/talk-to-support",
    imageSrc: "/explore-care-nextsteps/support-specialist.webp",
    imageAlt: "Support specialist assisting user",
  },
];

export default function ChildCards() {
  return (
    <section className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5">
          <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
            Your next step
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
          Three next steps, three different rules.
        </h2>

        {/* Lead */}
        <p className="mt-2.5 max-w-[720px] text-[16.5px] leading-[26.4px] text-[#5B6678]">
          Each option shows its status. Live booking and staffed support appear only where they&apos;re authorized.
        </p>

        {/* Cards Grid */}
        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {childCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="flex flex-col justify-between overflow-hidden rounded-[16px] border border-[#E3E8F2] bg-white p-6 shadow-[0px_8px_24px_0px_rgba(36,59,115,0.05)] transition-all hover:shadow-[0px_14px_30px_0px_rgba(36,59,115,0.1)]"
            >
              <div>
                {/* Status Pill */}
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ${
                    card.statusVariant === "green"
                      ? "bg-[#E3F4EC]"
                      : card.statusVariant === "blue"
                      ? "bg-[#E7EEFC]"
                      : "bg-[#FFF4E0]"
                  }`}
                >
                  <span
                    className={`h-[7px] w-[7px] rounded-full ${
                      card.statusVariant === "green"
                        ? "bg-[#14653F]"
                        : card.statusVariant === "blue"
                        ? "bg-[#243B73]"
                        : "bg-[#7A4B00]"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-[12px] font-semibold leading-[19.2px] ${
                      card.statusVariant === "green"
                        ? "text-[#14653F]"
                        : card.statusVariant === "blue"
                        ? "text-[#243B73]"
                        : "text-[#7A4B00]"
                    }`}
                  >
                    {card.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[18px] font-semibold leading-[24.3px] text-[#16245A] [font-family:var(--font-poppins)]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  {card.description}
                </p>

                {/* Link */}
                <div className="mt-3">
                  <Link
                    href={card.linkHref}
                    className="inline-block text-[13.5px] font-semibold leading-[21.6px] text-[#7657E8] transition-colors hover:text-[#6547BF] hover:underline"
                  >
                    {card.linkText}
                  </Link>
                </div>
              </div>

              {/* Media Container */}
              <div
                className="mt-6 h-[225px] w-full overflow-hidden rounded-t-[16px] relative"
                style={{
                  background:
                    "linear-gradient(151deg, rgba(220, 211, 251, 1) 0%, rgba(199, 211, 245, 1) 100%)",
                }}
              >
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
