import { Head, Photo, card, fontPoppins, inner, lavenderBg, photoBg, pic, sectionPad, sectionY } from "./shared";

const domains = [
  { title: "Functionality", text: "Workflows behave as specified.", image: pic("interface-design"), alt: "Analytics dashboard on a monitor" },
  { title: "Access controls", text: "Roles and permissions fail closed.", image: pic("access-control-testing"), alt: "Person using a laptop and a phone together" },
  { title: "Jurisdiction", text: "Local obligations are met.", image: pic("jurisdiction-review"), alt: "Person signing a document" },
  { title: "Interoperability", text: "Interfaces exchange data correctly.", image: pic("interoperability-testing"), alt: "Server racks with network cabling" },
  { title: "Negative & failure states", text: "Errors and outages are handled safely.", image: pic("failure-testing"), alt: "Glowing circuit board" },
  {
    title: "Accessibility & operations",
    text: "Accessible, monitored and supportable.",
    image: pic("operations-readiness"),
    alt: "Team listening to a presentation in an office",
  },
];

export default function Validation() {
  return (
    <section className={`w-full ${sectionY} ${sectionPad}`} style={{ background: lavenderBg }}>
      <div className={`${inner} flex flex-col gap-11 lg:px-2.5`}>
        <Head
          eyebrow="Validation & acceptance evidence"
          title="Six test domains. Real evidence only."
          lead='No fictional "test passed" labels are ever shown.'
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <article key={d.title} className={card}>
              <div className={`relative h-[220px] w-full lg:h-[255px] ${photoBg}`}>
                <Photo src={d.image} alt={d.alt} sizes="(min-width: 1024px) 410px, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="flex flex-col gap-1.5 p-6">
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{d.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{d.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
