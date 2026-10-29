import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

type Cell = { text: string; d?: string[] };

const rows: { domain: Cell; cells: Cell[] }[] = [
  {
    domain: { text: "Patient identity", d: ["Patient", "identity"] },
    cells: [
      {
        text: "Participating identity or EHR authority",
        d: ["Participating identity or", "EHR authority"],
      },
      {
        text: "Approved identifier binding or match status",
        d: ["Approved identifier binding", "or match status"],
      },
      { text: "Authorized recipient", d: ["Authorized", "recipient"] },
      {
        text: "Match is not consent or eligibility",
        d: ["Match is not consent or", "eligibility"],
      },
      { text: "The identity authority", d: ["The identity", "authority"] },
    ],
  },
  {
    domain: { text: "Clinical record" },
    cells: [
      {
        text: "Originating healthcare provider",
        d: ["Originating healthcare", "provider"],
      },
      {
        text: "Scoped record pointer or permitted extract",
        d: ["Scoped record pointer or", "permitted extract"],
      },
      { text: "Permitted receiver" },
      {
        text: "Transport is not a comprehensive record",
        d: ["Transport is not a", "comprehensive record"],
      },
      {
        text: "The originating provider",
        d: ["The originating", "provider"],
      },
    ],
  },
  {
    domain: { text: "Referral" },
    cells: [
      {
        text: "Referrer and receiver in their own systems",
        d: ["Referrer and receiver in", "their own systems"],
      },
      {
        text: "Referral packet, acknowledgment",
        d: ["Referral packet,", "acknowledgment"],
      },
      {
        text: "The receiving organization",
        d: ["The receiving", "organization"],
      },
      {
        text: "Acknowledgment is not an accepted referral",
        d: ["Acknowledgment is not an", "accepted referral"],
      },
      {
        text: "The receiving organization",
        d: ["The receiving", "organization"],
      },
    ],
  },
  {
    domain: { text: "Appointment" },
    cells: [
      {
        text: "Participating provider scheduler",
        d: ["Participating provider", "scheduler"],
      },
      {
        text: "Request, hold or confirmation status",
        d: ["Request, hold or confirmation", "status"],
      },
      {
        text: "The requesting organization",
        d: ["The requesting", "organization"],
      },
      {
        text: "A hold is not a confirmed appointment",
        d: ["A hold is not a confirmed", "appointment"],
      },
      { text: "The provider scheduler", d: ["The provider", "scheduler"] },
    ],
  },
  {
    domain: { text: "Diagnostic result", d: ["Diagnostic", "result"] },
    cells: [
      {
        text: "Producing lab and reviewing clinician",
        d: ["Producing lab and", "reviewing clinician"],
      },
      { text: "Result notice or review event" },
      {
        text: "The responsible clinician",
        d: ["The responsible", "clinician"],
      },
      {
        text: "A result being available is not clinical review",
        d: ["A result being available is not", "clinical review"],
      },
      {
        text: "The reviewing clinician",
        d: ["The reviewing", "clinician"],
      },
    ],
  },
  {
    domain: { text: "Care transition" },
    cells: [
      {
        text: "Discharging and receiving organizations",
        d: ["Discharging and receiving", "organizations"],
      },
      {
        text: "Handoff record or owned next action",
        d: ["Handoff record or owned", "next action"],
      },
      {
        text: "The receiving organization",
        d: ["The receiving", "organization"],
      },
      { text: "Sent is not care assumed" },
      {
        text: "The receiving organization",
        d: ["The receiving", "organization"],
      },
    ],
  },
];

const headings = [
  "Domain",
  "Source owner",
  "Possible artifact",
  "Permitted receiver",
  "Forbidden inference",
  "Escalation owner",
];

// Column widths from the Figma table (sum 1298).
const widths = [157, 243, 261, 185, 272, 180];

export default function OwnershipTable() {
  return (
    <section
      className={`w-full bg-[linear-gradient(148.66deg,#f1eefe_10.48%,#ccc0ff_73.45%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>SOURCE OF TRUTH</Eyebrow>
        <Title>Who owns what, and what cannot be inferred</Title>

        <div className="w-full overflow-x-auto pt-[27px]">
          <table className="w-full min-w-[1100px] table-fixed border-separate border-spacing-0 overflow-hidden rounded-[18px] border border-solid border-[#d9d3f5] bg-white text-left">
            <colgroup>
              {widths.map((width) => (
                <col key={width} style={{ width: `${(width / 1298) * 100}%` }} />
              ))}
            </colgroup>
            <thead>
              <tr>
                {headings.map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className={`${fontPoppins} bg-[#031974] px-[14px] pb-[14px] pt-[13px] text-[13.5px] font-semibold leading-[normal] text-white`}
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
                    ? "border-b border-solid border-[#d9d3f5]"
                    : "";
                return (
                  <tr key={row.domain.text}>
                    <th
                      scope="row"
                      className={`${fontPoppins} h-[77px] align-top px-[14px] pt-[13px] pb-[13px] text-[14.5px] font-semibold leading-[normal] text-[#031974] ${border}`}
                    >
                      <Copy text={row.domain.text} d={row.domain.d} />
                    </th>
                    {row.cells.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`h-[77px] align-top px-[14px] py-[13px] text-[14.5px] leading-[23.93px] ${border} ${
                          cellIndex === 3
                            ? "font-semibold text-[#8a2d2d]"
                            : "font-normal text-[#273444]"
                        }`}
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
