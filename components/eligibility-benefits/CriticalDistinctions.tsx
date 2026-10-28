import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad, sectionY } from "./ui";

const headings = ["Decision", "What it answers", "Who decides", "What it does not mean"];
const widths = ["16.6%", "34.6%", "22.3%", "26.5%"];

const rows = [
  ["Enrollment / eligibility", "Is the person associated with a plan on a service date?", "Payer / plan", "Not a coverage guarantee"],
  ["Benefit terms", "What the plan describes for a service category.", "Payer / plan", "Not a quote or cost estimate"],
  ["Prior authorization", "Is a specific service approved in advance?", "Payer, separate determination", "Never inferred from eligibility"],
  ["Medical necessity", "Does a service meet clinical criteria?", "Applicable clinical & payer review", "Not decided by Zoiko Access"],
  ["Claims adjudication", "How a submitted claim is processed.", "Payer", "Inquiry ≠ approved claim"],
  ["Payment", "Whether and what reimbursement is made.", "Payer", "Not promised by any eligibility response"],
];

export default function CriticalDistinctions() {
  return (
    <section id="distinctions" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-11`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.9px]">
          <Eyebrow>Critical distinctions</Eyebrow>
          <Title>These decisions are not the same.</Title>
          <p className="w-full max-w-[760px] pt-[2.8px] text-[16px] leading-[26px] text-[#5b6678] min-[1400px]:max-w-none lg:text-[17px] lg:leading-[27.2px]">
            <Copy
              text="An eligible response is not a promise that a service will be covered. Each decision below has its own owner and its own process."
              d={[
                "An eligible response is not a promise that a service will be covered. Each decision below has",
                "its own owner and its own process.",
              ]}
            />
          </p>
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
                          className={`${fontPoppins} px-[18px] pb-[17px] pt-[15px] text-left align-top text-[14.5px] font-semibold leading-[23.2px] text-[#16245a] ${border}`}
                        >
                          {cell}
                        </th>
                      ) : (
                        <td
                          key={col}
                          className={`px-[18px] pb-[16.49px] pt-[15.5px] align-top text-[14.5px] leading-[23.2px] ${border} ${
                            col === 3 ? "font-medium text-[#5a3fc9]" : "font-normal text-[#273444]"
                          }`}
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
