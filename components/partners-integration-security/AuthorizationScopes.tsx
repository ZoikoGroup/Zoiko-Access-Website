import { IMG, SectionHeader, container, heading, section } from "./shared";

// Each filter narrows the funnel a little more (widths apply from md up).
const filters = [
  { title: "Purpose", text: "A specific, approved reason", width: "md:w-full" },
  { title: "Role", text: "What this role is allowed to do", width: "md:w-[92%]" },
  { title: "Organization", text: "The right organization", width: "md:w-[86%]" },
  { title: "Market", text: "Released in this market", width: "md:w-[80%]" },
  { title: "Data", text: "Only the permitted fields", width: "md:w-[74%]" },
];

export default function AuthorizationScopes() {
  return (
    <section
      className={`bg-[#16245A] bg-cover bg-center ${section}`}
      style={{ backgroundImage: `url(${IMG}/bg-authorization.webp)` }}
    >
      <div className={container}>
        <SectionHeader
          dark
          split
          eyebrow="Authorization & scopes"
          title="Default deny. Five filters to pass."
          intro="A request gets through only if every filter matches. Missing any one means no access."
        />

        <div className="mt-11 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,800px)_minmax(0,1fr)]">
          <ol className="flex flex-col items-center gap-2.5">
            {filters.map((f) => (
              <li
                key={f.title}
                className={`flex w-full items-center gap-4 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 ${f.width}`}
              >
                <span className={`${heading} w-28 shrink-0 text-base text-white sm:w-36`}>{f.title}</span>
                <span className="flex-1 text-sm leading-5 text-white/70">{f.text}</span>
                <span className="hidden shrink-0 text-xs text-[#7EE0C3] sm:inline">must match</span>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-[#F2B5A0] bg-[#1A2358] p-7 text-center">
            <p className={`${heading} text-4xl font-bold tracking-wide text-[#F2B5A0]`}>DENY</p>
            <p className="mt-2 pb-3 text-sm leading-6 text-white/80">The starting answer to every request.</p>
            <p className="border-t border-dashed border-white/20 pt-4 text-sm text-[#7EE0C3]">
              Access only when all five filters match.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
