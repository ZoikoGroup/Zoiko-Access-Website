import Link from "next/link";
import { Head, Photo, dot, inner, photoBg, pic, sectionPad, sectionY } from "./shared";

const states: [string, keyof typeof dot][] = [
  ["Not started", "grey"],
  ["Submitted", "blue"],
  ["Received", "blue"],
  ["In review", "violet"],
  ["Approved by payer", "green"],
  ["Denied by payer", "red"],
];

export default function AuthorizationHandoff() {
  return (
    <section className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} grid items-center gap-10 lg:grid-cols-[566px_1fr] lg:gap-14`}>
        <div
          className={`relative h-[320px] w-full overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(36,59,115,0.08)] sm:h-[459px] ${photoBg}`}
        >
          <Photo
            src={pic("doctor-reviewing-a-request")}
            alt="Doctor with a stethoscope, arms crossed"
            sizes="(min-width: 1024px) 566px, 100vw"
          />
        </div>
        <div className="flex flex-col items-start gap-5">
          <Head
            eyebrow="Prior authorization handoff"
            title="Checking a benefit is not prior authorization."
            lead="A benefit check describes the plan. Prior authorization is a separate request, reviewed and decided by the payer."
          />
          <ul className="grid w-full gap-3 sm:grid-cols-2">
            {states.map(([label, color]) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-lg border border-solid border-[#e3e8f2] bg-white px-4 py-3 text-[14.5px] leading-6 text-[#2d3a52]"
              >
                <span aria-hidden="true" className={`size-2 shrink-0 rounded-full ${dot[color]}`} />
                {label}
              </li>
            ))}
          </ul>
          <Link
            href="/prior-authorizations"
            className="flex min-h-[50px] items-center justify-center rounded-[10px] border-2 border-solid border-[#e3e8f2] px-6 py-3 text-[15px] font-semibold text-[#243b73] transition-colors hover:border-[#c9bdfb] hover:bg-[#f5f2ff]"
          >
            Learn about prior authorizations →
          </Link>
        </div>
      </div>
    </section>
  );
}
