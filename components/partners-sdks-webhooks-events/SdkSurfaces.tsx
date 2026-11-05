import { Code2, Crosshair, FileText, SquareTerminal, Webhook } from "lucide-react";
import { SectionHeader, container, heading, section } from "./shared";

const surfaces = [
  {
    icon: Code2,
    title: "SDK libraries",
    text: "Optional code libraries that may simplify authorized API integration.",
    needs: "Approved packages, versions and maintenance owner",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    text: "Push-style notification to an approved subscriber endpoint.",
    needs: "Live event service, signing and an incident owner",
  },
  {
    icon: Crosshair,
    title: "Events",
    text: "Defined facts about changes or workflow transitions from authoritative sources.",
    needs: "Versioned schema, entitlement and data contract",
  },
  {
    icon: SquareTerminal,
    title: "Sandbox",
    text: "Controlled environment for testing.",
    needs: "Real environment, synthetic data, access policy",
  },
  {
    icon: FileText,
    title: "Docs",
    text: "Guidance for integration and operational safeguards.",
    needs: "Published, versioned, reviewed documentation",
  },
];

export default function SdkSurfaces() {
  return (
    <section id="sdks" className={`bg-white ${section}`}>
      <div className={`${container} grid grid-cols-1 gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-20`}>
        <div>
          <SectionHeader
            eyebrow="SDK capability"
            title={
              <>
                Five developer surfaces. <br className="hidden lg:block" />
                None active yet.
              </>
            }
            intro="Languages and packages are listed only from a governed release registry. Today it has no entries."
          />
        </div>

        <div>
          <ul className="space-y-3">
            {surfaces.map((s) => (
              <li
                key={s.title}
                className="grid grid-cols-[48px_1fr] items-center gap-x-5 gap-y-3 rounded-2xl border border-[#E4E7F2] bg-white px-5 py-4 md:grid-cols-[48px_150px_minmax(0,1fr)_minmax(0,1fr)_auto]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#16245A]">
                  <s.icon className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
                <h3 className={`${heading} text-base text-[#16245A]`}>{s.title}</h3>
                <p className="col-span-2 text-sm leading-6 text-[#2A3550] md:col-span-1">{s.text}</p>
                <div className="col-span-2 md:col-span-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#7B5CF0]">Needs</p>
                  <p className="text-xs leading-5 text-[#5B6B8C]">{s.needs}</p>
                </div>
                <span className="col-span-2 w-fit rounded-full border border-dashed border-[#C9D3E5] px-2.5 py-1 text-xs text-[#9AA3BD] md:col-span-1">
                  not active
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-[#5B6B8C]">
            Release registry: no approved SDK languages or package versions.
          </p>
        </div>
      </div>
    </section>
  );
}
