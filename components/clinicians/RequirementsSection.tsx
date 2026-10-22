import Image from "next/image";
import {
  FileText,
  KeyRound,
  MapPin,
  ShieldCheck,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";

interface Requirement {
  title: string;
  description: string;
  icon: LucideIcon;
}

const requirements: readonly Requirement[] = [
  {
    title: "Professional qualification",
    description: "Issued and recognized under local rules.",
    icon: User,
  },
  {
    title: "Identity",
    description: "Matched to the qualification through an approved service.",
    icon: KeyRound,
  },
  {
    title: "Good standing",
    description: "Checked at the source, and rechecked over time.",
    icon: ShieldCheck,
  },
  {
    title: "Organization affiliation",
    description: "Where the role needs one.",
    icon: Users,
  },
  {
    title: "Service scope",
    description: "Only the services approved for your location.",
    icon: FileText,
  },
  {
    title: "Local conditions",
    description: "Rules that vary by country and operational readiness.",
    icon: MapPin,
  },
] as const;

export function RequirementsSection() {
  return (
    <section
      id="req"
      className="bg-gradient-to-r from-[#f1eefe] to-[#d7cdfc] px-5 py-12 sm:px-10 lg:px-[70px] lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader
          eyebrow="PARTICIPATION REQUIREMENTS"
          title="What participation typically involves"
          lead="A general overview. It does not replace decisions by regulators or professional bodies."
          titleSize="lg"
        />

        <div className="mt-[13px] grid items-start gap-9 pb-[9px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="relative aspect-[1580/1612] w-full">
            <Image
              src="/prof/pf.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 527px, 100vw"
              className="object-cover"
            />
          </div>

          <ul className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
            {requirements.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="flex flex-col gap-[10px] rounded-[18px] border border-solid border-[#d9d3f5] bg-white p-[18px]"
              >
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[#f1eefe]">
                  <Icon
                    aria-hidden="true"
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#7b3ff2]"
                  />
                </span>
                <h3 className="pb-[0.55px] pt-[3.5px] font-['Poppins',sans-serif] text-[17px] font-semibold leading-[19.55px] tracking-[-0.34px] text-[#031974]">
                  {title}
                </h3>
                <p className="font-['Inter',sans-serif] text-[14.5px] leading-[23.93px] text-[#273444]">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
