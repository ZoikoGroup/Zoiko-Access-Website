import { EmptyBox, Eyebrow, IMG, heading } from "./shared";

const approvals = [
  "Commercial & legal",
  "Security",
  "Privacy",
  "Accessibility (non-waivable)",
  "Partner agreements",
  "Clinical ownership",
  "QA evidence",
  "Rollback & decommission plan",
];

export default function LaunchAssurance() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <img
          src={`${IMG}/launch-assurance.webp`}
          alt="Team reviewing a readiness checklist beside laptops"
          className="h-80 w-full rounded-3xl object-cover shadow-[0_20px_50px_rgba(22,36,90,0.25)] lg:h-[434px]"
        />

        <div>
          <Eyebrow>Launch &amp; operating assurance</Eyebrow>
          <h2 className={`${heading} mb-5 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
            Release is gated on named approvals.
          </h2>

          <ul className="mb-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {approvals.map((a) => (
              <li
                key={a}
                className="flex items-center gap-3 rounded-xl border border-[#E4E7F2] bg-white px-4 py-3 text-sm text-[#2A3550] shadow-[0_4px_10px_rgba(22,36,90,0.05)]"
              >
                <EmptyBox className="border-[#9AA3BD]" />
                <span>
                  {a}
                  <span className="sr-only"> — not approved</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="rounded-xl bg-[#EEEAFE] px-4 py-3.5 text-sm leading-6 text-[#4B3FC4]">
            Shown unchecked on purpose — nothing here is approved. Each item needs a named approver
            and current test evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
