"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StoryboardFrame {
  id: number;
  title: string;
  description: string;
  image: string;
}

const frames: StoryboardFrame[] = [
  {
    id: 1,
    title: "1. Send to an eligible destination",
    description: "A sender picks an eligible, permitted destination.",
    image: "/secure-communication/storyboard-frame-1.png",
  },
  {
    id: 2,
    title: "2. View transport state",
    description: "The sender sees only the transport result.",
    image: "/secure-communication/storyboard-frame-2.png",
  },
  {
    id: 3,
    title: "3. Received is not reviewed",
    description: "Receipt and professional review are shown apart.",
    image: "/secure-communication/storyboard-frame-3.png",
  },
];

export default function ConceptStoryboard() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 text-white"
      style={{
        background: "linear-gradient(155deg, #02125F 0%, #2F42CB 58%, #7B3FF2 100%)",
      }}
    >
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
            <span className="h-[2px] w-[28px] rounded-full bg-[#D9D3F5]" aria-hidden="true" />
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
              CONCEPT STORYBOARD
            </span>
          </div>

          <h2 className="mt-3.5 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.02em] text-white leading-[1.18]">
            Three static frames
          </h2>
        </motion.div>

        {/* 3 Storyboard Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {frames.map((frame, idx) => (
            <motion.article
              key={frame.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              className="flex flex-col overflow-hidden rounded-[24px] bg-white text-left shadow-lg"
            >
              {/* Figure */}
              <div className="p-3">
                <div className="relative h-[210px] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#E8E2FF] to-[#D5DCFF]">
                  <Image
                    src={frame.image}
                    alt={frame.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-[#F1EEFE] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.07em] text-[#7B3FF2]">
                    CONCEPT ONLY
                  </span>
                </div>

                <b className="text-[18px] font-semibold tracking-tight text-[#031974]">
                  {frame.title}
                </b>

                <p className="mt-2 text-[15.5px] leading-[1.6] text-[#273444]">
                  {frame.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
