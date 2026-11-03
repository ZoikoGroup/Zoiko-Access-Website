import { Eyebrow, heading } from "./shared";

const faqs = [
  {
    q: "Who is eligible to take part?",
    a: "Organizations with legal authority, partner agreements and safeguards in an approved locality.",
  },
  { q: "Can an NGO see medical records?", a: "No. Clinical records stay with licensed providers." },
  { q: "Do NGOs make clinical decisions?", a: "No. Providers keep clinical responsibility." },
  { q: "Is a partnership automatic?", a: "No. It requires separate agreements and approval." },
  { q: "Who supports participants?", a: "Approved support routes only, where they exist." },
  { q: "Is this available where we work?", a: "Availability varies by approved program and locality." },
];

export default function NgoFaq() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Questions, answered</Eyebrow>
        <h2 className={`${heading} mb-10 text-3xl text-[#16245A] md:text-5xl`}>
          Direct answers for NGOs.
        </h2>

        <dl className="grid grid-cols-1 gap-x-28 gap-y-10 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className={`${heading} mb-2 text-lg text-[#16245A]`}>{f.q}</dt>
              <dd className="max-w-xl text-base leading-6 text-[#5B6B8C]">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
