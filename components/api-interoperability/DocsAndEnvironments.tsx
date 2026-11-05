import React from "react";
import { FileText, Code2, Activity } from "lucide-react";

interface EnvironmentCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
}

const environmentsData: EnvironmentCard[] = [
  {
    icon: <FileText className="h-5 w-5 text-[#7C3AED]" />,
    title: "API reference",
    description: "Endpoint and field documentation.",
    status: "not published here",
  },
  {
    icon: <Code2 className="h-5 w-5 text-[#7C3AED]" />,
    title: "Sandbox",
    description: "Test environment with synthetic data only.",
    status: "not published here",
  },
  {
    icon: <Activity className="h-5 w-5 text-[#7C3AED]" />,
    title: "Live status",
    description: "Service availability and incidents.",
    status: "not published here",
  },
];

export default function DocsAndEnvironments() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-[#F1F0FE] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#7C3AED]">
              // environments
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Docs and environments, when available.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            These links appear only once each item exists. For now, none is
            published here.
          </p>
        </div>

        {/* 3-Column Cards Grid with Subtle Dashed Borders */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {environmentsData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-3xl border border-dashed border-[#CBD5E1] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#94A3B8] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] sm:p-8"
            >
              <div>
                {/* Top Row: Icon & Status Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F2FF]">
                    {item.icon}
                  </div>
                  <span className="rounded-md bg-[#FEF3C7] px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide text-[#92400E]">
                    {item.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 text-[18px] font-bold tracking-[-0.02em] text-[#0E1646] sm:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569] sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
