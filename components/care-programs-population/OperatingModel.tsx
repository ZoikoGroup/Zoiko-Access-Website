import { Eyebrow, IMG, heading } from "./shared";

const steps = [
  "Define the mandate",
  "Verify providers",
  "Configure program rules",
  "Explain participant options",
  "Obtain permission where required",
  "Coordinate authorized next steps",
  "Review evidence",
];

export default function OperatingModel() {
  return (
    <section id="operating-model" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <Eyebrow>Program operating model</Eyebrow>
          <h2 className={`${heading} mb-5 text-3xl text-[#16245A] md:text-4xl`}>
            Seven steps to an
            <br className="hidden md:block" /> accountable program.
          </h2>
          <ol className="space-y-3.5">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-3.5 text-base text-[#2A3550]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#EEEAFE] text-base font-bold text-[#7B5CF0]">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>

        <img
          src={`${IMG}/operating-model.webp`}
          alt="Team working on laptops around a shared table"
          className="h-80 w-full rounded-3xl object-cover lg:h-[490px]"
        />
      </div>
    </section>
  );
}
