"use client";

import { motion } from "framer-motion";

interface StepItem {
  id: number;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    title: "Prescriber authorizes",
    description: "A licensed prescriber authorizes the prescription.",
  },
  {
    id: 2,
    title: "Routing information\nprepared",
    description: "Only permitted information is prepared.",
  },
  {
    id: 3,
    title: "Approved endpoint\nreceives",
    description: "An approved system endpoint takes delivery.",
  },
  {
    id: 4,
    title: "Pharmacy independently\nchecks",
    description: "The pharmacy checks validity and local requirements.",
  },
  {
    id: 5,
    title: "Confirms or declines",
    description: "The pharmacy confirms or declines, according to the rules.",
  },
  {
    id: 6,
    title: "Dispensing determined\nseparately",
    description: "Supply is a separate pharmacy decision.",
  },
];

export default function RoutingSteps() {
  return (
    <section
      id="routing-steps"
      className="w-full py-[70px] border-y border-[#DCD6F2]"
      style={{
        background: "radial-gradient(circle at 50% 50%, #AC96FF 0%, #E0D8FF 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10 lg:px-0">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2.5 pb-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold leading-[21px] text-[#4267D5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span>Conceptual routing journey</span>
          </div>

          {/* H2 Title */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.1] text-[#243B73]">
            Six steps. Dispensing is its own decision.
          </h2>
        </motion.div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-[13px]">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="group flex flex-col justify-between rounded-[18px] border border-[#DCD6F2] bg-white p-5 pt-[21px] pb-[22px] min-h-[120px] transition-all duration-200 hover:shadow-lg hover:border-[#7657E8]/60"
            >
              <div>
                <h3 className="font-poppins text-[16.3px] font-semibold leading-[22px] text-[#243B73] whitespace-pre-line group-hover:text-[#7657E8] transition-colors">
                  {step.title}
                </h3>
                <p className="pt-2 text-[14.1px] font-normal leading-[23px] text-[#273444]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
