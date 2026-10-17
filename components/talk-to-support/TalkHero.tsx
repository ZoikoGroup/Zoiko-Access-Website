import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SupportRouteIllustration from "./SupportRouteIllustration";
import { fontPoppins } from "./fonts";

const paragraph =
  "Support options depend on your care location, account or organization, and the services that are currently available. Zoiko Access support is intended for product navigation and eligible administrative or technical questions. It does not replace medical advice or emergency services. Choose a topic to see general guidance.";

export default function TalkHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[image:radial-gradient(ellipse_138.5%_24.9%_at_85%_20%,rgba(228,218,255,1)_0%,rgba(228,218,255,0)_100%),linear-gradient(180deg,#ffffff_0%,#f4f1ff_100%)] px-[19.5px] pb-[56px] pt-[36px] lg:flex lg:min-h-[655px] lg:flex-col lg:justify-center lg:bg-[image:radial-gradient(ellipse_37.5%_40.9%_at_85%_20%,rgba(228,218,255,1)_0%,rgba(228,218,255,0)_100%),linear-gradient(180deg,#ffffff_0%,#f4f1ff_100%)] lg:px-[70px] lg:py-[90px]">
      <Image
        src="/talk-to-support/hero-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 hidden select-none object-cover object-bottom lg:block"
      />

      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-[30px] lg:max-w-[1300px] lg:flex-row lg:gap-x-[59px] min-[1400px]:h-[474px]">
        <div className="flex w-full flex-col items-start gap-[14px] pb-[22px] lg:min-w-0 lg:flex-1 lg:pb-[21.99px]">
          <nav aria-label="Breadcrumb" className="w-full lg:hidden">
            <p className="text-[13.6px] font-normal leading-[22.44px] text-[#5e5a86]">
              <Link href="/" className="text-[#5b49c8] underline">
                Home
              </Link>
              {" / "}
              <Link href="/explore-care" className="text-[#5b49c8] underline">
                Explore Care
              </Link>
              {" / Talk to support"}
            </p>
          </nav>

          <Eyebrow className="pt-[12px]">
            <Copy
              text="Explore Care / Next steps / Talk to support"
              m={["Explore Care / Next steps / Talk to", "support"]}
            />
          </Eyebrow>

          <h1
            className={`${fontPoppins} w-full text-[33.6px] font-bold leading-[38.64px] tracking-[-0.672px] text-[#241c59] lg:h-[128.78px] lg:text-[56px] lg:leading-[64.4px] lg:tracking-[-1.12px]`}
          >
            Get help with <br className="hidden lg:block" />
            <span className="text-[#8e7bef]">Zoiko Access</span>
          </h1>

          <p className="w-full max-w-[754.74px] pt-[4.47px] text-[17.6px] font-normal leading-[29px] text-[#5e5a86] lg:pt-0">
            <Copy
              text={paragraph}
              m={[
                "Support options depend on your care",
                "location, account or organization, and the",
                "services that are currently available.",
                "Zoiko Access support is intended for",
                "product navigation and eligible",
                "administrative or technical questions. It",
                "does not replace medical advice or",
                "emergency services. Choose a topic to",
                "see general guidance.",
              ]}
            />
          </p>

          <div className="flex w-full flex-col items-start gap-[12px] pt-[8px] lg:h-[64px] lg:flex-row lg:flex-wrap lg:py-[8px]">
            <Link
              href="#help-topics"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[12px] border-2 border-solid border-[#4267d5] bg-[#4267d5] px-[18px] py-[12px] text-center text-[16px] font-semibold leading-[normal] text-white lg:w-auto lg:self-stretch lg:px-[24px] lg:py-0"
            >
              Find help for your question
            </Link>
            <Link
              href="#care-location"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[12px] border-2 border-solid border-[#4267d5] bg-white px-[18px] py-[12px] text-center text-[16px] font-semibold leading-[normal] text-[#4267d5] lg:w-auto lg:self-stretch lg:px-[24px] lg:py-0"
            >
              Check local availability
            </Link>
          </div>

          <div className="w-full max-w-[728.17px] rounded-br-[14px] rounded-tr-[14px] border-l-4 border-solid border-[#8e7bef] bg-[#f4f2ff] px-[18px] pb-[13.7px] pt-[21.6px] lg:hidden">
            <p className="text-[15.2px] font-normal leading-[25px] text-[#5e5a86]">
              <strong className="font-bold text-[#241c59]">
                Not for urgent medical needs.
              </strong>{" "}
              <Copy
                text="Use appropriate local emergency or urgent-care services. No live contact channel is connected in this preview."
                m={[
                  "Use",
                  "appropriate local emergency or urgent-",
                  "care services. No live contact channel is",
                  "connected in this preview.",
                ]}
              />
            </p>
          </div>
        </div>

        <figure className="m-0 flex w-full max-w-[780px] flex-col items-start gap-[12.01px] rounded-[22px] border border-solid border-[#e3def8] bg-white p-[12px] lg:hidden">
          <div className="w-full max-w-[560px] overflow-clip rounded-[14px]">
            <SupportRouteIllustration />
          </div>
          <figcaption className="flex w-full flex-col items-center">
            <span className="text-center text-[10.4px] font-normal leading-[17.16px] text-[#5e5a86] min-[385px]:whitespace-nowrap">
              <Copy
                text="Task-based illustration · Not a staffed chat or support-system screen"
                m={[
                  "Task-based illustration · Not a staffed chat or support-system",
                  "screen",
                ]}
              />
            </span>
          </figcaption>
        </figure>

        <div className="relative hidden aspect-[602/454] min-w-0 shrink basis-[602px] overflow-hidden rounded-[22px] rounded-tl-[150px] border border-solid border-[#e3def8] bg-white lg:block">
          <Image
            src="/talk-to-support/hero.webp"
            alt="A support colleague guiding a person through information on a laptop"
            fill
            sizes="(min-width: 1440px) 602px, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
