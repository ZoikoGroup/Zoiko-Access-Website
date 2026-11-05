import {
  TechnologyPartnersHero,
  TechnologyPartnerTaxonomy,
  GovernedIntegrationOutcomes,
  PartnershipStagedReview,
  IntegrationResponsibilityMap,
  StandardsInteroperabilityTable,
  SixGatesSecurity,
  DataProvenanceStatusTruth,
  MarketServiceActivation,
  QualificationExpectations,
  PartnerPathwayDoors,
  AnswerFirstFAQs,
  RelatedPartnerDestinations,
} from "@/components/technology-partners";

export default function TechnologyPartnersPage() {
  return (
    <main>
      <TechnologyPartnersHero />
      <TechnologyPartnerTaxonomy />
      <GovernedIntegrationOutcomes />
      <PartnershipStagedReview />
      <IntegrationResponsibilityMap />
      <StandardsInteroperabilityTable />
      <SixGatesSecurity />
      <DataProvenanceStatusTruth />
      <MarketServiceActivation />
      <QualificationExpectations />
      <PartnerPathwayDoors />
      <AnswerFirstFAQs />
      <RelatedPartnerDestinations />
    </main>
  );
}
