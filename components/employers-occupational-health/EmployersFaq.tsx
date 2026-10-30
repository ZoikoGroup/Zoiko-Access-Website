import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";

const faqs = [
  {
    q: "What is Zoiko Access for employers?",
    a: "This page explains potential workplace program coordination and employee access pathways, subject to authorized deployment.",
  },
  {
    q: "Can employers see an employee's medical record?",
    a: "Employer sponsorship alone does not authorize access to individual clinical records. Any limited disclosures must follow applicable law and authorization.",
  },
  {
    q: "Does Zoiko Access provide occupational-health diagnoses?",
    a: "Clinical evaluation and diagnosis remain the responsibility of appropriately qualified healthcare professionals.",
  },
  {
    q: "Can every employer enroll?",
    a: "Program and geographic availability depend on verified contracts, partners, legal authority and activation.",
  },
  {
    q: "What information may employers receive?",
    a: "Only reporting permitted by the applicable program and law, with privacy safeguards; do not assume person-level medical details.",
  },
  {
    q: "What if an employee needs help?",
    a: "Use the relevant approved patient, provider or accessibility support route; do not disclose sensitive details through a general employer inquiry.",
  },
  {
    q: "Does an employer program guarantee healthcare coverage?",
    a: "No. Coverage, eligibility and service terms must be verified through their authoritative programs.",
  },
  {
    q: "Can teams see statistics on program outcomes?",
    a: "Only lawful, approved, suitably aggregated measures with clear methodology and safeguards may be provided.",
  },
];

export default function EmployersFaq() {
  return (
    <section className="w-full bg-white py-16 font-sans sm:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <Eyebrow>Questions, answered</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          For employers, employees and procurement.
        </h2>

        <dl className="mt-11 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-[#E5E8F0] border-l-4 border-l-[#7C5CFC] bg-white px-6 py-6"
            >
              <dt className={`text-base font-semibold text-[#16245A] ${headingFont}`}>
                {f.q}
              </dt>
              <dd className="mt-2 text-[15px] leading-6 text-[#5B6478]">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
