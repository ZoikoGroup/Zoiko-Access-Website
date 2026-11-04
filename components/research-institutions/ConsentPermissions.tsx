import { Eyebrow, heading } from "./shared";

const factors = [
  { letter: "S", title: "The study", text: "What it does and which data it needs." },
  { letter: "J", title: "The jurisdiction", text: "The laws where data is held and used." },
  { letter: "R", title: "The role", text: "Who is asking, and for what purpose." },
];

export default function ConsentPermissions() {
  return (
    <section className="bg-[#F1F1F1] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Consent &amp; permissions</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Permission depends on three things.
        </h2>
        <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
          Participant permissions and the lawful basis are never one-size-fits-all.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {factors.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center rounded-3xl border border-[#E4E7F2] bg-white px-6 py-7 text-center"
            >
              {/* Decorative ring: mostly filled, with a light gap */}
              <span
                aria-hidden="true"
                className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-[conic-gradient(#7B5CF0_0_80%,#EEEAFE_80%_100%)]"
              >
                <span className={`${heading} flex h-[84px] w-[84px] items-center justify-center rounded-full bg-white text-2xl text-[#16245A]`}>
                  {f.letter}
                </span>
              </span>
              <h3 className={`${heading} mb-1 text-xl text-[#16245A]`}>{f.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
