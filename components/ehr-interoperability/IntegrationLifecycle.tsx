import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, sectionPad } from "./ui";

const phases = [
  { title: "Qualification", output: "Signed evaluation of the use case and partner." },
  { title: "Permitted use case", output: "Scope and legal basis written down." },
  { title: "Mapping", output: "Fields and meanings agreed." },
  { title: "Testing", output: "Integration tests passed." },
  { title: "Review", output: "Data protection and clinical-safety review." },
  { title: "Controlled rollout", output: "Limited, approved start." },
  { title: "Monitoring and rollback", output: "Watching, with a way back." },
];

export default function IntegrationLifecycle() {
  return (
    <section
      className={`w-full bg-[linear-gradient(139.54deg,#02125f_0%,#2f42cb_55%,#7b3ff2_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-10 lg:min-h-[650px] lg:flex-row lg:items-start lg:gap-0">
        <div className="flex w-full flex-col items-start justify-center gap-[13.1px] lg:h-[637px] lg:min-w-px lg:flex-1">
          <Eyebrow tone="light">INTEGRATION LIFECYCLE</Eyebrow>
          <Title tone="light">
            <Copy
              text="Seven phases, each with an output"
              d={["Seven phases, each", "with an output"]}
            />
          </Title>
          <p className="w-full pt-[0.9px] text-[16px] font-normal leading-[26.4px] text-[#e6e9ff]">
            <Copy
              text="No phase starts without signed evaluation, a data protection decision, passed integration tests and a clinical-safety review."
              d={[
                "No phase starts without signed evaluation, a data protection",
                "decision, passed integration tests and a clinical-safety review.",
              ]}
            />
          </p>

          <ol className="relative mt-[4px] w-full max-w-[494px] border-l-[3px] border-solid border-[#ded3ff] pt-[4.75px] lg:h-[438px]">
            {phases.map((phase, index) => (
              <li
                key={phase.title}
                className={`relative -ml-px flex flex-col items-start pb-[18px] pl-[34px] ${
                  index === phases.length - 1 ? "lg:h-[49px]" : "lg:h-[64px]"
                }`}
              >
                <span
                  className={`${fontPoppins} absolute -left-[18px] -top-[6px] flex size-[34px] items-center justify-center rounded-[17px] bg-[#7b3ff2] text-center text-[14px] font-bold leading-[normal] text-white`}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3
                  className={`${fontPoppins} w-full pb-[0.69px] text-[18px] font-semibold leading-[20.7px] tracking-[-0.36px] text-white`}
                >
                  {phase.title}
                </h3>
                <p className="w-full text-[14.5px] font-normal leading-[23.93px] text-[#e6e9ff]">
                  Output: {phase.output}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative h-[420px] w-full shrink-0 overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#e8e2ff_0%,#d5dcff_100%)] lg:h-[650px] lg:w-[520px]">
          <FigmaImage
            src="/ehr-interoperability/lifecycle-engineer.webp"
            alt="An engineer working at a laptop in an electronics lab"
            box={{ left: -43.63, width: 187.26 }}
            sizes="(min-width: 1024px) 980px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
