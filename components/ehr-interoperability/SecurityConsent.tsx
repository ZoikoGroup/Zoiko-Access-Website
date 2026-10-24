import Image from "next/image";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, sectionPad } from "./ui";

const BASE = "/ehr-interoperability";

const controls = [
  {
    label: "Identity",
    lines: undefined,
    icon: "icon-identity.svg",
    group: "inset-[16.67%_16.67%_12.5%_16.67%]",
    pad: "inset-[-5.29%_-5.63%_-5.29%_-5.62%]",
    height: "lg:h-[80px]",
  },
  {
    label: "Institutional authority",
    lines: ["Institutional", "authority"],
    icon: "icon-authority.svg",
    group: "inset-[12.5%_16.67%]",
    pad: "inset-[-5%_-5.63%_-5%_-5.62%]",
    height: "lg:h-[80px]",
  },
  {
    label: "Purpose and role controls",
    lines: ["Purpose and role", "controls"],
    icon: "icon-controls.svg",
    group: "inset-[12.5%_16.67%_20.83%_16.67%]",
    pad: "inset-[-5.62%_-5.64%_-5.62%_-5.63%]",
    height: "lg:h-[80px]",
  },
  {
    label: "Minimization",
    lines: undefined,
    icon: "icon-lock.svg",
    group: "inset-[16.67%_20.83%_12.5%_20.83%]",
    pad: "inset-[-5.29%_-6.43%]",
    height: "lg:h-[80px]",
  },
  {
    label: "Encryption",
    lines: undefined,
    icon: "icon-lock.svg",
    group: "inset-[16.67%_20.83%_12.5%_20.83%]",
    pad: "inset-[-5.29%_-6.43%]",
    height: "lg:h-[76px]",
  },
  {
    label: "Traceability",
    lines: undefined,
    icon: "icon-traceability.svg",
    group: "inset-[12.5%_20.83%]",
    pad: "inset-[-5%_-6.43%]",
    height: "lg:h-[76px]",
  },
];

export default function SecurityConsent() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-10 lg:flex-row lg:gap-0">
        <div className="flex w-full flex-col items-start gap-[13.1px] lg:min-w-px lg:flex-1">
          <Eyebrow>SECURITY AND CONSENT</Eyebrow>
          <Title>
            <Copy
              text="Design requirements, not certifications"
              d={["Design requirements,", "not certifications"]}
            />
          </Title>
          <p className="w-full pt-[0.91px] text-[16px] font-normal leading-[26.4px] text-[#273444]">
            <Copy
              text="Each capability needs a named institutional sponsor, a scoped identity and purpose, region-safe processing, a retention policy, a legal basis, and logged access. “Secure by design” is a direction, not a certificate."
              d={[
                "Each capability needs a named institutional sponsor, a scoped",
                "identity and purpose, region-safe processing, a retention policy, a",
                "legal basis, and logged access. “Secure by design” is a direction,",
                "not a certificate.",
              ]}
            />
          </p>

          <ul className="grid w-full gap-[14px] pt-[16.9px] sm:grid-cols-2 lg:w-[573px] lg:max-w-full">
            {controls.map((control) => (
              <li
                key={control.label}
                className={`flex min-h-[76px] items-center gap-[14px] rounded-[18px] border border-solid border-[#d9d3f5] bg-white p-[16px] ${control.height}`}
              >
                <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[#f1eefe]">
                  <span className="relative block size-[22px] overflow-clip">
                    <span className={`absolute ${control.group}`}>
                      <span className={`absolute ${control.pad}`}>
                        <Image
                          src={`${BASE}/${control.icon}`}
                          alt=""
                          fill
                          sizes="22px"
                          className="object-fill"
                        />
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  className={`${fontPoppins} whitespace-nowrap text-[15.5px] font-semibold leading-[normal] text-[#031974]`}
                >
                  <Copy text={control.label} d={control.lines} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[360px] w-full overflow-hidden rounded-[30px] bg-[linear-gradient(146.15deg,#e8e2ff_0%,#d5dcff_100%)] lg:h-[545px] lg:min-w-px lg:flex-1">
          <div className="absolute inset-[0.42px_0.45px_-213.59px_0] overflow-hidden">
            <FigmaImage
              src={`${BASE}/security-team.webp`}
              alt="Two colleagues reviewing information together at a screen"
              box={{ left: -87.56, top: -6.7, width: 187.61 }}
              sizes="(min-width: 1440px) 870px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
