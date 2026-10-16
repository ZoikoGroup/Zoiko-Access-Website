import Image from "next/image";
import SectionHeading from "./SectionHeading";

const limits = [
  {
    title: "A provider accepts new patients",
    description: "Participation in a location guide is not a promise of capacity.",
    image: {
      src: "/locations-availability/limit-capacity.webp",
      alt: "Empty hospital ward with beds",
    },
  },
  {
    title: "An appointment slot exists",
    description: "Seeing a request option does not mean a time is available.",
    image: {
      src: "/locations-availability/limit-appointment.webp",
      alt: "Two surgeons at work",
    },
  },
  {
    title: "Coverage applies",
    description:
      "Benefit eligibility is decided separately and by the right organization.",
    image: {
      src: "/locations-availability/limit-coverage.webp",
      alt: "Anatomical model of a brain",
    },
  },
  {
    title: "A clinician has accepted a referral",
    description: "A request is not a confirmed or reviewed referral.",
    image: {
      src: "/locations-availability/limit-referral.webp",
      alt: "Stethoscope on a white surface",
    },
  },
];

export default function ServiceLimits() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F8F7FE] to-[#D6CBFD] py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Limits"
          title={
            <>
              An available service is not a
              <br className="hidden sm:block" /> guaranteed outcome
            </>
          }
          description="Published information may describe participating services or ways to submit a request. It does not guarantee any of the following."
        />

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {limits.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-[#E6E3F5] bg-white shadow-[0_2px_6px_rgba(36,28,89,0.05),0_12px_32px_rgba(36,28,89,0.10)]"
            >
              <div className="relative aspect-[304/207] w-full">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 304px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="px-[22px] pb-12 pt-5">
                <h3 className="text-[16px] font-bold leading-5 text-[#211A5A] [font-family:var(--font-sora)]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[25px] text-[#615D7E]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
