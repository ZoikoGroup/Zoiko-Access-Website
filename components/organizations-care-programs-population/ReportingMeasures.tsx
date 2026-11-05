import { X } from "lucide-react";
import { Eyebrow, heading } from "./shared";

const neverPublished = [
  "Data that could re-identify a participant",
  "Small-cohort breakdowns",
  "Performance claims without a source",
];

export default function ReportingMeasures() {
  return (
    <section id="reporting" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Reporting &amp; measures</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Aggregate only, and only when approved.
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Permitted */}
          <div className="rounded-3xl border-2 border-[#CDEBE0] bg-white p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#1E7A4C]">
              Permitted where approved
            </p>
            <h3 className={`${heading} mb-1 text-xl text-[#16245A]`}>Aggregate program usage</h3>
            <p className="mb-3 text-base text-[#5B6B8C]">
              Small cohorts suppressed; no unsourced performance metrics.
            </p>
            <span className="mb-5 inline-block rounded-md bg-[#FFF1DC] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-[#8A5A00]">
              Illustrative — not actual outcomes
            </span>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#F5F8FC] p-4">
                <p className={`${heading} mb-4 text-base text-[#16245A]`}>Participants reached</p>
                <p className="mb-6 pl-4 text-3xl text-[#9AA3BD]" aria-label="No value shown">
                  —
                </p>
                <p className="text-xs text-[#5B6B8C]">Unit: count · method stated</p>
              </div>
              <div className="rounded-2xl border border-dashed border-[#C9D0E4] p-4">
                <p className={`${heading} mb-2 text-base text-[#16245A]`}>Small group</p>
                <p className={`${heading} mb-2 rounded-xl bg-[#F5F8FC] px-4 py-3 text-2xl text-[#9AA3BD]`}>
                  Suppressed
                </p>
                <p className="text-xs text-[#5B6B8C]">Too few to report safely</p>
              </div>
            </div>
          </div>

          {/* Never published */}
          <div className="rounded-3xl border-2 border-dashed border-[#F3C4C0] bg-[#FFF7F6] p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#C0262D]">Never published</p>
            <h3 className={`${heading} mb-4 text-xl text-[#16245A]`}>Re-identifiable or unsourced data</h3>
            <ul className="space-y-2.5">
              {neverPublished.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 rounded-xl border border-[#F3D6D3] bg-white px-4 py-3 text-sm text-[#2A3550]"
                >
                  <X className="h-4 w-4 shrink-0 text-[#C0262D]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
