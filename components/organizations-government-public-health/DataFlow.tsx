import { Eyebrow, IMG, heading } from "./shared";

const stages = [
  {
    title: "Source institution",
    text: "Holds the information and stays its source of record.",
    image: `${IMG}/flow-source.webp`,
  },
  {
    title: "Scoped request",
    text: "Asks only for what the purpose needs.",
    image: `${IMG}/flow-scoped-request.webp`,
  },
  {
    title: "Authority & entitlement control",
    text: "Is the request lawful and permitted?",
    image: `${IMG}/flow-authority.webp`,
    checkpoint: "Decision checkpoint",
  },
  {
    title: "Governed exchange",
    text: "Recorded, attributable, minimal.",
    image: `${IMG}/flow-exchange.webp`,
    checkpoint: "Audit checkpoint",
  },
  {
    title: "Receiving institution",
    text: "Uses it only for the approved purpose.",
    image: `${IMG}/flow-receiving.webp`,
  },
];

export default function DataFlow() {
  return (
    <section id="data-flow" className="scroll-mt-24 bg-[#1B1464] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow light>Data flow illustration</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl md:text-4xl`}>
          Every exchange passes two checkpoints.
        </h2>
        <p className="mb-10 text-base leading-7 text-white/75">
          A decision checkpoint and an audit checkpoint. Conceptual only.
        </p>

        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {stages.map((s, i) => (
            <li
              key={s.title}
              className={`flex flex-col gap-1.5 lg:px-5 ${i > 0 ? "lg:border-l lg:border-white/15" : "lg:pl-0"}`}
            >
              <img src={s.image} alt="" className="mb-2 aspect-[219/131] w-full rounded-md object-cover" />
              <h3 className={`${heading} text-lg leading-6`}>{s.title}</h3>
              <p className="text-sm leading-6 text-white/75">{s.text}</p>
              {s.checkpoint && (
                <span className="mt-1.5 self-start rounded-md border border-[#F5C26B]/60 px-2 py-1 text-xs font-semibold text-[#F5C26B]">
                  {s.checkpoint}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
