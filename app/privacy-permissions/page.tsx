import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  PrivacyHero,
  WhatPermissionIs,
  WhereYouAre,
  InformationKinds,
  WhoMayAccess,
  WhyInformationUsed,
  ChoiceVsPermission,
  KindsOfAuthority,
  RequestToOutcome,
  YourRights,
  PermissionLifecycle,
  DesignPrinciples,
  PrivacyFaq,
  WhereToTakeQuestions,
  WhatIsMissing,
  PrivacyCta,
} from "@/components/privacy-permissions";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Privacy & Permissions, Explained | Zoiko Access",
  description:
    "Understand how privacy choices and authorized permissions apply when navigating healthcare.",
};

export default function PrivacyPermissionsPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <PrivacyHero />
      <WhatPermissionIs />
      <WhereYouAre />
      <InformationKinds />
      <WhoMayAccess />
      <WhyInformationUsed />
      <ChoiceVsPermission />
      <KindsOfAuthority />
      <RequestToOutcome />
      <YourRights />
      <PermissionLifecycle />
      <DesignPrinciples />
      <PrivacyFaq />
      <WhereToTakeQuestions />
      <WhatIsMissing />
      <PrivacyCta />
    </main>
  );
}
