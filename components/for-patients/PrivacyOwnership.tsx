import SectionHeading from "./SectionHeading";

const owners = [
  {
    title: "Zoiko Access coordination",
    description:
      "Designed to support authorized navigation and administrative coordination, not to replace a provider’s clinical decisions.",
  },
  {
    title: "Healthcare professional / organization",
    description:
      "Retains responsibility for its clinical assessment, treatment, interpretation, and decisions.",
  },
  {
    title: "Source systems and records",
    description:
      "Relevant records remain with their responsible sources and applicable regional safeguards.",
  },
  {
    title: "Patient and delegate permissions",
    description:
      "Access depends on identity, role, purpose, legal authority, and the service-specific process.",
  },
];

export default function PrivacyOwnership() {
  return (
    <section id="privacy" className="w-full scroll-mt-24 bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Privacy, data & clinical ownership"
          title={
            <>
              The right information.
              <br />
              The appropriate responsible source.
            </>
          }
        />

        <div className="mt-9 grid grid-cols-1 gap-[22px] md:grid-cols-2">
          {owners.map((owner) => (
            <div
              key={owner.title}
              className="rounded-xl border border-[#E5E7EB] bg-white px-7 pb-8 pt-7"
            >
              <h3 className="text-[20px] font-bold leading-7 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)]">
                {owner.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-[#5E6B85]">
                {owner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
