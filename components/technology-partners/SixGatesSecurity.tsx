import React from "react";
import {
  FileText,
  Clock,
  User,
  ShieldCheck,
  Heart,
  Building2,
} from "lucide-react";

interface GateCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const gatesData: GateCard[] = [
  {
    icon: <FileText className="h-5 w-5 text-[#7C3AED]" />,
    title: "Contract",
    description: "A signed agreement defines scope and duties.",
  },
  {
    icon: <Clock className="h-5 w-5 text-[#7C3AED]" />,
    title: "Lawful purpose",
    description: "A specific, documented legal basis.",
  },
  {
    icon: <User className="h-5 w-5 text-[#7C3AED]" />,
    title: "Permissions",
    description: "Role-based, purpose-limited access.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-[#7C3AED]" />,
    title: "Security controls",
    description: "Reviewed, tested and evidenced.",
  },
  {
    icon: <Heart className="h-5 w-5 text-[#7C3AED]" />,
    title: "Provider authority",
    description: "The care organization authorizes clinical data use.",
  },
  {
    icon: <Building2 className="h-5 w-5 text-[#7C3AED]" />,
    title: "Regional review",
    description: "Local rules for each jurisdiction.",
  },
];

export default function SixGatesSecurity() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Security, privacy &amp; lawful purpose
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Six gates before any data moves.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            No partnership category alone confers access to health records. No
            certifications are asserted here.
          </p>
        </div>

        {/* 3-Column Card Grid (2 rows x 3 columns) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gatesData.map((gate, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <div>
                {/* Top Row: Icon & "GATE" Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F2FF]">
                    {gate.icon}
                  </div>
                  <span className="rounded-md bg-[#FEF3C7] px-2.5 py-1 text-[11px] font-bold tracking-wider text-[#92400E]">
                    GATE
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B] sm:text-[20px]">
                  {gate.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569] sm:text-[15px]">
                  {gate.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
