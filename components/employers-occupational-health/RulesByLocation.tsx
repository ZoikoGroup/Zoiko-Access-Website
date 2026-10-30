import Link from "next/link";
import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";
import PurpleBackdrop from "./PurpleBackdrop";

const rules = [
  { title: "Jurisdiction", text: "Local law decides what is allowed." },
  { title: "Contract", text: "Each program's terms define the arrangement." },
  { title: "Processing purpose", text: "Information is used only for its stated purpose." },
  { title: "Responsible party", text: "A named organization is accountable.", link: true },
];

export default function RulesByLocation() {
  return (
    <section className="relative w-full overflow-hidden py-16 font-sans sm:py-20">
      <PurpleBackdrop />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <Eyebrow tone="light">Privacy &amp; lawful basis</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-white sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          The rules depend on where you are.
        </h2>
        <p className="mt-3 text-base leading-7 text-white/85">
          Generic consent is never presented as enough for employer use in
          every country.
        </p>

        {/* 1px gaps over a lighter background act as dividers */}
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[#2F3C7A] sm:grid-cols-2 lg:grid-cols-4">
          {rules.map((r) => (
            <div key={r.title} className="bg-[#14214F] p-6">
              <h3 className={`text-base font-semibold text-white ${headingFont}`}>
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-[23px] text-white/75">
                {r.text}
                {r.link && (
                  <>
                    <br />
                    <Link
                      href="/privacy-policy"
                      className="underline underline-offset-2 hover:text-white"
                    >
                      Privacy policy
                    </Link>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
