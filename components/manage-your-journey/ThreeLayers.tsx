import Eyebrow from "./Eyebrow";

const layers = [
  {
    title: "What you send",
    text: "A request or message delivered to an organization.",
    owner: "You",
  },
  {
    title: "What they decide",
    text: "Accept, hold, decline or ask for more information.",
    owner: "The organization",
  },
  {
    title: "What happens",
    text: "The visit takes place, is rescheduled or cancelled.",
    owner: "The provider",
  },
];

export default function ThreeLayers() {
  return (
    <section className="bg-gradient-to-b from-[#E4DCFF] to-[#F1EDFF] px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <Eyebrow>How the journey is organized</Eyebrow>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          Three layers, never merged.
        </h2>
        <p className="mb-10 max-w-2xl text-sm text-[#697386] md:text-base">
          What you send, what the organization decides and what actually
          happens are tracked separately.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {layers.map((l) => (
            <div
              key={l.title}
              className="relative overflow-hidden rounded-2xl bg-white p-6 pt-8 shadow-[0_6px_24px_rgba(10,37,64,0.08)]"
            >
              <span
                aria-hidden="true"
                className="absolute left-6 top-0 h-2 w-20 rounded-b-lg bg-gradient-to-r from-[#1E2A78] to-[#3B5BDB]"
              />
              <h3 className="mb-2 text-base font-bold text-[#0A2540]">{l.title}</h3>
              <p className="mb-4 text-xs leading-relaxed text-[#697386] md:text-sm">{l.text}</p>
              <p className="text-xs text-[#697386]">
                Owner: <strong className="text-[#0A2540]">{l.owner}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
