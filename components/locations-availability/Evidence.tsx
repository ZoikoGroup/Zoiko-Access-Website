import { ArrowLeftRight, Clock, Database, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Database,
    title: "Responsible source",
    description: "Who published the information and why it can be relied on.",
  },
  {
    icon: Layers,
    title: "Scope",
    description: "What the information covers, and what it does not.",
  },
  {
    icon: Clock,
    title: "Last verified",
    description: "Shown per claim. Expired claims are withdrawn.",
  },
  {
    icon: ArrowLeftRight,
    title: "Change history",
    description: "Material changes are shown when published.",
  },
];

export default function Evidence() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,580fr)_minmax(0,556fr)] lg:gap-x-[100px] lg:px-[75px]">
        <div>
          <SectionHeading
            badge="Evidence"
            title={
              <>
                How we keep location
                <br className="hidden sm:block" /> information accountable
              </>
            }
            description="Where location information is published, we identify the responsible source, the scope of the information and when it was most recently verified. We show uncertainty or temporarily unavailable information rather than present it as confirmed."
          />

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E6E3F5] bg-white px-6 pb-8 pt-6 shadow-[0_2px_6px_rgba(36,28,89,0.05),0_12px_32px_rgba(36,28,89,0.10)]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEEAFE] text-[#4F3FC8]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-[16px] font-bold leading-5 text-[#211A5A] [font-family:var(--font-sora)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-[25px] text-[#615D7E]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <svg
          viewBox="0 0 556 497"
          className="mx-auto w-full max-w-[556px]"
          role="img"
          aria-label="Illustration of a verified record showing responsible source, scope of information and last verified date"
        >
          <defs>
            <linearGradient id="la-evidence-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#EEEAFE" />
              <stop offset="1" stopColor="#CFC2FB" />
            </linearGradient>
            <linearGradient id="la-evidence-shield" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8B7CF0" />
              <stop offset="1" stopColor="#5A44D2" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="556" height="497" rx="70" fill="url(#la-evidence-bg)" />
          <circle cx="503" cy="91" r="10" fill="#A592F5" />
          <circle cx="36" cy="445" r="8" fill="#8B7CF0" />

          <rect x="66" y="73" width="368" height="353" rx="20" fill="#FFFFFF" />
          <rect x="98" y="110" width="196" height="16" rx="8" fill="#211A5A" />
          <rect x="98" y="143" width="311" height="8" rx="4" fill="#CFC6F6" />
          {["Responsible source", "Scope of information", "Last verified"].map(
            (label, i) => {
              const y = 200 + i * 55;
              return (
                <g key={label}>
                  <circle cx="114" cy={y} r="14" fill="none" stroke="#5A44D2" strokeWidth="2.5" />
                  <path
                    d={`M107 ${y}l5 5 9-9`}
                    fill="none"
                    stroke="#5A44D2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <text x="140" y={y + 5} fontSize="16" fontWeight="700" fill="#211A5A" style={{ fontFamily: "var(--font-sora)" }}>
                    {label}
                  </text>
                </g>
              );
            },
          )}
          <rect x="98" y="356" width="314" height="44" rx="10" fill="#F2EFFE" />
          <text x="255" y="383" fontSize="14.5" fill="#615D7E" textAnchor="middle">
            Unconfirmed is shown as unconfirmed
          </text>

          <circle cx="468" cy="271" r="82" fill="#FFFFFF" />
          <path
            d="M468 207l53 20v45c0 37-23 58-53 71-30-13-53-34-53-71v-45z"
            fill="url(#la-evidence-shield)"
          />
          <path d="M444 271l16 16 31-33" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
