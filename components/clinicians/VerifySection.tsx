import { SectionHeader } from "./ui/SectionHeader";

interface Gate {
  title: string;
  description: string;
}

const gates: readonly Gate[] = [
  {
    title: "Identity",
    description: "Who you are, matched through an approved service.",
  },
  {
    title: "Credential",
    description: "Your professional qualification and standing at the source.",
  },
  {
    title: "Affiliation",
    description: "The organization you act for, if any.",
  },
  {
    title: "Privilege",
    description: "What you are permitted to do, set separately.",
  },
  {
    title: "Role",
    description: "The role assigned inside the organization’s workflow.",
  },
] as const;

export function VerifySection() {
  return (
    <section
      id="verify"
      className="bg-gradient-to-br from-[#f1eefe] to-[#d7cdfc] px-5 py-12 sm:px-10 lg:px-[70px] lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader
          eyebrow="VERIFICATION AND GOVERNANCE"
          title="Five separate gates"
          lead="Each gate is checked on its own. Passing one never grants the next. Verification is also not clinical privileging or authority to practice."
        />

        <ol className="mt-[13px] flex flex-col gap-2 pt-[27px]">
          {gates.map((gate, index) => (
            <li
              key={gate.title}
              className="flex items-center gap-[18px] rounded-[20px] bg-white px-5 py-[19px] shadow-[0px_6px_20px_0px_rgba(47,66,203,0.12)] sm:px-[25px]"
            >
              <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#02125f_0%,#2f42cb_55%,#7b3ff2_100%)] font-['Poppins',sans-serif] text-[16px] font-semibold text-white">
                {index + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-['Poppins',sans-serif] text-[16px] font-semibold leading-[21.69px] tracking-[-0.32px] text-[#031974]">
                  {gate.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-[14.5px] leading-[24px] text-[#273444] sm:text-[16px] sm:leading-[27px]">
                  {gate.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
