import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  ImplementationHero,
  FrameworkAudiences,
  GovernancePhases,
  ScopeDimensions,
  RaciMatrix,
  DataPrivacy,
  IntegrationEvidence,
  RiskExceptions,
  LaunchAssurance,
  IllustrativeExample,
  EvaluationNextStep,
  ImplementationFaq,
  ExplicitResponsibility,
} from "@/components/program-implementation";

export const metadata: Metadata = {
  title: "Program Implementation | Zoiko Access",
  description:
    "The responsibilities, evidence requirements and decision points that can shape a controlled healthcare access program, from assessment to operation.",
};

export default function ProgramImplementationPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <ImplementationHero />
      <FrameworkAudiences />
      <GovernancePhases />
      <ScopeDimensions />
      <RaciMatrix />
      <DataPrivacy />
      <IntegrationEvidence />
      <RiskExceptions />
      <LaunchAssurance />
      <IllustrativeExample />
      <EvaluationNextStep />
      <ImplementationFaq />
      <ExplicitResponsibility />
    </main>
  );
}
