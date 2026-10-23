import Image from "next/image";
import { SectionHeader } from "./ui/SectionHeader";

interface Role {
  title: string;
  description: string;
  image: string;
}

const roles: readonly Role[] = [
  {
    title: "Doctors",
    description:
      "Physicians who may take part where local qualification supports it.",
    image: "/prof/2.jpg",
  },
  {
    title: "Specialists",
    description:
      "Specialty clinicians who receive or send coordinated requests.",
    image: "/prof/3.jpg",
  },
  {
    title: "Nurses",
    description:
      "Nursing professionals working within their scope of practice.",
    image: "/prof/4.jpg",
  },
  {
    title: "Allied professionals",
    description:
      "Allied health roles recognized by the local qualification matrix.",
    image: "/prof/5.jpg",
  },
  {
    title: "Organization administrators",
    description:
      "Authorized representatives who manage an organization’s affiliation.",
    image: "/prof/6.jpg",
  },
] as const;

export function RolesSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-10 lg:px-[70px] lg:py-[70px]">
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader
          eyebrow="WHO THIS PATHWAY IS FOR"
          title="Professional categories"
          lead="These are examples only. Which roles qualify depends on each country’s qualification matrix. There is no blanket acceptance and no universal right to practice."
        />

        <ul className="mt-10 grid grid-cols-2 items-start gap-x-[18px] gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {roles.map((role) => (
            <li key={role.title} className="flex flex-col gap-[5.4px]">
              <div className="relative aspect-[216/288] w-full overflow-hidden rounded-b-[18px] rounded-t-full border-[3px] border-solid border-white bg-gradient-to-br from-[#e8e2ff] to-[#d5dcff] shadow-[0px_12px_28px_0px_rgba(47,66,203,0.18)]">
                <Image
                  src={role.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 246px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="pb-[0.69px] pt-[7.6px] text-center font-['Poppins',sans-serif] text-[18px] font-semibold leading-[20.7px] tracking-[-0.36px] text-[#031974]">
                {role.title}
              </h3>
              <p className="px-5 text-center font-['Inter',sans-serif] text-[14.5px] leading-[23.93px] text-[#273444]">
                {role.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
