import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  ContactSupportHero,
  ChooseYourIssueGrid,
  MostAnswersHereSection,
  SupportRequestPreviewSection,
  CaseLifecycleTimeline,
  SupportThatProtectsSection,
  SupportQuestionsFaq,
  FindRightPageRoutes,
  FastestHelpCtaBanner,
} from "@/components/resources-contact-support";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Contact Support | Resources | Zoiko Access",
  description:
    "Find guidance for Zoiko Access account, accessibility and service-navigation questions. Staffed assistance appears only where an approved support channel is available.",
};

export default function ResourcesContactSupportPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <ContactSupportHero />
      <ChooseYourIssueGrid />
      <MostAnswersHereSection />
      <SupportRequestPreviewSection />
      <CaseLifecycleTimeline />
      <SupportThatProtectsSection />
      <SupportQuestionsFaq />
      <FindRightPageRoutes />
      <FastestHelpCtaBanner />
    </main>
  );
}
