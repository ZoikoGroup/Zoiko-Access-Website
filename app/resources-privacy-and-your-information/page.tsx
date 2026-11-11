import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  PrivacyInfoHero,
  WhatThisPageCovers,
  InformationCategoriesGrid,
  WhyInfoProcessedSection,
  WhoIsResponsibleSection,
  HealthcareRecordsSection,
  SharingServiceProviders,
  YourRegionsNotice,
  PrivacyChoicesAndRights,
  SecurityAndRetention,
  ChildrenCaregiversSection,
  PrivacyQuestionsSection,
  KeepExploringPrivacyResources,
  ClearAboutInfoCta,
} from "@/components/resources-privacy-and-your-information";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Privacy and Your Information | Resources | Zoiko Access",
  description:
    "Understand how information may be handled in the Zoiko Access experience, where applicable privacy notices live, and how to find verified privacy assistance.",
};

export default function ResourcesPrivacyAndYourInformationPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <PrivacyInfoHero />
      <WhatThisPageCovers />
      <InformationCategoriesGrid />
      <WhyInfoProcessedSection />
      <WhoIsResponsibleSection />
      <HealthcareRecordsSection />
      <SharingServiceProviders />
      <YourRegionsNotice />
      <PrivacyChoicesAndRights />
      <SecurityAndRetention />
      <ChildrenCaregiversSection />
      <PrivacyQuestionsSection />
      <KeepExploringPrivacyResources />
      <ClearAboutInfoCta />
    </main>
  );
}
