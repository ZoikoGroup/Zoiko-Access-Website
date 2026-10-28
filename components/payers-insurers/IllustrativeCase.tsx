import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, inner, lavender, sectionPad, sectionY } from "./ui";

const headings = ["Stage", "What happens", "Source owner", "Next-step owner", "Evidence needed"];
const widths = ["11%", "35.6%", "19.7%", "15.7%", "18%"];

const rows = [
  ["1 · Context", "An authorized user sets plan context for an inquiry.", "Authorized organization", "Authorized organization", "Verified role and purpose"],
  ["2 · Inquiry sent", "An eligibility inquiry is sent through a permissioned interface.", "Zoiko Access (transport status)", "Payer", "Timestamped send record"],
  ["3 · Response", "The payer returns a response with an effective date.", "Payer", "Authorized organization", "Payer source label and date"],
  ["4 · Resolution", "Questions are resolved directly with the payer.", "Payer", "Payer", "Named contact or reference"],
];

export default function IllustrativeCase() {
  return (
    <section id="case" className={`w-full ${lavender} ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-11`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.91px]">
          <Eyebrow>Illustrative state story</Eyebrow>
          <Title>
            <Copy text="One inquiry. Every owner named." d={["One inquiry.", "Every owner named."]} />
          </Title>
          <p className="rounded-full bg-[#fff4e0] px-3 pb-[5.7px] pt-[7.8px] text-[12px] font-semibold leading-[19.2px] text-[#7a4b00]">
            ILLUSTRATIVE ONLY — fictional, generic example. No real member, payer or decision.
          </p>
          <Lead>
            <Copy
              text="A generic insurance eligibility inquiry, showing who owns the source and who owns the next step at each stage."
              d={[
                "A generic insurance eligibility inquiry, showing who owns the source and who owns the next",
                "step at each stage.",
              ]}
            />
          </Lead>
        </div>

        <div className="w-full overflow-x-auto rounded-[16px] border border-solid border-[#e3e8f2] bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)]">
          <table className="w-full min-w-[860px] table-fixed border-separate border-spacing-0 text-left">
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
                    className={`${fontPoppins} border-b border-solid border-[#e3e8f2] bg-[#243b73] px-[18px] py-4 text-[13px] font-medium uppercase leading-[20.8px] tracking-[0.52px] text-white`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const border = index < rows.length - 1 ? "border-b border-solid border-[#e3e8f2]" : "";
                return (
                  <tr key={row[0]}>
                    {row.map((cell, col) =>
                      col === 0 ? (
                        <th
                          key={col}
                          scope="row"
                          className={`px-[18px] pb-[15.69px] pt-[15.5px] text-left align-top text-[14.5px] font-semibold leading-[23.2px] text-[#16245a] ${border}`}
                        >
                          {cell}
                        </th>
                      ) : (
                        <td
                          key={col}
                          className={`px-[18px] pb-[15.69px] pt-[15.5px] align-top text-[14.5px] font-normal leading-[23.2px] text-[#273444] ${border}`}
                        >
                          {cell}
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
    </section>
  );
}
