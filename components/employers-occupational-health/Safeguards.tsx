import Image from "next/image";
import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";

const safeguards = [
  { title: "Least privilege", text: "Each role sees only what its purpose needs." },
  { title: "Encrypted exchange", text: "Information is protected in transit." },
  { title: "Logging & audit review", text: "Access is recorded and reviewed." },
  { title: "Incident response", text: "A defined route for security incidents." },
];

export default function Safeguards() {
  return (
    <section className="w-full bg-white py-16 font-sans sm:py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-14 px-6 sm:px-10 lg:grid-cols-[566px_1fr] lg:px-[72px]">
        <div className="relative aspect-[566/501] w-full overflow-hidden rounded-3xl shadow-[0px_20px_44px_0px_rgba(22,36,90,0.16)]">
          <Image
            src="/employers-occupational-health/data-security-concept.webp"
            alt="Person using a laptop and phone"
            fill
            sizes="(min-width: 1024px) 566px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <Eyebrow>Security &amp; access controls</Eyebrow>
          <h2
            className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
          >
            Proposed safeguards, by design.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#5B6478]">
            No certification, regulatory compliance or cryptographic
            specification is claimed without evidence.
          </p>

          <ol className="mt-5 space-y-3">
            {safeguards.map((s, i) => (
              <li
                key={s.title}
                className="flex items-start gap-3.5 rounded-2xl border border-[#E5E8F0] bg-white px-[18px] py-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EDE8FF] text-base font-semibold text-[#7C5CFC]">
                  {i + 1}
                </span>
                <div>
                  <h3 className={`text-base font-semibold text-[#16245A] ${headingFont}`}>
                    {s.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-[#5B6478]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
