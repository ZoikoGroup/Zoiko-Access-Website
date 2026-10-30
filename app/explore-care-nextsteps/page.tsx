import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  Hero,
  ChildCards,
  SelectionAid,
  RequestJourney,
  ReferralStages,
  SupportPlatform,
  StatusVocabulary,
  OwnershipPrivacy,
  FailureRecovery,
  LocationEntitlement,
  UrgentBanner,
  FaqSection,
  CtaSection,
} from "@/components/explore-care-nextsteps";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Next Steps in Care Navigation | Zoiko Access",
  description:
    "Learn what each next step means before you take it — requests, referrals, support, and status updates across authorized healthcare pathways.",
};

export default function ExploreCareNextStepsPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <Hero />
      <ChildCards />
      <SelectionAid />
      <RequestJourney />
      <ReferralStages />
      <SupportPlatform />
      <StatusVocabulary />
      <OwnershipPrivacy />
      <FailureRecovery />
      <LocationEntitlement />
      <UrgentBanner />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
