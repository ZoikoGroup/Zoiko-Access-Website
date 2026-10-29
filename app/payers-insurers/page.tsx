import type { Metadata } from "next";
import {
  PayersHero,
  Accountability,
  CoordinationFlow,
  Capabilities,
  Eligibility,
  PriorAuthorizations,
  Claims,
  MemberAccess,
  Integrations,
  Readiness,
  IllustrativeCase,
  PayersFaq,
  AvailabilityTrust,
  PayersCta,
} from "@/components/payers-insurers";
import { inter, poppins, sora, fontInter } from "@/components/payers-insurers/fonts";

export const metadata: Metadata = {
  title: "Payers & Insurers | Zoiko Access",
  description:
    "Zoiko Access is designed to help authorized healthcare and benefits organizations coordinate eligibility information, administrative requests and accountable status handoffs without blurring responsibility.",
};

export default function PayersInsurersPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}>
      <PayersHero />
      <Accountability />
      <CoordinationFlow />
      <Capabilities />
      <Eligibility />
      <PriorAuthorizations />
      <Claims />
      <MemberAccess />
      <Integrations />
      <Readiness />
      <IllustrativeCase />
      <PayersFaq />
      <AvailabilityTrust />
      <PayersCta />
    </main>
  );
}
