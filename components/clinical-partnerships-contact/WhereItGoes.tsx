"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface RoleOption {
  id: string;
  name: string;
  question: string;
  safeOutcome: string;
  destination: string;
  image: string;
  imageAlt: string;
}

const roleOptions: RoleOption[] = [
  {
    id: "hospital-lead",
    name: "Hospital or clinic clinical lead",
    question: "Explore whether clinical coordination is appropriate for our organization.",
    safeOutcome:
      "Understand the scope, and request a qualified introduction if the gated channel is live.",
    destination: "The channel, when it is live.",
    image: "/clinical-partnerships-contact/route-hospital.png",
    imageAlt: "Hospital or clinic clinical lead team in discussion",
  },
  {
    id: "independent-clinician",
    name: "Independent licensed clinician",
    question:
      "Understand how independent practitioners engage with Zoiko Access coordination workflows.",
    safeOutcome:
      "Review published clinician participation requirements and register interest for future expansions.",
    destination: "Clinician solutions overview & participation criteria.",
    image: "/clinical-partnerships-contact/route-clinicians.png",
    imageAlt: "Independent licensed clinician reviewing care workflow",
  },
  {
    id: "coordination-admin",
    name: "Care coordination administrator",
    question:
      "Evaluate cross-organizational administrative protocols and escalation ownership.",
    safeOutcome:
      "Obtain operational governance documentation and understand organizational readiness.",
    destination: "Care coordination readiness guidelines.",
    image: "/clinical-partnerships-contact/covers-readiness.png",
    imageAlt: "Care coordination administrator managing records",
  },
  {
    id: "health-it",
    name: "Health IT or integration partner",
    question:
      "Learn about technical integration, API standards, and security protocols.",
    safeOutcome:
      "Access partner documentation and developer specifications through the dedicated portal.",
    destination: "Partners & Developers integration portal.",
    image: "/clinical-partnerships-contact/route-partners.png",
    imageAlt: "Health IT developer working on platform architecture",
  },
  {
    id: "patient-caregiver",
    name: "Patient or caregiver",
    question:
      "Find appropriate medical care, appointments, or personal health records.",
    safeOutcome:
      "Safely redirect to patient-facing appointment booking and navigation pathways without disclosing clinical data.",
    destination: "Patient care explore & appointment request routes.",
    image: "/clinical-partnerships-contact/trust-meeting.png",
    imageAlt: "Patient support and care navigation team",
  },
  {
    id: "press-vendor",
    name: "Press, recruiter or vendor",
    question:
      "Inquire regarding media requests, general commercial inquiries, or vendor opportunities.",
    safeOutcome:
      "Route to our corporate communications and operations teams without using clinical bandwidth.",
    destination: "Corporate general contact and press inquiry channel.",
    image: "/clinical-partnerships-contact/route-legal.png",
    imageAlt: "Corporate communications and public inquiries desk",
  },
];

export default function WhereItGoes() {
  const [selectedRole, setSelectedRole] = useState<RoleOption>(roleOptions[0]);

  return (
    <section
      id="where-it-goes"
      className="relative w-full border-y border-[#E1DBF9] bg-gradient-to-b from-[#F8F6FF] to-[#DCD0FF] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Rail / Section Tag */}
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-[28px] rounded-full bg-[#7B3FF2]" aria-hidden="true" />
          <span className="text-[11.8px] font-semibold tracking-wide text-[#5B47D6]">
            Where it goes
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="mt-3.5 max-w-[780px]">
          <h2 className="text-[28px] font-semibold leading-[1.18] tracking-tight text-[#1B1750] sm:text-[36.8px]">
            Where should your question go?
          </h2>
          <p className="mt-3 text-[15px] font-normal leading-[1.65] text-[#575387] sm:text-[16px]">
            Pick the description closest to you. Each one ends in a safe route, and none of them
            asks you to prove who you are.
          </p>
        </div>

        {/* Role Selection Tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {roleOptions.map((role) => {
            const isActive = selectedRole.id === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role)}
                type="button"
                className={`relative cursor-pointer rounded-[6px] px-4 sm:px-5 py-3 text-[14.7px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#DAA6FF] to-[#7800BD] text-white shadow-md"
                    : "border border-[#E1DBF9] bg-white text-[#1B1750] hover:bg-white/80 hover:border-[#C4B7F5]"
                }`}
              >
                {role.name}
              </button>
            );
          })}
        </div>

        {/* Active Role Content Card */}
        <div className="mt-8 overflow-hidden rounded-[16px] border border-[#E1DBF9] bg-white shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRole.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Left Column: Details */}
              <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-7">
                <div>
                  <h3 className="text-[17.6px] font-semibold text-[#1B1750]">
                    {selectedRole.name}
                  </h3>

                  <dl className="mt-6 flex flex-col gap-6">
                    {/* Item 1: Your question */}
                    <div className="flex flex-col gap-1">
                      <dt className="text-[11.5px] font-semibold uppercase tracking-wider text-[#5B47D6]">
                        Your question
                      </dt>
                      <dd className="text-[16px] font-normal leading-[1.65] text-[#575387]">
                        {selectedRole.question}
                      </dd>
                    </div>

                    {/* Item 2: A safe outcome */}
                    <div className="flex flex-col gap-1">
                      <dt className="text-[11.5px] font-semibold uppercase tracking-wider text-[#5B47D6]">
                        A safe outcome
                      </dt>
                      <dd className="text-[16px] font-normal leading-[1.65] text-[#575387]">
                        {selectedRole.safeOutcome}
                      </dd>
                    </div>

                    {/* Item 3: Where you go */}
                    <div className="flex flex-col gap-1">
                      <dt className="text-[11.5px] font-semibold uppercase tracking-wider text-[#5B47D6]">
                        Where you go
                      </dt>
                      <dd className="text-[16px] font-normal leading-[1.65] text-[#575387]">
                        {selectedRole.destination}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Right Column: Visual illustration */}
              <div className="relative min-h-[260px] sm:min-h-[310px] w-full overflow-hidden bg-gradient-to-br from-[#7160D5] to-[#031462] lg:col-span-5">
                <Image
                  src={selectedRole.image}
                  alt={selectedRole.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
