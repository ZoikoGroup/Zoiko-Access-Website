"use client";

import { motion } from "framer-motion";

export default function ReferralIntakeRouting() {
  const sendingSteps = [
    {
      title: "Prepared",
      desc: "Created by the sending team.",
    },
    {
      title: "Transmitted",
      desc: "Sent on by the system.",
    },
  ];

  const receivingSteps = [
    {
      title: "Received",
      desc: "The receiving organization acknowledges it.",
    },
    {
      title: "Clinically reviewed",
      desc: "Qualified staff review it.",
    },
    {
      title: "Accepted or declined",
      desc: "The receiving organization decides.",
    },
    {
      title: "Next step",
      desc: "Its owner is named.",
    },
  ];

  return (
    <section
      id="referrals"
      className="relative w-full py-16 sm:py-20 lg:py-24 text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(155deg, rgba(2, 18, 95, 1) 0%, rgba(47, 66, 203, 1) 58%, rgba(123, 63, 242, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#C9B8FF] uppercase">
            REFERRAL INTAKE AND ROUTING
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[42px]">
            Make the handoff status understandable.
          </h2>
          <p className="mt-3 max-w-[760px] text-[16px] font-normal leading-[1.68] text-[#E6E9FF] sm:text-[17px]">
            Network transport and organizational decisions are separate lanes.
            Transport never equals acceptance.
          </p>
        </motion.div>

        {/* Lanes Container */}
        <div className="mt-10 flex flex-col gap-5">
          {/* Lane 1: Sending side and transport */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="rounded-[20px] border border-white/28 bg-white/10 p-6 sm:p-7 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-center text-[13.5px] font-extrabold tracking-[0.07em] text-[#C9B8FF] uppercase sm:text-[14px]">
              Sending side and transport
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {sendingSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center justify-center rounded-[14px] bg-white/14 px-4 py-4 text-center transition-all hover:bg-white/20"
                >
                  <span className="text-[15.5px] font-semibold text-white">
                    {step.title}
                  </span>
                  <span className="mt-1 text-[13px] text-white/90">
                    {step.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lane 2: Receiving organization's own events */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-[20px] border border-white/28 bg-white p-6 sm:p-7 shadow-xl"
          >
            <h3 className="text-left text-[13.5px] font-extrabold tracking-[0.07em] text-[#7B3FF2] uppercase sm:text-[14px]">
              Receiving organization’s own events
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {receivingSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col justify-center rounded-[14px] bg-[#F1EEFE] px-4 py-4 text-left transition-all hover:bg-[#E8E2FF]"
                >
                  <span className="text-[15.5px] font-semibold text-[#031974]">
                    {step.title}
                  </span>
                  <span className="mt-1 text-[13px] text-[#031974]/80">
                    {step.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
