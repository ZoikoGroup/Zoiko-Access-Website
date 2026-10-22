"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface RelatedPageItem {
  title: string;
  image: string;
  href: string;
}

const relatedPages: RelatedPageItem[] = [
  {
    title: "Referral Coordination",
    image: "/secure-communication/related-referral.png",
    href: "/how-referrals-work",
  },
  {
    title: "Care Transitions",
    image: "/secure-communication/related-transitions.png",
    href: "/care-pathways",
  },
  {
    title: "Worklists",
    image: "/secure-communication/related-worklists.png",
    href: "/healthcare-professionals",
  },
  {
    title: "Results Handoffs",
    image: "/secure-communication/related-handoffs.png",
    href: "/healthcare-services",
  },
];

export default function RelatedPages() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col max-w-[800px]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              RELATED PAGES
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-[#031974] leading-[1.18]">
            Keep exploring
          </h2>
        </motion.div>

        {/* 4 Related Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedPages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            >
              <Link
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-[18px] border border-[#D9D3F5] bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Figure */}
                <div className="relative h-[175px] w-full overflow-hidden bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="flex items-center justify-between p-4 px-4.5">
                  <span className="text-[15.5px] font-semibold text-[#031974] group-hover:text-[#4267D5] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[18px] text-[#7B3FF2] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
