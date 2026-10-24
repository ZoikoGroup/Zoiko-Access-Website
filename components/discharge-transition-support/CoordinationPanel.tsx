import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const nodes = [
  ["Node A", "sender"],
  ["Node B", "transport"],
  ["Node C", "receiver"],
  ["Node D", "reviewer"],
  ["Node E", "follow-up"],
];

export default function CoordinationPanel() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[29px]`}>
        <div className="flex w-full flex-col gap-[13px] lg:pb-[17px]">
          <Eyebrow>ILLUSTRATIVE COORDINATION PANEL</Eyebrow>
          <Title>A generic picture of five nodes</Title>
        </div>

        <div className="relative w-full rounded-[26px] border-2 border-dashed border-[#7b3ff2] bg-white p-[26px]">
          <span
            className={`${fontPoppins} absolute left-[24px] top-[-14px] rounded-full bg-[#7b3ff2] px-[14px] pb-[5px] pt-[4px] text-[12px] font-bold leading-[normal] text-white`}
          >
            Illustrative workflow, not a live patient record
          </span>
          <ul className="grid gap-[10px] pt-3 sm:grid-cols-2 lg:flex lg:pt-0">
            {nodes.map(([title, sub]) => (
              <li
                key={title}
                className="flex flex-col gap-[2px] rounded-[16px] bg-[#f1eefe] px-[8px] py-[14px] lg:min-h-[84px] lg:flex-1"
              >
                <span
                  className={`${fontPoppins} text-[14px] font-semibold leading-[normal] text-[#031974]`}
                >
                  {title}
                </span>
                <span className="text-[12px] font-normal leading-[normal] text-[#566]">
                  {sub}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
