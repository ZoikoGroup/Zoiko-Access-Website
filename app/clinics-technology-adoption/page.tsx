import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  TechHero,
  ControlledLabels,
  SourceArchitecture,
  DataFlow,
  InteropPrinciples,
  IdentityDimensions,
  SecurityControls,
  ReadinessMatrix,
  OnboardingPhases,
  DependencyRegister,
  InstitutionalTeamCta,
  ExceptionsRollback,
  TechFaq,
  RelatedPathways,
} from "@/components/clinics-technology-adoption";

export const metadata: Metadata = {
  title: "Technology & Adoption | Zoiko Access",
  description:
    "Explore integration principles and institution-led adoption requirements before assuming a connection is available. No EHR connection is live today.",
};

export default function ClinicsTechnologyAdoptionPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <TechHero />
      <ControlledLabels />
      <SourceArchitecture />
      <DataFlow />
      <InteropPrinciples />
      <IdentityDimensions />
      <SecurityControls />
      <ReadinessMatrix />
      <OnboardingPhases />
      <DependencyRegister />
      <InstitutionalTeamCta />
      <ExceptionsRollback />
      <TechFaq />
      <RelatedPathways />
    </main>
  );
}
