import FigmaImage from "./FigmaImage";
import Link from "next/link";
import Copy from "./Copy";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";
import { fontPoppins } from "./fonts";

// Pages that already exist are linked; EHR interoperability has no page yet.
const tiles = [
  {
    title: "EHR interoperability",
    titleLines: undefined,
    text: "How systems connect. Linked only when published.",
    d: ["How systems connect.", "Linked only when published."],
    image: "/enterprise-onboarding/related-ehr-interoperability.webp",
    href: undefined,
  },
  {
    title: "Scheduling & patient access",
    titleLines: ["Scheduling & patient", "access"],
    text: "Who owns the schedule. Linked only when published.",
    d: ["Who owns the schedule.", "Linked only when published."],
    image: "/enterprise-onboarding/related-scheduling.webp",
    href: "/scheduling-patient-access",
  },
  {
    title: "Referral intake & routing",
    titleLines: ["Referral intake &", "routing"],
    text: "Who accepts a referral. Linked only when published.",
    d: ["Who accepts a referral.", "Linked only when published."],
    image: "/enterprise-onboarding/related-referral-routing.webp",
    href: "/referral-intake-routing",
  },
  {
    title: "Discharge & transition support",
    titleLines: ["Discharge & transition", "support"],
    text: "Handoffs after a visit. Linked only when published.",
    d: ["Handoffs after a visit. Linked", "only when published."],
    image: "/enterprise-onboarding/related-discharge.webp",
    href: "/care-transitions",
  },
  {
    title: "Hospitals & clinic networks",
    titleLines: ["Hospitals & clinic", "networks"],
    text: "For institutions. Linked only when published.",
    d: ["For institutions. Linked only", "when published."],
    image: "/enterprise-onboarding/related-hospital-networks.webp",
    href: "/hospitals-clinics",
  },
];

export default function RelatedPathways() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-12 lg:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[10px]">
        <Kicker>Related pathways</Kicker>
        <SectionTitle>Keep exploring</SectionTitle>

        <div className="grid w-full gap-[20px] pt-[16px] sm:grid-cols-2 lg:h-[311px] lg:grid-cols-5 lg:items-start">
          {tiles.map((tile) => {
            const card = (
              <article className="flex w-full flex-col items-start overflow-clip rounded-[20px] border border-solid border-[#e1dbf9] bg-white shadow-[0px_10px_26px_0px_rgba(27,23,80,0.1)] lg:h-[294px]">
                <div className="relative h-[140px] w-full shrink-0 overflow-hidden bg-[linear-gradient(137.99deg,#8e7bef_0%,#08176d_100%)]">
                  <FigmaImage
                    src={tile.image}
                    box={{ left: -3.52, width: 107.03 }}
                    sizes="(min-width: 1440px) 262px, 50vw"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-[14px] px-[18px] pb-[18px] pt-[13.45px]">
                  <h3
                    className={`${fontPoppins} w-full text-[16px] font-semibold leading-[17.92px] text-[#1b1750]`}
                  >
                    <Copy text={tile.title} d={tile.titleLines} />
                  </h3>
                  <p className="w-full text-[13.1px] font-normal leading-[21.65px] text-[#575387]">
                    <Copy text={tile.text} d={tile.d} />
                  </p>
                </div>
              </article>
            );

            return tile.href ? (
              <Link key={tile.title} href={tile.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={tile.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
