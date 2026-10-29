import type { Metadata } from "next";
import {
  CaHero,
  Vocabulary,
  Journey,
  DecisionTable,
  BenefitsVerification,
  AuthorizationHandoff,
  PrivacyBoundaries,
  Corrections,
  Related,
  CaCta,
} from "@/components/coverage-access";
import { PstFaq } from "@/components/payer-solutions-team";
import { inter, poppins, sora, fontInter } from "@/components/coverage-access/shared";

export const metadata: Metadata = {
  title: "Coverage & Access | Zoiko Access",
  description:
    "Coverage, eligibility, benefits and authorization are separate questions answered by different organizations. Learn who decides each one and why every answer depends on its source, date and scope.",
};

const faqs = [
  {
    q: "Can I check my coverage on this page?",
    a: "No. This page is informational. Contact your plan or use its authorized services.",
  },
  {
    q: "Does being eligible mean a service is covered?",
    a: "No. Eligibility confirms enrollment in a plan on a date. Whether a service is covered depends on the plan's terms, network and any authorization rules.",
  },
  {
    q: "Does my location decide my coverage?",
    a: "No. Coverage is set by your plan, not by where you are. Location is never used to infer eligibility.",
  },
  {
    q: "Who decides prior authorization?",
    a: "The payer or its delegated reviewer. A submitted or received request is not an approval.",
  },
  {
    q: "Can a payer see my medical records?",
    a: "Not by default. Any access depends on identity, role, lawful purpose and applicable agreements — funding a plan never grants access to clinical records.",
  },
  {
    q: "What if the information looks wrong?",
    a: "Check its source and date, then contact the responsible organization and use its correction or appeal process.",
  },
];

export default function CoverageAccessPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}>
      <CaHero />
      <Vocabulary />
      <Journey />
      <DecisionTable />
      <BenefitsVerification />
      <AuthorizationHandoff />
      <PrivacyBoundaries />
      <Corrections />
      <PstFaq
        eyebrow="Direct answers"
        title="Know before you rely on a coverage indication."
        items={faqs}
        initiallyOpen="first"
      />
      <Related />
      <CaCta />
    </main>
  );
}
