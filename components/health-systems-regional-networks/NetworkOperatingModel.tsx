import { Eyebrow, heading } from "./shared";

const stages = [
  { title: "Define network scope", text: "Members, services and geography." },
  { title: "Establish agreements", text: "Roles, responsibilities and terms." },
  { title: "Map systems", text: "Which source systems hold what." },
  { title: "Authorize exchange", text: "Lawful basis and purpose for each flow." },
  { title: "Validate", text: "Test scenarios and readiness." },
  { title: "Operate", text: "Monitored, with named owners." },
];

export default function NetworkOperatingModel() {
  return (
    <section id="operating-model" className="scroll-mt-24 bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Network operating model</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Six stages to a working network.
        </h2>
        <p className="mb-10 text-base leading-7 text-[#5B6B8C]">No stage is shown as live without evidence.</p>

        <ol className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-[20px] border border-[#E4E7F2] bg-white px-6 pb-6 pt-8 shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
            >
              {/* Pill tab on the top edge, carrying the stage number */}
              <span className="absolute -top-3 left-6 rounded-full bg-[#C4B5FD] px-3 py-0.5 text-xs font-bold text-[#3A23A8]">
                Stage {i + 1}
              </span>
              <h3 className={`${heading} mb-1 text-lg text-[#16245A]`}>{s.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
