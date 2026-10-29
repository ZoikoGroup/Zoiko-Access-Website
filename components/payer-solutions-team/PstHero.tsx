import Link from "next/link";
import { fontPoppins } from "./fonts";
import { Eyebrow, Photo, darkBg, glow, img, inner, photoBg, sectionPad } from "./ui";

export default function PstHero() {
  return (
    <section
      id="top"
      className={`w-full overflow-hidden py-14 lg:py-24 ${sectionPad}`}
      style={{ backgroundImage: `${glow("1100px 700px", "100% 0")},${darkBg}` }}
    >
      <div className={`${inner} grid items-center gap-10 lg:grid-cols-[1fr_486px] lg:gap-16 lg:px-10`}>
        <div className="flex flex-col items-start gap-4">
          <Eyebrow tone="light">Payer solutions</Eyebrow>
          <h1
            className={`${fontPoppins} text-[40px] font-bold leading-[44px] tracking-[-1px] text-white lg:text-[60px] lg:leading-[58px] lg:tracking-[-1.5px]`}
          >
            Talk to our <span className="text-[#7d5bff]">payer solutions team.</span>
          </h1>
          <p className="max-w-[640px] pt-2 text-[16px] leading-7 text-white/[0.88]">
            Organizations evaluating payer-related coordination can learn about Zoiko Access&apos;s proposed approach
            and, where a staffed inquiry program is available, request a conversation about their institution&apos;s
            needs.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/payers-insurers"
              className="flex min-h-[44px] items-center justify-center rounded-[10px] bg-[#7657e8] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#6446d6]"
            >
              Explore payer solutions →
            </Link>
            <Link
              href="#inquiry"
              className="flex min-h-[44px] items-center justify-center rounded-[10px] border border-solid border-white px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              See the inquiry form
            </Link>
          </div>
        </div>

        <div
          className={`relative h-[300px] w-full overflow-hidden rounded-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:h-[396px] ${photoBg}`}
        >
          <Photo
            src={img("payer-solutions-team-in-a-meeting")}
            alt="Two colleagues giving each other a high five across a meeting table"
            sizes="(min-width: 1024px) 486px, 90vw"
            priority
          />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[20px] border-[6px] border-solid border-white/[0.12]" />
        </div>
      </div>
    </section>
  );
}
