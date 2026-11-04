import Link from "next/link";
import { Eyebrow, heading } from "./shared";

const items = [
  { title: "Lawful basis", text: "Established for each purpose." },
  { title: "Minimum necessary", text: "Only the data the purpose needs." },
  { title: "Retention", text: "Kept only as long as required." },
  { title: "Consent, where applicable", text: "Never conflated with marketing opt-ins." },
  { title: "Role authorization", text: "Access by verified role." },
  { title: "Logging", text: "Every access attributable." },
];

export default function DataPrivacy() {
  return (
    <section className="bg-gradient-to-r from-[#111A4A] to-[#2337A6] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow light>Data, privacy &amp; consent</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl md:text-4xl`}>Least privilege, lawful authority.</h2>
        <p className="mb-8 max-w-[740px] text-base leading-7 text-white/80">
          Consent doesn&apos;t replace every legal basis — local counsel and data custodians decide
          what applies.{" "}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white">
            Privacy policy
          </Link>
        </p>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <li key={it.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
              {/* Hexagon number badge */}
              <span
                className={`${heading} mb-4 flex h-12 w-14 items-center justify-center bg-gradient-to-br from-[#7B5CF0] to-[#5B5FD6] text-base [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]`}
              >
                {i + 1}
              </span>
              <h3 className={`${heading} mb-1 text-lg`}>{it.title}</h3>
              <p className="text-sm leading-6 text-white/75">{it.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
