"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader, container, heading, section } from "./shared";

const gates = [
  { title: "Country", text: "Local law permits the review and its data handling." },
  { title: "Market", text: "Zoiko Access is approved to operate there." },
  { title: "Entitlement", text: "The organization is eligible for that scope." },
];

// No market has an open program yet, so every selection shows the same message.
const markets = ["United States", "United Kingdom", "European Union", "India", "Canada", "Australia"];

export default function RegionalGates() {
  const [market, setMarket] = useState("");

  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Availability & regional requirements"
          title="Three gates before any review starts."
          intro="The framework is not open in any market yet. Each gate would need to be confirmed first."
        />

        <ol className="mt-12 grid grid-cols-1 rounded-xl border border-[#E4E7F2] md:grid-cols-3">
          {gates.map((g, i) => (
            <li
              key={g.title}
              className={`px-6 py-7 ${i > 0 ? "border-t border-[#E4E7F2] md:border-l md:border-t-0" : ""}`}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7B5CF0]">Gate {i + 1}</p>
              <h3 className={`${heading} mt-2 text-lg text-[#16245A]`}>{g.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">{g.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-4 flex flex-col gap-4 rounded-xl bg-[#16245A] px-6 py-5 sm:flex-row sm:items-center sm:gap-5">
          <label htmlFor="cf-market" className="text-base font-semibold text-white">
            Check a market
          </label>
          <div className="relative w-full sm:w-60">
            <select
              id="cf-market"
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              className="w-full appearance-none rounded-md bg-[#EFEFEF] px-4 py-3 pr-10 text-base text-[#16245A]"
            >
              <option value="">Select a market</option>
              {markets.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#16245A]"
              aria-hidden="true"
            />
          </div>
          <p className="text-sm text-[#D7DEF5]" aria-live="polite">
            {market
              ? `${market}: no open evaluation program.`
              : "No market has an open evaluation program."}
          </p>
        </div>
      </div>
    </section>
  );
}
