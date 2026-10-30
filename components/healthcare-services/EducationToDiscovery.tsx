import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

export default function EducationToDiscovery() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-14 lg:px-20">
        <div className="flex flex-col items-start gap-4">
          <SectionHeading
            badge="From education to discovery"
            title={
              <>
                Understand the information.
                <br />
                Verify the local next step.
              </>
            }
          />

          <p className="pt-5 text-[16px] leading-7 text-[#5E6B85]">
            General categories explain concepts. A local directory is a
            separate capability requiring verified organizations, current
            source data, and market authorization.
          </p>
          <p className="text-[16px] leading-7 text-[#5E6B85]">
            If an appointment or other transaction is later supported, it
            requires its own identity, permissions, scheduling, partner, and
            release checks. A request is not a confirmed appointment.
          </p>

          <Link
            href="/how-it-works"
            className="inline-flex min-h-12 items-center rounded-md bg-[#4267D5] px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Learn how services are discovered →
          </Link>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
          <div className="relative aspect-[589/395] w-full">
            <Image
              src="/healthcare-services/discovery.webp"
              alt="Conceptual illustration connecting healthcare information, participants, and independent organizations"
              fill
              sizes="(min-width: 1024px) 589px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
