import Image from "next/image";
import SectionHeading from "./SectionHeading";

const journeys = [
  {
    tag: "Illustrative only / Example A",
    title: "Seeking a consultation",
    description:
      "Understanding options and asking an organization about a possible next step.",
    image: {
      src: "/care-pathways/journey-consultation.webp",
      alt: "Three people discussing options around a table",
    },
    steps: [
      {
        title: "Learn about a type of service.",
        owner: "information publisher",
      },
      {
        title: "Contact the responsible organization.",
        owner: "visitor and receiving organization",
      },
      {
        title: "Submit a request if the process is available.",
        owner: "authorized request process",
      },
      {
        title: "Receive independent confirmation, if issued.",
        owner: "responsible provider or organization",
      },
    ],
  },
  {
    tag: "Illustrative only / Example B",
    title: "Following a professional referral",
    description:
      "A handoff that includes separate professional and receiving-organization decisions.",
    image: {
      src: "/care-pathways/journey-referral.webp",
      alt: "Two people reviewing a letter together at home",
    },
    steps: [
      {
        title: "A clinician determines referral suitability.",
        owner: "authorized care professional",
      },
      {
        title: "Information is sent through an approved channel.",
        owner: "responsible sending organization",
      },
      {
        title: "The receiving organization independently reviews it.",
        owner: "receiving care organization",
      },
      {
        title: "The person receives verified next-step communication.",
        owner: "source responsible for the update",
      },
    ],
  },
];

export default function IllustrativeJourneys() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Two illustrative journeys"
          title="Different routes. Independent decisions."
          description="These hypothetical administrative examples do not identify a real person, provider, partner, or approved care pathway."
        />

        <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          {journeys.map((journey) => (
            <article
              key={journey.title}
              className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white"
            >
              <div className="relative h-[220px] w-full sm:h-[262px]">
                <Image
                  src={journey.image.src}
                  alt={journey.image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-col gap-3 px-6 pb-7 pt-5">
                <span className="self-start rounded-full bg-[#E4DCFB] px-2.5 py-1 text-[11px] text-[#5B3FD1]">
                  {journey.tag}
                </span>
                <h3 className="text-[18px] font-bold text-[#23327A]">
                  {journey.title}
                </h3>
                <p className="text-[14px] leading-[1.75] text-[#4B5563]">
                  {journey.description}
                </p>

                <ol className="flex flex-col gap-1">
                  {journey.steps.map((step, index) => (
                    <li key={step.title} className="flex gap-3 py-2">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E4DCFB] text-[12px] font-bold text-[#5B3FD1]">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-[14px] font-bold leading-[1.75] text-[#23327A]">
                          {step.title}
                        </p>
                        <p className="text-[12px] leading-[1.7] text-[#4B5563]">
                          Owner: {step.owner}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
