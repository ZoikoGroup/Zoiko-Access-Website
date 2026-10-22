import {
  ClinicalResponsibilityHero,
  CoordinationClinicalJudgment,
  WhoIsResponsible,
  UnderstandHandoffStatus,
  ClinicalStepCards,
  SafetyPrivacyLimits,
  ExploreClinicianCoordination,
  ClinicalFaqWithSideCard,
  DiscussClinicalCoordinationCta,
} from "@/components/clinical-responsibility";

export default function ClinicalResponsibilitiesPage() {
  return (
    <main>
      <ClinicalResponsibilityHero />
      <CoordinationClinicalJudgment />
      <WhoIsResponsible />
      <UnderstandHandoffStatus />
      <ClinicalStepCards />
      <SafetyPrivacyLimits />
      <ExploreClinicianCoordination />
      <ClinicalFaqWithSideCard />
      <DiscussClinicalCoordinationCta />
    </main>
  );
}
