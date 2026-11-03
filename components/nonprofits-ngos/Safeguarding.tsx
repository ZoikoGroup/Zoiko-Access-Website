import { Eyebrow, heading } from "./shared";

const items = [
  {
    title: "Non-emergency boundary",
    text: "This is not an emergency service. Urgent needs go to local emergency services.",
  },
  {
    title: "Safeguarding handoffs",
    text: "Concerns follow local safeguarding procedures and responsible authorities.",
  },
  {
    title: "Referral exceptions",
    text: "When a standard referral isn't appropriate, the exception is named and escalated.",
  },
  {
    title: "Failure disclosure",
    text: "If a handoff fails, it's shown plainly — never hidden or assumed sent.",
  },
];

export default function Safeguarding() {
  return (
    <section
      id="safeguarding"
      className="scroll-mt-24 bg-gradient-to-r from-[#16245A] via-[#2D3E9E] to-[#5B45C8] px-6 py-16 text-white lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow light>Safeguarding</Eyebrow>
        <h2 className={`${heading} border-b border-white/40 pb-8 text-3xl text-[#C9D3F5] md:text-4xl`}>
          Protection comes before participation.
        </h2>

        <div className="grid grid-cols-1 gap-8 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title}>
              <h3 className={`${heading} mb-1 text-base text-[#D6DCF5]`}>{i.title}</h3>
              <p className="text-sm leading-6 text-white/80">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
