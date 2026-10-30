"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FailureItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const failureItems: FailureItem[] = [
  {
    title: "Timeout or duplicate",
    description: "Check the status before trying again, so you don't send it twice.",
    imageSrc: "/explore-care-nextsteps/timeout-notice.webp",
    imageAlt: "Timeout notice demonstration",
  },
  {
    title: "Availability changed",
    description: "A listed option may no longer be open. Check with the provider.",
    imageSrc: "/explore-care-nextsteps/availability-changed.webp",
    imageAlt: "Availability changed notification",
  },
  {
    title: "Permission revoked",
    description: "The request stops. Renew permission through the authorized service.",
    imageSrc: "/explore-care-nextsteps/permission-revoked.webp",
    imageAlt: "Permission revoked status",
  },
  {
    title: "Source unavailable",
    description: "Status can't be confirmed. Recheck directly with the authorized provider.",
    imageSrc: "/explore-care-nextsteps/source-unavailable.webp",
    imageAlt: "Source unavailable indicator",
  },
];

export default function FailureRecovery() {
  return (
    <section className="w-full bg-white py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[70px]">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5">
          <span className="h-[2px] w-[22px] rounded-full bg-[#7657E8]" aria-hidden="true" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#7657E8]">
            Failure &amp; recovery
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-[32px] sm:text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#16245A] [font-family:var(--font-poppins)]">
          If a request does not go through.
        </h2>

        {/* Lead */}
        <p className="mt-2.5 max-w-[720px] text-[16.5px] leading-[26.4px] text-[#5B6678]">
          Failures are shown plainly. Requests are never retried automatically into duplicate bookings.
        </p>

        {/* 2x2 Grid of Failure Cards */}
        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2">
          {failureItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-5 rounded-[18px] border border-[#E3E8F2] bg-white p-4.5 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0px_14px_28px_0px_rgba(36,59,115,0.09)]"
            >
              {/* Image thumbnail */}
              <div
                className="relative h-[160px] w-full sm:w-[200px] shrink-0 overflow-hidden rounded-[14px]"
                style={{
                  background:
                    "linear-gradient(141deg, rgba(220, 211, 251, 1) 0%, rgba(199, 211, 245, 1) 100%)",
                }}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 640px) 200px, 90vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col justify-center py-2 sm:py-0">
                <h3 className="text-[18px] font-semibold leading-[24.3px] text-[#16245A] [font-family:var(--font-poppins)]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-[23.2px] text-[#5B6678]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
