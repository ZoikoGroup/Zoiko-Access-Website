import type { Metadata } from "next";
import {
  PstHero,
  RightPlace,
  Topics,
  Steps,
  Responsibility,
  InquiryForm,
  PstFaq,
  PstCta,
} from "@/components/payer-solutions-team";
import { inter, poppins, sora, fontInter } from "@/components/payer-solutions-team/fonts";

export const metadata: Metadata = {
  title: "Talk to Our Payer Solutions Team | Zoiko Access",
  description:
    "Health plans, insurers and benefit administrators evaluating payer-related coordination can learn about Zoiko Access's proposed approach and request a business conversation.",
};

export default function PayerSolutionsTeamPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}>
      <PstHero />
      <RightPlace />
      <Topics />
      <Steps />
      <Responsibility />
      <InquiryForm />
      <PstFaq />
      <PstCta />
    </main>
  );
}
