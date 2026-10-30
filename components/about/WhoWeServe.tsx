import {
  Heart,
  ShieldCheck,
  Plus,
  Building2,
  Microscope,
  Pill,
  FileText,
  Briefcase,
  Home,
  Code2,
} from "lucide-react";

const audiences = [
  {
    icon: Heart,
    title: "Patients",
    description:
      "Discover services, understand options and follow supported care-related next steps.",
  },
  {
    icon: ShieldCheck,
    title: "Families, guardians and caregivers",
    description:
      "Assist people through appropriate verified permissions and relationship-specific rules.",
  },
  {
    icon: Plus,
    title: "Doctors, specialists and allied clinicians",
    description:
      "Coordinate authorized administrative and clinical handoffs while retaining professional judgment.",
  },
  {
    icon: Building2,
    title: "Hospitals, clinics and care networks",
    description:
      "Support patient access, referrals, scheduling interfaces and operational follow-up.",
  },
  {
    icon: Microscope,
    title: "Laboratories, imaging and diagnostic providers",
    description:
      "Connect orders and status information through approved, accountable pathways.",
  },
  {
    icon: Pill,
    title: "Pharmacies and medicine supply partners",
    description:
      "Support authorized medicine-related discovery and fulfillment pathways under local rules.",
  },
  {
    icon: FileText,
    title: "Insurers, payers and administrators",
    description:
      "Support approved eligibility, benefits, authorization and payment-related coordination.",
  },
  {
    icon: Briefcase,
    title: "Employers and organizational sponsors",
    description:
      "Help eligible populations access approved services without creating an employer view of individual medical records.",
  },
  {
    icon: Home,
    title: "Home care, community services and public institutions",
    description:
      "Coordinate permitted transitions, support and programs with the applicable safeguards.",
  },
  {
    icon: Code2,
    title: "Technology partners and developers",
    description:
      "Build or connect qualified tools through governed APIs, standards and certification pathways when offered.",
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            Who we serve
          </p>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            Designed around an entire ecosystem.
          </h2>

          <p className="mt-4 text-[16px] text-[#4B5563] sm:text-[17px]">
            Patients come first. Every participant has a distinct role,
            responsibility, and permission boundary.
          </p>
        </div>

        {/* Grid of Audience Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {audiences.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(118,87,232,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEEAFE] text-[#6547BF]">
                  <IconComponent className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-[18px] font-bold tracking-[-0.02em] text-[#23327A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.6] text-[#4B5563]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
