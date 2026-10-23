"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface UseCase {
  title: string;
  description: string;
  image: string;
}

const useCases: UseCase[] = [
  {
    title: "New outpatient visit",
    description: "A request for a first visit, sent to the source scheduler.",
    image: "/scheduling-patient-access/usecase-1.png",
  },
  {
    title: "Specialist referral",
    description:
      "A request that depends on a referral held by the receiving service.",
    image: "/scheduling-patient-access/usecase-2.png",
  },
  {
    title: "Reschedule or cancel",
    description: "A change request. The scheduler decides if it can be made.",
    image: "/scheduling-patient-access/usecase-3.png",
  },
  {
    title: "Multiple-site coordination",
    description: "Several sites, each with its own scheduler.",
    image: "/scheduling-patient-access/usecase-4.png",
  },
  {
    title: "Accessibility accommodations",
    description: "Needs described in a request, handled by the facility.",
    image: "/scheduling-patient-access/usecase-5.png",
  },
];

export default function SchedulingUseCases() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-2.5"
          >
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              SCHEDULING USE CASES
            </span>

            <h2 className="text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
              Five common situations
            </h2>

            <p className="text-[15px] text-[#273444] sm:text-[16px]">
              Scroll sideways, or tab to the strip and use the arrow keys.
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9D3F5] bg-white text-[#031974] shadow-sm transition-all hover:bg-[#F1EEFE] hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9D3F5] bg-white text-[#031974] shadow-sm transition-all hover:bg-[#F1EEFE] hover:scale-105 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Strip */}
        <div
          ref={scrollRef}
          tabIndex={0}
          className="mt-8 flex gap-5 overflow-x-auto pb-4 pt-2 no-scrollbar focus:outline-none focus:ring-2 focus:ring-[#7B3FF2]/40 rounded-2xl"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {useCases.map((useCase, idx) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex min-w-[290px] max-w-[314px] flex-shrink-0 flex-col overflow-hidden rounded-[24px] border border-[#D9D3F5] bg-white shadow-[0_10px_24px_rgba(36,28,89,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(114,76,255,0.12)]"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Photo Banner */}
              <div className="relative h-[220px] w-full overflow-hidden bg-[#E8E2FF]">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  sizes="314px"
                  className="object-cover"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#031974]">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-[#273444]">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
