import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  ResearchHero,
  ResearchAudiences,
  Principles,
  CollaborationLifecycle,
  DataBoundaries,
  EthicsSafeguarding,
  InstitutionalRoles,
  ConsentPermissions,
  SecurityInteroperability,
  EvaluationPathway,
  UseCasePatterns,
  ResearchFaq,
  TrustNextStep,
} from "@/components/research-institutions";

export const metadata: Metadata = {
  title: "Research Institutions | Zoiko Access",
  description:
    "The principles and governance that should guide healthcare research collaboration. Any operational data access requires separate, verified authorization.",
};

export default function ResearchInstitutionsPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <ResearchHero />
      <ResearchAudiences />
      <Principles />
      <CollaborationLifecycle />
      <DataBoundaries />
      <EthicsSafeguarding />
      <InstitutionalRoles />
      <ConsentPermissions />
      <SecurityInteroperability />
      <EvaluationPathway />
      <UseCasePatterns />
      <ResearchFaq />
      <TrustNextStep />
    </main>
  );
}
