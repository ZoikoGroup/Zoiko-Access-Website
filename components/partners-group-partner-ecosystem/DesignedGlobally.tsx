import { Accent, Eyebrow, IMG, container, heading, section } from "./shared";

export default function DesignedGlobally() {
  return (
    <section
      className={`bg-[#F1F0FD] bg-cover bg-center ${section}`}
      style={{ backgroundImage: `url(${IMG}/bg-market.webp)` }}
    >
      <div className={container}>
        <Eyebrow purple>Market &amp; capability status</Eyebrow>
        <h2 className={`${heading} text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
          Designed globally. <Accent>Activated locally.</Accent>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <article className="rounded-3xl bg-gradient-to-br from-[#1E2A6E] to-[#4A3BC4] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C9D3F5]">Global architecture</p>
            <h3 className={`${heading} mt-3 text-xl`}>What the platform is designed for</h3>
            <p className="mt-2 text-base leading-7 text-[#D7DEF5]">
              A shared design that can, in principle, support many markets, organisations and roles.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6">
              <li>Common partner principles</li>
              <li>Standards-oriented connections</li>
              <li>One responsibility model</li>
            </ul>
          </article>

          <article className="rounded-3xl border-2 border-dashed border-[#C9BEF8] bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7B5CF0]">Current activation</p>
            <h3 className={`${heading} mt-3 text-xl text-[#16245A]`}>What is live, where</h3>
            <p className="mt-2 text-base leading-7 text-[#2A3550]">
              Shown only with evidence for each market, organisation, service, role and release.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-[#2A3550]">
              <li>Approved market applicability</li>
              <li>Source and review date</li>
              <li>Missing evidence = not shown</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
