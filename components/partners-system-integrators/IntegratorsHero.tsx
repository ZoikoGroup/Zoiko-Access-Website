import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

const meta = [
  { label: "Drawing", value: "Integration plan" },
  { label: "Status", value: "Illustrative" },
  { label: "Owner", value: "Institution" },
];

// Corner brackets around the "drawing" frame.
const corner = "pointer-events-none absolute h-4 w-4 border-[#7B5CF0]";

export default function IntegratorsHero() {
  return (
    <section
      className="bg-[#F5F8FC] bg-cover bg-center px-6 py-16 lg:px-16"
      style={{ backgroundImage: `url(${IMG}/bg-hero.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#3D5BD9]">
            Partners &amp; Developers / System Integrators
          </p>
          <h1 className={`${heading} mb-6 text-4xl font-bold leading-[1.05] text-[#16245A] md:text-6xl`}>
            System integration for{" "}
            <span className="bg-gradient-to-r from-[#7B5CF0] to-[#93B4F5] bg-clip-text text-transparent">
              governed healthcare connectivity
            </span>
          </h1>
          <p className="mb-5 max-w-[600px] text-base leading-7 text-[#2A3550] md:text-lg">
            Understand how implementation teams may assess, connect, validate and maintain authorized
            healthcare workflows while institutions and licensed providers retain their own responsibilities.
          </p>
          <p className="mb-7 max-w-[560px] border-l-[3px] border-[#3D5BD9] pl-4 text-sm leading-6 text-[#5B6B8C]">
            Any project requires approved partners, lawful data permissions, market readiness and
            institution-specific technical and clinical acceptance.
          </p>
          <div className="mb-4 flex flex-wrap gap-3">
            <a
              href="#process"
              className="group flex items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#6A4BE0]"
            >
              Explore the integration process
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#roles"
              className="rounded-[10px] border-2 border-[#243B73] px-5 py-3 text-base font-semibold text-[#243B73] transition-colors hover:bg-white"
            >
              See role boundaries
            </a>
          </div>
          <p className="text-xs leading-5 text-[#5B6B8C]">
            Choosing a care location only sets context. It does not confirm any integration.
          </p>
        </div>

        <figure className="relative mt-3 border border-[#243B73] bg-white p-3.5 shadow-[12px_12px_0_0_rgba(36,59,115,0.08)]">
          <figcaption className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#F5F8FC] px-1.5 text-xs text-[#3D5BD9]">
            SCOPE ⟷ DEFINED PER PROJECT
          </figcaption>
          <span className={`${corner} -left-2 -top-2 border-l-2 border-t-2`} />
          <span className={`${corner} -right-2 -top-2 border-r-2 border-t-2`} />
          <span className={`${corner} -bottom-2 -left-2 border-b-2 border-l-2`} />
          <span className={`${corner} -bottom-2 -right-2 border-b-2 border-r-2`} />

          <img
            src={`${IMG}/hero.webp`}
            alt="Implementation team reviewing an integration plan"
            className="h-72 w-full object-cover sm:h-96 lg:h-[444px]"
          />
          <dl className="mt-3 grid grid-cols-3 border border-[#E4E7F2]">
            {meta.map((m, i) => (
              <div key={m.label} className={`px-2.5 py-2 ${i < 2 ? "border-r border-[#E4E7F2]" : ""}`}>
                <dt className="text-[9px] uppercase tracking-wide text-[#5B6B8C]">{m.label}</dt>
                <dd className="text-xs leading-5 text-[#2A3550]">{m.value}</dd>
              </div>
            ))}
          </dl>
        </figure>
      </div>
    </section>
  );
}
