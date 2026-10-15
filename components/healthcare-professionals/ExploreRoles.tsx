import Image from "next/image";
import SectionHeading from "./SectionHeading";

// Each option jumps to the section of this page that covers it.
const options = [
  { label: "Explore professional types", href: "#role-families" },
  { label: "Understand team-based care", href: "#team-based-care" },
  { label: "Check questions to ask", href: "#questions-to-ask" },
  { label: "Learn about next steps", href: "#next-steps" },
];

export default function ExploreRoles() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="What would you like to understand?"
          title="A clearer way to explore care roles."
        />

        <div className="mt-9 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,566fr)_minmax(0,582fr)] lg:gap-x-[132px]">
          <nav aria-label="Explore this guide" className="flex flex-col gap-2.5">
            {options.map((option) => (
              <a
                key={option.href}
                href={option.href}
                className="flex min-h-[90px] items-center justify-between rounded-[10px] border border-[#E5E7EB] bg-white px-6 text-[15px] font-semibold text-[#23327A] transition-colors hover:border-[#C9D3F2] hover:bg-[#F7F8FF]"
              >
                {option.label}
                <span aria-hidden="true">↓</span>
              </a>
            ))}
          </nav>

          <div className="relative aspect-[582/388] w-full">
            <Image
              src="/healthcare-professionals/role-types.webp"
              alt="Illustration of different healthcare professional roles using generic figures and role symbols"
              fill
              sizes="(min-width: 1024px) 582px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
