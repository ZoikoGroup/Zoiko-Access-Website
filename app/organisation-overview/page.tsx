import {
  OrganizationsHero,
  FloatingOverviewCards,
  AudiencePathways,
  ThreeThingsDesigned,
  ResponsibilityModel,
  PrivacyAndMinimumAccess,
  ResponsibleProgramSteps,
  SpecialSettingsSafeguards,
  ImplementationOverview,
  LocalRelevanceSelector,
  ExploreOrganizationsDeeper,
  OrganizationsFaqAccordion,
  ExploreImplementationCta,
} from "@/components/organisation-overview";

export default function OrganisationOverviewPage() {
  return (
    <main>
      <OrganizationsHero />
      <FloatingOverviewCards />
      <AudiencePathways />
      <ThreeThingsDesigned />
      <ResponsibilityModel />
      <PrivacyAndMinimumAccess />
      <ResponsibleProgramSteps />
      <SpecialSettingsSafeguards />
      <ImplementationOverview />
      <LocalRelevanceSelector />
      <ExploreOrganizationsDeeper />
      <OrganizationsFaqAccordion />
      <ExploreImplementationCta />
    </main>
  );
}
