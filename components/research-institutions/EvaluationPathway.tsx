import { Eyebrow, heading } from "./shared";

const stages = [
  { title: "Initial discussion", text: "Purpose and fit" },
  { title: "Governance review", text: "Ethics and lawful basis" },
  { title: "Privacy & security", text: "Controls and safeguards" },
  { title: "Feasibility", text: "Systems and sources" },
  { title: "Decision", text: "Authorize or stop" },
];

// Arrow-shaped segments on wide screens; the first has a flat left edge.
const chevron = "lg:[clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%,10%_50%)]";
const chevronFirst = "lg:[clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)]";

export default function EvaluationPathway() {
  return (
    <section className="bg-[#F8F8FD] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Institutional evaluation pathway</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          A staged discussion — not automatic access.
        </h2>

        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {stages.map((s, i) => (
            <li
              key={s.title}
              className={`rounded-xl px-6 py-7 lg:-mr-[2%] lg:rounded-none ${i === 0 ? chevronFirst : `${chevron} lg:pl-[16%]`} ${
                i % 2 === 0 ? "bg-[#B9A8FD]" : "bg-white"
              }`}
            >
              <h3 className={`${heading} text-base text-[#16245A]`}>{s.title}</h3>
              <p className="text-sm text-[#5B6B8C]">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-[#5B6B8C]">
          Every stage can end the discussion. No timeline or outcome is promised.
        </p>
      </div>
    </section>
  );
}
