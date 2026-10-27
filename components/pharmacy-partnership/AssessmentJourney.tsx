import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, inner, photoBg, sectionPad } from "./ui";

const stages = [
  { title: "Introductory review", text: "Understand the organization and its markets.", src: "stage-introductory", alt: "A person standing on a rocky shore watching waves" },
  { title: "Regulatory and organization review", text: "Consider licensing and authority for the region.", src: "stage-regulatory", alt: "A winding road past wind turbines in a snowy field" },
  { title: "Operational review", text: "Understand services and how information is maintained.", src: "stage-operational", alt: "Waves washing onto a sandy beach seen from above" },
  { title: "Security and privacy review", text: "Assess controls, access and data handling.", src: "stage-security", alt: "People sitting on a white cliff above a calm blue sea" },
  { title: "Technical review", text: "Assess the proposed interface and its testing.", src: "stage-technical", alt: "A grassy track under a cloudy sky" },
  { title: "Decision and next steps", text: "Any outcome depends on assessment, terms and approvals.", src: "stage-decision", alt: "The inside of a bus with rows of seats" },
];

export default function AssessmentJourney() {
  return (
    <section
      id="assessment-process"
      className={`w-full scroll-mt-[40px] bg-[#f1fbff] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-center gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-center gap-[13px] text-center lg:pt-[2px]">
          <Eyebrow center>Assessment journey</Eyebrow>
          <Title className="text-center lg:whitespace-nowrap lg:pt-[2px]">
            Six named stages. Not a live tracker.
          </Title>
          <Lede className="text-center lg:pb-[0.7px]">
            Dates, fees, contract outcome and approval timing are not shown.
          </Lede>
        </div>

        <ol className="flex w-full max-w-[1256px] flex-col gap-[36px]">
          {stages.map((stage, index) => {
            const flip = index % 2 === 1;
            return (
              <li
                key={stage.title}
                className="relative flex flex-col items-center justify-center gap-[24px] lg:min-h-[263.75px] lg:flex-row lg:gap-[56px]"
              >
                <div
                  className={`relative aspect-[422/263.75] w-full overflow-hidden rounded-[14px] lg:min-w-0 lg:flex-1 ${photoBg} ${
                    flip ? "lg:order-2" : ""
                  }`}
                  role="img"
                  aria-label={stage.alt}
                >
                  <FigmaImage
                    src={`/pharmacy-partnership/${stage.src}.webp`}
                    box={{ top: -12.22, height: 124.44 }}
                    sizes="(min-width: 1024px) 660px, 90vw"
                  />
                </div>
                <div
                  className={`relative flex w-full flex-col gap-[8px] rounded-[14px] border border-solid border-[#dcd6f2] bg-[#ded5ff] px-[20px] py-[18px] lg:min-w-0 lg:flex-1 ${
                    flip ? "lg:order-1" : ""
                  }`}
                >
                  <h3
                    className={`${fontPoppins} pr-[60px] text-[16.8px] font-semibold leading-[18.82px] tracking-[-0.168px] text-[#243b73]`}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-[14.1px] font-normal leading-[23.23px] text-[#273444]">
                    {stage.text}
                  </p>
                  <span
                    className={`${fontPoppins} absolute right-[20px] top-1/2 flex size-[50px] -translate-y-1/2 items-center justify-center rounded-full border-4 border-solid border-white bg-[#7657e8] text-[16px] font-bold leading-[26.4px] text-white lg:-right-[25px] ${
                      flip ? "lg:left-auto" : ""
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
