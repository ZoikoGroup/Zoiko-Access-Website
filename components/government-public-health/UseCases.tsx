import { Eyebrow, IMG, Pill, heading } from "./shared";

const cases = [
  {
    title: "Governed care navigation",
    text: "Helping residents understand and reach permitted services.",
    tag: "Within mandate",
    image: `${IMG}/usecase-care-navigation.webp`,
    alt: "Clinician giving an older woman a vaccination",
  },
  {
    title: "Accountable care transitions",
    text: "Handoffs between services with a named owner.",
    tag: "Clinical owner named",
    image: `${IMG}/usecase-care-transitions.webp`,
    alt: "Exterior of a hospital building",
  },
  {
    title: "Public-health coordination",
    text: "Coordination limited to a specific, approved purpose.",
    tag: "Approved purpose only",
    image: `${IMG}/usecase-public-health.webp`,
    alt: "Pipette filling a tray of laboratory sample wells",
  },
];

export default function UseCases() {
  return (
    <section className="bg-white px-6 pb-20 pt-20 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Public-sector use cases</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Three ways a public program could use coordination.
        </h2>
        <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
          Each applies only within an approved purpose.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="relative flex flex-col items-start gap-2 overflow-hidden rounded-[20px] border border-[#E4E7F2] bg-white p-5 shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
            >
              <span
                aria-hidden="true"
                className="absolute -right-8 -top-7 h-28 w-28 rounded-full border-[14px] border-[#EEEAFE]"
              />
              <img
                src={c.image}
                alt={c.alt}
                className="relative h-56 w-full rounded-2xl object-cover lg:h-64"
              />
              <h3 className={`${heading} pt-2 text-base text-[#16245A]`}>{c.title}</h3>
              <p className="pb-1.5 text-sm leading-6 text-[#5B6B8C]">{c.text}</p>
              <Pill>{c.tag}</Pill>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
