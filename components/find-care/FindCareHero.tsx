import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import { fontPoppins } from "./fonts";

const paragraph =
  "Healthcare-service search is not currently shown for your selected care location. You can learn how the service is designed to work and explore care navigation resources. A locally approved directory needs current, source-attributed provider records and separate authorization before it can be offered.";

export default function FindCareHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[image:radial-gradient(ellipse_138.5%_28.9%_at_85%_20%,rgba(228,218,255,1)_0%,rgba(228,218,255,0)_100%),linear-gradient(180deg,#ffffff_0%,#f4f1ff_100%)] px-[19.5px] pb-[56px] pt-[36px] lg:flex lg:min-h-[670px] lg:flex-col lg:justify-center lg:bg-[image:radial-gradient(ellipse_37.5%_41.25%_at_85%_20%,rgba(228,218,255,1)_0%,rgba(228,218,255,0)_100%),linear-gradient(180deg,#ffffff_0%,#f4f1ff_100%)] lg:px-[70px] lg:pb-[96px] lg:pt-[64px]">
      <Image
        src="/find-care/hero-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none -z-10 hidden select-none object-cover lg:block"
      />

      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-[30px] lg:max-w-[1300px] lg:flex-row lg:items-start lg:justify-between lg:gap-x-[44px] lg:gap-y-0 min-[1400px]:h-[417px]">
        <div className="flex w-full flex-col items-start gap-[14px] pb-[12.16px] lg:w-auto lg:min-w-0 lg:shrink lg:basis-[659px] lg:pb-[12.15px] min-[1400px]:h-[416px]">
          <nav aria-label="Breadcrumb" className="w-full lg:hidden">
            <p className="text-[13.6px] font-normal leading-[22.44px] text-[#5e5a86]">
              <Link href="/" className="text-[#5b49c8] underline">
                Home
              </Link>
              {" / "}
              <Link href="/explore-care" className="text-[#5b49c8] underline">
                Explore Care
              </Link>
              {" / Find care"}
            </p>
          </nav>

          <Eyebrow className="pt-[12px]">Explore Care / Find services</Eyebrow>

          <h1
            className={`${fontPoppins} w-full text-[33.6px] font-bold leading-[38.64px] tracking-[-0.672px] text-[#241c59] lg:h-[129px] lg:text-[56px] lg:leading-[64.4px] lg:tracking-[-1.12px]`}
          >
            Learn how to{" "}
            <span className="text-[#8e7bef] lg:text-[#241c59]">find care</span>
            <br className="hidden lg:block" />{" "}
            <span className="lg:text-[#4267d5]">with Zoiko Access.</span>
          </h1>

          <p className="w-full max-w-[754.74px] pt-[4.47px] text-[17.6px] font-normal leading-[29px] text-[#5e5a86] lg:pt-[16.8px]">
            <Copy
              text={paragraph}
              d={[
                "Healthcare-service search is not currently shown for your selected",
                "care location. You can learn how the service is designed to work and",
                "explore care navigation resources. A locally approved directory needs",
                "current, source-attributed provider records and separate authorization",
                "before it can be offered.",
              ]}
              m={[
                "Healthcare-service search is not currently",
                "shown for your selected care location.",
                "You can learn how the service is",
                "designed to work and explore care",
                "navigation resources. A locally approved",
                "directory needs current, source-attributed",
                "provider records and separate",
                "authorization before it can be offered.",
              ]}
            />
          </p>

          <div className="flex w-full flex-col items-start gap-[12px] pt-[7.99px] lg:h-[56px] lg:flex-row lg:flex-wrap lg:pt-[8px]">
            <Link
              href="/how-it-works"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[12px] border-2 border-solid border-[#4267d5] bg-[#4267d5] px-[18px] py-[12px] text-center text-[16px] font-semibold leading-[normal] text-white lg:w-auto lg:self-stretch lg:px-[24px] lg:py-0"
            >
              How Zoiko Access works
            </Link>
            <Link
              href="#care-location"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[12px] border-2 border-solid border-[#4267d5] bg-white px-[18px] py-[12px] text-center text-[16px] font-semibold leading-[normal] text-[#4267d5] lg:w-auto lg:self-stretch lg:px-[24px] lg:py-0"
            >
              Review location context
            </Link>
          </div>

          <p className="w-full max-w-[521.48px] pt-[2.83px] text-[12.2px] font-normal leading-[20.67px] text-[#5e5a86] lg:hidden">
            <Copy
              text="Informational fallback · No live search, directory listings, or booking"
              m={[
                "Informational fallback · No live search, directory listings, or",
                "booking",
              ]}
            />
          </p>
        </div>

        <figure className="m-0 flex w-full max-w-[780px] flex-col items-start gap-[12px] rounded-[22px] border border-solid border-[#e3def8] bg-white p-[12px] lg:hidden">
          <div className="relative aspect-[325/216.66] w-full max-w-[560px] overflow-hidden rounded-[13px]">
            <Image
              src="/find-care/hero-mobile.webp"
              alt="Conceptual service-navigation path between information and independent care organizations"
              fill
              sizes="(min-width: 640px) 560px, 90vw"
              className="object-cover"
            />
          </div>
          <figcaption className="flex w-full flex-col items-center">
            <span className="text-center text-[10.4px] font-normal leading-[17.16px] text-[#5e5a86] min-[385px]:whitespace-nowrap">
              Editorial wayfinding illustration · Not a provider map or live
              results
            </span>
          </figcaption>
        </figure>

        <div className="relative hidden aspect-[556/417.979] min-w-0 shrink basis-[556px] overflow-hidden rounded-tl-[150px] lg:block">
          <Image
            src="/find-care/hero.webp"
            alt="A woman using a healthcare information kiosk in a bright hospital lobby"
            fill
            sizes="(min-width: 1440px) 556px, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
