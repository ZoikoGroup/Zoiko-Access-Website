import { Check, Head, Photo, card, darkBg, fontPoppins, glow, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const panels = [
  {
    label: "Administrative information flows",
    title: "What may be coordinated",
    image: pic("administrative-data"),
    alt: "Laptop showing a data dashboard",
    items: [
      "Eligibility and benefit responses",
      "Authorization request status",
      "Claim and remittance status",
      "Audit and provenance records",
    ],
  },
  {
    label: "Clinical judgment & record custody",
    title: "What stays with care organizations",
    image: pic("clinician-in-consultation"),
    alt: "Doctor with a stethoscope, arms crossed",
    items: [
      "Diagnosis and treatment decisions",
      "Clinical records and their custody",
      "Access only with lawful authority and purpose",
      "No universal record; no general payer access",
    ],
  },
];

export default function Boundaries() {
  return (
    <section
      id="boundaries"
      className={`w-full scroll-mt-24 ${sectionY} ${sectionPad}`}
      style={{ backgroundImage: `${glow("1100px 700px", "100% 0")},${darkBg}` }}
    >
      <div className={`${inner} flex flex-col gap-11 lg:px-2.5`}>
        <Head tone="light" eyebrow="Data, privacy & decision boundary" title="Administrative information is not clinical judgment." />
        <div className="grid gap-6 md:grid-cols-2">
          {panels.map((p) => (
            <article key={p.title} className={card}>
              <div className={`relative h-[240px] w-full sm:h-[320px] lg:h-[391px] ${photoBg}`}>
                <Photo src={p.image} alt={p.alt} sizes="(min-width: 768px) 626px, 100vw" />
              </div>
              <div className="flex flex-col gap-1.5 p-6 pb-10">
                <p className="text-[12px] font-semibold uppercase leading-5 tracking-[0.6px] text-[#4267d5]">{p.label}</p>
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{p.title}</h3>
                <ul className="flex flex-col gap-2.5 pt-4">
                  {p.items.map((item) => (
                    <li key={item} className="relative pl-7 text-[15px] leading-6 text-[#2d3a52]">
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
