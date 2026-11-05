import { Eyebrow, IMG, heading } from "./shared";

const items = [
  { title: "Lawful basis", text: "A documented legal reason to process the data." },
  { title: "Individual authorization", text: "The person's permission, where the law requires it." },
  { title: "Identity & role", text: "Who is asking, and what their role allows." },
  { title: "Regional data rules", text: "Where data may be stored and processed." },
  { title: "Controller arrangements", text: "Who is responsible for the data, in writing." },
];

export default function PrivacyBoundaries() {
  return (
    <section id="privacy" className="relative scroll-mt-24 overflow-hidden bg-[#16245A] px-6 py-20 text-white lg:px-16">
      <img src={`${IMG}/privacy-bg.webp`} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-[#1B2466]/75" />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <Eyebrow light>Privacy, legal &amp; regional boundaries</Eyebrow>
        <h2 className={`${heading} mb-3 max-w-[720px] text-3xl md:text-[44px] md:leading-[1.15]`}>
          Lawful purpose and least privilege, every time.
        </h2>
        <p className="mb-10 max-w-[620px] text-base leading-7 text-white/80">
          Each item below needs review for each integration and each region. None is settled by this
          page.
        </p>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <li key={it.title} className="flex flex-col rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className={`${heading} mb-2 text-lg`}>{it.title}</h3>
              <p className="mb-3 text-sm leading-6 text-white/75">{it.text}</p>
              <p className="mt-auto text-xs font-bold uppercase tracking-wide text-[#6EE7B7]">Review required</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
