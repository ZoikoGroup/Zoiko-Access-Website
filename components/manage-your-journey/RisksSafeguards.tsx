import { X } from "lucide-react";
import Eyebrow from "./Eyebrow";

const notices = [
  { title: "Please sign in again", text: "Your session ended. Nothing is shown until you sign in." },
  { title: "Hold expired", text: "The held time was released. Contact the organization." },
  { title: "Service interruption", text: "The organization's system may be busy. Try again later." },
  { title: "Possible duplicate", text: "Check existing requests before sending again." },
  { title: "Access unavailable", text: "Your role or permission doesn't allow this view." },
  { title: "Status can't be confirmed", text: "Check directly with the organization." },
];

export default function RisksSafeguards() {
  return (
    <section className="bg-gradient-to-b from-[#F1EDFF] to-[#E4DCFF] px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <Eyebrow>Risks &amp; safeguards</Eyebrow>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          When something goes wrong, you&apos;ll see it.
        </h2>
        <p className="mb-10 text-sm text-[#697386] md:text-base">
          Example notices. They&apos;re neutral and never reveal whether a
          private record exists.
        </p>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {notices.map((n) => (
            <div
              key={n.title}
              className="flex items-start justify-between gap-4 rounded-xl border-l-4 border-[#6B4FD8] bg-white px-5 py-4 shadow-[0_2px_10px_rgba(10,37,64,0.05)]"
            >
              <div>
                <p className="mb-1 text-sm font-bold text-[#0A2540]">{n.title}</p>
                <p className="text-xs text-[#697386]">{n.text}</p>
              </div>
              <X className="h-4 w-4 shrink-0 text-[#B0B8C4]" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div
          role="note"
          className="rounded-xl border border-[#F5C26B] bg-[#FFF8E6] px-5 py-3 text-xs text-[#5C4400] md:text-sm"
        >
          <strong>Urgent medical need?</strong> Contact local emergency
          services. Zoiko Access is not an emergency service.
        </div>
      </div>
    </section>
  );
}
