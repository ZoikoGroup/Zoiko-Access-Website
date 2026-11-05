import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  BecomePartnerHero,
  ThreeCollaborationKinds,
  PartnerRouteSelector,
  ReadinessFactorsReview,
  EightConceptualStages,
  GovernanceDuties,
  IntegrationCapabilityBoundaries,
  PartnerEnquiryFormSection,
  WhyWeAskAndNeverAsk,
  SubmissionStatesSection,
  ReceivedNotApprovedSection,
  PartnerFaqSection,
  ReadWhileIntakeClosed,
  PartnerReadyToExploreCta,
} from "@/components/partners-become-a-partner";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Become a Partner | Partners & Developers | Zoiko Access",
  description:
    "Explore potential partnership opportunities with Zoiko Access. Learn how technology vendors, systems integrators, and ecosystem collaborators work together.",
};

export default function PartnersBecomeAPartnerPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <BecomePartnerHero />
      <ThreeCollaborationKinds />
      <PartnerRouteSelector />
      <ReadinessFactorsReview />
      <EightConceptualStages />
      <GovernanceDuties />
      <IntegrationCapabilityBoundaries />
      <PartnerEnquiryFormSection />
      <WhyWeAskAndNeverAsk />
      <SubmissionStatesSection />
      <ReceivedNotApprovedSection />
      <PartnerFaqSection />
      <ReadWhileIntakeClosed />
      <PartnerReadyToExploreCta />
    </main>
  );
}
