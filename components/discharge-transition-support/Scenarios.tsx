import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const scenarios: {
  title: string;
  who: string;
  whoLines?: string[];
  availability: string;
  next: string;
  src: string;
  box: ImageBox;
}[] = [
  {
    title: "Hospital to home support",
    who: "Hospital team, home support provider, patient or caregiver.",
    whoLines: [
      "Hospital team, home support provider,",
      "patient or caregiver.",
    ],
    availability: "Where participating services exist.",
    next: "Name the home support owner.",
    src: "scenario-home-support",
    box: { left: -18.11, width: 136.22 },
  },
  {
    title: "Hospital to rehabilitation",
    who: "Hospital team and a rehabilitation service.",
    availability: "Where the service takes part.",
    next: "Confirm who accepts.",
    src: "scenario-rehabilitation",
    box: { left: -16.89, width: 133.78 },
  },
  {
    title: "Hospital to specialist",
    who: "Hospital team and a specialist service.",
    availability: "Where the specialist takes part.",
    next: "Track the specialist’s acknowledgment.",
    src: "scenario-specialist",
    box: { left: -16.89, width: 133.78 },
  },
  {
    title: "Follow-up after discharge",
    who: "Responsible care team and the patient.",
    availability: "Where follow-up services exist.",
    next: "Record who owns it.",
    src: "scenario-follow-up",
    box: { top: -33.82, height: 167.63 },
  },
];

const label =
  "text-[10.5px] font-extrabold uppercase leading-[normal] tracking-[0.735px] text-[#7b3ff2]";

export default function Scenarios() {
  return (
    <section
      className={`w-full bg-[linear-gradient(151.26deg,#f1eefe_10.48%,#ccc0ff_73.45%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>COMMON SCENARIOS</Eyebrow>
        <Title>Four situations, described conditionally</Title>

        <ul className="grid w-full gap-[20px] pt-[16.99px] lg:grid-cols-2">
          {scenarios.map((item) => (
            <li
              key={item.title}
              className="grid overflow-hidden rounded-[26px] border border-solid border-[#d9d3f5] bg-white sm:grid-cols-[5fr_7fr] lg:h-[212px]"
            >
              <div className="relative h-[200px] overflow-hidden bg-[linear-gradient(138.52deg,#e8e2ff_0%,#d5dcff_100%)] sm:h-auto">
                <FigmaImage
                  src={`/discharge-transition-support/${item.src}.webp`}
                  box={item.box}
                  sizes="(min-width: 1024px) 280px, 90vw"
                />
              </div>
              <div className="flex flex-col justify-center gap-[2px] px-[20px] py-[19px]">
                <h3
                  className={`${fontPoppins} text-[18px] font-semibold leading-[20.7px] tracking-[-0.36px] text-[#031974]`}
                >
                  {item.title}
                </h3>
                <p className="pb-[4px] text-[14.5px] font-normal leading-[23.93px] text-[#273444]">
                  <Copy text={item.who} d={item.whoLines} />
                </p>
                <span className={label}>AVAILABILITY</span>
                <p className="pb-[4px] text-[14.5px] font-normal leading-[23.93px] text-[#273444]">
                  {item.availability}
                </p>
                <span className={label}>NEXT ACTION</span>
                <p className="text-[14.5px] font-normal leading-[23.93px] text-[#273444]">
                  {item.next}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
