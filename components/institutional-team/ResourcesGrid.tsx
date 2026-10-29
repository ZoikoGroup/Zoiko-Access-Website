import Link from "next/link";
import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, head, inner, sectionPad } from "./ui";

const resources: {
  title: string;
  titleD?: string[];
  text: string;
  d?: string[];
  m?: string[];
  href: string;
  src: string;
  box: ImageBox;
  mbox: ImageBox;
}[] = [
  {
    title: "Hospitals & Clinics overview",
    titleD: ["Hospitals & Clinics", "overview"],
    text: "The wider picture. Linked only when published.",
    d: ["The wider picture. Linked", "only when published."],
    href: "/hospitals-clinics",
    src: "resource-hospitals-clinics",
    box: { left: -3.52, width: 107.03 },
    mbox: { top: -24.79, height: 149.57 },
  },
  {
    title: "Scheduling & patient access",
    titleD: ["Scheduling & patient", "access"],
    text: "Who owns the schedule. Linked only when published.",
    d: ["Who owns the schedule.", "Linked only when published."],
    m: ["Who owns the schedule. Linked only when", "published."],
    href: "/scheduling-patient-access",
    src: "resource-scheduling-access",
    box: { top: -6.68, height: 113.36 },
    mbox: { top: -40.74, height: 181.48 },
  },
  {
    title: "Referral intake & routing",
    titleD: ["Referral intake &", "routing"],
    text: "Who accepts a referral. Linked only when published.",
    d: ["Who accepts a referral.", "Linked only when published."],
    m: ["Who accepts a referral. Linked only when", "published."],
    href: "/referral-intake-routing",
    src: "resource-referral-intake",
    box: { top: -1.85, height: 103.71 },
    mbox: { top: -33.01, height: 166.02 },
  },
  {
    title: "Discharge & care transitions",
    titleD: ["Discharge & care", "transitions"],
    text: "Handoffs after a visit. Linked only when published.",
    d: ["Handoffs after a visit. Linked", "only when published."],
    href: "/discharge-transition-support",
    src: "resource-discharge-transitions",
    box: { top: -1.85, height: 103.71 },
    mbox: { top: -33.01, height: 166.02 },
  },
  {
    title: "EHR interoperability",
    text: "How systems connect. Linked only when published.",
    d: ["How systems connect.", "Linked only when published."],
    m: ["How systems connect. Linked only when", "published."],
    href: "/ehr-interoperability",
    src: "resource-ehr-interoperability",
    box: { top: -1.85, height: 103.71 },
    mbox: { top: -33.01, height: 166.02 },
  },
  {
    title: "Trust and privacy",
    text: "How information is protected. Linked only when published.",
    d: ["How information is", "protected. Linked only when", "published."],
    m: ["How information is protected. Linked only when", "published."],
    href: "/trust-privacy",
    src: "resource-trust-privacy",
    box: { left: -3.52, width: 107.03 },
    mbox: { top: -24.79, height: 149.57 },
  },
];

export default function ResourcesGrid() {
  return (
    <section className={`w-full bg-white py-14 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} ${head} gap-[9px] lg:gap-[10px]`}>
        <Eyebrow>Safe alternative resources</Eyebrow>
        <Title>Keep exploring</Title>

        <ul className="grid w-full gap-[20px] pt-[17px] sm:grid-cols-2 lg:grid-cols-4 lg:pt-[16px]">
          {resources.map((item) => (
            <li key={item.title} className="lg:self-start">
              <Link
                href={item.href}
                className="flex flex-col overflow-hidden rounded-[20px] border border-solid border-[#e1dbf9] bg-white shadow-[0_10px_26px_rgba(27,23,80,0.1)]"
              >
                <span className="relative block h-[140px] w-full overflow-hidden bg-[linear-gradient(144.53deg,#8e7bef_0%,#08176d_100%)]">
                  <FigmaImage
                    src={`/institutional-team/${item.src}.webp`}
                    box={item.box}
                    mbox={item.mbox}
                    sizes="(min-width: 1024px) 308px, 90vw"
                  />
                </span>
                <span className="flex flex-col gap-[1px] px-[18px] pb-[18px] pt-[14px]">
                  <span
                    className={`${fontPoppins} text-[16px] font-semibold leading-[17.92px] text-[#1b1750]`}
                  >
                    <Copy text={item.title} d={item.titleD} />
                  </span>
                  <span className="text-[13.1px] font-normal leading-[21.65px] text-[#575387]">
                    <Copy text={item.text} d={item.d} m={item.m} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
