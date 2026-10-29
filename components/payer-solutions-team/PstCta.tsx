import Link from "next/link";
import { Eyebrow, Title, darkBg, glow, sectionPad } from "./ui";

export default function PstCta() {
  return (
    <section
      className={`w-full py-16 lg:py-[110px] ${sectionPad}`}
      style={{ backgroundImage: `${glow("1000px 600px", "0% 0%")},${darkBg}` }}
    >
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
        <Eyebrow tone="light">Keep exploring</Eyebrow>
        <Title tone="light">Understand integrations before you inquire.</Title>
        <p className="text-[16px] leading-7 text-white/[0.88]">
          See how payer integrations are designed around clear authority, privacy and audit.
        </p>
        <Link
          href="/payer-integrations-governance"
          className="mt-4 flex min-h-[50px] items-center justify-center rounded-[10px] bg-white px-6 py-3 text-[15px] font-semibold text-[#243b73] transition-colors hover:bg-[#eee9fd]"
        >
          Explore payer integrations &amp; governance →
        </Link>
      </div>
    </section>
  );
}
