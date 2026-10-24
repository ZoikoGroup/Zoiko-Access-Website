import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, sectionPad } from "./ui";

type Card = {
  src: string;
  alt: string;
  /** Tailwind classes: mobile frame values first, `lg:` for the desktop frame. */
  place: string;
  box: ImageBox;
  mbox: ImageBox;
};

// Each card is placed in percent of the 594x470 (desktop) / 351x420 (mobile)
// collage area, taken from the Figma rotation boxes.
const cards: Card[] = [
  {
    src: "hero-hospital-leader",
    alt: "A hospital group leader with arms crossed",
    place:
      "left-0 top-[9.5%] h-[69%] w-[52%] -rotate-[4deg] lg:top-[8.49%] lg:h-[61.74%] lg:w-[51.95%] lg:-rotate-[3.64deg]",
    box: { left: -27.57, width: 155.15 },
    mbox: { left: -72.19, width: 244.38 },
  },
  {
    src: "hero-colleagues-proposal",
    alt: "Colleagues reviewing a proposal around a table",
    place:
      "left-[52%] top-0 h-[50%] w-[48%] rotate-[4deg] lg:h-[44.7%] lg:w-[47.96%] lg:rotate-[3.64deg]",
    box: { top: -12.38, height: 124.75 },
    mbox: { left: -13.27, width: 126.54 },
  },
  {
    src: "hero-clinic-team",
    alt: "A clinic network team member using a phone",
    place:
      "left-[40%] top-[54.8%] h-[52.4%] w-[52%] -rotate-[3deg] lg:top-[48.92%] lg:h-[46.83%] lg:w-[51.97%] lg:-rotate-[2.73deg]",
    box: { left: -8.04, width: 116.09 },
    mbox: { left: -41.43, width: 182.85 },
  },
];

export default function InstitutionalHero() {
  return (
    <section
      className={`relative isolate w-full overflow-hidden bg-[radial-gradient(700px_420px_at_351px_341px,rgba(213,211,252,1)_0%,rgba(213,211,252,0)_70%),linear-gradient(180deg,#ffffff_0%,#efebfe_100%)] pb-14 pt-10 lg:bg-[radial-gradient(700px_408px_at_1296px_188px,rgba(213,211,252,1)_0%,rgba(213,211,252,0)_70%),linear-gradient(180deg,#ffffff_0%,#efebfe_100%)] lg:h-[628px] lg:py-0 ${sectionPad}`}
    >
      <div
        className="pointer-events-none absolute left-0 top-[-71px] -z-10 hidden h-[720px] w-full lg:block"
        aria-hidden="true"
      >
        <Image
          src="/institutional-team/hero-bg.webp"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute left-[415px] top-[-309px] -z-10 hidden h-[1246px] w-[1343px] items-center justify-center lg:flex"
        aria-hidden="true"
      >
        <div className="relative h-[1020px] w-[1148px] shrink-0 rotate-[-12.63deg]">
          <Image
            src="/institutional-team/hero-curve.svg"
            alt=""
            fill
            sizes="1148px"
            className="object-fill"
          />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-center gap-[44px] lg:h-full lg:flex-row lg:justify-center">
        <div className="flex w-full flex-col items-start gap-[10px] lg:flex-[1.05_1_0] lg:gap-[9.1px]">
          <nav
            aria-label="Breadcrumb"
            className="w-full text-[13.6px] font-normal leading-[22.44px] text-[#575387] lg:hidden"
          >
            <Link href="/" className="text-[#6d4fe6] underline">
              Home
            </Link>
            {" / "}
            <Link href="/hospitals-clinics" className="text-[#6d4fe6] underline">
              Hospitals &amp; Clinics
            </Link>
            {" / Speak with our institutional team"}
          </nav>

          <Eyebrow className="pt-[12px] lg:pt-[12.9px]">
            <Copy
              text="Hospitals & Clinics / Institutional inquiries"
              m={["Hospitals & Clinics / Institutional", "inquiries"]}
            />
          </Eyebrow>

          <h1
            className={`${fontPoppins} w-full text-[35.2px] font-semibold leading-[39.42px] tracking-[-0.88px] text-[#1b1750] lg:bg-gradient-to-b lg:from-[#081b7a] lg:to-[#5a40e1] lg:bg-clip-text lg:text-[64px] lg:font-bold lg:leading-[66.3px] lg:tracking-[-1.48px] lg:text-transparent`}
          >
            <span className="block lg:text-transparent">Speak with our</span>
            <span className="block bg-gradient-to-r from-[#6f3fec] to-[#8e7bef] bg-clip-text text-transparent lg:bg-none">
              institutional team.
            </span>
          </h1>

          <p className="w-full max-w-[733px] pt-[7.6px] text-[17.6px] font-normal leading-[29px] text-[#575387] lg:pt-[20.5px]">
            <Copy
              text="For hospitals, clinics and qualified organizations exploring participation, Zoiko Access provides information about its approach and, where an institutional contact service is operating, a route to request a conversation."
              d={[
                "For hospitals, clinics and qualified organizations exploring participation,",
                "Zoiko Access provides information about its approach and, where an",
                "institutional contact service is operating, a route to request a",
                "conversation.",
              ]}
              m={[
                "For hospitals, clinics and qualified",
                "organizations exploring participation,",
                "Zoiko Access provides information about",
                "its approach and, where an institutional",
                "contact service is operating, a route to",
                "request a conversation.",
              ]}
            />
          </p>

          <p className="w-full max-w-[666px] pt-[7.6px] text-[16px] font-bold leading-[26.4px] text-[#1b1750] lg:pt-[8.5px]">
            <Copy
              text="Not for patient care, referrals or emergencies."
              m={["Not for patient care, referrals or", "emergencies."]}
            />
          </p>

          <div className="flex w-full flex-col items-start justify-center gap-[12px] pt-[14px] lg:flex-row lg:flex-wrap lg:justify-start lg:pt-[14.9px]">
            <Link
              href="#capabilities"
              className="flex h-[48px] items-center rounded-full border-2 border-solid border-[#6d4fe6] bg-[#6d4fe6] px-[26px] text-[16px] font-semibold leading-[normal] text-white lg:rounded-[20px] lg:border lg:bg-[#6043e8]"
            >
              Explore institutional capabilities
            </Link>
            <Link
              href="#how-it-works"
              className="flex h-[48px] items-center rounded-full border-2 border-solid border-[#1b1750] bg-white px-[26px] text-[16px] font-semibold leading-[normal] text-[#1b1750] lg:rounded-[20px] lg:border"
            >
              How Zoiko Access works
            </Link>
          </div>
        </div>

        <div
          className="relative h-[420px] w-full lg:aspect-[594/470] lg:h-auto lg:flex-[0.95_1_0]"
          role="group"
          aria-label="Photos of a hospital leader, colleagues reviewing a proposal and a clinic team member"
        >
          {cards.map((card) => (
            <div
              key={card.src}
              className={`absolute ${card.place}`}
            >
              <div className="relative size-full overflow-hidden rounded-[18px] border-[6px] border-solid border-white bg-[linear-gradient(137.75deg,#8e7bef_0%,#08176d_100%)] shadow-[0_22px_50px_rgba(27,23,80,0.28)]">
                <FigmaImage
                  src={`/institutional-team/${card.src}.webp`}
                  alt={card.alt}
                  box={card.box}
                  mbox={card.mbox}
                  sizes="(min-width: 1024px) 320px, 200px"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
