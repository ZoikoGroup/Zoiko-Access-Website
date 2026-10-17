import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins } from "./fonts";

// Desktop uses three dedicated photos; the mobile frame reuses the
// care-pathways and professionals photos.
const guides = [
  {
    title: "Understand the care journey",
    text: "Read how information, requests, handoffs, and follow-up fit together.",
    d: [
      "Read how information, requests, handoffs,",
      "and follow-up fit together.",
    ],
    m: [
      "Read how information, requests, handoffs,",
      "and follow-up fit together.",
    ],
    link: { label: "Care pathways explained", href: "/care-pathways" },
    desktopImage: "/talk-to-support/guide-care-journey.webp",
    mobileImage: "/talk-to-support/guide-care-pathways.webp",
    gradient: "lg:bg-[linear-gradient(137.53deg,#c9b8fb_0%,#5b49c8_100%)]",
  },
  {
    title: "Know what a request means",
    text: "Learn the difference between receipt and an authoritative provider decision.",
    d: [
      "Learn the difference between receipt and an",
      "authoritative provider decision.",
    ],
    m: [
      "Learn the difference between receipt and",
      "an authoritative provider decision.",
    ],
    link: {
      label: "Appointment-request guidance",
      href: "/request-appointment",
    },
    desktopImage: "/talk-to-support/guide-request-meaning.webp",
    mobileImage: "/talk-to-support/guide-professionals.webp",
    gradient: "lg:bg-[linear-gradient(137.46deg,#c9b8fb_0%,#5b49c8_100%)]",
  },
  {
    title: "Find the responsible organization",
    text: "Care-related decisions and existing-treatment queries belong with the responsible provider.",
    d: [
      "Care-related decisions and existing-treatment",
      "queries belong with the responsible provider.",
    ],
    m: [
      "Care-related decisions and existing-",
      "treatment queries belong with the",
      "responsible provider.",
    ],
    link: { label: "Referral responsibility", href: "/how-referrals-work" },
    desktopImage: "/talk-to-support/guide-responsible-organization.webp",
    mobileImage: "/talk-to-support/guide-care-pathways.webp",
    gradient: "lg:bg-[linear-gradient(137.53deg,#c9b8fb_0%,#5b49c8_100%)]",
  },
];

export default function UsefulGuidance() {
  return (
    <section className="w-full bg-white px-[19.5px] pt-[56px] lg:px-[70px] lg:pb-[95.99px] lg:pt-[96.01px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[13.2px] lg:max-w-[1300px] lg:gap-[13.1px]">
        <Eyebrow>Start with useful guidance</Eyebrow>

        <SectionHeading desktopLines={2}>
          <Copy
            text="A clearer answer may be the right next step."
            d={["A clearer answer may be the", "right next step."]}
            m={["A clearer answer may be", "the right next step."]}
          />
        </SectionHeading>

        <p className="w-full max-w-[686.38px] pt-[0.7px] text-[16px] font-normal leading-[26.4px] text-[#5e5a86] lg:pt-[7.56px]">
          <Copy
            text="These editorial photos illustrate learning and family assistance; they do not represent support agents or a staffed care service."
            d={[
              "These editorial photos illustrate learning and family assistance; they do not represent",
              "support agents or a staffed care service.",
            ]}
            m={[
              "These editorial photos illustrate learning and",
              "family assistance; they do not represent",
              "support agents or a staffed care service.",
            ]}
          />
        </p>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[14.81px] lg:grid lg:grid-cols-[415fr_414fr_415fr] lg:items-stretch lg:gap-x-[28px] lg:gap-y-0 lg:pt-[14.91px]">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className="isolate flex w-full flex-col items-start overflow-clip rounded-[18px] border border-solid border-[#e3def8] bg-white shadow-[0px_12px_32px_0px_rgba(36,28,89,0.1),0px_2px_6px_0px_rgba(36,28,89,0.05)]"
            >
              <div
                className={`relative z-[2] w-full bg-[linear-gradient(135deg,#c9b8fb_0%,#5b49c8_100%)] ${guide.gradient}`}
              >
                <div className="relative aspect-[349/218.13] w-full lg:aspect-auto lg:h-[236.25px]">
                  <Image
                    src={guide.mobileImage}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 640px, 90vw"
                    className="object-cover object-[50%_35%] lg:hidden"
                  />
                  <Image
                    src={guide.desktopImage}
                    alt=""
                    fill
                    sizes="(min-width: 1440px) 413px, 30vw"
                    className="hidden object-cover lg:block"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(36,28,89,0)] from-50% to-[rgba(36,28,89,0.28)]"
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-[1] flex w-full flex-col items-start gap-[9.5px] px-[22px] pb-[30.5px] pt-[21px]">
                <h3
                  className={`${fontPoppins} w-full pb-[0.99px] text-[17.3px] font-bold leading-[19.87px] text-[#241c59]`}
                >
                  {guide.title}
                </h3>
                <p className="w-full max-w-[651.52px] pb-[13px] text-[15.2px] font-normal leading-[25px] text-[#5e5a86]">
                  <Copy text={guide.text} d={guide.d} m={guide.m} />
                </p>
                <Link
                  href={guide.link.href}
                  className="inline-flex min-h-[23px] items-center gap-[4px] whitespace-nowrap text-[13.6px] font-semibold leading-[22.44px] text-[#4267d5]"
                >
                  {guide.link.label}
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M1 5h9M6.5 1.5 10 5 6.5 8.5" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
