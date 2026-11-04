import { Eyebrow, IMG, heading } from "./shared";

const points = [
  "Only the minimum data a program needs.",
  "Participant-level health data stays unavailable to sponsors.",
  "Exceptions only with specific lawful authority, purpose, governance and contract.",
];

export default function SponsorPrivacy() {
  return (
    <section className="bg-[#F6F5FF] px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <img
          src={`${IMG}/privacy.webp`}
          alt="Person using a laptop and a phone at a desk"
          className="h-80 w-full rounded-3xl object-cover lg:h-[490px]"
        />

        <div>
          <Eyebrow>Privacy &amp; permissions</Eyebrow>
          <h2 className={`${heading} mb-6 text-3xl text-[#16245A] md:text-[42px] md:leading-[1.15]`}>
            Sponsors don&apos;t see participants&apos; health data.
          </h2>
          <ol className="space-y-3.5">
            {points.map((p, i) => (
              <li key={p} className="flex items-start gap-3.5 text-base leading-7 text-[#2A3550]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#EEEAFE] text-base font-bold text-[#7B5CF0]">
                  {i + 1}
                </span>
                {p}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
