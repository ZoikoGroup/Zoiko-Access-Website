import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, sectionPad } from "./ui";

export default function EhrCta() {
  return (
    <section
      className={`relative isolate w-full overflow-hidden bg-[linear-gradient(135.05deg,#02125f_0%,#2f42cb_55%,#7b3ff2_100%)] py-12 lg:min-h-[393.62px] lg:pb-[70px] lg:pt-[83.53px] ${sectionPad}`}
    >
      <div
        className="pointer-events-none absolute left-[453px] top-0 -z-20 hidden h-[657px] w-[987px] lg:block"
        aria-hidden="true"
      >
        <FigmaImage
          src="/ehr-interoperability/cta-clinicians.webp"
          sizes="987px"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-[-0.13px_0_-87.36px_0] -z-10 bg-[linear-gradient(136.68deg,rgba(27,47,181,0.94)_0%,rgba(2,18,95,0.56)_100%)]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[13px]">
        <Eyebrow tone="light" className="whitespace-nowrap">
          NEXT STEP
        </Eyebrow>
        <Title tone="light">Explore hospital and clinic coordination</Title>
        <p className="w-full max-w-[640px] pb-[8.99px] text-[16px] font-normal leading-[26.4px] text-[#e6e9ff] lg:text-[18px] lg:leading-[29.7px]">
          <Copy
            text="An interoperability discussion is offered only when a staffed, verified route exists. Until then, read the hospital and clinic overview."
            d={[
              "An interoperability discussion is offered only when a staffed, verified route",
              "exists. Until then, read the hospital and clinic overview.",
            ]}
          />
        </p>
        <Link
          href="/hospitals-clinics"
          className={`${fontPoppins} flex min-h-[48px] items-center justify-center rounded-full border-2 border-solid border-transparent bg-white px-[24px] pb-[10.37px] pt-[8.63px] text-center text-[15px] font-semibold leading-[24.75px] text-[#031974]`}
        >
          Explore hospital and clinic coordination
        </Link>
      </div>
    </section>
  );
}
