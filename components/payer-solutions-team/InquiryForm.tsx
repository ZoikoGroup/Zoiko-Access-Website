"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { fontPoppins } from "./fonts";
import { Head, Photo, card, img, inner, photoBg, sectionPad, sectionY } from "./ui";

const MAX = 600;

const markets = ["United States", "United Kingdom", "Canada", "European Union", "India", "Other"];
const orgTypes = [
  "Health plan or insurer",
  "Third-party administrator",
  "Benefits administrator",
  "Other authorized benefits organization",
];
const topics = [
  "Eligibility & benefits",
  "Prior authorizations",
  "Claims & remittance",
  "Member access",
  "Integration & governance",
  "Other institutional evaluation",
];

const field =
  "h-[46px] w-full rounded-[10px] border border-solid border-[#cfd6e4] bg-white px-4 text-[15px] text-[#16245a] placeholder:text-[#8a94a6] focus:border-[#7657e8] focus:outline-none focus:ring-2 focus:ring-[#7657e8]/20";

function Field({ id, label, children, optional = false }: { id: string; label: string; children: ReactNode; optional?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[14px] font-semibold leading-5 text-[#16245a]">
        {label}{" "}
        {optional ? (
          <span className="font-normal text-[#5b6678]">(optional)</span>
        ) : (
          <span aria-hidden="true" className="text-[#b42318]">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function Select({ id, placeholder, options }: { id: string; placeholder: string; options: string[] }) {
  return (
    <select id={id} name={id} required defaultValue="" className={`${field} cursor-pointer`}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

export default function InquiryForm() {
  const [context, setContext] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className={`w-full scroll-mt-24 bg-[#f3f3f4] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} grid items-start gap-10 lg:grid-cols-[1fr_654px] lg:gap-14`}>
        <div className="flex flex-col gap-6">
          <Head
            eyebrow="Institutional inquiry"
            title="Tell us about your organization."
            lead="A short, business-only inquiry. A submitted inquiry is not a partnership, onboarding approval, integration authorization or contract."
          />
          <div className={card}>
            <div className={`relative h-[280px] w-full sm:h-[381px] ${photoBg}`}>
              <Photo src={img("professional-at-work")} alt="Smiling professional" sizes="(min-width: 1024px) 590px, 100vw" />
            </div>
            <div className="flex flex-col gap-3 p-6">
              <h3 className={`${fontPoppins} text-[18px] font-semibold leading-6 text-[#16245a]`}>
                What happens after you submit?
              </h3>
              <p className="text-[15px] leading-6 text-[#5b6678]">
                If the inquiry program is live in your market, you&apos;ll see a receipt from the contact system. A
                receipt doesn&apos;t confirm a team member has reviewed it, and no reply time is promised.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className={`${card} flex flex-col gap-5 p-6 sm:p-8`}>
          <p className="rounded-[10px] bg-[#eee9fd] px-[14px] py-3 text-[14px] leading-[23px] text-[#3b2f8f]">
            Business details only. Don&apos;t include patient names, dates of birth, medical records, policy IDs, claim
            numbers or attachments.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="org" label="Organization name">
              <input id="org" name="org" required autoComplete="organization" className={field} />
            </Field>
            <Field id="role" label="Role / title">
              <input id="role" name="role" required autoComplete="organization-title" className={field} />
            </Field>
            <Field id="email" label="Business email">
              <input id="email" name="email" type="email" required autoComplete="email" className={field} />
            </Field>
            <Field id="market" label="Country / market">
              <Select id="market" placeholder="Select a market" options={markets} />
            </Field>
            <Field id="orgType" label="Organization type">
              <Select id="orgType" placeholder="Select a type" options={orgTypes} />
            </Field>
            <Field id="topic" label="Discussion topic">
              <Select id="topic" placeholder="Select a topic" options={topics} />
            </Field>
          </div>

          <Field id="context" label="Business context" optional>
            <textarea
              id="context"
              name="context"
              rows={4}
              maxLength={MAX}
              value={context}
              onChange={(e) => setContext(e.target.value)}
              aria-describedby="context-help"
              className={`${field} h-[110px] resize-y py-3`}
            />
            <span id="context-help" className="text-[12.5px] leading-5 text-[#5b6678]">
              {context.length}/{MAX} characters · no patient or policy details
            </span>
          </Field>

          <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-6 text-[#2d3a52]">
            <input type="checkbox" required className="mt-0.5 size-5 shrink-0 accent-[#7657e8]" />
            <span>
              I have read the{" "}
              <Link href="/privacy-permissions" className="text-[#4267d5] underline">
                privacy notice
              </Link>{" "}
              explaining how this inquiry is used. <span className="text-[#b42318]">*</span>
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-6 text-[#2d3a52]">
            <input type="checkbox" className="mt-0.5 size-5 shrink-0 accent-[#7657e8]" />
            <span>Optional: send me occasional updates about Zoiko Access. (Off by default.)</span>
          </label>

          <button
            type="submit"
            className="mt-1 flex min-h-[50px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#7657e8] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#6446d6]"
          >
            Submit inquiry
          </button>

          {submitted && (
            <p role="status" className="rounded-[10px] border border-solid border-[#c9bdfb] bg-[#f5f2ff] px-4 py-3 text-[14px] leading-[22px] text-[#3b2f8f]">
              The inquiry program isn&apos;t live in your market yet, so nothing was sent. Please check back later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
