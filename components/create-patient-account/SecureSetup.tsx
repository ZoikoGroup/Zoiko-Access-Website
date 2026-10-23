"use client";

import { useId, useState } from "react";
import Link from "next/link";

const steps = ["Start", "Your details", "Verify", "Review and create", "Done"];

const options = [
  {
    value: "self",
    title: "For myself (adult)",
    text: "Create an account in my own name.",
  },
  {
    value: "other",
    title: "For someone else",
    text: "Not available here. See caregiver guidance.",
  },
];

/** A static preview of the gated sign-up flow. Nothing is collected or sent. */
export default function SecureSetup() {
  const groupId = useId();
  const [choice, setChoice] = useState("self");

  return (
    <section className="w-full bg-gradient-to-br from-[#C7B9FA] via-[#D3C8FB] to-[#E3DBFD] py-[84px]">
      <div className="mx-auto max-w-[1440px] px-6 text-center sm:px-10">
        <p className="text-[15px] font-semibold uppercase tracking-[0.04em] text-[#7C3AED]">
          The secure setup, step by step
        </p>
        <h2 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1D1857] [font-family:var(--font-poppins)] sm:text-[40px]">
          Five steps. Clear responsibilities.
        </h2>
        <p className="mt-3 text-[16px] leading-[27px] text-[#2C3352]">
          A preview of the gated flow. Nothing on this page collects or sends
          your information.
        </p>

        <ol className="mt-9 flex flex-wrap justify-center gap-2 sm:gap-5">
          {steps.map((step, index) => {
            const active = index === 0;
            return (
              <li
                key={step}
                aria-current={active ? "step" : undefined}
                className={`flex min-h-10 items-center gap-2 rounded-full border px-3.5 text-[13px] font-semibold sm:min-h-[46px] sm:gap-2.5 sm:px-5 sm:text-[15px] ${
                  active
                    ? "border-white bg-white text-[#1D1857]"
                    : "border-[#6B5FA8] text-[#1D1857]"
                }`}
              >
                <span
                  className={`flex h-[26px] w-[26px] items-center justify-center rounded-full text-[13px] ${
                    active ? "bg-[#7C3AED] text-white" : "bg-[#DDD3FB] text-[#4C3FA0]"
                  }`}
                >
                  {index + 1}
                </span>
                {step}
              </li>
            );
          })}
        </ol>

        <div className="mx-auto mt-6 max-w-[860px] rounded-[20px] bg-white px-6 pb-10 pt-6 text-left shadow-[0_20px_50px_rgba(60,40,140,0.18)] sm:px-[34px]">
          <div className="flex flex-wrap gap-2.5">
            <span className="rounded-full border border-[#E1D8FB] bg-[#F3EFFE] px-2.5 py-1 text-[12px] font-semibold text-[#7C3AED]">
              Preview only
            </span>
            <span className="rounded-full border border-[#E1D8FB] bg-[#F3EFFE] px-2.5 py-1 text-[12px] font-semibold text-[#7C3AED]">
              Server checks eligibility before this step
            </span>
          </div>

          <fieldset className="mt-5">
            <legend className="text-[22px] font-bold text-[#0E1E6E]">
              Who is this account for?
            </legend>
            <p className="mt-1.5 text-[16px] leading-[26px] text-[#2C3352]">
              Self-enrollment for adults. Other roles are routed to guidance and
              are never unlocked from here.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-[35px] sm:grid-cols-2">
              {options.map((option) => {
                const inputId = `${groupId}-${option.value}`;
                return (
                  <label
                    key={option.value}
                    htmlFor={inputId}
                    className={`flex cursor-pointer items-start gap-3.5 rounded-2xl border px-5 py-6 ${
                      choice === option.value ? "border-[#7C3AED]" : "border-[#DCD6F5]"
                    }`}
                  >
                    <input
                      id={inputId}
                      type="radio"
                      name={groupId}
                      value={option.value}
                      checked={choice === option.value}
                      onChange={() => setChoice(option.value)}
                      className="mt-1 h-[18px] w-[18px] accent-[#7C3AED]"
                    />
                    <span>
                      <span className="block text-[15px] font-semibold text-[#0E1E6E]">
                        {option.title}
                      </span>
                      <span className="mt-1 block text-[14px] text-[#2C3352]">
                        {option.text}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {choice === "other" && (
            <p className="mt-5 text-[14px] text-[#2C3352]" aria-live="polite">
              Accounts for someone else follow a separate, verified path.{" "}
              <Link href="/for-caregivers" className="font-semibold text-[#7C3AED] underline">
                Read caregiver guidance
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
