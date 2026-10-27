import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, inner, sectionPad } from "./ui";

type Cell = { text: string; d?: string[] };

const rows: { role: Cell; cells: Cell[] }[] = [
  {
    role: { text: "Originating provider" },
    cells: [
      { text: "The order or finding and its content", d: ["The order or finding and its", "content"] },
      { text: "Source record" },
      { text: "Issuing source" },
    ],
  },
  {
    role: { text: "Transmitting partner or system" },
    cells: [
      { text: "Secure movement of information" },
      { text: "Transport events and audit log", d: ["Transport events and audit", "log"] },
      { text: "System operator" },
    ],
  },
  {
    role: { text: "Receiving organization" },
    cells: [
      { text: "Routing to an accountable person", d: ["Routing to an accountable", "person"] },
      { text: "Acknowledgment record" },
      { text: "Named receiving owner" },
    ],
  },
  {
    role: {
      text: "Licensed reviewing or dispensing professional",
      d: ["Licensed reviewing or dispensing", "professional"],
    },
    cells: [
      { text: "Review, decision and any action" },
      { text: "Documented review or action", d: ["Documented review or", "action"] },
      { text: "The professional and their organization", d: ["The professional and their", "organization"] },
    ],
  },
];

const headings = ["Role", "Owns", "Evidence", "Escalation ownership"];
const widths = ["30.06%", "23.39%", "21.09%", "25.46%"];

export default function ResponsibilityMatrix() {
  return (
    <section
      id="matrix"
      className={`w-full bg-[radial-gradient(ellipse_520px_420px_at_1240px_226px,#ac96ff_0%,#e0d8ff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[13px] lg:pb-[0.01px] lg:pt-[2px]">
          <Eyebrow>Responsibility matrix</Eyebrow>
          <Title className="lg:pt-[2px]">
            Four roles. Each owns something specific.
          </Title>
          <Lede className="lg:pb-[0.7px]">
            Local agreements determine the actual owners.
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
                    className={`${fontPoppins} border-b border-solid border-[#5566c9] bg-[#4267d5] px-[18px] pb-[15.27px] pt-[14px] text-[20px] font-bold leading-[23.76px] text-[#edf1f5]`}
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
                    ? "border-b border-solid border-[#dcd6f2]"
                    : "";
                return (
                  <tr key={row.role.text}>
                    <th
                      scope="row"
                      className={`px-[18px] py-[15.75px] text-left align-top text-[14.4px] font-semibold leading-[23.76px] text-[#243b73] ${border}`}
                    >
                      <Copy text={row.role.text} d={row.role.d} />
                    </th>
                    {row.cells.map((cell) => (
                      <td
                        key={cell.text}
                        className={`px-[18px] py-[15.75px] align-top text-[14.4px] font-normal leading-[23.76px] text-[#273444] ${border}`}
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
