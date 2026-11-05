import { ArrowRight, FileText, KeyRound, LineChart, Lock, ShieldAlert, User } from "lucide-react";
import { Eyebrow, IMG, heading } from "./shared";

const items = [
  { title: "Authentication", text: "Every caller is identified.", Icon: User },
  { title: "Least privilege", text: "Only the scopes the purpose needs.", Icon: Lock },
  { title: "Transport security", text: "Encrypted in transit.", Icon: ArrowRight },
  { title: "Signature & verification", text: "Where applicable to the workflow.", Icon: LineChart },
  { title: "Logs", text: "Who did what, and when.", Icon: FileText },
  { title: "Key rotation", text: "Credentials changed on schedule.", Icon: KeyRound },
];

export default function SecurityChecklist() {
  return (
    <section
      id="security"
      className="scroll-mt-24 bg-cover bg-center px-6 py-16 lg:px-16"
      style={{ backgroundImage: `url(${IMG}/bg-security.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,10fr)]">
        <img
          src={`${IMG}/security.webp`}
          alt="Server racks with network cabling"
          className="h-80 w-full rounded-3xl object-cover lg:h-[510px]"
        />

        <div>
          <Eyebrow>Security &amp; reliability checklist</Eyebrow>
          <h2 className={`${heading} mb-6 text-3xl text-[#16245A] md:text-[42px] md:leading-[1.15]`}>
            Scopes, identity, audit, errors, recovery.
          </h2>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ title, text, Icon }) => (
              <li key={title} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEEAFE] text-[#7B5CF0]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className={`${heading} text-base text-[#16245A]`}>{title}</h3>
                  <p className="text-sm text-[#5B6B8C]">{text}</p>
                </div>
              </li>
            ))}
            <li className="flex items-center gap-4 rounded-2xl bg-[#16245A] px-5 py-5 text-white sm:col-span-2">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <ShieldAlert className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className={`${heading} text-base`}>Fail-safe status</h3>
                <p className="text-sm text-white/80">
                  When something fails, the status shows the failure. It never falls back to
                  &quot;success&quot;.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
