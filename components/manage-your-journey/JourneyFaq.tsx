import { Plus, Minus } from "lucide-react";
import Eyebrow from "./Eyebrow";

const faqs = [
  {
    q: "Does submitting a request confirm my appointment?",
    a: "No. Only an explicit provider confirmation is a booking.",
  },
  {
    q: "What's the difference between held and confirmed?",
    a: "Held means a time is temporarily reserved. Confirmed means the provider has accepted the appointment.",
  },
  {
    q: "Why don't I see my appointments?",
    a: "The organization may not take part, the service may not be enabled in your region, or you may need to sign in.",
  },
  {
    q: "Can a caregiver manage my appointments?",
    a: "Only with verified, scoped authority that you or the law allow.",
  },
  {
    q: "Can I cancel or reschedule here?",
    a: "Only where the organization supports it. Otherwise, contact the organization directly.",
  },
  {
    q: "What if I need urgent help?",
    a: "Contact local emergency services. Zoiko Access is not an emergency service.",
  },
];

export default function JourneyFaq() {
  return (
    <section className="bg-white px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Questions, answered</Eyebrow>
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
            Understand what a status means.
          </h2>

          <div className="divide-y divide-[#E6EBF1]">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#0A2540] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus className="h-4 w-4 shrink-0 group-open:hidden" aria-hidden="true" />
                  <Minus className="hidden h-4 w-4 shrink-0 group-open:block" aria-hidden="true" />
                </summary>
                <p className="mt-2 text-xs leading-relaxed text-[#697386] md:text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <img
          src="/manage-your-journey/faq-question.webp"
          alt="Person raising a hand to ask a question"
          className="h-[420px] w-full rounded-2xl object-cover lg:h-[520px]"
        />
      </div>
    </section>
  );
}
