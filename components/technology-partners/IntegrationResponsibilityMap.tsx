import React from "react";
import { ArrowRight } from "lucide-react";

interface DutyCard {
  tag: string;
  title: string;
  duties: string[];
  highlighted?: boolean;
}

const mapData: DutyCard[] = [
  {
    tag: "source_system",
    title: "Clinical source",
    duties: [
      "Owns the source record",
      "Decides what may be shared",
      "Corrects its own data",
    ],
  },
  {
    tag: "connector",
    title: "Connector / partner layer",
    duties: [
      "Moves only permitted data",
      "Records time, source, route",
      "Never alters clinical meaning",
    ],
    highlighted: true,
  },
  {
    tag: "receiving_system",
    title: "Receiving system",
    duties: [
      "Acknowledges receipt",
      "Reviews and accepts — or not",
      "Owns what it does next",
    ],
  },
];

export default function IntegrationResponsibilityMap() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4F4F4] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Integration responsibility map
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Three systems, three sets of duties.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            The connector moves permitted information. It never takes over the
            source&apos;s or receiver&apos;s responsibilities.
          </p>
        </div>

        {/* 3-Card Flow Grid with Connecting Arrow Badges */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          {mapData.map((card, idx) => (
            <div key={idx} className="relative flex flex-col">
              <div
                className={`flex h-full flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  card.highlighted
                    ? "bg-[#333C9C] text-white shadow-[0_15px_35px_rgba(51,60,156,0.25)]"
                    : "border border-[#E2E8F0] bg-white text-[#1E1B4B] shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                }`}
              >
                <div>
                  {/* Technical Tag */}
                  <span
                    className={`font-mono text-[12px] font-semibold ${
                      card.highlighted ? "text-[#B7A6FF]" : "text-[#7C3AED]"
                    }`}
                  >
                    {card.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className={`mt-2 text-[22px] font-bold tracking-[-0.02em] ${
                      card.highlighted ? "text-white" : "text-[#1E1B4B]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Duties Bullet List */}
                  <ul className="mt-6 flex flex-col gap-3 text-[14px]">
                    {card.duties.map((duty, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span
                          className={`mt-0.5 font-bold ${
                            card.highlighted
                              ? "text-[#B7A6FF]"
                              : "text-[#7C3AED]"
                          }`}
                          aria-hidden="true"
                        >
                          &rsaquo;
                        </span>
                        <span
                          className={
                            card.highlighted
                              ? "text-blue-100"
                              : "text-[#475569]"
                          }
                        >
                          {duty}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connecting Connector Arrow Badge between columns (Visible on large screens) */}
              {idx < mapData.length - 1 && (
                <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 z-10 lg:flex items-center gap-1">
                  <span className="h-0.5 w-3 bg-[#8B5CF6]" aria-hidden="true" />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B5CF6] text-white shadow-md">
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                  </div>
                  <span className="h-0.5 w-3 bg-[#8B5CF6]" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
