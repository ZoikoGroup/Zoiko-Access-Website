import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lede, Title, inner, sectionPad } from "./ui";

const owners = [
  "Preparation: the diagnostic provider",
  "Result status: the ordering clinician's team",
  "Interpretation: your qualified clinician",
];

export default function CaregiverGuidance() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div
        className={`${inner} flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-[56px]`}
      >
        <div
          className="relative aspect-[528/422.39] w-full overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#4267d5_0%,#7657e8_100%)] lg:min-w-0 lg:flex-1"
          role="img"
          aria-label="A person standing beside a rushing river in a misty forest"
        >
          <FigmaImage
            src="/diagnostics-coordination/caregiver.webp"
            box={{ left: -1.43, width: 102.85, height: 100.19 }}
            sizes="(min-width: 1024px) 700px, 90vw"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-[12.7px] lg:min-w-0 lg:flex-1">
          <Eyebrow>Patients and caregivers</Eyebrow>
          <Title className="lg:pt-[2.3px]">Ask the responsible provider.</Title>
          <Lede>
            <Copy
              text="For preparation, result status and what a result means, contact the clinician or provider who arranged the test. This page has no patient-specific status, record lookup or self-diagnosis."
              d={[
                "For preparation, result status and what a result means, contact the",
                "clinician or provider who arranged the test. This page has no",
                "patient-specific status, record lookup or self-diagnosis.",
              ]}
            />
          </Lede>
          <ul className="flex w-full flex-col gap-[9px] pt-[2.29px]">
            {owners.map((owner) => (
              <li
                key={owner}
                className="relative pb-[0.81px] pl-[20px] text-[15px] font-normal leading-[24.75px] text-[#273444]"
              >
                <span
                  className="absolute left-0 top-[10.31px] size-[6px] rounded-[3px] bg-[#7657e8]"
                  aria-hidden="true"
                />
                {owner}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
