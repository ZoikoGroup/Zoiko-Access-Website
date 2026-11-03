import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  NgoHero,
  ProgramTypes,
  OwnershipMatrix,
  NavigationJourney,
  BoundaryQuote,
  InclusiveAccess,
  Safeguarding,
  PrivacyAuthorization,
  ProgramCoverage,
  EvaluationReadiness,
  ImpactIntegrity,
  RelatedPages,
  NgoFaq,
  NextStep,
} from "@/components/nonprofits-ngos";

export const metadata: Metadata = {
  title: "Nonprofits & NGOs | Zoiko Access",
  description:
    "How nonprofit and community organizations may support permitted care navigation alongside authorized healthcare providers.",
};

export default function OrganizationsNonprofitsNgosPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <NgoHero />
      <ProgramTypes />
      <OwnershipMatrix />
      <NavigationJourney />
      <BoundaryQuote />
      <InclusiveAccess />
      <Safeguarding />
      <PrivacyAuthorization />
      <ProgramCoverage />
      <EvaluationReadiness />
      <ImpactIntegrity />
      <RelatedPages />
      <NgoFaq />
      <NextStep />
    </main>
  );
}
