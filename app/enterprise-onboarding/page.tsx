import type { Metadata } from "next";
import {
  OnboardingHero,
  InstitutionConcerns,
  OrganizationTypes,
  SixGates,
  CapabilityStates,
  OperationalScope,
  RolesResponsibilities,
  ReadinessChecklist,
  ContractBoundary,
  InstitutionalInquiries,
  OnboardingFaq,
  RelatedPathways,
} from "@/components/enterprise-onboarding";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/enterprise-onboarding/fonts";

export const metadata: Metadata = {
  title: "Enterprise Onboarding | Zoiko Access",
  description:
    "Understand the assessments, agreements, technical preparation, clinical safeguards and operational readiness that may be required before a hospital or clinic network can use Zoiko Access coordination services.",
};

export default function EnterpriseOnboardingPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <OnboardingHero />
      <InstitutionConcerns />
      <OrganizationTypes />
      <SixGates />
      <CapabilityStates />
      <OperationalScope />
      <RolesResponsibilities />
      <ReadinessChecklist />
      <ContractBoundary />
      <InstitutionalInquiries />
      <OnboardingFaq />
      <RelatedPathways />
    </main>
  );
}
