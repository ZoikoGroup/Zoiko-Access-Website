import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import IconBadge, { type IconName } from "./IconBadge";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const points: { icon: IconName; title: string; text: string }[] = [
  { icon: "lock", title: "Permissioned exchange", text: "Only what the purpose needs." },
  {
    icon: "folder",
    title: "Independent source records",
    text: "Each organization keeps its own. No universal record is claimed.",
  },
  { icon: "pin", title: "Local retention and processing", text: "Set by each jurisdiction." },
];

export default function PrivacyInterop() {
  return (
    <section
      className={`w-full bg-[linear-gradient(156.13deg,#f1eefe_10.48%,#ccc0ff_73.45%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} flex flex-col items-start gap-10 lg:h-[423px] lg:flex-row lg:items-center lg:justify-between lg:gap-0`}
      >
        <div className="flex w-full flex-col gap-[13.1px] lg:w-[768px] lg:shrink-0">
          <Eyebrow>PRIVACY AND INTEROPERABILITY</Eyebrow>
          <Title>
            <Copy
              text="Permissioned, minimized, and kept at the source"
              d={["Permissioned, minimized,", "and kept at the source"]}
            />
          </Title>

          <ul className="flex w-full flex-col gap-[12px] pt-[8.9px]">
            {points.map((point) => (
              <li
                key={point.title}
                className="flex items-start gap-[14px] rounded-[16px] border border-solid border-[#d9d3f5] bg-white px-[16px] py-[14px]"
              >
                <IconBadge name={point.icon} />
                <div className="flex flex-col gap-[0.5px] pt-px">
                  <span
                    className={`${fontPoppins} text-[16px] font-semibold leading-[normal] text-[#031974]`}
                  >
                    {point.title}
                  </span>
                  <span className="text-[16px] font-normal leading-[26.4px] text-[#273444]">
                    {point.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative h-[320px] w-full overflow-hidden rounded-b-[28px] rounded-t-[200px] bg-[linear-gradient(140.6deg,#e8e2ff_0%,#d5dcff_100%)] lg:h-[425px] lg:w-[414px] lg:shrink-0"
          role="img"
          aria-label="A lecture hall with rows of seats facing a projection screen"
        >
          <FigmaImage
            src="/discharge-transition-support/privacy-lecture-hall.webp"
            box={{ left: -33.33, width: 166.66 }}
            sizes="(min-width: 1024px) 690px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
