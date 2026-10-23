"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RoleItem {
  name: string;
  description: string;
  photo: string;
  bgSvg: string;
}

const roles: RoleItem[] = [
  {
    name: "Scheduler",
    description: "Owns appointment and capacity state.",
    photo: "/scheduling-patient-access/role-scheduler.png",
    bgSvg: "/scheduling-patient-access/role-bg-1.svg",
  },
  {
    name: "Clinic administrator",
    description: "Sets scope and local rules.",
    photo: "/scheduling-patient-access/role-clinic-admin.png",
    bgSvg: "/scheduling-patient-access/role-bg-2.svg",
  },
  {
    name: "Clinician",
    description: "Decides clinical urgency and need.",
    photo: "/scheduling-patient-access/role-clinician.png",
    bgSvg: "/scheduling-patient-access/role-bg-3.svg",
  },
  {
    name: "Patient",
    description: "Asks, and is told the outcome.",
    photo: "/scheduling-patient-access/role-patient.png",
    bgSvg: "/scheduling-patient-access/role-bg-4.svg",
  },
  {
    name: "Caregiver or proxy",
    description: "Acts only under valid delegation.",
    photo: "/scheduling-patient-access/role-caregiver.png",
    bgSvg: "/scheduling-patient-access/role-bg-5.svg",
  },
  {
    name: "Platform coordinator",
    description: "Routes and records events. Does not confirm.",
    photo: "/scheduling-patient-access/role-coordinator.png",
    bgSvg: "/scheduling-patient-access/role-bg-6.svg",
  },
];

export default function RolesAndPrivacy() {
  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(180deg, #F1EEFE 0%, #CCBFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-3"
        >
          <span className="text-[12.5px] font-bold tracking-[0.1em] text-[#7B3FF2] uppercase">
            ROLES, PRIVACY AND SAFETY
          </span>

          <h2 className="text-[32px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#031974] sm:text-[38px] lg:text-[42px]">
            Six roles, minimum necessary data
          </h2>

          <p className="max-w-[720px] text-[16px] leading-[1.65] text-[#273444] sm:text-[17.5px]">
            Data is limited to what the purpose needs, under lawful permission and
            valid delegation.
          </p>
        </motion.div>

        {/* 3x2 Grid of Roles */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, idx) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex items-center gap-4.5 rounded-[22px] border border-[#D9D3F5] bg-white p-4 shadow-[0_8px_20px_rgba(36,28,89,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(114,76,255,0.1)]"
            >
              {/* Circular Avatar Container */}
              <div
                className="relative flex h-[88px] w-[88px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full shadow-inner border border-white"
                style={{
                  background:
                    "linear-gradient(135deg, #E8E2FF 0%, #D5DCFF 100%)",
                }}
              >
                {/* SVG Backdrop */}
                <div className="pointer-events-none absolute inset-0 opacity-30">
                  <Image src={role.bgSvg} alt="" fill className="object-cover" />
                </div>

                {/* Profile Photo */}
                <div className="relative h-full w-full">
                  <Image
                    src={role.photo}
                    alt={role.name}
                    fill
                    sizes="88px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col">
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#031974]">
                  {role.name}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.5] text-[#273444]">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
