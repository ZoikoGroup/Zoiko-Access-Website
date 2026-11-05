import React from "react";
import {
  FileText,
  FlaskConical,
  Camera,
  Pill,
  Shield,
  Calendar,
} from "lucide-react";

interface CapabilityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  statusText: string;
}

const capabilitiesData: CapabilityCard[] = [
  {
    icon: <FileText className="h-5 w-5 text-white" />,
    title: "EHR",
    description: "Clinical records, encounters and orders held at the source.",
    statusText: "subtopic not yet published",
  },
  {
    icon: <FlaskConical className="h-5 w-5 text-white" />,
    title: "Laboratory",
    description: "Orders, results and corrected results.",
    statusText: "subtopic not yet published",
  },
  {
    icon: <Camera className="h-5 w-5 text-white" />,
    title: "Imaging",
    description: "Imaging orders, studies and reports.",
    statusText: "subtopic not yet published",
  },
  {
    icon: <Pill className="h-5 w-5 text-white" />,
    title: "Pharmacy",
    description: "Prescription routing and dispensing status.",
    statusText: "subtopic not yet published",
  },
  {
    icon: <Shield className="h-5 w-5 text-white" />,
    title: "Payer",
    description: "Eligibility, authorization, claims and remittance.",
    statusText: "subtopic not yet published",
  },
  {
    icon: <Calendar className="h-5 w-5 text-white" />,
    title: "Scheduling",
    description: "Appointment requests, holds and confirmations.",
    statusText: "subtopic not yet published",
  },
];

export default function CapabilityFamiliesConnect() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 font-sans sm:py-28"
      style={{
        background: "linear-gradient(to bottom, #B9A8FF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-white/40 px-2.5 py-1 font-mono text-[12px] font-semibold text-[#1E1B4B] backdrop-blur-md">
              // capability_families
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Connect systems responsibly.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Six neutral categories. No vendor is named, and each subtopic is
            linked only after it has been reviewed.
          </p>
        </div>

        {/* 6-Card Grid (2 rows x 3 columns) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilitiesData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <div>
                {/* Dark Blue Icon Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E1646] shadow-md">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 text-[20px] font-bold tracking-[-0.02em] text-[#0E1646]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                  {item.description}
                </p>
              </div>

              {/* Dotted Divider & Status */}
              <div className="mt-8 border-t border-dashed border-[#E2E8F0] pt-4">
                <span className="font-mono text-[12px] text-[#94A3B8]">
                  {item.statusText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
