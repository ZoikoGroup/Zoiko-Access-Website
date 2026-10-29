import { fontPoppins } from "./fonts";
import { Check, Head, Photo, card, img, inner, photoBg, sectionPad, sectionY } from "./ui";

const audiences = [
  {
    label: "This page is for",
    labelColor: "text-[#4267d5]",
    title: "Payers, health plans & benefit administrators",
    image: img("two-business-professionals-shaking-hands"),
    alt: "Two professionals shaking hands",
    items: ["Health plans and insurers", "Third-party and benefit administrators", "Authorized benefits organizations"],
    pill: "Business inquiries only",
    pillClass: "bg-[#e7eefc] text-[#243b73]",
  },
  {
    label: "This page is not for",
    labelColor: "text-[#b42318]",
    title: "Patients & members needing personal help",
    image: img("person-seeking-care-support"),
    alt: "A nurse giving an older woman a vaccination",
    items: [
      "Help with a personal claim — contact your plan",
      "Clinical decisions — contact your care provider",
      "Emergencies — contact local emergency services",
    ],
    pill: "No claim, medical or emergency support here",
    pillClass: "bg-[#eee9fd] text-[#5a43c9]",
  },
];

export default function RightPlace() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Is this the right place?"
          title={
            <>
              For institutions.
              <br />
              Not for individual claims or care.
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((a) => (
            <article key={a.label} className={`flex flex-col ${card}`}>
              <div className={`relative h-[240px] w-full sm:h-[320px] lg:h-[391px] ${photoBg}`}>
                <Photo src={a.image} alt={a.alt} sizes="(min-width: 768px) 640px, 100vw" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 p-6">
                <p className={`text-[12px] font-semibold uppercase leading-5 tracking-[0.6px] ${a.labelColor}`}>
                  {a.label}
                </p>
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{a.title}</h3>
                <ul className="flex flex-col gap-2.5 py-4">
                  {a.items.map((item) => (
                    <li key={item} className="relative pl-7 text-[15px] leading-6 text-[#2d3a52]">
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={`mt-auto w-fit rounded-full px-2.5 py-1 text-[12px] font-semibold leading-5 ${a.pillClass}`}>
                  {a.pill}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
