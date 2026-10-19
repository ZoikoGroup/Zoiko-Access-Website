import Image from "next/image";
import SectionHeading from "./SectionHeading";

const ways = [
  {
    title: "Find information",
    possible:
      "Researching general service information and understanding how care pathways work.",
    authorized:
      "Nothing, for general information. Private details about a person are a different matter.",
    image: {
      src: "/for-caregivers/help-find.webp",
      alt: "Clinician holding a phone",
    },
  },
  {
    title: "Organize next steps",
    possible:
      "Keeping a list of questions, noting who to contact and helping someone prepare.",
    authorized: "Sharing their details with others or speaking for them.",
    image: {
      src: "/for-caregivers/help-organize.webp",
      alt: "Care team seen from below an operating light",
    },
  },
  {
    title: "Act through approved permissions",
    possible:
      "Only where an approved service exists and the person has authorized you.",
    authorized: "Viewing records, booking or messaging on their behalf.",
    image: {
      src: "/for-caregivers/help-act.webp",
      alt: "Clinician talking with a patient",
    },
  },
];

export default function WaysToHelp() {
  return (
    <section className="w-full bg-gradient-to-br from-[#F6F4FF] via-[#F0ECFF] to-[#E8E1FE] py-[100px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="What help may involve"
          title={
            <>
              Three ways to help, three
              <br className="hidden sm:block" /> levels of authority
            </>
          }
          description="These are explanations, not buttons. Nothing here gives anyone access."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ways.map((way) => (
            <article
              key={way.title}
              className="overflow-hidden rounded-2xl border border-[#E4E0F7] bg-white shadow-[0_12px_32px_rgba(36,28,89,0.08)]"
            >
              <div className="relative aspect-[417/160] w-full">
                <Image
                  src={way.image.src}
                  alt={way.image.alt}
                  fill
                  sizes="(min-width: 768px) 417px, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="px-[22px] pb-10 pt-5">
                <h3 className="text-[18px] font-semibold leading-6 text-[#1D1857] [font-family:var(--font-poppins)]">
                  {way.title}
                </h3>
                <dl className="mt-5 space-y-5">
                  <div>
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5B45D6]">
                      What may be possible
                    </dt>
                    <dd className="mt-0.5 text-[15px] leading-6 text-[#5B5880]">
                      {way.possible}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5B45D6]">
                      What must be authorized
                    </dt>
                    <dd className="mt-0.5 text-[15px] leading-6 text-[#5B5880]">
                      {way.authorized}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
