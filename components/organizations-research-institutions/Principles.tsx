import { Eyebrow, IMG, heading } from "./shared";

const principles = [
  { title: "Ethics", text: "Independent ethical scrutiny where applicable." },
  { title: "Lawful use", text: "A verified legal basis for each purpose." },
  { title: "Participant protection", text: "Rights and safety come first." },
  { title: "Source stewardship", text: "Source systems stay accountable for their data." },
];

export default function Principles() {
  return (
    <section className="bg-gradient-to-r from-[#111A4A] to-[#2337A6] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,8fr)_minmax(0,5fr)]">
        <div>
          <Eyebrow light>Principles</Eyebrow>
          <h2 className={`${heading} mb-8 text-3xl md:text-4xl`}>Four principles come before any data.</h2>

          <ol className="grid grid-cols-1 gap-y-6 sm:grid-cols-2">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className={`flex flex-col gap-1.5 py-1.5 ${i % 2 === 1 ? "sm:border-l sm:border-white/25 sm:pl-7" : "sm:pr-7"}`}
              >
                <span className={`${heading} text-5xl leading-10 text-[#8B6CF5]`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`${heading} pt-1.5 text-xl`}>{p.title}</h3>
                <p className="text-base leading-6 text-white/80">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <img
          src={`${IMG}/principles.webp`}
          alt=""
          aria-hidden="true"
          className="mx-auto w-full max-w-[500px]"
        />
      </div>
    </section>
  );
}
