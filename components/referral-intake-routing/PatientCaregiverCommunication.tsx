"use client";

import { motion } from "framer-motion";

interface MessageCard {
  title: string;
  desc: string;
  trigger: string;
}

const messages: MessageCard[] = [
  {
    title: "Request sent",
    desc: "The referral was sent. Only the sender’s own record shows this.",
    trigger: "Trigger: Outbound transmission confirmed by sending organization.",
  },
  {
    title: "Provider reviewing",
    desc: "A review has started. This appears only on an event from the receiving side.",
    trigger: "Trigger: Clinician accession event logged in receiving EHR.",
  },
  {
    title: "Appointment confirmed",
    desc: "Shown only on a confirmation from the source scheduler.",
    trigger: "Trigger: Source facility scheduling system confirms slot & location.",
  },
];

export default function PatientCaregiverCommunication() {
  return (
    <section className="w-full bg-[#F1EEFE] py-16 sm:py-20 lg:py-24 border-b border-[#DBE5ED]">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col text-center items-center"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            PATIENT AND CAREGIVER COMMUNICATION
          </span>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Three messages, each with its own trigger
          </h2>
        </motion.div>

        {/* 3 Message Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((msg, idx) => (
            <motion.div
              key={msg.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="flex flex-col rounded-[22px_22px_22px_6px] border border-[#D9D3F5] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Conceptual Message Tag */}
              <div>
                <span className="inline-block rounded-full bg-[#F1EEFE] px-3 py-1 text-[10.5px] font-extrabold tracking-[0.07em] text-[#7B3FF2] uppercase">
                  CONCEPTUAL MESSAGE
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[17px] font-semibold text-[#031974] sm:text-[18px]">
                {msg.title}
              </h3>

              {/* Body */}
              <p className="mt-2 text-[15px] font-normal leading-[1.65] text-[#273444] sm:text-[16px]">
                {msg.desc}
              </p>

              {/* Trigger Info */}
              <div className="mt-auto pt-4 text-[13px] text-[#7657E8] font-medium border-t border-[#F1EEFE]">
                {msg.trigger}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
