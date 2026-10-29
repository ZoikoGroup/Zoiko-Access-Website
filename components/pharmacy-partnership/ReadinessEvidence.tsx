import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

// The Figma frame shows the first answer only. The other answers restate
// scope already described elsewhere on this page.
const areas = [
  {
    name: "Organization readiness",
    text: "Legal entity, ownership and the people responsible for the pharmacy service.",
  },
  {
    name: "Regulatory readiness",
    text: "Licensing and authority for the care region, considered during review.",
  },
  {
    name: "Operational readiness",
    text: "The services offered and how information is maintained.",
  },
  {
    name: "Security and privacy readiness",
    text: "Controls, access and data handling, assessed before any connection.",
  },
  {
    name: "Technology readiness",
    text: "The proposed interface and how it would be tested.",
  },
];

export default function ReadinessEvidence() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[3px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.01px] pb-[40px]">
          <Eyebrow>Assessment criteria and evidence</Eyebrow>
          <Title>Five areas of readiness evidence.</Title>
        </div>

        <p className="w-full max-w-[852px] rounded-[12px] bg-[#fff0d9] px-[18px] py-[12px] text-[14.4px] font-semibold leading-[23.76px] text-[#6b4300]">
          Do not send patient information. Credentials, documents and licensing
          checks are not requested here.
        </p>

        <div className="w-full max-w-[852px]">
          {areas.map((area, index) => (
            <details
              key={area.name}
              open={index === 0}
              className="group w-full border-b border-solid border-[#dcd6f2]"
            >
              <summary
                className={`${fontPoppins} flex cursor-pointer list-none items-start justify-between gap-4 py-[20px] text-[17.3px] font-semibold leading-[28.51px] text-[#243b73] [&::-webkit-details-marker]:hidden`}
              >
                <span>{area.name}</span>
                <span
                  className="flex h-[28.5px] w-[16px] shrink-0 items-center justify-center text-[22.4px] leading-[22.4px] text-[#7657e8]"
                  aria-hidden="true"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">–</span>
                </span>
              </summary>
              <p className="max-w-[652px] pb-[20px] text-[15.2px] font-normal leading-[25px] text-[#273444]">
                {area.text}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
