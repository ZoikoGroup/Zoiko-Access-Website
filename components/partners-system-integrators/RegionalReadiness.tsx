"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Eyebrow, heading } from "./shared";

// No market has an approved registry entry yet, so every selection shows the same empty state.
const markets = ["United States", "United Kingdom", "European Union", "India", "Canada", "Australia"];

export default function RegionalReadiness() {
  const [market, setMarket] = useState("");
  const rows = market ? [market] : ["—", "—", "—"];

  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-16">
        <div>
          <Eyebrow>Regional readiness</Eyebrow>
          <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
            Availability by market, not by default.
          </h2>
          <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
            Market and data-source availability comes only from an approved registry. Nothing is assumed to be
            live.
          </p>
          <label htmlFor="market" className="mb-2 block text-base font-semibold text-[#16245A]">
            Check a market
          </label>
          <div className="relative max-w-[360px]">
            <select
              id="market"
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              className="w-full appearance-none rounded-md border border-[#243B73] bg-white px-4 py-3.5 pr-10 text-base text-[#16245A]"
            >
              <option value="">Select a market</option>
              {markets.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#16245A]"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="h-fit overflow-x-auto rounded-sm border border-[#E4E7F2] bg-white">
          <table className="w-full min-w-[480px] text-left lg:min-w-0 text-sm" aria-live="polite">
            <thead className="bg-[#F0F3F9]">
              <tr className="text-[#16245A]">
                {["Market", "Data sources", "Status", "Last reviewed"].map((h) => (
                  <th key={h} scope="col" className={`${heading} px-4 py-3.5 text-sm font-semibold`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={`${r}-${i}`} className="border-t border-[#E4E7F2] text-xs text-[#9AA3BD]">
                  <td className="px-4 py-4 text-sm text-[#16245A]">{r}</td>
                  <td className="px-4 py-4">no approved entry</td>
                  <td className="px-4 py-4">not released</td>
                  <td className="px-4 py-4">—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
