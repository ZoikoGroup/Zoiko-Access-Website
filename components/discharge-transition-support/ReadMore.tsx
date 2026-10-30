import Link from "next/link";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const links: {
  label: string;
  href: string;
  src: string;
  box: ImageBox;
}[] = [
  {
    label: "Hospitals & Clinics overview",
    href: "/hospitals-clinics",
    src: "read-hospitals-clinics",
    box: { top: -50, height: 200 },
  },
  {
    label: "Partners & developers",
    href: "/become-partner",
    src: "read-partners-developers",
    box: { top: -3.12, height: 106.24 },
  },
  {
    label: "Referral intake & routing",
    href: "/referral-intake-routing",
    src: "read-referral-intake",
    box: { top: -70, height: 240 },
  },
  {
    label: "Scheduling & patient access",
    href: "/scheduling-patient-access",
    src: "read-scheduling-access",
    box: { top: -14, height: 128 },
  },
];

export default function ReadMore() {
  return (
    <section
      className={`w-full bg-[linear-gradient(157.86deg,#f1eefe_10.48%,#ccc0ff_73.45%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>INSTITUTIONAL ADOPTION</Eyebrow>
        <Title>Where to read more</Title>

        <ul className="grid w-full gap-[14px] pt-[15px] sm:grid-cols-2 lg:h-[281px] lg:grid-cols-4">
          {links.map((item) => (
            <li key={item.label} className="lg:h-[266px]">
              <Link
                href={item.href}
                className="flex h-full flex-col overflow-hidden rounded-[18px] border border-solid border-[#d9d3f5] bg-white"
              >
                <span className="relative block aspect-[275.5/172.19] w-full overflow-hidden bg-[linear-gradient(135deg,#e8e2ff_0%,#d5dcff_100%)]">
                  <FigmaImage
                    src={`/discharge-transition-support/${item.src}.webp`}
                    box={item.box}
                    sizes="(min-width: 1024px) 276px, 45vw"
                  />
                </span>
                <span
                  className={`${fontPoppins} px-[14px] py-[13px] text-center text-[15px] font-semibold leading-[normal] text-[#031974]`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
