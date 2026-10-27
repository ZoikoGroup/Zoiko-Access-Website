"use client";

import { useState } from "react";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, photoBg, sectionPad } from "./ui";

type Cell = { text: string; d?: string[] };
type Row = [Cell, Cell, Cell, Cell];

const c = (text: string, ...d: string[]): Cell => ({ text, d: d.length ? d : undefined });

const tabs: { name: string; rows: Row[] }[] = [
  {
    name: "Laboratory exchange",
    rows: [
      [c("Order identifiers"), c("Ordering system"), c("Matched order record", "Matched order", "record"), c("Reconcile with ordering party", "Reconcile with", "ordering party")],
      [c("Specimen / order status", "Specimen / order", "status"), c("Laboratory"), c("Source status event", "Source status", "event"), c("Show as unknown")],
      [c("Report publication"), c("Laboratory"), c("Versioned report"), c("Laboratory re-issues", "Laboratory re-", "issues")],
      [c("Amendments and cancellations", "Amendments and", "cancellations"), c("Laboratory"), c("Attributable replacement", "Attributable", "replacement"), c("Earlier version kept in history", "Earlier version kept", "in history")],
      [c("Acknowledgment"), c("Receiving organization", "Receiving", "organization"), c("Endpoint confirmation", "Endpoint", "confirmation"), c("Approved alternative route", "Approved", "alternative route")],
    ],
  },
  // The Figma frame shows the laboratory tab only. The imaging rows below
  // restate responsibilities already described elsewhere on this page.
  {
    name: "Imaging exchange",
    rows: [
      [c("Scheduling request"), c("Ordering system"), c("Matched order record", "Matched order", "record"), c("Reconcile with ordering party", "Reconcile with", "ordering party")],
      [c("Study status"), c("Imaging provider", "Imaging", "provider"), c("Source status event", "Source status", "event"), c("Show as unknown")],
      [c("Report delivery"), c("Radiologist or provider", "Radiologist or", "provider"), c("Versioned report"), c("Provider re-issues", "Provider re-", "issues")],
      [c("Image archive pointer", "Image archive", "pointer"), c("Archive owner", "Archive", "owner"), c("Pointer to the archive", "Pointer to the", "archive"), c("Archive owner repairs or re-issues", "Archive owner repairs", "or re-issues")],
      [c("Acknowledgment"), c("Receiving organization", "Receiving", "organization"), c("Endpoint confirmation", "Endpoint", "confirmation"), c("Approved alternative route", "Approved", "alternative route")],
    ],
  },
];

const headings: { text: string; d?: string[] }[] = [
  { text: "Concept" },
  { text: "Owner" },
  { text: "Required evidence", d: ["Required", "evidence"] },
  { text: "Failure path" },
];
const widths = ["29.7%", "22.2%", "23.5%", "24.4%"];

export default function ExchangeTables() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className={`w-full bg-[#f4f8fd] py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[18px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.01px]">
          <Eyebrow>Information exchange</Eyebrow>
          <Title className="lg:max-w-none lg:whitespace-nowrap">
            What moves, who owns it, and how it fails.
          </Title>
        </div>

        <div role="tablist" aria-label="Exchange type" className="flex flex-wrap gap-[8px] pt-[22px]">
          {tabs.map((item, index) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => setActive(index)}
              className={`${fontPoppins} rounded-[10px] border border-solid px-[20px] py-[12px] text-[15.2px] font-semibold leading-[normal] ${
                index === active
                  ? "border-[#243b73] bg-[#243b73] text-white"
                  : "border-[#dcd6f2] bg-white text-[#243b73]"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex w-full flex-col gap-[22px]">
          <div className="grid gap-[36px] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-stretch">
            <div
              className={`relative h-[320px] w-full overflow-hidden rounded-[18px] lg:order-1 lg:h-auto ${photoBg}`}
              role="img"
              aria-label="Tall bamboo trees seen from below in a green forest"
            >
              <FigmaImage
                src="/lab-imaging-integration/exchange-bamboo-forest.webp"
                box={{ top: -1.85, height: 103.71 }}
                sizes="(min-width: 1024px) 505px, 90vw"
              />
            </div>
            <div
              role="tabpanel"
              className="w-full overflow-x-auto rounded-[14px] border border-solid border-[#dcd6f2] bg-white lg:order-2 lg:self-start"
            >
              <table className="w-full min-w-[680px] table-fixed border-separate border-spacing-0 text-left">
                <colgroup>
                  {widths.map((width) => (
                    <col key={width} style={{ width }} />
                  ))}
                </colgroup>
                <thead>
                  <tr>
                    {headings.map((h) => (
                      <th
                        key={h.text}
                        scope="col"
                        className={`${fontPoppins} border-b border-solid border-[#dcd6f2] bg-[#ebe9fb] px-[18px] pb-[15px] pt-[14px] align-top text-[14.4px] font-bold leading-[23.76px] text-[#243b73]`}
                      >
                        <Copy text={h.text} d={h.d} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tab.rows.map((row, index) => {
                    const border =
                      index < tab.rows.length - 1
                        ? "border-b border-solid border-[#dcd6f2]"
                        : "";
                    return (
                      <tr key={row[0].text}>
                        {row.map((cell, i) =>
                          i === 0 ? (
                            <th
                              key={cell.text}
                              scope="row"
                              className={`px-[18px] py-[15px] text-left align-top text-[14.4px] font-semibold leading-[23.76px] text-[#243b73] ${border}`}
                            >
                              <Copy text={cell.text} d={cell.d} />
                            </th>
                          ) : (
                            <td
                              key={cell.text}
                              className={`px-[18px] py-[15px] align-top text-[14.4px] font-normal leading-[23.76px] text-[#273444] ${border}`}
                            >
                              <Copy text={cell.text} d={cell.d} />
                            </td>
                          ),
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <p className="w-full rounded-[12px] bg-[#fff0d9] px-[18px] py-[14px] text-[14.4px] font-normal leading-[23.76px] text-[#6b4300]">
            No automatic diagnosis. Interpretation belongs to qualified
            professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
