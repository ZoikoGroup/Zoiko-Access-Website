import {
  ReferralsHero,
  UnderstandingRoute,
  EducationalContexts,
  WhoDoesWhat,
  ProcessSteps,
  StatusLiteracy,
  InformationPrivacy,
  LocalRules,
  DelayedOrDeclined,
  RoleExplanations,
  ReferralsFaq,
  ReferralsCta,
} from "@/components/how-referrals-work";
import { Inter, Poppins } from "next/font/google";

// The Figma design for this page uses Inter for text and Poppins for headings.
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export default function HowReferralsWorkPage() {
  return (
    <main className={`${inter.className} ${poppins.variable}`}>
      <ReferralsHero />
      <UnderstandingRoute />
      <EducationalContexts />
      <WhoDoesWhat />
      <ProcessSteps />
      <StatusLiteracy />
      <InformationPrivacy />
      <LocalRules />
      <DelayedOrDeclined />
      <RoleExplanations />
      <ReferralsFaq />
      <ReferralsCta />
    </main>
  );
}
