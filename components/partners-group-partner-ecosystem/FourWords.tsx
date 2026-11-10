"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Accent, SplitHeader, container, heading, section } from "./shared";

const words = [
  { term: "Interest", def: "You told us you would like to explore working together. Nothing has been assessed yet." },
  { term: "Review", def: "Your purpose, fit and evidence are being checked against criteria. Nothing is approved yet." },
  {
    term: "Authorization",
    def: "A responsible institution has formally approved a specific scope. It is not yet live.",
  },
  {
    term: "Operational",
    def: "The approved connection is live in a named market, with an owner and a review date.",
  },
];

const states = [
  {
    state: "P0 informational",
    show: "Plain-language guidance; approved INFO pages only",
    never: "Technical capability or partner status",
  },
  {
    state: "Published INFO",
    show: "Source-reviewed explanation with owner and review date",
    never: "An operational endpoint, network or certification",
  },
  {
    state: "GATED unavailable",
    show: "Explains why the route is not active; links to relevant INFO",
    never: "Self-service submission, staffing or developer keys",
  },
  {
    state: "Potential future active",
    show: "Only after signed market × organisation × service × role × release evidence",
    never: "Universal access",
  },
  {
    state: "PX degraded / suspended",
    show: "Affected action removed; accurate education kept",
    never: "Last known success as current availability",
  },
];

export default function FourWords() {
  const [open, setOpen] = useState<string | null>("Interest");

  return (
    <section className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SplitHeader
          eyebrow="Accessibility & inclusion"
          title={
            <>
              Four words, <Accent>plainly defined</Accent>
            </>
          }
          intro="Statuses always use words and shapes, never colour alone."
        />

        <ul className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {words.map((w) => {
            const isOpen = open === w.term;
            const id = `word-${w.term.toLowerCase()}`;
            return (
              <li key={w.term} className="rounded-2xl border border-[#E4E7F2] bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? null : w.term)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-5 text-left"
                >
                  <span className={`${heading} text-lg text-[#16245A]`}>{w.term}</span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 text-[#7B5CF0]" aria-hidden="true" />
                  ) : (
                    <Plus className="h-4 w-4 text-[#7B5CF0]" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <div id={id} className="-mt-2 px-5 pb-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#7B5CF0]">
                      Plain-language definition
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-[#5B6B8C]">{w.def}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#DDE2EE] text-xs uppercase tracking-widest text-[#5B6B8C]">
                <th scope="col" className="px-3 py-3 font-medium">State</th>
                <th scope="col" className="px-3 py-3 font-medium">What we show</th>
                <th scope="col" className="px-3 py-3 font-medium">Never inferred</th>
              </tr>
            </thead>
            <tbody>
              {states.map((s) => (
                <tr key={s.state} className="border-b border-[#DDE2EE]">
                  <th scope="row" className={`${heading} px-3 py-4 font-semibold text-[#16245A]`}>{s.state}</th>
                  <td className="px-3 py-4 text-[#2A3550]">{s.show}</td>
                  <td className="px-3 py-4 text-[#B42318]">{s.never}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
