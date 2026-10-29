import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, photoBg, sectionPad } from "./ui";

export default function IntegrationHero() {
  return (
    <section
      id="top"
      className={`relative isolate w-full overflow-hidden border-b border-solid border-[#dcd6f2] bg-white py-12 lg:h-[563px] lg:py-[70px] ${sectionPad}`}
    >
      <Image
        src="/lab-imaging-integration/hero-background.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-top"
      />

      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-10 lg:h-[455px] lg:flex-row lg:gap-0 lg:px-6">
        <div className="flex w-full flex-col items-start gap-[15.4px] lg:min-w-0 lg:flex-1 lg:pb-[56px]">
          <Eyebrow tone="white">Labs &amp; Pharmacies / Partner connectivity</Eyebrow>

          <h1
            className={`${fontPoppins} w-full text-[40px] font-bold leading-[46px] tracking-[-0.8px] text-white lg:text-[64px] lg:leading-[60.93px] lg:tracking-[-1.088px]`}
          >
            <span className="block">Lab &amp; imaging</span>
            <span className="block text-[#8e7bef]">integration,</span>
            <span className="block text-[#8e7bef]">explained</span>
          </h1>

          <p className="w-full max-w-[646px] pt-[5.99px] text-[16px] font-normal leading-[26.4px] text-white">
            <Copy
              text="Explore the architecture and safeguards for connecting laboratory and imaging information through qualified, locally authorized partners. Interfaces depend on source systems, agreements, verification and regional rules."
              d={[
                "Explore the architecture and safeguards for connecting laboratory and",
                "imaging information through qualified, locally authorized partners. Interfaces",
                "depend on source systems, agreements, verification and regional rules.",
              ]}
            />
          </p>

          <div className="flex w-full flex-wrap gap-[12px] pt-[12.6px]">
            <Link
              href="#approach"
              className={`${fontPoppins} flex items-center rounded-[8px] border border-solid border-transparent bg-[#8e7bef] px-[22px] py-[12px] text-[15.2px] font-semibold leading-[25px] text-white`}
            >
              Explore integration approach
            </Link>
            <Link
              href="#ownership"
              className={`${fontPoppins} flex items-center rounded-[8px] border border-solid border-[#dcd6f2] bg-white px-[22px] py-[12px] text-[15.2px] font-semibold leading-[25px] text-[#243b73]`}
            >
              Review responsibilities
            </Link>
          </div>
        </div>

        <div className="relative w-full lg:w-[565px] lg:shrink-0">
          <div
            className={`relative h-[320px] w-full overflow-hidden rounded-tr-[24px] rounded-tl-[100px] lg:h-[452px] lg:rounded-tl-[200px] ${photoBg}`}
            role="img"
            aria-label="A microscope on a bright laboratory bench"
          >
            <FigmaImage
              src="/lab-imaging-integration/hero-microscope.webp"
              box={{ top: -24.1, width: 101.95, height: 191.15 }}
              sizes="(min-width: 1024px) 565px, 90vw"
              priority
            />
          </div>
          <div
            className="absolute -bottom-6 left-4 hidden h-[216px] w-[304px] rounded-[20px] shadow-[0_10px_20px_5px_rgba(255,255,255,0.3)] sm:block lg:-left-[45px] lg:bottom-auto lg:top-[239px]"
            role="img"
            aria-label="A clinician beside a patient entering an MRI scanner"
          >
            <div className="relative size-full overflow-hidden rounded-[20px]">
              <FigmaImage
                src="/lab-imaging-integration/hero-mri-scan.webp"
                box={{ top: -61.44, height: 210.78 }}
                sizes="304px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
