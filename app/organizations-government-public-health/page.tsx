import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  GovHero,
  UseCases,
  OperatingModel,
  RoleMatrix,
  DataFlow,
  LawfulByDesign,
  ClinicalSeparation,
  ProgramStates,
  IntegrationExpectations,
  EvaluationPathway,
  EvidenceDocuments,
  GovFaq,
  RelatedDestinations,
  ExplorePrograms,
} from "@/components/organizations-government-public-health";

export const metadata: Metadata = {
  title: "Government & Public Health | Zoiko Access",
  description:
    "How governed care access and coordination programs may be assessed with clear responsibilities, lawful data use and accountable clinical partners.",
};

export default function GovernmentPublicHealthPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <GovHero />
      <UseCases />
      <OperatingModel />
      <RoleMatrix />
      <DataFlow />
      <LawfulByDesign />
      <ClinicalSeparation />
      <ProgramStates />
      <IntegrationExpectations />
      <EvaluationPathway />
      <EvidenceDocuments />
      <GovFaq />
      <RelatedDestinations />
      <ExplorePrograms />
    </main>
  );
}
