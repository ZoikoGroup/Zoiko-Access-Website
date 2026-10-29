import type { Metadata } from "next";
import {
  EligibilityHero,
  EligibilityExplained,
  BenefitsExplained,
  CriticalDistinctions,
  HowItWorks,
  Provenance,
  Roles,
  StatusPatterns,
  Scenarios,
  Interoperability,
  ClinicalSafety,
  EligibilityFaq,
  Related,
  EligibilityCta,
} from "@/components/eligibility-benefits";
import { inter, poppins, sora, fontInter } from "@/components/eligibility-benefits/fonts";

export const metadata: Metadata = {
  title: "Eligibility & Benefits | Zoiko Access",
  description:
    "Eligibility checks and benefit information can help authorized parties understand plan-specific administrative questions. They do not guarantee coverage, clinical approval or payment.",
};

export default function EligibilityBenefitsPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}>
      <EligibilityHero />
      <EligibilityExplained />
      <BenefitsExplained />
      <CriticalDistinctions />
      <HowItWorks />
      <Provenance />
      <Roles />
      <StatusPatterns />
      <Scenarios />
      <Interoperability />
      <ClinicalSafety />
      <EligibilityFaq />
      <Related />
      <EligibilityCta />
    </main>
  );
}
