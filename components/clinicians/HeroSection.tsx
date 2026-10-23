import Image from "next/image";
import { ButtonLink } from "./ui/ButtonLink";
import { SectionEyebrow } from "./ui/SectionEyebrow";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[image:radial-gradient(900px_424px_at_90%_0,rgba(222,211,255,1)_0%,rgba(222,211,255,0)_60%),linear-gradient(180deg,#ffffff_0%,#f1eefe_100%)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-4 -top-1 bottom-0"
      >
        <Image
          src="/prof/bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-12 sm:px-10 lg:flex-row lg:gap-[133px] lg:pb-[139px] lg:pl-[75px] lg:pr-[68px] lg:pt-[72px]">
        <div className="flex w-full flex-col lg:w-[628px] lg:shrink-0">
          <SectionEyebrow className="lg:-mt-px">
            CLINICIANS / PARTICIPATION
          </SectionEyebrow>

          <h1 className="mt-[14px] max-w-[528px] bg-gradient-to-b from-[#031974] to-[#3d61cd] bg-clip-text font-['Poppins',sans-serif] text-[40px] font-bold leading-[1.114] tracking-[-1.24px] text-transparent sm:text-[52px] lg:text-[64px]">
            Professional onboarding with Zoiko Access
          </h1>

          <p className="mt-[19px] max-w-[620px] font-['Inter',sans-serif] text-[18px] leading-[29.7px] text-[#273444]">
            Zoiko Access is designed to support appropriate participation by
            qualified healthcare professionals and organizations in supported
            locations. Eligibility, credential checks, professional
            responsibilities and available participation pathways depend on
            local requirements and operational readiness. Learn what the process
            involves before taking an authorized next step.
          </p>

          <div className="mt-[26px] flex flex-wrap gap-5">
            <ButtonLink
              href="#availability"
              variant="primary"
              className="w-[225px]"
            >
              Check availability
            </ButtonLink>
            <ButtonLink href="#boundary" variant="outline">
              Understand clinical responsibility
            </ButtonLink>
          </div>
        </div>

        <div
          id="availability"
          className="relative h-[360px] w-full flex-1 overflow-hidden rounded-[28px] rounded-tl-[100px] border border-solid border-[#d9d3f5] bg-white shadow-[0px_26px_60px_0px_rgba(47,66,203,0.18)] sm:h-[460px] lg:h-[521px] lg:rounded-tl-[150px]"
        >
          <div className="absolute left-0 top-0 h-[805px] w-full">
            <Image
              src="/prof/111.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 536px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
