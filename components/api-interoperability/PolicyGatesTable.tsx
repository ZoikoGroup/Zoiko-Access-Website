import Image from "next/image";

interface PolicyGateRow {
  gate: string;
  whatItCovers: string;
  owner: string;
  status: string;
}

const policyGatesData: PolicyGateRow[] = [
  {
    gate: "Encryption",
    whatItCovers: "Data in transit and at rest",
    owner: "per integration",
    status: "not attested",
  },
  {
    gate: "Keys",
    whatItCovers: "Who holds keys and how they rotate",
    owner: "per integration",
    status: "not attested",
  },
  {
    gate: "Audit",
    whatItCovers: "Recorded access and changes",
    owner: "per integration",
    status: "not attested",
  },
  {
    gate: "Minimization",
    whatItCovers: "Only the fields the purpose needs",
    owner: "per integration",
    status: "not attested",
  },
  {
    gate: "Retention",
    whatItCovers: "How long data is kept",
    owner: "per integration",
    status: "not attested",
  },
  {
    gate: "Incident owners",
    whatItCovers: "Named people who respond",
    owner: "per integration",
    status: "not attested",
  },
];

export default function PolicyGatesTable() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28 text-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/tech/grad.png"
          alt="Policy gates background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-white/10 px-2.5 py-1 font-mono text-[12px] font-semibold text-[#B7A6FF] backdrop-blur-md">
              // policy_gates
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
            Protect each interface and its records.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            Approved controls, not claimed ones. No security attestation is made
            on this page.
          </p>
        </div>

        {/* Table Container with Rounded Corners & Subtle Border */}
        <div className="mt-12 overflow-x-auto rounded-[24px] border border-white/15 bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-sm">
          <div className="min-w-[900px]">
            {/* Table Header with bg #6A3CF0 */}
            <div
              className="grid grid-cols-12 px-8 py-4 font-mono text-[12px] font-semibold tracking-wider text-white"
              style={{ backgroundColor: "#6A3CF0" }}
            >
              <div className="col-span-3">GATE</div>
              <div className="col-span-5">WHAT IT COVERS</div>
              <div className="col-span-2">OWNER</div>
              <div className="col-span-2 text-right">STATUS</div>
            </div>

            {/* Table Rows with transparent background */}
            <div className="divide-y divide-white/10 font-sans text-[14px]">
              {policyGatesData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 items-center px-8 py-5 bg-transparent transition-colors hover:bg-white/5"
                >
                  <div className="col-span-3 font-bold text-white">
                    {row.gate}
                  </div>
                  <div className="col-span-5 text-blue-100/90">
                    {row.whatItCovers}
                  </div>
                  <div className="col-span-2 font-mono text-[13px] text-blue-200/80">
                    {row.owner}
                  </div>
                  <div className="col-span-2 text-right font-mono text-[13px] text-amber-300/90">
                    {row.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
