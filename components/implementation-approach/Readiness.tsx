import { Head, Photo, fontPoppins, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const conditions = [
  { title: "Legal & contract", text: "Agreements executed and in force." },
  { title: "Country", text: "Market obligations confirmed." },
  { title: "Security & privacy", text: "Reviews approved." },
  { title: "Partner & clinical boundaries", text: "Responsibilities documented." },
  { title: "Support ownership", text: "Named, staffed support." },
  { title: "Rollback, incidents & monitoring", text: "Rollback plan, incident communications and monitoring in place." },
];

export default function Readiness() {
  return (
    <section id="readiness" className={`w-full scroll-mt-24 bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} grid items-start gap-10 lg:grid-cols-[1fr_622px] lg:gap-14`}>
        <div className="flex flex-col gap-6">
          <Head
            eyebrow="Deployment readiness"
            title="Ready only when every condition is met."
            lead="A conditional checklist for the launch decision and operational handover."
          />
          <div
            className={`relative h-[260px] w-full overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(36,59,115,0.08)] sm:h-[383px] ${photoBg}`}
          >
            <Photo
              src={pic("team-reviewing-a-readiness-checklist")}
              alt="Colleagues reviewing a checklist beside laptops"
              sizes="(min-width: 1024px) 622px, 100vw"
            />
          </div>
        </div>
        <ol className="flex flex-col gap-2.5">
          {conditions.map((c, i) => (
            <li
              key={c.title}
              className="flex items-start gap-4 rounded-2xl border border-solid border-[#e3e8f2] bg-white px-6 py-5 shadow-[0_10px_20px_rgba(36,59,115,0.1)] sm:px-7"
            >
              <span
                className={`${fontPoppins} mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border-2 border-solid border-[#7657e8] text-[12px] font-semibold text-[#7657e8]`}
              >
                {i + 1}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className={`${fontPoppins} text-[18px] font-semibold leading-6 text-[#16245a]`}>{c.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{c.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
