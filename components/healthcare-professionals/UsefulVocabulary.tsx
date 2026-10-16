import SectionHeading from "./SectionHeading";

const terms = [
  {
    title: "Scope of practice",
    description:
      "The activities a professional may undertake under relevant qualifications, rules, supervision, and setting.",
  },
  {
    title: "Referral",
    description:
      "A permitted care-related handoff or request that may need separate receipt, review, and acceptance.",
  },
  {
    title: "Care team",
    description:
      "Professionals and organizations contributing within their roles and responsibilities.",
  },
  {
    title: "Credentialing",
    description:
      "An organization-specific process governing professional participation in its setting.",
  },
  {
    title: "Network participation",
    description:
      "A relationship with a particular payer or arrangement; not implied by qualification.",
  },
  {
    title: "Follow-up",
    description:
      "A further step owned and communicated by the responsible professional or organization.",
  },
];

export default function UsefulVocabulary() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Useful vocabulary"
          title="Clear terms for informed conversations."
        />

        <dl className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {terms.map((term) => (
            <div
              key={term.title}
              className="rounded-xl border border-[#E5E7EB] bg-white px-6 pb-7 pt-6"
            >
              <dt className="text-[16px] font-bold leading-7 text-[#23327A]">
                {term.title}
              </dt>
              <dd className="mt-2 text-[13px] leading-6 text-[#5E6B85]">
                {term.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
