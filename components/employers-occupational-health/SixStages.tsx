import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";

const stages = [
  { title: "Assess", text: "Goals, workforce and market.", owner: "Employer + Zoiko Access" },
  { title: "Contract", text: "Terms and responsibilities.", owner: "Employer + legal" },
  { title: "Configure", text: "Program rules and eligibility.", owner: "Program admin" },
  { title: "Authorize", text: "Privacy, security and legal sign-off.", owner: "Approvers" },
  { title: "Activate", text: "Controlled launch to employees.", owner: "Program owner" },
  { title: "Review", text: "Aggregate review and changes.", owner: "Employer + provider" },
];

export default function SixStages() {
  return (
    <section
      id="program-flow"
      className="w-full scroll-mt-24 bg-white py-16 font-sans sm:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <Eyebrow>Program operations flow</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Six stages, each with an owner.
        </h2>
        <p className="mt-4 inline-block rounded-full bg-[#FFF1D6] px-3 py-1.5 text-xs font-medium text-[#7A4B00]">
          ILLUSTRATIVE — CONFIGURATION-DEPENDENT, NO TIMELINE IMPLIED
        </p>

        <ol className="relative mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <span
            className="absolute left-[8.33%] right-[8.33%] top-[30px] hidden h-[3px] bg-gradient-to-r from-[#7C5CFC] to-[#3D5BD9] lg:block"
            aria-hidden="true"
          />
          {stages.map((s, i) => (
            <li key={s.title} className="relative flex flex-col items-center text-center">
              <span className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#7C5CFC] text-[22px] font-semibold text-white">
                {i + 1}
              </span>
              <h3 className={`mt-4 text-lg font-semibold text-[#16245A] ${headingFont}`}>
                {s.title}
              </h3>
              <p className="mt-1 max-w-[190px] text-sm leading-[21px] text-[#5B6478]">
                {s.text}
              </p>
              <span className="mt-2 rounded-full bg-[#E8EEFC] px-2.5 py-1 text-xs font-semibold text-[#16245A]">
                {s.owner}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
