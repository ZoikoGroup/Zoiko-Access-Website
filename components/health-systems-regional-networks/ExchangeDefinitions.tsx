import { Eyebrow, heading } from "./shared";

const items = [
  { title: "Authorization basis", text: "Consent or another lawful basis." },
  { title: "Purpose", text: "Why the information is needed." },
  { title: "Role", text: "Who may see it." },
  { title: "Region", text: "Which rules apply." },
  { title: "Retention", text: "How long it's kept." },
  { title: "Revocation", text: "How permission is withdrawn." },
];

export default function ExchangeDefinitions() {
  return (
    <section id="governance" className="scroll-mt-24 bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Consent, lawful access &amp; delegation</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Six things every exchange must define.
        </h2>
        <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
          There is no sponsor or network-wide implicit permission.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-[#E4E7F2] bg-white px-5 py-5 shadow-[0_6px_0_#E4E9F2]"
            >
              <h3 className={`${heading} mb-1 text-base text-[#16245A]`}>{it.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
