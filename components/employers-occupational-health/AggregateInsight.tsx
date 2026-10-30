import { X } from "lucide-react";
import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";

const metrics = [
  { name: "Program awareness", unit: "Unit: % of eligible staff · method stated" },
  { name: "Navigation sessions", unit: "Unit: count per quarter · freshness shown" },
  { name: "Referrals coordinated", unit: "Unit: count · aggregate only" },
];

const never = [
  "Employee names linked to health data",
  "Case numbers or clinical notes",
  "Diagnoses or treatment details",
  "Small-group counts that could identify someone",
  "Filters that could single people out",
];

export default function AggregateInsight() {
  return (
    <section
      id="data-access"
      className="w-full scroll-mt-24 bg-white py-16 font-sans sm:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <Eyebrow>Data-access boundary &amp; measurement</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Aggregate insight. Never individual records.
        </h2>

        <div className="mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Permitted */}
          <div className="rounded-3xl border-2 border-[#CDEBE2] bg-white p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1F7A5A]">
              Permitted where approved
            </p>
            <h3
              className={`mt-1.5 text-xl font-semibold text-[#16245A] ${headingFont}`}
            >
              Aggregate program summaries
            </h3>
            <p className="mt-2 text-[15px] leading-6 text-[#5B6478]">
              Threshold-protected, reviewed, non-drillable reporting with a
              stated methodology and freshness.
            </p>
            <span className="mt-3 inline-block rounded-md bg-[#FFF1D6] px-2.5 py-1.5 text-xs font-bold text-[#7A4B00]">
              ILLUSTRATIVE — NOT ACTUAL OUTCOMES
            </span>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {metrics.map((m) => (
                <div key={m.name} className="flex min-h-[180px] flex-col rounded-2xl bg-[#F5F8FC] p-4">
                  <p className={`text-[15px] font-semibold text-[#16245A] ${headingFont}`}>
                    {m.name}
                  </p>
                  <p className="mt-6 pl-4 text-3xl font-semibold text-[#9AA3B5]" aria-label="No value shown">
                    —
                  </p>
                  <p className="mt-auto text-[13px] leading-5 text-[#5B6478]">{m.unit}</p>
                </div>
              ))}
              <div className="flex min-h-[180px] flex-col rounded-2xl border border-dashed border-[#C9BFFB] p-4">
                <p className={`text-[15px] font-semibold text-[#16245A] ${headingFont}`}>
                  Small group
                </p>
                <p className="mt-3 rounded-xl bg-[#F5F8FC] px-4 py-3 text-[26px] font-semibold text-[#9AA3B5]">
                  Suppressed
                </p>
                <p className="mt-auto text-[13px] leading-5 text-[#5B6478]">
                  Too few people to report safely
                </p>
              </div>
            </div>
          </div>

          {/* Never available */}
          <div className="rounded-3xl border-2 border-dashed border-[#F5BDBD] bg-[#FFF6F5] p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#B42318]">
              Never available to employers
            </p>
            <h3
              className={`mt-1.5 text-xl font-semibold text-[#16245A] ${headingFont}`}
            >
              Individual clinical information
            </h3>
            <ul className="mt-4 space-y-2.5">
              {never.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 rounded-lg border border-[#F7D4D4] bg-white px-4 py-3 text-[15px] text-[#2B3550]"
                >
                  <X className="h-4 w-4 shrink-0 text-[#B42318]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
