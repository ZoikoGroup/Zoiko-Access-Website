import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, sectionPad } from "./ui";

type Cell = { text: string; d?: string[] };
const c = (text: string, ...d: string[]): Cell => ({ text, d: d.length ? d : undefined });

const rows: [string, Cell, Cell, Cell][] = [
  ["Availability not confirmed", c("None yet"), c("Pharmacy"), c("No verified source. Ask the pharmacy.")],
  ["Stock confirmed by pharmacy", c("Pharmacy"), c("Pharmacist"), c("The pharmacy says it holds the item. Not yet dispensed.", "The pharmacy says it holds the item. Not yet", "dispensed.")],
  ["Awaiting prescription validation", c("Pharmacy"), c("Prescriber or pharmacy", "Prescriber or", "pharmacy"), c("A check is still open.")],
  ["Ready for collection", c("Fulfilling pharmacy"), c("Patient"), c("The pharmacy reports it ready. Hours and rules are its own.", "The pharmacy reports it ready. Hours and rules are its", "own.")],
  ["Withdrawn", c("Pharmacy or prescriber", "Pharmacy or", "prescriber"), c("Source organization"), c("The earlier status no longer holds.")],
];

const headings = ["Status term", "Authoritative sender", "Next owner", "Plain-language meaning"];
const widths = ["32.2%", "18.5%", "18.3%", "31%"];

function Tag() {
  return (
    <span className="ml-2 inline-block whitespace-nowrap rounded-[6px] bg-[#fff0d9] px-[8px] py-[1.5px] align-middle text-[11.2px] font-bold leading-[18.48px] text-[#7a4b00]">
      Example only
    </span>
  );
}

export default function StatusGlossary() {
  return (
    <section
      className={`w-full bg-[linear-gradient(180deg,#ffffff_0%,#ebe9fb_40%,#ffffff_100%)] py-12 lg:py-[88px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-start gap-[40px] lg:px-6">
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[13px]">
          <Eyebrow>Status glossary</Eyebrow>
          <Title size="md">
            <Copy
              text="Each status names who says it and what it means."
              d={["Each status names who says it and what", "it means."]}
            />
            <Tag />
          </Title>
          <Lede className="lg:pb-[0.7px]">
            Illustrative labels. No live status chips are shown on this page.
          </Lede>
        </div>

        <div className="w-full overflow-x-auto rounded-[14px] border border-solid border-[#dcd6f2] bg-white">
          <table className="w-full min-w-[680px] table-fixed border-separate border-spacing-0 text-left">
            <colgroup>
              {widths.map((width) => (
                <col key={width} style={{ width }} />
              ))}
            </colgroup>
            <thead>
              <tr>
                {headings.map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className={`${fontPoppins} border-b border-solid border-[#dcd6f2] bg-[#ebe9fb] px-[18px] pb-[15.27px] pt-[14px] text-[14.4px] font-bold leading-[23.76px] text-[#243b73]`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([term, a, b, d], index) => {
                const border =
                  index < rows.length - 1
                    ? "border-b border-solid border-[#dcd6f2]"
                    : "";
                return (
                  <tr key={term}>
                    <th
                      scope="row"
                      className={`px-[18px] py-[13.5px] text-left align-top text-[14.4px] font-semibold leading-[23.76px] text-[#243b73] ${border}`}
                    >
                      {term}
                      <Tag />
                    </th>
                    {[a, b, d].map((cell) => (
                      <td
                        key={cell.text}
                        className={`px-[18px] py-[13.5px] align-top text-[14.4px] font-normal leading-[23.76px] text-[#273444] ${border}`}
                      >
                        <Copy text={cell.text} d={cell.d} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
