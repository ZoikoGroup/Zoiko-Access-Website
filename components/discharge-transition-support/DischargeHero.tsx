import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, inner, sectionPad } from "./ui";

export default function DischargeHero() {
  return (
    <section
      className={`relative isolate w-full overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f1eefe_100%)] py-12 lg:h-[681px] lg:py-0 ${sectionPad}`}
    >
      <div
        className="pointer-events-none absolute left-[-148px] top-[-142px] -z-10 hidden h-[887px] w-[1774px] lg:block"
        aria-hidden="true"
      >
        <FigmaImage
          src="/discharge-transition-support/hero-bg.webp"
          sizes="1774px"
          priority
        />
      </div>
      <div
        className="pointer-events-none absolute left-[455px] top-[-227px] -z-10 hidden h-[1130px] w-[1324px] items-center justify-center lg:flex"
        aria-hidden="true"
      >
        <div className="relative h-[960.9px] w-[1192.5px] shrink-0 rotate-[-8.69deg]">
          <Image
            src="/discharge-transition-support/hero-curve.svg"
            alt=""
            fill
            sizes="1193px"
            className="object-fill"
          />
        </div>
      </div>

      <div
        className={`${inner} flex flex-col items-start gap-10 lg:h-full lg:flex-row lg:gap-0`}
      >
        <div className="flex w-full flex-col items-start gap-[14px] lg:w-[700px] lg:shrink-0 lg:pt-[69px]">
          <Eyebrow>HOSPITALS &amp; CLINICS / CARE OPERATIONS</Eyebrow>

          <h1
            className={`${fontPoppins} w-full bg-gradient-to-r from-[#031974] to-[#6043e8] bg-clip-text text-[40px] font-bold leading-[46px] tracking-[-1px] text-transparent lg:text-[64px] lg:leading-[64px] lg:tracking-[-1.36px]`}
          >
            <Copy
              text="Make the next step after discharge clearer."
              d={["Make the next step", "after discharge", "clearer."]}
            />
          </h1>

          <p className="w-full max-w-[602px] pt-[4px] text-[16px] font-normal leading-[27px] text-[#273444] lg:text-[18px] lg:leading-[29.7px]">
            A transition from hospital to another care setting can involve
            several independent teams and systems. Zoiko Access is designed to
            support clearer, authorized coordination of handoffs and next-step
            ownership where participating services and local approvals are in
            place. Clinical decisions and acceptance of care remain with the
            responsible professionals and organizations.
          </p>

          <div className="flex w-full flex-wrap items-start gap-[12px] pt-[8px]">
            <Link
              href="#transition-process"
              className={`${fontPoppins} flex min-h-[48px] items-center rounded-[20px] border-2 border-solid border-transparent bg-[#6043e8] px-[24px] pb-[10.38px] pt-[8.62px] text-[15px] font-semibold leading-[24.75px] text-white`}
            >
              Understand the&nbsp; process
            </Link>
            <Link
              href="/hospitals-clinics"
              className={`${fontPoppins} flex min-h-[48px] items-center rounded-[20px] border border-solid border-[#031974] bg-white px-[24px] pb-[10.38px] pt-[8.62px] text-[15px] font-semibold leading-[24.75px] text-[#031974]`}
            >
              Explore hospital and clinic solutions
            </Link>
          </div>
        </div>

        <div
          className="relative h-[320px] w-full overflow-hidden rounded-t-[36px] lg:mt-[37px] lg:h-[519px] lg:w-[602px] lg:shrink-0"
          role="img"
          aria-label="A care team member talking with a patient in a hospital room"
        >
          <div className="absolute inset-x-0 top-[41px] h-[521px] overflow-hidden rounded-b-[20px] rounded-tr-[20px] rounded-tl-[150px] max-lg:top-0 max-lg:h-full">
            <FigmaImage
              src="/discharge-transition-support/hero-care-team.webp"
              box={{ left: -19.48, width: 129.82 }}
              sizes="(min-width: 1024px) 780px, 90vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
