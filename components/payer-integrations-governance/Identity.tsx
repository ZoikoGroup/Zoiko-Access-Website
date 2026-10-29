import { Head, Photo, card, fontPoppins, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const controls = [
  {
    title: "Organization verification",
    text: "Each participating organization is identified and verified before any access.",
    image: pic("organizations-agreeing-a-partnership"),
    alt: "Two professionals shaking hands",
  },
  {
    title: "Role-limited access & MFA",
    text: "Access follows verified role, with multi-factor authentication where approved.",
    image: pic("digital-security-lock-concept"),
    alt: "Person using a laptop and a phone together",
  },
  {
    title: "Member & guardian authority",
    text: "Delegation is verified, revalidated, revocable and audited.",
    image: pic("member-guardian-authority"),
    alt: "Two people walking side by side outdoors",
  },
];

const rule = [
  "Identified organization",
  "Verified role",
  "Lawful purpose",
  "Patient / guardian authority where required",
  "Current partnership & capability permissions",
];

export default function Identity() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col gap-11`}>
        <Head
          eyebrow="Identity, access & delegation"
          title={
            <>
              Deny by default.
              <br />
              Allow only when every check passes.
            </>
          }
          lead="Employer sponsorship or payer membership never means unrestricted clinical-record access."
        />
        <div className="flex flex-col gap-8">
          <div className="grid gap-6 md:grid-cols-3">
            {controls.map((c) => (
              <article key={c.title} className={card}>
                <div className={`relative h-[220px] w-full lg:h-[256px] ${photoBg}`}>
                  <Photo src={c.image} alt={c.alt} sizes="(min-width: 768px) 420px, 100vw" />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className={`${fontPoppins} text-[18px] font-semibold leading-6 text-[#16245a]`}>{c.title}</h3>
                  <p className="text-[15px] leading-6 text-[#5b6678]">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="flex flex-col gap-4 rounded-2xl bg-[linear-gradient(120deg,#1c2e6b_0%,#3550b8_100%)] p-6 sm:px-8 sm:py-7">
            <h3 className={`${fontPoppins} text-[18px] font-semibold leading-6 text-white`}>Access rule</h3>
            <ul className="flex flex-wrap gap-2">
              {rule.map((r, i) => (
                <li
                  key={r}
                  className="rounded-md border border-solid border-white/25 bg-white/10 px-3 py-2 text-[14px] leading-5 text-white"
                >
                  {i > 0 && (
                    <span aria-hidden="true" className="text-[#b7a6ff]">
                      +{" "}
                    </span>
                  )}
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-[15px] leading-6 text-white/90">
              Revocation, expired delegation, role change or subject mismatch fail closed — with auditable context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
