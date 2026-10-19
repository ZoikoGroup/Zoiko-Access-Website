import Image from "next/image";
import SectionHeading from "./SectionHeading";

const rules = [
  {
    title: "Parental responsibility is not unlimited",
    description:
      "Access depends on local law, the child’s circumstances, the record type and the organization responsible for the information.",
    image: {
      src: "/for-caregivers/minors-parental.webp",
      alt: "Older woman cooking at home",
    },
  },
  {
    title: "Minors may have confidential services",
    description:
      "Some services and records may be restricted, even from a parent, to protect the young person.",
    image: {
      src: "/for-caregivers/minors-confidential.webp",
      alt: "Person checking information on a phone and laptop",
    },
  },
  {
    title: "Guardianship evidence may be required",
    description:
      "Legal guardians who are not parents may need to show evidence of their role.",
    image: {
      src: "/for-caregivers/minors-guardianship.webp",
      alt: "Stethoscope on a white surface",
    },
  },
  {
    title: "Capacity and legal representation change",
    description:
      "What someone can decide, and who can act for them, can change over time.",
    image: {
      src: "/for-caregivers/minors-capacity.webp",
      alt: "Two surgeons at work",
    },
  },
  {
    title: "Safety exceptions can apply",
    description:
      "Safeguarding rules can override normal access in some circumstances.",
    image: {
      src: "/for-caregivers/minors-safety.webp",
      alt: "Empty hospital ward with beds",
    },
  },
];

export default function MinorsSafeguards() {
  return (
    <section className="w-full bg-[#F5F8FC] py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Children, adolescents and extra safeguards"
          title={
            <>
              Rules for minors are not
              <br className="hidden sm:block" /> one-size-fits-all
            </>
          }
          description="We don’t state age thresholds here, because they vary by location and by service."
        />

        <div className="mt-6 grid grid-cols-1 gap-x-[22px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => (
            <article
              key={rule.title}
              className="overflow-hidden rounded-2xl border border-[#E4E0F7] bg-white shadow-[0_12px_32px_rgba(36,28,89,0.08)]"
            >
              <div className="relative aspect-[409/180] w-full">
                <Image
                  src={rule.image.src}
                  alt={rule.image.alt}
                  fill
                  sizes="(min-width: 1024px) 409px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="px-[22px] pb-8 pt-5">
                <h3 className="max-w-[240px] text-[17px] font-semibold leading-[21px] text-[#1D1857] [font-family:var(--font-poppins)]">
                  {rule.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-[25px] text-[#5B5880]">
                  {rule.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
