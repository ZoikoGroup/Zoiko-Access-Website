import {
  HealthcareNavigationHero,
  InformationVsAssessment,
  InformationPathwaySelector,
  CareJourneyStages,
  TypesOfCare,
  StatusTaxonomyGrid,
  PermissionsAndAvailability,
  SafetyBoundaries,
  QuickAnswersFAQ,
  FurtherResourcesGrid,
  RightAnswerCTA,
} from "@/components/navigation-guide";

export default function NavigationGuidePage() {
  return (
    <main>
      <HealthcareNavigationHero />
      <InformationVsAssessment />
      <InformationPathwaySelector />
      <CareJourneyStages />
      <TypesOfCare />
      <StatusTaxonomyGrid />
      <PermissionsAndAvailability />
      <SafetyBoundaries />
      <QuickAnswersFAQ />
      <FurtherResourcesGrid />
      <RightAnswerCTA />
    </main>
  );
}
