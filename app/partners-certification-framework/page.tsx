import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  FrameworkHero,
  AssessmentDomains,
  ReviewStages,
  EvidenceMatrix,
  InteropCriteria,
  OwnershipRoles,
  AccessBoundary,
  StatusDictionary,
  AssuranceLimits,
  ReadinessChecklist,
  RegionalGates,
  AnswerFirstFaq,
  PartnerPathway,
} from "@/components/partners-certification-framework";

export const metadata: Metadata = {
  title: "Certification Framework | Zoiko Access",
  description:
    "A proposed framework for evaluating healthcare integration: the domains, evidence categories, review stages and governance limits that may inform future integration qualification.",
};

export default function CertificationFrameworkPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <FrameworkHero />
      <AssessmentDomains />
      <ReviewStages />
      <EvidenceMatrix />
      <InteropCriteria />
      <OwnershipRoles />
      <AccessBoundary />
      <StatusDictionary />
      <AssuranceLimits />
      <ReadinessChecklist />
      <RegionalGates />
      <AnswerFirstFaq />
      <PartnerPathway />
    </main>
  );
}
