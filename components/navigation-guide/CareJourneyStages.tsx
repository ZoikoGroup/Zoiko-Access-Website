import Image from "next/image";

const STAGES = [
  {
    step: 1,
    title: "Explore",
    description: "Learn about types of care and local options.",
    owner: "Owner: You",
    src: "/guide/9.png",
    alt: "Stethoscope resting on a bed sheet in black and white",
    tone: "bg-[#7c5ce6]",
  },
  {
    step: 2,
    title: "Contact provider",
    description: "Reach the organization responsible for the next step.",
    owner: "Owner: You · provider",
    src: "/guide/10.png",
    alt: "Person pointing at a laptop screen while typing",
    tone: "bg-[#7c5ce6]",
  },
  {
    step: 3,
    title: "Request",
    description: "Send a request, only where that feature is supported.",
    owner: "Owner: You",
    src: "/guide/11.png",
    alt: "Partially open laptop glowing in a dark room",
    tone: "bg-[#7c5ce6]",
  },
  {
    step: 4,
    title: "Acknowledgement",
    description:
      "The provider confirms it received the request. Not an acceptance.",
    owner: "Owner: Provider",
    src: "/guide/12.png",
    alt: "People seated in a brick-walled office lounge during a presentation",
    tone: "bg-[#7c5ce6]",
  },
  {
    step: 5,
    title: "Clinical decision",
    description: "A licensed professional decides what happens clinically.",
    owner: "Owner: Licensed clinician",
    src: "/guide/13.png",
    alt: "Smiling clinician in a white coat standing outdoors near a tree",
    tone: "bg-[#1f2559]",
  },
  {
    step: 6,
    title: "Confirmed next step",
    description: "Only the provider confirms a time, place or service.",
    owner: "Owner: Provider",
    src: "/guide/14.png",
    alt: "Doctor with arms crossed and a stethoscope around his neck",
    tone: "bg-[#1f6b45]",
  },
] as const;

export default function CareJourneyStages() {
  return (
    <section className="w-full overflow-x-hidden bg-white px-6 py-12 text-[#1f2559] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#7c5ce6]">
          <span aria-hidden="true" className="h-0.5 w-6 bg-[#7c5ce6]" />
          Care Journey Stages
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Six stages, <span className="text-[#7c5ce6]">each with an owner</span>
        </h2>

        <p className="mt-4 text-base leading-7 text-[#5d6683]">
          Moving to the next stage depends on the responsible organization, not
          on this website.
        </p>

        <ol className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
          {STAGES.map((stage, index) => (
            <li
              key={stage.title}
              className="relative z-0 flex flex-col items-center text-center"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-lg ring-2 ring-white">
                <Image
                  src={stage.src}
                  alt={stage.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              {index < STAGES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-[40%] hidden h-0.5 w-3 bg-[#7c5ce6] lg:block"
                />
              )}

              <span
                className={`-mt-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white z-10 shadow ${stage.tone}`}
              >
                {stage.step}
              </span>

              <h3 className="mt-2 text-base font-bold">{stage.title}</h3>
              <p className="mt-2 max-w-[200px] text-sm leading-5 text-[#5d6683]">
                {stage.description}
              </p>
              <p className="mt-3 text-sm font-semibold text-[#7c5ce6]">
                {stage.owner}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
