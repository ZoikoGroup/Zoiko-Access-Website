import {
  ClinicalCoordinationHero,
  WrittenForWholeCareTeam,
  ClinicalCoordinationTopics,
  WorkflowMatrix,
  StatusVocabulary,
  GuardrailsSection,
  CoordinationBoundaries,
  LocalAvailability,
  EducationalScenarios,
  TrustBoundaries,
  CliniciansFaq,
  YourNextStep,
} from "@/components/clinical-coordination";

export default function ClinicalCoordinationPage() {
  return (
    <main>
      <ClinicalCoordinationHero />
      <WrittenForWholeCareTeam />
      <ClinicalCoordinationTopics />
      <WorkflowMatrix />
      <StatusVocabulary />
      <GuardrailsSection />
      <CoordinationBoundaries />
      <LocalAvailability />
      <EducationalScenarios />
      <TrustBoundaries />
      <CliniciansFaq />
      <YourNextStep />
    </main>
  );
}
