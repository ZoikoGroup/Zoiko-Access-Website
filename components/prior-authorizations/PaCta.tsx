import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Title, glow, photoBg } from "./ui";

export default function PaCta() {
  return (
    <section
      className="w-full overflow-hidden rounded-[28px] bg-[linear-gradient(121.46deg,#5a43c9_0%,#4267d5_100%)] lg:grid lg:h-[363.27px] lg:grid-cols-[3fr_2fr]"
    >
      <div
        className="flex w-full flex-col items-start justify-center gap-[15.1px] px-4 py-12 sm:px-6 lg:px-[60px] lg:py-0"
        style={{
          backgroundImage: `${glow("590px 469px", "100% 0")},linear-gradient(207.11deg,#0a1a4b 51.65%,#3550b8 107.31%)`,
        }}
      >
        <Title tone="light">Explore payer coordination.</Title>
        <p className="w-full max-w-[520px] text-[16px] leading-[26px] text-white/[0.88] min-[1400px]:max-w-none lg:text-[17px] lg:leading-[27.2px]">
          <Copy
            text="See how Zoiko Access is designed around clear decision ownership, sourced statuses and governed exchange."
            d={[
              "See how Zoiko Access is designed around clear decision",
              "ownership, sourced statuses and governed exchange.",
            ]}
          />
        </p>
        <div className="flex w-full flex-wrap items-center gap-[22px] pt-[14.9px]">
          <Link
            href="/payers-insurers"
            className="flex min-h-[46px] items-center justify-center rounded-[10px] border-2 border-solid border-transparent bg-white px-[22px] py-3 text-[15px] font-semibold leading-[24px] text-[#243b73]"
          >
            Explore payer coordination →
          </Link>
          <Link
            href="/payers-insurers/implementation"
            className="border-b-2 border-solid border-[#b7a6ff] py-1 text-[16px] font-semibold leading-[25.6px] text-white"
          >
            Learn about our implementation approach →
          </Link>
        </div>
      </div>

      <div
        className={`relative h-[260px] w-full overflow-hidden lg:h-[363.27px] lg:min-h-[340px] ${photoBg}`}
        role="img"
        aria-label="Two professionals shaking hands after a meeting"
      >
        <FigmaImage src="/prior-authorizations/cta-handshake.webp" sizes="(min-width: 1024px) 580px, 100vw" />
      </div>
    </section>
  );
}
