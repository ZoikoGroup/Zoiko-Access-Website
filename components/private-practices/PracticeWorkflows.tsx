"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const vocab = ["Sent", "Delivered", "Acknowledged", "Accepted", "Completed"];

const steps = [
  {
    num: "1",
    title: "Understand local options",
    desc: "Read what is published for your location. Nothing is assumed.",
  },
  {
    num: "2",
    title: "Coordinate an authorized request",
    desc: "Send a request only through an approved pathway.",
  },
  {
    num: "3",
    title: "Wait for the responsible organization’s acknowledgment",
    desc: "The receiving organization acknowledges on its own terms.",
  },
  {
    num: "4",
    title: "Follow verified next-step ownership",
    desc: "The named owner carries the next step.",
  },
];

export default function PracticeWorkflows() {
  return (
    <section
      id="practice-workflows"
      className="relative w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading, Vocab strip & 4 Steps */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col lg:col-span-7"
          >
            <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
              PRACTICE WORKFLOW ORIENTATION
            </span>
            <h2 className="mt-3 text-[32px] sm:text-[38px] lg:text-[42px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#031974]">
              Four steps
            </h2>
            <p className="mt-4 max-w-[620px] text-[16px] sm:text-[18px] font-normal leading-[1.65] text-[#273444]">
              A conceptual strip. These five words mean different things, and
              the page never merges them:
            </p>

            {/* Vocabulary Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {vocab.map((word) => (
                <span
                  key={word}
                  className="rounded-full border border-[#D9D3F5] bg-white px-3.5 py-1.5 text-[14px] font-semibold text-[#031974] shadow-xs"
                >
                  {word}
                </span>
              ))}
            </div>

            {/* Steps Timeline */}
            <div className="relative mt-10 ml-5 border-l-[3px] border-[#DED3FF] pl-8 sm:pl-10 space-y-9">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="relative flex flex-col"
                >
                  {/* Circular Step Badge */}
                  <div
                    className="absolute -left-[53px] sm:-left-[61px] top-0 flex h-[38px] w-[38px] items-center justify-center rounded-full text-[15px] font-bold text-white shadow-md ring-4 ring-[#F1EEFE]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(2, 18, 95, 1) 0%, rgba(47, 66, 203, 1) 55%, rgba(123, 63, 242, 1) 100%)",
                    }}
                  >
                    {step.num}
                  </div>

                  <h3 className="text-[20px] sm:text-[21px] font-semibold tracking-[-0.02em] text-[#031974]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[15.5px] sm:text-[16px] leading-[1.6] text-[#273444]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Workflow Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="relative h-[480px] sm:h-[560px] w-full max-w-[500px] overflow-hidden rounded-[20px] shadow-lg border border-[#D9D3F5]">
              <Image
                src="/private-practices/workflow-doctor.png"
                alt="Doctor coordinating patient workflow"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
