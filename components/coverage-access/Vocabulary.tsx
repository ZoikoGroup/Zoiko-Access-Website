import { Head, Photo, card, fontPoppins, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const terms = [
  {
    label: "Plan coverage",
    title: "What a plan includes",
    text: "Set by the plan's terms, exclusions and rules.",
    source: "Source: the plan",
    image: pic("plan-documents-being-reviewed"),
    alt: "Person signing plan documents",
  },
  {
    label: "Eligibility",
    title: "Whether you're enrolled",
    text: "For a specific plan, on a specific date.",
    source: "Source: the payer",
    image: pic("eligibility-information"),
    alt: "Laptop showing a data dashboard",
  },
  {
    label: "Benefits & network",
    title: "How a service is treated",
    text: "Cost sharing, limits and network conditions.",
    source: "Source: the plan",
    image: pic("cost-sharing-calculations"),
    alt: "Financial forms and a calculator on a desk",
  },
  {
    label: "Prior authorization",
    title: "Advance approval",
    text: "A separate payer decision for certain services.",
    source: "Source: the payer",
    image: pic("authorization-review"),
    alt: "Clinician in a white coat using a phone",
  },
];

export default function Vocabulary() {
  return (
    <section id="terms" className={`w-full scroll-mt-24 bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Coverage vocabulary"
          title="Coverage, eligibility, benefits and authorization are different decisions."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {terms.map((t) => (
            <article key={t.label} className={`flex flex-col ${card} shadow-[0_10px_20px_rgba(36,59,115,0.1)]`}>
              <div className={`relative h-[188px] w-full ${photoBg}`}>
                <Photo src={t.image} alt={t.alt} sizes="(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-6">
                <p className="text-[12px] font-semibold uppercase leading-5 tracking-[0.6px] text-[#4267d5]">{t.label}</p>
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{t.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{t.text}</p>
                <p className="mt-auto w-fit rounded-full bg-[#e7eefc] px-2.5 py-1 text-[12px] font-semibold leading-5 text-[#243b73]">
                  {t.source}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
