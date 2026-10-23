import {
  HeroSection,
  PathwaySection,
  PreparationSection,
  RequirementsSection,
  RolesSection,
  TracksSection,
  VerifySection,
  StatusSection,
  SecuritySection,
  BoundarySection,
  FaqSection,
  ParticipationRequirementsCta,
  KeepExploringPathways,
} from "@/components/clinicians";

export default function CliniciansPage() {
  return (
    <>
      <HeroSection />
      <RolesSection />
      <RequirementsSection />
      <PathwaySection />
      <PreparationSection />
      <TracksSection />
      <VerifySection />
      <StatusSection />
      <SecuritySection />
      <BoundarySection />
      <FaqSection />
      <ParticipationRequirementsCta />
      <KeepExploringPathways />
    </>
  );
}
