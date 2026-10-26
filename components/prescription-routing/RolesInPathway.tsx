"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RoleItem {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  accountableFor: string;
  doesNotControl: string;
}

const roles: RoleItem[] = [
  {
    id: "licensed-prescriber",
    image: "/prescription-routing/role-licensed-prescriber.webp",
    imageAlt: "Licensed prescriber reviewing prescription record",
    title: "Licensed prescriber",
    accountableFor: "Creates or changes an authorized prescription.",
    doesNotControl: "Whether the pharmacy accepts or dispenses it.",
  },
  {
    id: "authorized-transport",
    image: "/prescription-routing/role-routing-service.webp",
    imageAlt: "Authorized transport or intermediary system",
    title: "Authorized transport or\nintermediary",
    accountableFor: "Transfers permitted data between systems.",
    doesNotControl: "Prescribing, validity checks or dispensing.",
  },
  {
    id: "receiving-pharmacy",
    image: "/prescription-routing/role-receiving-pharmacy.webp",
    imageAlt: "Receiving pharmacy verification counter",
    title: "Receiving pharmacy",
    accountableFor: "Independently verifies and determines its service.",
    doesNotControl: "Clinical authorization to prescribe.",
  },
  {
    id: "patient-caregiver",
    image: "/prescription-routing/role-patient-caregiver.webp",
    imageAlt: "Patient or caregiver viewing care instructions",
    title: "Patient or caregiver",
    accountableFor: "Understands next steps, subject to verified permissions.",
    doesNotControl: "Prescription content or pharmacy decisions.",
  },
];

export default function RolesInPathway() {
  return (
    <section id="roles" className="w-full bg-white py-[70px]">
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10 lg:px-0">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2.5 pb-10"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold leading-[21px] text-[#4267D5]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7657E8]" aria-hidden="true" />
            <span>Roles in the pathway</span>
          </div>

          {/* Heading */}
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[40px] font-semibold leading-[1.08] text-[#243B73]">
            Four roles. Each one owns something
            <br />
            different.
          </h2>

          {/* Lede */}
          <p className="pt-1 text-[16.8px] font-normal leading-[28px] text-[#273444]">
            For each role: what it is accountable for, and what it does not control.
          </p>
        </motion.div>

        {/* Roles List */}
        <div className="flex flex-col gap-4">
          {roles.map((role, idx) => (
            <motion.article
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-[83px] rounded-[18px] border border-[#DCD6F2] bg-white p-[18px] sm:p-6 transition-all duration-200 hover:shadow-md hover:border-[#7657E8]/50"
            >
              {/* Photo */}
              <div className="relative h-[150px] w-[150px] shrink-0 overflow-hidden rounded-[14px] bg-gradient-to-br from-[#4267D5] to-[#7657E8] shadow-sm">
                <Image
                  src={role.image}
                  alt={role.imageAlt}
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>

              {/* Column 1: Accountable For */}
              <div className="flex flex-1 flex-col gap-1 md:max-w-[404px]">
                <span className="font-poppins text-[11.8px] font-semibold leading-[20px] text-[#7657E8] tracking-wide uppercase">
                  Accountable for
                </span>
                <h3 className="font-poppins text-[19.2px] font-semibold leading-[22px] text-[#243B73] whitespace-pre-line">
                  {role.title}
                </h3>
                <p className="pt-0.5 text-[14.4px] font-normal leading-[24px] text-[#273444]">
                  {role.accountableFor}
                </p>
              </div>

              {/* Column 2: Does Not Control */}
              <div className="flex flex-1 flex-col gap-1 md:max-w-[544px]">
                <span className="font-poppins text-[11.8px] font-semibold leading-[20px] text-[#7657E8] tracking-wide uppercase">
                  Does not control
                </span>
                <p className="text-[14.4px] font-normal leading-[24px] text-[#273444]">
                  {role.doesNotControl}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
