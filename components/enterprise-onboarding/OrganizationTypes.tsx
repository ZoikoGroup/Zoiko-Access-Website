import FigmaImage from "./FigmaImage";
import type { ImageBox } from "./FigmaImage";
import Copy from "./Copy";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";
import Sub from "./Sub";
import { fontPoppins } from "./fonts";

const organizations: {
  title: string;
  text: string;
  d: string[] | undefined;
  image: string;
  box: ImageBox;
}[] = [
  {
    title: "Hospital and health systems",
    text: "Large organizations with several departments and shared systems.",
    d: [
      "Large organizations with several departments",
      "and shared systems.",
    ],
    image: "/enterprise-onboarding/who-hospital-systems.webp",
    box: { top: -33.79, height: 167.58 },
  },
  {
    title: "Clinic networks",
    text: "Groups of clinics working under common management.",
    d: ["Groups of clinics working under common", "management."],
    image: "/enterprise-onboarding/who-clinic-networks.webp",
    box: { top: -28.75, height: 157.5 },
  },
  {
    title: "Independent and multi-site practices",
    text: "Practices with one or more locations.",
    d: undefined,
    image: "/enterprise-onboarding/who-independent-practices.webp",
    box: { top: -34, height: 168 },
  },
];

export default function OrganizationTypes() {
  return (
    <section
      id="who"
      className="w-full bg-gradient-to-b from-[#f6eefe] to-[#d7ccff] px-4 py-12 sm:px-6 lg:px-12 lg:py-[70px]"
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[10px] lg:h-[502px]">
        <Kicker>Who the program may be for</Kicker>
        <SectionTitle>Three kinds of organization</SectionTitle>
        <Sub>
          <Copy
            text="Evaluation depends on organizational, local and technical requirements. Nothing here is a self-assessment or a promise of eligibility."
            d={[
              "Evaluation depends on organizational, local and technical requirements. Nothing",
              "here is a self-assessment or a promise of eligibility.",
            ]}
          />
        </Sub>

        <div className="grid w-full gap-[20px] pt-[16px] lg:h-[353px] lg:grid-cols-3 lg:items-start lg:gap-x-[51.5px] lg:gap-y-0">
          {organizations.map((org) => (
            <article
              key={org.title}
              className="isolate flex w-full flex-col items-start overflow-clip rounded-[20px] border border-solid border-[#e1dbf9] bg-white shadow-[0px_10px_28px_0px_rgba(27,23,80,0.1)] lg:h-[337px]"
            >
              <div className="relative z-[2] h-[150px] w-full shrink-0 overflow-hidden bg-[linear-gradient(136.4deg,#8e7bef_0%,#08176d_100%)]">
                <FigmaImage
                  src={org.image}
                  box={org.box}
                  sizes="(min-width: 1440px) 399px, 33vw"
                />
              </div>
              <div className="relative z-[1] flex w-full flex-col items-start gap-[6px] px-[20px] pb-[22px] pt-[18px]">
                <h3
                  className={`${fontPoppins} w-full pb-[0.7px] text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
                >
                  {org.title}
                </h3>
                <p className="w-full pb-[6px] text-[14.7px] font-normal leading-[24.29px] text-[#575387] lg:min-h-[54.58px]">
                  <Copy text={org.text} d={org.d} />
                </p>
                <p className="flex h-[48px] w-full items-center rounded-full bg-[#f1eefe] py-[3px] pl-[24px] pr-[86px] text-[11.8px] font-semibold leading-[normal] text-[#6d4fe6]">
                  <span>
                    <Copy
                      text="Evaluation depends on local and technical requirements"
                      d={[
                        "Evaluation depends on local and technical",
                        "requirements",
                      ]}
                    />
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
