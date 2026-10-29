import { Head, Photo, card, fontPoppins, inner, lavenderBg, photoBg, pic, sectionPad, sectionY } from "./shared";

const steps = [
  {
    title: "Find your plan's authorized contact",
    text: "Your plan documents or member card name the right channel.",
    image: pic("member-finding-plan-details"),
    alt: "Person pointing at a laptop screen",
  },
  {
    title: "Check what the plan says",
    text: "Coverage and benefit terms come from the plan itself.",
    image: pic("person-reading-plan-information"),
    alt: "Smiling woman",
  },
  {
    title: "Confirm any authorization",
    text: "Some services need a separate payer decision first.",
    image: pic("care-provider-in-a-clinic"),
    alt: "Clinician talking with a patient in a clinic",
  },
  {
    title: "Follow up with the source",
    text: "Rely on dated answers from the organization that decided.",
    image: pic("status-information-dashboard"),
    alt: "Analytics dashboard on a monitor",
  },
];

export default function Journey() {
  return (
    <section id="journey" className={`w-full scroll-mt-24 ${sectionY} ${sectionPad}`} style={{ background: lavenderBg }}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Member journey"
          title="Understand the next step before you act."
          lead="An explanatory journey. Following these steps never implies eligibility or approval."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className={`flex flex-col ${card}`}>
              <div className={`relative h-[188px] w-full ${photoBg}`}>
                <Photo src={s.image} alt={s.alt} sizes="(min-width: 1024px) 310px, (min-width: 640px) 50vw, 100vw" />
                <span
                  className={`${fontPoppins} absolute left-3.5 top-3.5 rounded-full bg-white/[0.92] px-2.5 py-1 text-[12px] font-semibold leading-5 text-[#243b73]`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 px-6 pb-10 pt-6">
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{s.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
