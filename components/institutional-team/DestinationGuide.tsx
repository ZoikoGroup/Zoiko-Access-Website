import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, head, inner, sectionPad } from "./ui";

type Route = {
  title: string;
  titleM?: string[];
  you: string;
  youLines: string[];
  youM: string[];
  where: string;
  whereLines: string[];
  whereM: string[];
  src: string;
  box: ImageBox;
  mbox: ImageBox;
};

const routes: Route[] = [
  {
    title: "Evaluating for an organization",
    you: "You are exploring participation for a hospital, clinic network or practice.",
    youLines: [
      "You are exploring participation for a hospital, clinic",
      "network or practice.",
    ],
    youM: ["You are exploring participation for a", "hospital, clinic network or practice."],
    where:
      "This page. It explains the approach and who owns what, and it does not assume you qualify.",
    whereLines: [
      "This page. It explains the approach and who owns what, and it",
      "does not assume you qualify.",
    ],
    whereM: [
      "This page. It explains the approach and",
      "who owns what, and it does not assume",
      "you qualify.",
    ],
    src: "destination-evaluating",
    box: { left: -16.41, width: 132.82 },
    mbox: { top: -25.91, height: 151.82 },
  },
  {
    title: "Already working with Zoiko Access",
    titleM: ["Already working with Zoiko", "Access"],
    you: "You need help with something that is already in place.",
    youLines: ["You need help with something that is already in place."],
    youM: ["You need help with something that is", "already in place."],
    where:
      "Your assigned operational support, where a real route exists. It is not a sales inquiry.",
    whereLines: [
      "Your assigned operational support, where a real route exists. It is",
      "not a sales inquiry.",
    ],
    whereM: [
      "Your assigned operational support,",
      "where a real route exists. It is not a sales",
      "inquiry.",
    ],
    src: "destination-existing",
    box: { left: -27.04, width: 154.07 },
    mbox: { top: -15.44, height: 130.88 },
  },
  {
    title: "Looking for personal care",
    you: "You need care for yourself or someone else.",
    youLines: ["You need care for yourself or someone else."],
    youM: ["You need care for yourself or someone", "else."],
    where:
      "Local care services, or patient information. The institutional team cannot give care or advice.",
    whereLines: [
      "Local care services, or patient information. The institutional team",
      "cannot give care or advice.",
    ],
    whereM: [
      "Local care services, or patient",
      "information. The institutional team",
      "cannot give care or advice.",
    ],
    src: "destination-personal-care",
    box: { top: -11.15, height: 122.31 },
    mbox: { top: -73.31, height: 246.63 },
  },
];

const small =
  "text-[10.9px] font-semibold uppercase leading-[normal] tracking-[1.306px]";

export default function DestinationGuide() {
  return (
    <section
      id="destinations"
      className={`w-full bg-white py-14 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} ${head}`}>
        <Eyebrow>Find the right destination</Eyebrow>
        <Title>
          <Copy
            text="Three reasons to be here, three different next steps"
            m={["Three reasons to be here,", "three different next steps"]}
          />
        </Title>
        <Lead className="max-w-[626px]">
          <Copy
            text="Pick the closest one. These cards do not infer treatment or entitlement, and they never ask for health information."
            d={[
              "Pick the closest one. These cards do not infer treatment or entitlement, and they",
              "never ask for health information.",
            ]}
            m={[
              "Pick the closest one. These cards do not infer",
              "treatment or entitlement, and they never ask",
              "for health information.",
            ]}
          />
        </Lead>

        <ul className="flex w-full flex-col gap-[18px] pt-[16.8px] lg:pt-[16px]">
          {routes.map((route) => (
            <li
              key={route.title}
              className="grid gap-[14px] lg:grid-cols-[minmax(0,1.1fr)_40px_minmax(0,1fr)] lg:items-start"
            >
              <article className="flex flex-col overflow-hidden rounded-[20px] border border-solid border-[#e1dbf9] bg-white shadow-[0_10px_28px_rgba(27,23,80,0.1)] lg:min-h-[132px] lg:flex-row">
                <div className="relative h-[150px] w-full shrink-0 overflow-hidden bg-[linear-gradient(135deg,#8e7bef_0%,#08176d_100%)] lg:h-[130px] lg:w-[150px]">
                  <FigmaImage
                    src={`/institutional-team/${route.src}.webp`}
                    box={route.box}
                    mbox={route.mbox}
                    sizes="(min-width: 1024px) 150px, 90vw"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-[2.9px] px-[22px] py-[18px] lg:gap-[3px]">
                  <p className={`${small} text-[#6d4fe6]`}>You are</p>
                  <h3
                    className={`${fontPoppins} pb-[0.7px] text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
                  >
                    <Copy text={route.title} m={route.titleM} />
                  </h3>
                  <p className="text-[15px] font-normal leading-[24.75px] text-[#575387]">
                    <Copy text={route.you} d={route.youLines} m={route.youM} />
                  </p>
                </div>
              </article>

              <span
                aria-hidden="true"
                className="flex items-center justify-center text-[25.6px] leading-[42.24px] text-[#6d4fe6] max-lg:h-[8px] max-lg:rotate-90 lg:h-[132px]"
              >
                →
              </span>

              <div className="flex flex-col justify-center rounded-[20px] bg-[linear-gradient(138.12deg,#d5d3fc_0%,#b9b0f4_100%)] px-[24px] py-[18px] lg:min-h-[132px]">
                <p className={`${small} pb-[4px] text-[#4b3fb5]`}>Where to go</p>
                <p className="text-[15.5px] font-normal leading-[25.61px] text-[#1b1750]">
                  <Copy
                    text={route.where}
                    d={route.whereLines}
                    m={route.whereM}
                  />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
