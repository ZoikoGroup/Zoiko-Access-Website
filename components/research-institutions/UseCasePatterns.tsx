import { Eyebrow, IMG, heading } from "./shared";

const patterns = [
  {
    title: "Public-health research",
    text: "Population-level questions under a public-health mandate, with minimized data.",
    image: `${IMG}/pattern-public-health.webp`,
    alt: "Group of friends sitting together with arms around each other",
  },
  {
    title: "Service evaluation",
    text: "Understanding how a care service performs, using approved aggregate data.",
    image: `${IMG}/pattern-service-evaluation.webp`,
    alt: "Analytics dashboard on a laptop screen",
  },
  {
    title: "Multi-site collaboration",
    text: "Several institutions, each keeping custody of its own data.",
    image: `${IMG}/pattern-multi-site.webp`,
    alt: "Exterior of a hospital building",
  },
];

export default function UseCasePatterns() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Use-case patterns</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>Patterns, not promises.</h2>
        <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
          Illustrative examples only — no real studies, partners or outcomes.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {patterns.map((p) => (
            <article
              key={p.title}
              className="relative overflow-hidden rounded-[20px] border border-[#E4E7F2] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.10)]"
            >
              {/* Corner ribbon */}
              <span className="absolute right-[-44px] top-6 z-10 w-44 rotate-45 bg-[#B7791F] py-1 text-center text-xs font-bold uppercase tracking-wider text-white">
                Illustrative
              </span>
              <img src={p.image} alt={p.alt} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h3 className={`${heading} mb-1.5 text-lg text-[#16245A]`}>{p.title}</h3>
                <p className="text-sm leading-6 text-[#5B6B8C]">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
