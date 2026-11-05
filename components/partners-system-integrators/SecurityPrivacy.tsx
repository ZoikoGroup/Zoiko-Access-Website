import { Eyebrow, IMG, heading } from "./shared";

const principles = [
  { title: "Legal basis", text: "A documented basis under the rules where the data is processed." },
  { title: "Specific purpose", text: "Each data flow serves one defined purpose." },
  { title: "Contracts", text: "Signed agreements set scope, duties and controller roles." },
  { title: "Minimization", text: "Only the fields that purpose needs." },
  { title: "Consent or permission", text: "Captured by the responsible organization where relevant." },
  { title: "Retention & residency", text: "How long data is kept and where it is stored." },
];

export default function SecurityPrivacy() {
  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[448px_1fr]">
        <figure className="overflow-hidden rounded-lg bg-gradient-to-b from-[#D8D4FA] to-[#C7D3F7]">
          <img
            src={`${IMG}/security.webp`}
            alt="Security review of system access on a laptop and phone"
            className="h-80 w-full object-cover lg:h-[480px]"
          />
          <figcaption className="m-4 rounded-md bg-[#2D3A6E] px-4 py-3 text-sm leading-6 text-white">
            Every integration needs a lawful basis and a specific purpose before any data moves.
          </figcaption>
        </figure>

        <div>
          <Eyebrow>Security, privacy &amp; consent</Eyebrow>
          <h2
            className={`${heading} border-b border-[#3D5BD9] pb-3 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}
          >
            Lawful purpose. Least privilege.
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className={`border-b border-[#E4E7F2] py-7 sm:pr-7 ${i % 2 === 1 ? "sm:border-l sm:pl-7" : ""}`}
              >
                <p className="text-xs text-[#3D5BD9]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`${heading} mt-1 text-lg text-[#16245A]`}>{p.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#5B6B8C]">{p.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 rounded-md bg-[#EEEAFE] px-4 py-3 text-sm text-[#16245A]">
            This page cannot grant consent or permission. There is no checkbox or approval action here.
          </p>
        </div>
      </div>
    </section>
  );
}
