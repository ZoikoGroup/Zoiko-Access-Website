import Image from "next/image";
import { X } from "lucide-react";

const LIMITS = [
  "Assess symptoms or decide clinical urgency",
  "Diagnose, prescribe or provide treatment",
  "Guarantee an appointment or a local service",
  "Give access to anyone’s records without permission",
  "Replace your local emergency services",
] as const;

export default function SafetyBoundaries() {
  return (
    <section className="w-full overflow-x-hidden bg-[#F6F9FC] px-6 py-12 text-[#1f2559] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#7c5ce6]">
          <span aria-hidden="true" className="h-0.5 w-6 bg-[#7c5ce6]" />
          Safety and Boundaries
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Know the limits{" "}
          <span className="text-[#7c5ce6]">before you need them</span>
        </h2>

        <p className="mt-4 text-base leading-7 text-[#5d6683]">
          Clear boundaries keep people safe.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1fr]">
          {/* Emergency card */}
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl lg:min-h-[340px]">
            <Image
              src="/guide/19.png"
              alt="Paramedic in the back of an ambulance adjusting his collar"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#8f1d1d] via-[#8f1d1d]/70 via-40% to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Urgent or emergency?</h3>
              <p className="mt-2 max-w-[400px] text-sm leading-6 text-white/85">
                Contact local emergency services immediately. Zoiko Access does
                not triage, assess urgency or run an emergency desk.
              </p>
            </div>
          </div>

          {/* Limits card */}
          <div className="rounded-3xl border border-[#e3e8f0] bg-white p-6 sm:p-8">
            <h3 className="text-xl font-bold">What Zoiko Access does not do</h3>
            <ul className="mt-5 space-y-3">
              {LIMITS.map((limit) => (
                <li
                  key={limit}
                  className="flex items-center gap-3 rounded-lg border border-[#e3e8f0] bg-[#f8fafd] px-4 py-3 text-sm font-medium"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fde8e8] text-[#dc2626]">
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {limit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
