import { Eyebrow, IMG, heading } from "./shared";

const principles = [
  { title: "Purpose limitation", text: "Data used only for the approved purpose." },
  { title: "Lawful authority", text: "Verified for each exchange." },
  { title: "Role-based permissions", text: "Access by role and need." },
  { title: "Retention & access review", text: "Kept only as long as required, reviewed regularly." },
  { title: "Rights & data localization", text: "Individual rights and local data rules, where applicable." },
];

export default function LawfulByDesign() {
  return (
    <section id="lawful-use" className="scroll-mt-24 bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <img
          src={`${IMG}/lawful-by-design.webp`}
          alt="Person using a laptop and a phone at a desk"
          className="h-80 w-full rounded-3xl object-cover shadow-[0_30px_60px_rgba(22,36,90,0.18)] lg:h-[580px]"
        />

        <div>
          <Eyebrow>Privacy &amp; lawful use</Eyebrow>
          <h2 className={`${heading} mb-6 text-3xl text-[#16245A] md:text-5xl`}>Lawful by design.</h2>

          <ol className="space-y-3">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="flex items-start gap-4 rounded-2xl border border-[#E4E7F2] bg-white px-5 py-4"
              >
                <span
                  className={`${heading} flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEEAFE] text-sm text-[#7B5CF0]`}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className={`${heading} text-base text-[#16245A]`}>{p.title}</h3>
                  <p className="text-sm leading-6 text-[#5B6B8C]">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
