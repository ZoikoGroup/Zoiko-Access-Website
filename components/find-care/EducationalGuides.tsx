import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins } from "./fonts";

// The mobile frame uses the care-pathways photo for the first and third card.
const guides = [
  {
    title: "Healthcare service types",
    text: "Learn what common service categories mean without a symptom-based recommendation.",
    d: [
      "Learn what common service categories mean",
      "without a symptom-based recommendation.",
    ],
    m: [
      "Learn what common service categories",
      "mean without a symptom-based",
      "recommendation.",
    ],
    link: { label: "Explore service education", href: "/healthcare-services" },
    desktopImage: "/find-care/guide-service-types.webp",
    mobileImage: "/find-care/guide-care-pathways.webp",
    articleClass: "lg:pb-[25.07px]",
  },
  {
    title: "Healthcare professionals",
    text: "Understand role families, local scope, and qualifications without an individual credential check.",
    d: [
      "Understand role families, local scope, and",
      "qualifications without an individual credential",
      "check.",
    ],
    m: [
      "Understand role families, local scope, and",
      "qualifications without an individual",
      "credential check.",
    ],
    link: {
      label: "Read about professional roles",
      href: "/healthcare-professionals",
    },
    desktopImage: "/find-care/guide-professionals.webp",
    mobileImage: "/find-care/guide-professionals.webp",
    articleClass: "",
  },
  {
    title: "Care pathways",
    text: "See how requests, referrals, and follow-up involve different owners and decisions.",
    d: [
      "See how requests, referrals, and follow-up",
      "involve different owners and decisions.",
    ],
    m: [
      "See how requests, referrals, and follow-",
      "up involve different owners and decisions.",
    ],
    link: { label: "Explore care pathways", href: "/care-pathways" },
    desktopImage: "/find-care/guide-care-pathways.webp",
    mobileImage: "/find-care/guide-care-pathways.webp",
    articleClass: "lg:pb-[25.07px]",
  },
];

export default function EducationalGuides() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f6f3ff] to-[#ece7ff] px-[19.5px] pb-[56px] pt-[112px] lg:px-[70px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[13.2px] lg:max-w-[1300px] lg:gap-[13.1px]">
        <Eyebrow>Browse educational guides</Eyebrow>

        <SectionHeading desktopLines={2}>
          <Copy
            text="Understand what you are looking at."
            d={["Understand what you are", "looking at."]}
            m={["Understand what you are", "looking at."]}
          />
        </SectionHeading>

        <p className="w-full max-w-[686.38px] pt-[1.32px] text-[16px] font-normal leading-[26.4px] text-[#5e5a86] lg:pt-[7.57px]">
          <Copy
            text="These cards link to learning pages. They are not service listings, provider recommendations, or a locally available catalog."
            d={[
              "These cards link to learning pages. They are not service listings, provider",
              "recommendations, or a locally available catalog.",
            ]}
            m={[
              "These cards link to learning pages. They are",
              "not service listings, provider",
              "recommendations, or a locally available",
              "catalog.",
            ]}
          />
        </p>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[14.8px] lg:grid lg:grid-cols-3 lg:gap-x-[27.5px] lg:gap-y-0 lg:pt-[14.9px]">
          {guides.map((guide) => (
            <article
              key={guide.title}
              className={`isolate flex w-full flex-col items-start overflow-clip rounded-[18px] border border-solid border-[#e3def8] bg-white shadow-[0px_12px_32px_0px_rgba(36,28,89,0.1),0px_2px_6px_0px_rgba(36,28,89,0.05)] ${guide.articleClass}`}
            >
              <div className="relative z-[2] w-full bg-[linear-gradient(135deg,#c9b8fb_0%,#5b49c8_100%)] lg:bg-[linear-gradient(137.53deg,#c9b8fb_0%,#5b49c8_100%)]">
                <div className="relative aspect-[349/218.13] w-full lg:aspect-auto lg:h-[236.25px]">
                  <Image
                    src={guide.mobileImage}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 640px, 90vw"
                    className={`object-cover object-[50%_35%] ${
                      guide.mobileImage === guide.desktopImage ? "" : "lg:hidden"
                    }`}
                  />
                  {guide.mobileImage !== guide.desktopImage && (
                    <Image
                      src={guide.desktopImage}
                      alt=""
                      fill
                      sizes="(min-width: 1440px) 413px, 30vw"
                      className="hidden object-cover object-[50%_35%] lg:block"
                    />
                  )}
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(36,28,89,0)] from-50% to-[rgba(36,28,89,0.28)]"
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-[1] flex w-full flex-col items-start gap-[9.5px] px-[22px] pb-[30.5px] pt-[21px] lg:pb-[30.51px]">
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
