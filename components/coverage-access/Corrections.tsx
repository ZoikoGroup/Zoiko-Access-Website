import { Head, dot, inner, sectionPad, sectionY } from "./shared";

const cases: { label: string; text: string; color: keyof typeof dot }[] = [
  { label: "Stale", text: "The information is out of date. Recheck with the plan.", color: "grey" },
  { label: "Uncertain", text: "The source couldn't confirm. Nothing is assumed.", color: "amber" },
  { label: "Denied", text: "Follow the official notice from the deciding organization.", color: "red" },
  { label: "Disputed", text: "Use the responsible organization's correction or appeal process.", color: "violet" },
];

export default function Corrections() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Exceptions & corrections"
          title="When information is incomplete, verify with the responsible source."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((c) => (
            <li
              key={c.label}
              className="flex flex-col gap-2 rounded-2xl border border-solid border-[#e3e8f2] bg-white px-6 pb-7 pt-6 shadow-[0_10px_30px_rgba(36,59,115,0.08)]"
            >
              <p className="flex items-center gap-2 text-[14px] font-bold leading-6 text-[#2d3a52]">
                <span aria-hidden="true" className={`size-2 rounded-full ${dot[c.color]}`} />
                {c.label}
              </p>
              <p className="text-[15px] leading-6 text-[#5b6678]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
