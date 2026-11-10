import React from "react";
import { Database, Calendar, UserCheck } from "lucide-react";

interface OwnershipItem {
  tagline: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ownershipData: OwnershipItem[] = [
  {
    tagline: "SOURCE SYSTEMS OWN",
    title: "Clinical records",
    description: "The record stays where it was created.",
    icon: <Database className="h-5 w-5 text-[#7657E8]" />,
  },
  {
    tagline: "THE SCHEDULER OWNS",
    title: "Appointments",
    description: "Only the clinic confirms a slot.",
    icon: <Calendar className="h-5 w-5 text-[#7657E8]" />,
  },
  {
    tagline: "THE TREATING TEAM OWNS",
    title: "Clinical decisions",
    description: "Never transferred by coordination.",
    icon: <UserCheck className="h-5 w-5 text-[#7657E8]" />,
  },
];

export default function FloatingOwnershipBar() {
  return (
    <div className="w-full font-sans">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Floating Card Container */}
        <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-md">
          <div className="grid grid-cols-1 divide-y divide-[#E2E8F0] md:grid-cols-3 md:divide-y-0 md:divide-x">
            {ownershipData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 sm:p-7 transition-colors hover:bg-[#F6F9FC]/50"
              >
                {/* Light Purple Square Icon Badge */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F2F0FE]">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <span className="block font-mono text-[10px] font-semibold tracking-wider text-[#94A3B8] uppercase">
                    {item.tagline}
                  </span>
                  <h4 className="mt-0.5 text-[16px] font-bold tracking-tight text-[#16245A] sm:text-[17px]">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-[13px] text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
