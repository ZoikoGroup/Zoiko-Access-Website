import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

const rows = [
  [
    "Sending provider",
    "Readiness to discharge, treatment instructions, prescribing and the safe clinical handoff.",
  ],
  [
    "Receiving provider",
    "Deciding whether to accept, and the care that follows.",
  ],
  ["Patient or caregiver", "Taking part in their own care, as they choose."],
  [
    "Coordination platform",
    "Permissioned routing and a record of events. No clinical duty is transferred.",
  ],
  [
    "Authorized support services",
    "Their own scope of support, under their own rules.",
  ],
];

export default function RolesBoundaries() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>ROLES AND BOUNDARIES</Eyebrow>
        <Title className="lg:pt-[13px]">Who is responsible for what</Title>
        <Lead className="lg:pt-[13.99px]">
          A notification never transfers clinical duty. Examples need review for
          each country.
        </Lead>

        <div className="w-full overflow-x-auto pt-[13px]">
          <table className="w-full min-w-[720px] table-fixed border-separate border-spacing-0 overflow-hidden rounded-[18px] border border-solid border-[#d9d3f5] bg-white text-left">
            <colgroup>
              <col style={{ width: "27.2%" }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                {["Party", "Responsibility"].map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className={`${fontPoppins} bg-[#031974] px-[16px] pb-[13px] pt-[12px] text-[14px] font-semibold leading-[normal] text-white`}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([party, duty], index) => {
                const border =
                  index < rows.length - 1
                    ? "border-b border-solid border-[#d9d3f5]"
                    : "";
                return (
                  <tr key={party}>
                    <th
                      scope="row"
                      className={`${fontPoppins} px-[16px] py-[13px] align-top text-[15px] font-semibold leading-[24.75px] text-[#031974] ${border}`}
                    >
                      {party}
                    </th>
                    <td
                      className={`px-[16px] py-[13px] align-top text-[15px] font-normal leading-[24.75px] text-[#273444] ${border}`}
                    >
                      {duty}
                    </td>
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
