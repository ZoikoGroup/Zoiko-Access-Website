import Link from "next/link";
import { Eyebrow, Title, darkBg, glow, sectionPad } from "./shared";

export default function PigCta() {
  return (
    <section
      className={`w-full py-16 lg:py-[110px] ${sectionPad}`}
      style={{ backgroundImage: `${glow("1000px 600px", "5% 18%")},${darkBg}` }}
    >
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-4 text-center">
        <Eyebrow tone="light">Enterprise evaluation</Eyebrow>
        <Title tone="light">Evaluate an integration with clear authority.</Title>
        <div className="flex flex-col gap-1">
          <p className="text-[16px] leading-7 text-white/[0.88]">
            Start with the implementation approach, then explore each payer topic.
          </p>
          <p className="text-[13px] leading-5 text-white/80">
            Direct contact through the{" "}
            <Link href="/payer-solutions-team" className="underline">
              payer solutions team
            </Link>{" "}
            appears only once a staffed, approved intake is live.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/implementation-approach"
            className="flex min-h-[50px] items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[15px] font-semibold text-[#243b73] transition-colors hover:bg-[#eee9fd]"
          >
            Review the implementation approach →
          </Link>
          <Link
            href="/payers-insurers"
            className="flex min-h-[50px] items-center justify-center rounded-[10px] border-2 border-solid border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Payer overview
          </Link>
        </div>
      </div>
    </section>
  );
}
