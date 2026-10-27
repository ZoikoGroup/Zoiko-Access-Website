import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const rows = [
  ["Prescribing", "Licensed prescriber", "Nothing clinical", "No prescribing by Zoiko Access"],
  ["Verification and dispensing", "Licensed pharmacy", "Permitted information handoffs", "No dispensing decisions"],
  ["Stock and supply", "Pharmacy", "Showing the source of published information", "No warehouse or inventory role"],
  ["Service information", "Pharmacy", "Source-attributed publication", "Pharmacy confirms accuracy"],
  ["Technical connection", "Pharmacy system operator", "Authorized, audited connectors", "Subject to security review"],
];

const headings = [
  "Activity",
  "Responsible party",
  "What Zoiko Access may support",
  "Boundaries",
];
const widths = ["19.65%", "19.03%", "29.65%", "21.94%"];

export default function ResponsibilityTable() {
  return (
    <section
      className={`w-full bg-[linear-gradient(-65.9deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.1px]">
          <Eyebrow tone="violet">Operating responsibility matrix</Eyebrow>
          <Title tone="light">
            <Copy
              text="Zoiko Access is not a pharmacy, prescriber or clinical source."
              d={["Zoiko Access is not a pharmacy,", "prescriber or clinical source."]}
            />
          </Title>
        </div>

        <div className="w-full overflow-x-auto rounded-[14px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[50px]">
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
                    className={`${fontPoppins} border-b border-solid border-[#dcd6f2] bg-[#714aff] px-[18px] pb-[15.27px] pt-[14px] text-[14.4px] font-bold leading-[23.76px] text-[#dcece9]`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const border =
                  index < rows.length - 1
                    ? "border-b border-solid border-[rgba(255,255,255,0.1)]"
                    : "";
                return (
                  <tr key={row[0]}>
                    <th
                      scope="row"
                      className={`px-[18px] py-[15px] text-left text-[14.4px] font-semibold leading-[23.76px] text-[#dcece9] ${border}`}
                    >
                      {row[0]}
                    </th>
                    {row.slice(1).map((cell) => (
                      <td
                        key={cell}
                        className={`px-[18px] py-[15px] text-[14.4px] font-normal leading-[23.76px] text-[#fff7e6] ${border}`}
                      >
                        {cell}
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
