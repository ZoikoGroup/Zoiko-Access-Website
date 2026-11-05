import { Eyebrow, IMG, heading } from "./shared";

const steps = [
  {
    title: "A sponsor defines a need",
    text: "A hypothetical employer wants staff to navigate care.",
    image: `${IMG}/example-sponsor.webp`,
    alt: "Two colleagues high-fiving across a desk",
  },
  {
    title: "Authority is confirmed",
    text: "Scope and legal basis are reviewed.",
    image: `${IMG}/example-authority.webp`,
    alt: "Hand signing a document with a pen",
  },
  {
    title: "A provider joins",
    text: "A licensed provider keeps clinical responsibility.",
    image: `${IMG}/example-provider.webp`,
    alt: "Doctor in a white coat with arms folded",
  },
  {
    title: "A controlled launch",
    text: "Monitored, with a rollback plan.",
    image: `${IMG}/example-launch.webp`,
    alt: "Presenter speaking to a small team in an office",
  },
];

export default function IllustrativeExample() {
  return (
    <section className="bg-[#F5F7FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Illustrative implementation example</Eyebrow>
        <h2 className={`${heading} mb-4 text-3xl text-[#16245A] md:text-4xl`}>
          A hypothetical pathway, start to finish.
        </h2>
        <p className="mb-7 inline-block rounded-full bg-[#FFF1DC] px-3 py-1.5 text-xs font-semibold uppercase text-[#8A5A00]">
          Illustrative example — no real organizations, outcomes or patients
        </p>

        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-2xl border border-[#E4E7F2] bg-white p-2.5 shadow-[0_10px_20px_rgba(22,36,90,0.08)]"
            >
              <img src={s.image} alt={s.alt} className="h-48 w-full object-cover" />
              <div className="px-3.5 pb-5 pt-4">
                <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#16245A] text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h3 className={`${heading} mb-1 text-base text-[#16245A]`}>{s.title}</h3>
                <p className="text-sm leading-6 text-[#5B6B8C]">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-[#5B6B8C]">
          Assumptions: every gate passes; the sponsor never sees individual health records.
        </p>
      </div>
    </section>
  );
}
