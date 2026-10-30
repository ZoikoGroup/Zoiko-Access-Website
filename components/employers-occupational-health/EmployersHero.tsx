import Image from "next/image";
import Link from "next/link";
import { headingFont } from "@/components/community-home-care/Eyebrow";

const scope = [
  {
    title: "Workplace program navigation",
    text: "Help employees find supported benefits",
  },
  {
    title: "Authorized eligibility",
    text: "Only through verified program rules",
  },
  {
    title: "Accountable handoff",
    text: "To qualified, licensed professionals",
  },
];

export default function EmployersHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-tr from-[#16245A] to-[#4B37B8] font-sans text-white lg:min-h-[562px]">
      <Image
        src="/employers-occupational-health/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
      />

      {/* Left-to-right overlay: #0E1646 96% → #1C286E 88% (42%) → #7657E8 35% */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0E1646]/96 via-[#1C286E]/88 via-42% to-[#7657E8]/35"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[69%] top-[202px] h-[620px] w-[620px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(183,166,255,0.45) 0%, rgba(183,166,255,0) 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 pb-32 pt-14 sm:px-10 lg:min-h-[562px] lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-16 lg:p-16 lg:pb-28">
        <div className="pt-1.5">
          <div className="flex items-center gap-2.5">
            <span className="h-0.5 w-5 bg-[#B7A6FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase leading-5 tracking-widest text-[#B7A6FF]">
              Organizations / Workplace &amp; communities
            </span>
          </div>

          <h1
            className={`mt-3 text-[40px] font-bold leading-[1.05] sm:text-6xl sm:leading-[60.48px] ${headingFont}`}
          >
            Employers &amp;
            <br />
            <span className="bg-gradient-to-r from-[#C4B5FD] to-[#A5B4FC] bg-clip-text text-transparent">
              Occupational Health
            </span>
          </h1>

          <p className="mt-5 max-w-[660px] text-base leading-7 text-white/90 sm:text-lg">
            Explore how workplace and occupational-health programs could help
            employees understand authorized access pathways while keeping
            clinical decisions and personal health information under appropriate
            professional and legal control.
          </p>

          <div className="flex flex-wrap gap-3 pt-7">
            <Link
              href="#program-considerations"
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] bg-[#7C5CFC] px-5 py-3 text-base font-semibold leading-6 text-white transition-colors hover:bg-[#6B4AEC]"
            >
              Explore program considerations →
            </Link>
            <Link
              href="#employee-permissions"
              className="inline-flex min-h-11 items-center justify-center rounded-[10px] px-5 py-3 text-base font-semibold leading-6 text-white outline -outline-offset-1 outline-white transition-colors hover:bg-white/10"
            >
              Understand privacy and permissions
            </Link>
          </div>
        </div>

        <aside className="flex flex-col gap-4 rounded-3xl bg-white/10 p-7 shadow-[0px_30px_60px_0px_rgba(5,10,40,0.35)] outline -outline-offset-1 outline-white/25 backdrop-blur-md">
          <p
            className={`text-sm font-semibold uppercase leading-6 tracking-widest text-[#B7A6FF] ${headingFont}`}
          >
            Program scope
          </p>
          <ul className="flex flex-col gap-3">
            {scope.map((s) => (
              <li key={s.title} className="flex items-start gap-3.5">
                <span
                  className="h-8 w-8 shrink-0 rounded-[10px] bg-gradient-to-br from-[#7C5CFC] to-[#4F6BE8]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-base leading-6 text-white">{s.title}</p>
                  <p className="text-xs leading-5 text-white/72">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="border-t border-white/20 pt-4 text-xs leading-5 text-white/75">
            An employer program does not grant employers general access to an
            employee&apos;s personal medical records. Eligibility, providers and
            services depend on market, contract, legal authority and launch
            status.
          </p>
        </aside>
      </div>
    </section>
  );
}
