import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, photoBg, sectionPad } from "./ui";

const stages = [
  ["Discover fit", "journey-discover-fit", "A black and white steel lattice tower"],
  ["Technical review", "journey-technical-review", "Snowy rocky mountains under cloud"],
  ["Qualification", "journey-qualification", "A woman in white waiting as a train blurs past"],
  ["Agreements and security", "journey-agreements-security", "A hand holding a phone at a wooden table"],
  ["Sandbox and test validation", "journey-sandbox-validation", "A tiger cub resting its paws on the ground"],
  ["Clinical and market review", "journey-clinical-market-review", "A misty lake under a wooden pier"],
  ["Authorized pilot", "journey-authorized-pilot", "A green mountain valley under cloud"],
  ["Gated release", "journey-gated-release", "A calm sea at sunset"],
];

export default function EvaluationJourney() {
  return (
    <section
      className={`w-full bg-[radial-gradient(ellipse_520px_420px_at_1240px_266px,#ac96ff_0%,#e0d8ff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[39.99px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15px] lg:pt-[2px]">
          <Eyebrow>Implementation evaluation journey</Eyebrow>
          <Title>
            <Copy
              text="Eight stages, not a program or a timeline."
              d={["Eight stages, not a program or a", "timeline."]}
            />
          </Title>
        </div>

        <ol className="grid w-full gap-x-[14px] gap-y-[26px] sm:grid-cols-2 lg:grid-cols-4">
          {stages.map(([title, src, alt]) => (
            <li
              key={title}
              className="flex flex-col gap-[12px] self-start rounded-[14px] border border-solid border-[#dcd6f2] bg-white px-[16px] pb-[24px] pt-[20px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
            >
              <div
                className={`relative aspect-[233.5/145.94] w-full overflow-hidden rounded-[8px] ${photoBg}`}
                role="img"
                aria-label={alt}
              >
                <FigmaImage
                  src={`/lab-imaging-integration/${src}.webp`}
                  box={{ top: -12.22, height: 124.44 }}
                  sizes="(min-width: 1024px) 234px, 90vw"
                />
              </div>
              <h3
                className={`${fontPoppins} text-[15.7px] font-semibold leading-[17.56px] tracking-[-0.157px] text-[#243b73]`}
              >
                {title}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
