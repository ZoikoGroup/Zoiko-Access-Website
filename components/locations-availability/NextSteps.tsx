import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Understand how Zoiko Access works",
    description: "See how discovery, requests and follow-up fit together.",
    tag: "Always available",
    href: "/how-it-works",
    image: {
      src: "/locations-availability/next-how-it-works.webp",
      alt: "X-ray of a hand on a light box",
    },
  },
  {
    title: "Learn about care pathways",
    description: "Understand common ways care navigation works.",
    tag: "Always available",
    href: "/care-pathways",
    image: {
      src: "/locations-availability/next-care-pathways.webp",
      alt: "Clinician explaining a scan to a colleague",
    },
  },
  {
    title: "Find care",
    description:
      "Shown only where a published, authorized discovery experience exists for your location.",
    tag: "Conditional",
    href: null,
    image: {
      src: "/locations-availability/next-find-care.webp",
      alt: "Hospital building exterior",
    },
  },
  {
    title: "Talk to support",
    description: "Links only to a published support route.",
    tag: "Where published",
    href: null,
    image: {
      src: "/locations-availability/next-support.webp",
      alt: "Empty patient room with a bed",
    },
  },
];

const cardClass =
  "flex h-full flex-col overflow-hidden rounded-2xl border border-[#E6E3F5] bg-white shadow-[0_2px_6px_rgba(36,28,89,0.05),0_12px_32px_rgba(36,28,89,0.10)]";

export default function NextSteps() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Next steps"
          title="Explore your next step"
          description="Links appear only where a published, authorized route exists. Unavailable targets are explained, never dead links."
        />

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const body = (
              <>
                <div className="relative aspect-[308/150] w-full">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(min-width: 1024px) 308px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start px-[22px] pb-5 pt-5">
                  <h3 className="text-[16px] font-bold leading-5 text-[#211A5A] [font-family:var(--font-sora)]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-[25px] text-[#615D7E]">
                    {step.description}
                  </p>
                  <div className="min-h-6 flex-1" aria-hidden="true" />
                  <span className="rounded-full bg-[#EEEAFE] px-3 py-[3px] text-[12px] font-semibold leading-5 text-[#4F3FC8]">
                    {step.tag}
                  </span>
                </div>
              </>
            );

            // Conditional routes are not live yet, so they render as
            // explained cards rather than dead links.
            return step.href ? (
              <Link
                key={step.title}
                href={step.href}
                className={`${cardClass} transition-transform hover:-translate-y-0.5`}
              >
                {body}
              </Link>
            ) : (
              <div key={step.title} className={cardClass}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
