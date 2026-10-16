import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Referring professional",
    description:
      "Determines whether to initiate a referral when required and uses the permitted sending process.",
    caveat: "Does not establish receiving acceptance simply by sending.",
  },
  {
    title: "Receiving service",
    description:
      "Independently assesses its intake, suitability, clinical review, and next-step decisions.",
    caveat: "Receipt alone is not acceptance or confirmed scheduling.",
  },
  {
    title: "Patient / caregiver",
    description:
      "May need to confirm relevant information, permissions, or scheduling preferences.",
    caveat:
      "Caregivers need appropriate legal authority and supported permissions.",
  },
  {
    title: "Payer / administrator",
    description:
      "May establish applicable coverage or administrative conditions where relevant.",
    caveat: "A coverage check is not a clinical decision or guarantee of care.",
  },
];

export default function WhoDoesWhat() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Who does what"
          title={
            <>
              Independent decisions.
              <br />
              Clear responsibilities.
            </>
          }
        />

        <div className="mt-9 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {roles.map((role) => (
            <div
              key={role.title}
              className="grid grid-cols-1 gap-4 rounded-r-xl border border-l-4 border-[#E5E7EB] border-l-[#7656E8] bg-white px-7 py-7 sm:grid-cols-[minmax(0,210px)_minmax(0,1fr)] sm:gap-8"
            >
              <h3 className="max-w-[200px] text-[22px] font-bold leading-7 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)] sm:text-[24px]">
                {role.title}
              </h3>
              <div>
                <p className="border-b border-[#E5E7EB] pb-3.5 text-[14px] leading-6 text-[#5E6B85]">
                  {role.description}
                </p>
                <p className="pt-3.5 text-[12px] leading-5 text-[#5E6B85]">
                  {role.caveat}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
