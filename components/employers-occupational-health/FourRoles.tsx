import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";

const roles = [
  {
    kind: "Sponsor",
    name: "Employer",
    header: "from-[#1E3A8A] to-[#3D5BD9]",
    responsible: "Funding and defining the program; administering eligibility.",
    exception: "No access to individual clinical records.",
  },
  {
    kind: "Evaluator",
    name: "Licensed occupational-health provider",
    header: "from-[#1F7A5A] to-[#2E9A75]",
    responsible:
      "Clinical evaluation, fitness-for-work and medical confidentiality.",
    exception: "No automatic access to every program participant.",
  },
  {
    kind: "Authorization",
    name: "Employee",
    header: "from-[#6A4BE0] to-[#7C5CFC]",
    responsible: "Their own choices and permissions under applicable law.",
    exception: "No access to another employee's information.",
  },
  {
    kind: "Technology",
    name: "Zoiko Access",
    header: "from-[#2B3550] to-[#46546F]",
    responsible: "Minimum operational metadata for an approved service.",
    exception: "No clinical judgment or unrestricted record access.",
  },
];

export default function FourRoles() {
  return (
    <section
      id="roles"
      className="relative w-full scroll-mt-24 overflow-hidden py-16 font-sans sm:py-20"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#3A2A9E] via-[#4B37B8] to-[#8C70EE]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#1A0B6B]"
        style={{ clipPath: "polygon(45% 0, 100% 0, 100% 15%, 62% 60%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#A98BFF]"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 50% 100%)", opacity: 0.55 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <Eyebrow tone="light">Employer vs provider responsibilities</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-white sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Four roles, clearly separated.
        </h2>

        <div className="mt-11 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <article
              key={r.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_10px_30px_0px_rgba(36,59,115,0.08)]"
            >
              <div
                className={`min-h-[102px] bg-gradient-to-r px-5 py-4 text-white ${r.header}`}
              >
                <p className="text-xs uppercase leading-4 tracking-wider opacity-80">
                  {r.kind}
                </p>
                <h3
                  className={`mt-1 text-lg font-semibold leading-6 ${headingFont}`}
                >
                  {r.name}
                </h3>
              </div>
              <div className="flex flex-col gap-3.5 px-5 pb-10 pt-4">
                <div>
                  <p
                    className={`text-xs font-bold uppercase leading-5 tracking-wide text-[#1F7A5A] ${headingFont}`}
                  >
                    Responsible for
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#2B3550]">
                    {r.responsible}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-xs font-bold uppercase leading-5 tracking-wide text-[#B42318] ${headingFont}`}
                  >
                    Exception
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#2B3550]">
                    {r.exception}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
