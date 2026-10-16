"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const LEARNING_PATHS = [
  {
    image: "/request-appointment/mode-appointment-request.webp",
    alt: "Explore how Zoiko Access helps patients understand health navigation",
    title: "How Zoiko Access works",
    description: "Explore the four-stage educational journey.",
    href: "/how-it-works",
  },
  {
    image: "/request-appointment/mode-confirmed-booking.webp",
    alt: "Learn how healthcare care pathways, requests, and referrals function",
    title: "Care pathways explained",
    description: "Learn about requests, handoffs, and accountability.",
    href: "/how-it-works",
  },
  {
    image: "/request-appointment/learning-reading-scenario.webp",
    alt: "Review healthcare services directory and organizational information",
    title: "Explore healthcare services",
    description:
      "Understand categories without personalized recommendations.",
    href: "/how-it-works",
  },
];

export default function RelatedLearning() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 font-sans">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[720px]"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2.5">
            <span
              className="h-2 w-2 rounded-full bg-[#8E7BEF]"
              aria-hidden="true"
            />
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B49C8]">
              Related learning
            </span>
          </div>

          {/* Heading 2 */}
          <h2 className="mt-3.5 font-bold tracking-tight text-[#241C59] text-[28px] sm:text-[34px] lg:text-[37.6px] leading-[1.25]">
            Explore your next information
            <br />
            path.
          </h2>
        </motion.div>

        {/* 3 Link Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
          {LEARNING_PATHS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#E3DEF8] bg-white shadow-[0_4px_20px_rgba(36,28,89,0.03)] transition-all duration-300 hover:border-[#8E7BEF] hover:shadow-[0_8px_30px_rgba(36,28,89,0.08)] hover:-translate-y-0.5"
              >
                {/* Image */}
                <div className="relative h-[220px] sm:h-[236px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 408px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-[17.5px] font-bold text-[#241C59] group-hover:text-[#4267D5] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] font-normal leading-[1.6] text-[#5E5A86]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-1">
                    <span className="inline-flex items-center rounded-full bg-[#E8E8F8] px-3.5 py-1 text-[12.5px] font-semibold text-[#5B49C8] group-hover:bg-[#dfdcf9] transition-colors">
                      Local information page →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
