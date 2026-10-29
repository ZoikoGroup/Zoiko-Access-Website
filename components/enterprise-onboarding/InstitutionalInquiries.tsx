import FigmaImage from "./FigmaImage";
import Link from "next/link";
import Copy from "./Copy";
import Kicker from "./Kicker";
import { fontPoppins } from "./fonts";

export default function InstitutionalInquiries() {
  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-[linear-gradient(134.97deg,#182ba9_0%,#08176d_100%)] px-4 py-12 sm:px-6 lg:px-12 lg:py-[96px]"
    >
      <div className="pointer-events-none absolute inset-[-0.09px_0_-20.32px_0] -z-10 overflow-hidden opacity-25 blur-[2px]">
        <FigmaImage
          src="/enterprise-onboarding/contact-bg.webp"
          box={{ top: -44.48, height: 185.07 }}
          sizes="100vw"
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[10px]">
        <Kicker tone="light">Institutional inquiries</Kicker>
        <h2
          className={`${fontPoppins} w-full text-[30px] font-semibold leading-[35px] tracking-[-0.384px] text-white lg:text-[38.4px] lg:leading-[43px]`}
        >
          Inquiries are not open through this site.
        </h2>
        <p className="w-full max-w-[666.19px] pt-[8.575px] text-[16px] font-normal leading-[26.4px] text-[#e6e1ff]">
          <Copy
            text="If a channel opens for your region, it will be for institutions only. It would ask for an organization, a business contact, a work email, a region, an organization type, an optional site-count band, an area of interest and consent, and nothing else."
            d={[
              "If a channel opens for your region, it will be for institutions only. It would ask for an",
              "organization, a business contact, a work email, a region, an organization type, an",
              "optional site-count band, an area of interest and consent, and nothing else.",
            ]}
          />
        </p>
        <p className="w-full max-w-[666.19px] pt-[6.01px] text-[16px] font-normal leading-[26.4px] text-[#e6e1ff]">
          <Copy
            text="It will never take patient names, health details, notes or uploads. Please do not send patient or health information through any commercial inquiry."
            d={[
              "It will never take patient names, health details, notes or uploads. Please do not send",
              "patient or health information through any commercial inquiry.",
            ]}
          />
        </p>
        <div className="flex w-full flex-wrap items-start gap-y-[12px] pt-[14px]">
          <Link
            href="#readiness"
            className="flex min-h-[48px] items-center rounded-full border-2 border-solid border-white bg-white px-[26px] text-[16px] font-semibold leading-[normal] text-[#08176d]"
          >
            Understand onboarding requirements
          </Link>
        </div>
      </div>
    </section>
  );
}
