import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

// Layer chips placed around the rings, as % of the orbit box so it scales on small screens.
const chips = [
  { num: "04", label: "Operational oversight", pos: "left-[9%] top-[2%]" },
  { num: "03", label: "Data protection", pos: "right-[-4%] top-[14%]" },
  { num: "02", label: "Authority", pos: "left-[-2%] top-[73%]" },
  { num: "01", label: "Identity", pos: "right-[4%] top-[86%]" },
];

export default function SecurityHero() {
  return (
    <section
      className="overflow-hidden bg-[#16245A] bg-cover bg-center px-6 py-16 lg:px-16 lg:py-20"
      style={{ backgroundImage: `url(${IMG}/bg-hero.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_460px]">
        <div>
          <p className={`${heading} mb-4 flex items-center gap-2 text-xs text-[#7EE0C3]`}>
            <span className="h-2 w-2 rounded-sm bg-[#7EE0C3]" aria-hidden="true" />
            Secure connections require clear authority.
          </p>
          <h1 className={`${heading} mb-6 text-4xl font-bold leading-[1.05] text-white md:text-6xl md:leading-[61px]`}>
            Security controls for responsible{" "}
            <span className="bg-gradient-to-r from-[#7B8CFF] to-[#8EC5FF] bg-clip-text text-transparent">
              healthcare integration.
            </span>
          </h1>
          <p className="mb-7 max-w-[580px] text-base leading-7 text-white/80 md:text-lg">
            Explore the security principles that guide responsible, permissioned healthcare-system integrations,
            from identity and access scope to message integrity and audit evidence.
          </p>
          <div className="mb-5 flex flex-wrap gap-3">
            <a
              href="#architecture"
              className="group flex items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#6A4BE0]"
            >
              Review security principles
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <Link
              href="/api-interoperability"
              className="rounded-[10px] border-2 border-white px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              API &amp; interoperability overview
            </Link>
          </div>
          <p className="max-w-[560px] text-xs leading-5 text-white/55">
            Illustrative architecture. Not evidence that any API, partner, protocol or healthcare data exchange is
            live.
          </p>
        </div>

        {/* Concentric rings: one per security layer, with the person at the centre. */}
        <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
          <span className="absolute inset-0 rounded-full border border-[#B9C6F5]/35 bg-[radial-gradient(circle,rgba(74,104,216,0.08),transparent_70%)]" />
          <span className="absolute inset-[12%] rounded-full border border-[#B9C6F5]/45" />
          <span className="absolute inset-[24%] rounded-full border border-[#B9C6F5]/60" />
          <span className="absolute inset-[36%] overflow-hidden rounded-full border-2 border-[#7B5CF0] bg-gradient-to-br from-[#3D5BD9] to-[#16245A]">
            <img src={`${IMG}/hero-device.webp`} alt="" className="h-full w-full object-cover" />
          </span>
          {chips.map((c) => (
            <span
              key={c.num}
              className={`absolute ${c.pos} flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/25 bg-[#0E1640] px-3 py-1 text-xs`}
            >
              <span className="text-[#B9C6F5]">{c.num}</span>
              <span className={`${heading} text-white`}>{c.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
