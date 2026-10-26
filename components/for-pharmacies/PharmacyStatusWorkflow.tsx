"use client";

import React from "react";
import {
  Users,
  Send,
  UserCheck,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const statuses = [
  {
    title: "Requested",
    description: "Asked for",
    icon: Users,
  },
  {
    title: "Transmitted",
    description: "Sent by a system",
    icon: Send,
  },
  {
    title: "Received",
    description: "Arrived at the pharmacy",
    icon: UserCheck,
  },
  {
    title: "Clinically verified",
    description: "Checked by a licensed pharmacist",
    icon: ShieldCheck,
  },
  {
    title: "Dispensed",
    description: "Supplied by the pharmacy",
    icon: PackageCheck,
  },
];

export default function PharmacyStatusWorkflow() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0c1348] via-[#161266] to-[#60147e] py-16 md:py-24 text-white relative overflow-hidden font-sans">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#A78BFA]"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wide text-[#C4B5FD] sm:text-sm">
              Five distinct statuses
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
            Electronic acceptance is not a clinical decision.
          </h2>
        </div>

        {/* 5-Column Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {statuses.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-3xl bg-white p-6 text-center text-[#1E1B4B] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] sm:p-8"
              >
                {/* Icon Container */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3E8FF] text-[#7C3AED]">
                  <IconComponent
                    className="h-6 w-6 stroke-[2]"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[14px] font-medium text-[#475569]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
