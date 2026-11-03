import { Eyebrow, heading } from "./shared";

const steps = [
  { title: "Discover information", owner: "Individual + NGO", text: "Find trusted public information.", ring: "border-[#9AA3BD]" },
  { title: "Assess a legitimate path", owner: "NGO", text: "Identify an appropriate, permitted route.", ring: "border-[#3B5BDB]" },
  { title: "Authorize sharing", owner: "Individual", text: "Consent or verified authority first.", ring: "border-[#3B5BDB]" },
  { title: "Hand off", owner: "NGO", text: "Send only what is needed.", ring: "border-[#7B5CF0]", note: "Sent isn't accepted" },
  { title: "Recipient acknowledges", owner: "Provider", text: "The receiving provider responds.", ring: "border-[#3B5BDB]" },
  { title: "Next step", owner: "Provider + individual", text: "A named owner for follow-up.", ring: "border-[#1E8A5A] bg-[#E3F5EC]" },
];

export default function NavigationJourney() {
  return (
    <section id="navigation-journey" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Navigation journey</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Six steps from information to next step.
        </h2>
        <p className="mb-10 text-base text-[#5B6B8C]">
          Conceptual — no workflow is shown as deployed.
        </p>

        <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          {/* Connecting line on wide screens */}
          <span
            aria-hidden="true"
            className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-1 rounded-sm bg-gradient-to-r from-[#9AA3BD] via-[#3B5BDB] via-60% to-[#1E8A5A] lg:block"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center px-2.5 text-center">
              <span
                className={`${heading} mb-2.5 flex h-14 w-14 items-center justify-center rounded-full border-4 bg-white text-base text-[#2E2A8C] ${s.ring}`}
              >
                {i + 1}
              </span>
              <h3 className={`${heading} mb-1 text-base text-[#16245A]`}>{s.title}</h3>
              <span className="mb-1.5 rounded-full bg-[#EAF0FB] px-2.5 py-1 text-xs font-semibold text-[#2E2A8C]">
                {s.owner}
              </span>
              <p className="text-sm leading-5 text-[#5B6B8C]">{s.text}</p>
              {s.note && <p className="mt-1 text-xs text-[#A32020]">{s.note}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
