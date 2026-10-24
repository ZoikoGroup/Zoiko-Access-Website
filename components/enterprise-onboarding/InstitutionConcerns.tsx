import FigmaImage from "./FigmaImage";
import type { ImageBox } from "./FigmaImage";
import Copy from "./Copy";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";
import Sub from "./Sub";
import ArrowRight from "./ArrowRight";
import { fontPoppins } from "./fonts";

const concerns: {
  title: string;
  text: string;
  d: string[];
  approach: string;
  approachLines: string[];
  image: string;
  box: ImageBox;
}[] = [
  {
    title: "“Join now” implies a live program",
    text: "A headline that says join now suggests the program is deployed and every hospital is eligible.",
    d: [
      "A headline that says join now suggests the program is",
      "deployed and every hospital is eligible.",
    ],
    approach:
      "Lead with an explanation, and state plainly whether a program is active for your region.",
    approachLines: [
      "Lead with an explanation, and state plainly whether a program is",
      "active for your region.",
    ],
    image: "/enterprise-onboarding/concern-live-program.webp",
    box: { left: -16.41, width: 132.82 },
  },
  {
    title: "Enrollment implies patient data access",
    text: "People may assume joining gives the platform blanket access to patient records.",
    d: [
      "People may assume joining gives the platform blanket",
      "access to patient records.",
    ],
    approach:
      "Access needs patient-level authority, and only the minimum necessary information is exchanged.",
    approachLines: [
      "Access needs patient-level authority, and only the minimum",
      "necessary information is exchanged.",
    ],
    image: "/enterprise-onboarding/concern-patient-data.webp",
    box: { left: -27.04, width: 154.07 },
  },
  {
    title: "“Secure integration” sounds finished",
    text: "An unqualified promise looks like a completed connection to your records system.",
    d: [
      "An unqualified promise looks like a completed",
      "connection to your records system.",
    ],
    approach:
      "Point to the documented architecture, and make no claim about deployments.",
    approachLines: [
      "Point to the documented architecture, and make no claim about",
      "deployments.",
    ],
    image: "/enterprise-onboarding/concern-secure-integration.webp",
    box: { top: -11.15, height: 122.31 },
  },
];

export default function InstitutionConcerns() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-12 lg:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[10px]">
        <Kicker>What institutions ask</Kicker>
        <SectionTitle>Three concerns, and the intended design</SectionTitle>
        <Sub>
          <Copy
            text="This shows intent, not results. No customers, deployments or timelines are claimed."
            d={[
              "This shows intent, not results. No customers, deployments or timelines are",
              "claimed.",
            ]}
          />
        </Sub>

        <div className="flex w-full flex-col items-start gap-[18px] pt-[16px]">
          {concerns.map((concern) => (
            <div
              key={concern.title}
              className="grid w-full gap-[14px] lg:h-[132px] lg:grid-cols-[minmax(0,1.1fr)_40px_minmax(0,1fr)]"
            >
              <div className="isolate flex h-full min-h-[132px] items-start overflow-clip rounded-[20px] border border-solid border-[#e1dbf9] bg-white shadow-[0px_10px_28px_0px_rgba(27,23,80,0.1)]">
                <div className="relative z-[2] hidden h-[130px] min-h-[130px] w-[150px] shrink-0 overflow-hidden bg-[linear-gradient(135deg,#8e7bef_0%,#08176d_100%)] sm:block">
                  <FigmaImage
                    src={concern.image}
                    box={concern.box}
                    sizes="200px"
                  />
                </div>
                <div className="relative z-[1] flex min-w-px flex-1 flex-col items-start gap-[2.9px] px-[22px] pb-[20.66px] pt-[18px]">
                  <p className="w-full text-[10.9px] font-semibold uppercase leading-[normal] tracking-[1.306px] text-[#6d4fe6]">
                    Concern
                  </p>
                  <h3
                    className={`${fontPoppins} w-full pb-[0.7px] text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
                  >
                    {concern.title}
                  </h3>
                  <p className="w-full pb-[0.725px] text-[15px] font-normal leading-[24.75px] text-[#575387]">
                    <Copy text={concern.text} d={concern.d} />
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center text-[#6d4fe6] max-lg:hidden">
                <ArrowRight />
              </div>

              <div className="flex h-full min-h-[132px] flex-col items-start justify-center rounded-[20px] bg-[linear-gradient(138.12deg,#d5d3fc_0%,#b9b0f4_100%)] px-[24px] py-[31.4px]">
                <p className="w-full pb-[4px] text-[10.9px] font-semibold uppercase leading-[normal] tracking-[1.306px] text-[#4b3fb5]">
                  Designed approach
                </p>
                <p className="w-full text-[15.5px] font-normal leading-[25.61px] text-[#1b1750]">
                  <Copy text={concern.approach} d={concern.approachLines} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
