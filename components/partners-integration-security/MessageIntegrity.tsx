import { CircleCheck, Clock, Mail, Signature } from "lucide-react";
import { SectionHeader, container, heading, section } from "./shared";

const steps = [
  { icon: Mail, title: "Message", text: "Request or event created" },
  { icon: Signature, title: "Signed", text: "Sender proves origin" },
  { icon: CircleCheck, title: "Verified", text: "Receiver checks signature" },
  { icon: Clock, title: "Replay check", text: "Old or repeated messages rejected" },
];

const keySteps = ["Create", "Rotate", "Retire", "Revoke"];

export default function MessageIntegrity() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Signing & message integrity"
          title="Prove it is real. Prove it is new."
          intro="A conceptual view of how a request or event is checked before anyone trusts it."
        />

        <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,648px)_minmax(0,1fr)] lg:gap-8">
          <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.title}
                className="flex flex-col items-center rounded-2xl border border-[#E4E7F2] bg-white px-4 py-5 text-center"
              >
                <s.icon className="h-7 w-7 text-[#7B5CF0]" strokeWidth={1.75} aria-hidden="true" />
                <h3 className={`${heading} mt-3 text-base text-[#16245A]`}>{s.title}</h3>
                <p className="text-xs leading-5 text-[#5B6B8C]">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl bg-[#16245A] px-6 py-6">
            <h3 className={`${heading} text-lg text-white`}>Key lifecycle</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2.5">
              {keySteps.map((k) => (
                <li key={k} className="rounded-lg bg-white/10 px-7 py-3 text-sm text-white">
                  {k}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-white/60">
              Keys have owners and are changed on schedule or immediately after a compromise.
            </p>
          </div>
        </div>

        <p className="mt-8 text-sm text-[#5B6B8C]">
          No specific signing protocol is claimed here. Methods are agreed and reviewed per integration.
        </p>
      </div>
    </section>
  );
}
