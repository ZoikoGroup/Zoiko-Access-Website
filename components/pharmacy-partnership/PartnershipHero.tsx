import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, photoBg, sectionPad } from "./ui";

const mosaic: {
  src: string;
  alt: string;
  size: string;
  box: ImageBox;
}[] = [
  {
    src: "hero-pharmacist",
    alt: "A black and white skyline of tall city towers",
    size: "lg:h-[426px] lg:w-[376px]",
    box: { left: -22.85, width: 145.71 },
  },
  {
    src: "hero-pharmacy-team",
    alt: "A desk with a keyboard, mouse, glasses and notebooks seen from above",
    size: "lg:h-[480px] lg:w-[360px]",
    box: { left: -35.71, width: 171.43 },
  },
  {
    src: "hero-storefront",
    alt: "A waving flag against a blue sky",
    size: "lg:h-[427px] lg:w-[376px]",
    box: { left: -22.86, width: 145.71 },
  },
];

export default function PartnershipHero() {
  return (
    <section
      id="top"
      className={`relative isolate w-full overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6f3fe_100%)] pt-12 lg:h-[1068px] lg:pt-[63px] ${sectionPad}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[656px]" aria-hidden="true">
        <Image
          src="/pharmacy-partnership/hero-background.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-[655px] -z-10 hidden h-[656px] -scale-y-100 lg:block"
        aria-hidden="true"
      >
        <Image
          src="/pharmacy-partnership/hero-background.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center gap-[15.4px] lg:px-6">
        <Eyebrow center className="pt-[10px] lg:h-[43.19px] lg:pt-[21px]">
          Pharmacy partnerships
        </Eyebrow>

        <h1
          className={`${fontPoppins} w-full text-center text-[40px] font-bold leading-[48px] tracking-[-0.8px] text-[#fefeff] lg:text-[64px] lg:leading-[73px] lg:tracking-[-1.088px]`}
        >
          <Copy
            text="Explore pharmacy partnership opportunities with"
            d={["Explore pharmacy", "partnership opportunities", "with"]}
          />{" "}
          <span className="text-[#dd94ff]">Zoiko Access</span>
        </h1>

        <p className="w-full max-w-[666px] pt-[4.6px] text-center text-[16px] font-normal leading-[26.4px] text-[#fff7e6]">
          <Copy
            text="Zoiko Access is designed to support permissioned pharmacy discovery, coordination and governed connectivity where local rules and verified partners allow. Participation is subject to assessment and does not confirm partnership, eligibility, supply or approval. Pharmacies remain responsible for their licensed services and professional decisions."
            d={[
              "Zoiko Access is designed to support permissioned pharmacy discovery, coordination",
              "and governed connectivity where local rules and verified partners allow. Participation is",
              "subject to assessment and does not confirm partnership, eligibility, supply or approval.",
              "Pharmacies remain responsible for their licensed services and professional decisions.",
            ]}
          />
        </p>

        <div className="flex w-full flex-wrap justify-center gap-[12px] pb-[6.6px] pt-[8.6px]">
          <Link
            href="#assessment-process"
            className={`${fontPoppins} flex items-center rounded-[8px] border border-solid border-transparent bg-[#7657e8] px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-white`}
          >
            Learn about our participation approach
          </Link>
          <Link
            href="#proposition"
            className={`${fontPoppins} flex items-center rounded-[8px] border border-solid border-[#dcd6f2] bg-white px-[22px] py-[12px] text-center text-[15.2px] font-semibold leading-[25px] text-[#243b73]`}
          >
            How participation works
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 items-end gap-4 pt-[32.6px] sm:grid-cols-3 lg:flex lg:h-[506px] lg:w-[1206px] lg:max-w-none lg:justify-between lg:gap-0">
          {mosaic.map((item) => (
            <div
              key={item.src}
              className={`relative h-[320px] w-full overflow-hidden rounded-t-[22px] ${photoBg} ${item.size}`}
              role="img"
              aria-label={item.alt}
            >
              <FigmaImage
                src={`/pharmacy-partnership/${item.src}.webp`}
                box={item.box}
                sizes="(min-width: 1024px) 376px, 90vw"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
