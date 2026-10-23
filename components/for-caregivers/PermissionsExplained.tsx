import Image from "next/image";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Request",
    description: "A request is made. It is not yet permission.",
  },
  {
    title: "Verify identity and relationship",
    description: "The responsible organization checks who is asking.",
  },
  {
    title: "Evaluate legal and patient authority",
    description:
      "Consent or legal evidence is reviewed for this person and task.",
  },
  {
    title: "Grant limited access",
    description: "Access is limited by purpose, action, record and time.",
  },
  {
    title: "Recheck each action",
    description: "Authority is checked again for every action.",
  },
  {
    title: "Change, revoke or expire",
    description: "Permissions can be changed, expire or be revoked.",
  },
];

export default function PermissionsExplained() {
  return (
    <section
      id="permissions"
      className="w-full scroll-mt-24 bg-gradient-to-b from-[#E8E2FE] to-[#DCD2FD] py-[100px]"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Permissions explained"
          title={
            <>
              Six steps. Clear
              <br className="hidden sm:block" /> responsibilities.
            </>
          }
          description="This is an illustration of how a permission works. It does not mean approval is instant, and it is not a live process."
        />

        <div className="mt-8 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[minmax(0,617fr)_minmax(0,607fr)] lg:gap-x-[76px]">
          <ol className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-[#E4E0F7] bg-white px-6 pb-6 pt-4 shadow-[0_8px_24px_rgba(36,28,89,0.06)]"
              >
                <h3 className="text-[17px] font-semibold leading-7 text-[#1D1857] [font-family:var(--font-poppins)]">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-5 text-[#5B5880]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          {/* Stretches to the full height of the step list on large screens */}
          <div className="relative aspect-[607/681] w-full overflow-hidden rounded-2xl bg-white lg:aspect-auto lg:h-full">
            <Image
              src="/for-caregivers/permissions.webp"
              alt="Person reviewing a checklist of permission checks: identity, verification, review, time limits, renewal and revocation"
              fill
              sizes="(min-width: 1024px) 607px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
