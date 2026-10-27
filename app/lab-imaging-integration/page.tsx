import type { Metadata } from "next";
import {
  IntegrationHero,
  ClaimBoundary,
  AudienceCards,
  ArchitectureBoxes,
  ExchangeTables,
  StatusModel,
  Prerequisites,
  SecurityPrinciples,
  FailurePatterns,
  EvaluationJourney,
  StandardsCompatibility,
  IntegrationFaq,
  IntegrationCta,
} from "@/components/lab-imaging-integration";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/lab-imaging-integration/fonts";

export const metadata: Metadata = {
  title: "Lab & Imaging Integration | Zoiko Access",
  description:
    "The architecture and safeguards for connecting laboratory and imaging information through qualified, locally authorized partners. An intended approach, not a claim of availability.",
};

export default function LabImagingIntegrationPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <IntegrationHero />
      <ClaimBoundary />
      <AudienceCards />
      <ArchitectureBoxes />
      <ExchangeTables />
      <StatusModel />
      <Prerequisites />
      <SecurityPrinciples />
      <FailurePatterns />
      <EvaluationJourney />
      <StandardsCompatibility />
      <IntegrationFaq />
      <IntegrationCta />
    </main>
  );
}
