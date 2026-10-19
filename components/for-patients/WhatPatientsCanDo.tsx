import Image from "next/image";
import SectionHeading from "./SectionHeading";

const actions = [
  {
    title: "Understand options",
    description:
      "Read service education, care pathways, professional roles, and permission boundaries.",
    tag: "Information available in local preview",
    image: {
      src: "/for-patients/do-understand.webp",
      alt: "Woman reading a healthcare information leaflet at home",
    },
  },
  {
    title: "Start supported requests",
    description:
      "A request needs an authorized location, partner, feature, and—where required—verified identity.",
    tag: "Not connected in this preview",
    image: {
      src: "/for-patients/do-requests.webp",
      alt: "Clinician talking through a request with an older patient",
    },
  },
  {
    title: "Follow verified next steps",
    description:
      "Personal status and protected messages require an operational authenticated service and authoritative source updates.",
    tag: "Not connected in this preview",
    image: {
      src: "/for-patients/do-follow.webp",
      alt: "Nurse checking updates on a tablet in a hospital corridor",
    },
  },
];

export default function WhatPatientsCanDo() {
  return (
    <section id="patient-options" className="w-full scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="What patients can do"
          title={
            <>
              Understand the difference
              <br className="hidden sm:block" /> between learning and taking
              action.
            </>
          }
        />

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {actions.map((action) => (
            <article
              key={action.title}
              className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white px-7 pb-5 pt-7"
            >
              <div className="relative aspect-[353/186] w-full overflow-hidden rounded-lg">
                <Image
                  src={action.image.src}
                  alt={action.image.alt}
                  fill
                  sizes="(min-width: 768px) 353px, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-[22px] font-bold leading-7 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)] sm:text-[24px]">
                {action.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-[#5E6B85]">
                {action.description}
              </p>
              <div className="min-h-6 flex-1" aria-hidden="true" />
              <span className="self-start rounded-full bg-[#EEEAFE] px-4 py-3 text-[12px] leading-4 text-[#6A44D4]">
                {action.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
