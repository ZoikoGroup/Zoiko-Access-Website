import Image from "next/image";

const CARDS = [
  {
    title: "Primary care",
    description: "Your usual first point of contact for many health needs.",
    responsible: "Primary care provider",
    src: "/guide/15.png",
    alt: "Clinician in a white coat holding a smartphone",
    emergency: false,
  },
  {
    title: "Specialist care",
    description: "Focused care, usually after a referral.",
    responsible: "Specialist service",
    src: "/guide/13.png",
    alt: "Smiling clinician in a white coat standing outdoors near a tree",
    emergency: false,
  },
  {
    title: "Diagnostic services",
    description: "Tests, imaging and laboratory work.",
    responsible: "Lab or imaging provider",
    src: "/guide/16.png",
    alt: "Healthcare professional attending to an older patient",
    emergency: false,
  },
  {
    title: "Pharmacy",
    description: "Licensed dispensing and medicines advice.",
    responsible: "Licensed pharmacist",
    src: "/guide/17.png",
    alt: "Pills spilling from a prescription bottle on an orange background",
    emergency: false,
  },
  {
    title: "Emergency care",
    description: "Immediate danger or serious illness.",
    responsible: "Local emergency services",
    src: "/gradients/grad1.png",
    alt: "",
    emergency: true,
  },
] as const;

export default function TypesOfCare() {
  return (
    <section className="w-full overflow-x-hidden bg-[#f5f8fc] px-6 py-12 text-[#1f2559] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#7c5ce6]">
          <span aria-hidden="true" className="h-0.5 w-6 bg-[#7c5ce6]" />
          Types of Care
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Who is responsible for <span className="text-[#7c5ce6]">what</span>
        </h2>

        <p className="mt-4 text-base leading-7 text-[#5d6683]">
          Educational descriptions. How care is organized differs between
          countries and regions.
        </p>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CARDS.map((card) => (
            <li
              key={card.title}
              className={
                card.emergency
                  ? "flex flex-col overflow-hidden rounded-2xl border border-[#f3c9cf] bg-[#fdeaec] shadow-sm"
                  : "flex flex-col overflow-hidden rounded-2xl border border-[#e3e8f0] bg-white shadow-sm"
              }
            >
              <div className="relative h-[130px] w-full">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3
                  className={
                    card.emergency
                      ? "text-base font-bold text-[#a3152b]"
                      : "text-base font-bold"
                  }
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-[#5d6683]">
                  {card.description}
                </p>
                <p
                  className={
                    card.emergency
                      ? "mt-auto border-t border-[#f3c9cf] pt-3 text-sm leading-5 text-[#5d6683]"
                      : "mt-auto border-t border-[#e3e8f0] pt-3 text-sm leading-5 text-[#5d6683]"
                  }
                >
                  <strong className="font-bold text-[#1f2559]">
                    Responsible:
                  </strong>{" "}
                  {card.responsible}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-[#5d6683]">
          Jurisdiction caveat: names, access routes and referral rules vary
          locally. Check with the responsible service.
        </p>
      </div>
    </section>
  );
}
