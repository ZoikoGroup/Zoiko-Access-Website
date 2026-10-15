import {
  HealthcareServicesHero,
  HowToUseGuide,
  CategoryGuide,
  ThreeDifferentIdeas,
  EducationToDiscovery,
  ClinicalAuthority,
  InformationForMorePeople,
  ServicesFaq,
  ServicesNextStepCta,
  LocationActivation,
} from "@/components/healthcare-services";
import { Inter } from "next/font/google";

// The Figma design for this page is set in Inter.
const inter = Inter({ subsets: ["latin"] });

export default function HealthcareServicesPage() {
  return (
    <main className={inter.className}>
      <HealthcareServicesHero />
      <HowToUseGuide />
      <CategoryGuide />
      <ThreeDifferentIdeas />
      <EducationToDiscovery />
      <LocationActivation />
      <ClinicalAuthority />
      <InformationForMorePeople />
      <ServicesFaq />
      <ServicesNextStepCta />
    </main>
  );
}
