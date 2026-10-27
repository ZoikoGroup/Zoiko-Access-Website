import Image from "next/image";
import Copy from "./Copy";
import { Eyebrow, Lede, Title, inner, sectionPad } from "./ui";

const checks = [
  "Accountable owners named",
  "Approved recipient verification",
  "Escalation path",
  "Correction handling",
  "Privacy assessment",
  "Operational monitoring and recovery",
];

export default function ReadinessChecklist() {
  return (
    <section
      id="readiness"
      className={`w-full bg-[radial-gradient(ellipse_520px_420px_at_1240px_178px,#ac96ff_0%,#e0d8ff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} grid items-start gap-10 lg:grid-cols-[minmax(0,712px)_minmax(0,629px)] lg:justify-between lg:gap-0`}
      >
        <div className="flex w-full flex-col items-start gap-[40.01px]">
          <div className="flex w-full max-w-[760px] flex-col items-start gap-[13px]">
            <Eyebrow>Readiness checklist</Eyebrow>
            <Title className="lg:pt-[2.11px]">
              <Copy
                text="Six checks. An educational self-assessment."
                d={["Six checks. An educational self-", "assessment."]}
              />
            </Title>
            <Lede className="lg:pb-[0.7px]">
              There is no scoring and no &quot;certified ready&quot; result.
            </Lede>
          </div>

          <ul className="grid w-full gap-[16px] sm:grid-cols-2">
            {checks.map((check) => (
              <li key={check}>
                <label className="flex h-[63px] cursor-pointer items-center gap-[14px] rounded-[16px] border border-solid border-[#dcd6f2] bg-white pl-[18px] pr-[16px] text-[15px] font-medium leading-[24.82px] text-[#243b73]">
                  <input
                    type="checkbox"
                    className="size-[22px] shrink-0 appearance-none rounded-[5px] border-2 border-solid border-[#7657e8] bg-white checked:bg-[#7657e8]"
                  />
                  <span>{check}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[629/419] w-full max-w-[629px] lg:-mb-[45.9px] lg:mt-[53.3px] lg:w-[629px]">
          <Image
            src="/safety-escalation/readiness-illustration.webp"
            alt="A student at a desk with a laptop, books and a plant, beside a large checklist"
            fill
            sizes="(min-width: 1024px) 629px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
