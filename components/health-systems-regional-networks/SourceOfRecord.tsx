import { Eyebrow, IMG, heading } from "./shared";

export default function SourceOfRecord() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_50%_50%,#A78BFA_55%,#2E1065_130%)] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <img
          src={`${IMG}/source-of-record.webp`}
          alt="Server racks with network cabling"
          className="h-80 w-full rounded-[10px] object-cover shadow-[0_24px_50px_rgba(36,59,115,0.15)] lg:h-[400px]"
        />

        <div>
          <Eyebrow light>Source of record &amp; identity</Eyebrow>
          <h2 className={`${heading} mb-4 text-3xl md:text-4xl md:leading-[48px]`}>
            Every organization keeps its own record.
          </h2>
          <p className="mb-6 max-w-[620px] text-base leading-6 text-white/80">
            Each member&apos;s EHR and systems stay authoritative. When patients are matched across
            providers, safeguards apply — identities are never silently merged.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-[#1B1464] px-6 py-3 text-sm font-semibold">Independent ownership</span>
            <span className="rounded-full bg-[#EEEAFE] px-6 py-3 text-sm font-semibold text-[#5B3FD0]">
              No silent merges
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
