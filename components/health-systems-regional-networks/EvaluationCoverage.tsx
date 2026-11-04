import { Eyebrow, heading } from "./shared";

const blue = "border-l-[#3B5BDB]";
const amber = "border-l-[#B7791F]";
const violet = "border-l-[#7B5CF0]";

const items = [
  { title: "Architecture", text: "How systems would connect and where records stay.", accent: blue },
  { title: "Contracts", text: "Agreements between every participating organization.", accent: amber },
  { title: "Security", text: "Reviews, testing and incident handling.", accent: amber },
  { title: "Test scenarios", text: "Realistic handoffs, including failures.", accent: blue },
  { title: "Readiness", text: "Named owners, support and go / no-go criteria.", accent: violet },
  { title: "No guaranteed timeline", text: "Every network's path is different.", accent: amber },
];

export default function EvaluationCoverage() {
  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Implementation evaluation path</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          What an evaluation would cover.
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className={`rounded-xl border-l-4 bg-white px-5 py-4 shadow-[0_10px_20px_rgba(22,36,90,0.06)] ${it.accent}`}
            >
              <h3 className="text-base font-bold text-[#16245A]">{it.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
