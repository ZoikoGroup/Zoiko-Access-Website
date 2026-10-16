import {
  Building2,
  Briefcase,
  Code2,
  CreditCard,
  FlaskConical,
  Heart,
  Hospital,
  Pill,
  ShieldCheck,
  Stethoscope,
  User,
  BookOpen,
} from "lucide-react";

export type FooterGroup = {
  title: string;
  icon: typeof Heart;
  links: readonly string[];
};

export const FOOTER_GROUPS: readonly FooterGroup[] = [
  {
    title: "Explore Care",
    icon: Heart,
    links: [
      "How Zoiko Access works",
      "Explore healthcare services",
      "Care pathways explained",
      "Healthcare professionals",
      "Locations and availability",
    ],
  },
  {
    title: "Patients",
    icon: User,
    links: [
      "For patients",
      "Caregivers & families",
      "Privacy & permissions",
      "Health information access",
      "Accessible help",
    ],
  },
  {
    title: "Clinicians",
    icon: Stethoscope,
    links: [
      "For clinicians",
      "Referral coordination",
      "Care transitions & follow-up",
      "Tasks & worklists",
      "Results & review handoffs",
      "Clinical responsibility",
    ],
  },
  {
    title: "Hospitals & Clinics",
    icon: Building2,
    links: [
      "Hospitals & clinic networks",
      "Private practices",
      "Outpatient services",
      "Scheduling & patient access",
      "Referral intake & routing",
      "Care transitions",
      "EHR interoperability",
    ],
  },
  {
    title: "Partners & Developers",
    icon: Code2,
    links: [
      "Technology partners",
      "Health-system vendors",
      "API & interoperability",
      "SDKs, webhooks & events",
      "Integration security",
      "Certification framework",
    ],
  },
  {
    title: "Resources",
    icon: BookOpen,
    links: [
      "Help center",
      "FAQs",
      "Healthcare navigation guide",
      "Safety & emergencies",
      "Accessibility",
      "Privacy & your information",
      "News & insights",
    ],
  },
  {
    title: "Labs & Diagnostics",
    icon: FlaskConical,
    links: [
      "For laboratories",
      "Imaging & radiology",
      "Diagnostics coordination",
      "Lab & imaging integration",
      "Safety & escalation",
      "Clinical results handoffs",
    ],
  },
  {
    title: "Pharmacies",
    icon: Pill,
    links: [
      "For pharmacies",
      "Prescription routing",
      "Fulfillment & availability",
      "Medication safety & escalation",
      "API & integrations",
    ],
  },
  {
    title: "Payers & Insurers",
    icon: CreditCard,
    links: [
      "For payers & insurers",
      "Eligibility & benefits",
      "Prior authorizations",
      "Claims coordination",
      "Member access experience",
      "Payer integration",
    ],
  },
  {
    title: "Organizations",
    icon: Hospital,
    links: [
      "Employers & occupational health",
      "Community & home care",
      "Government & public health",
      "Health systems & regional networks",
      "Nonprofits & NGOs",
      "Research institutions",
    ],
  },
  {
    title: "Company",
    icon: Briefcase,
    links: [
      "Company overview",
      "Mission & approach",
      "Leadership & governance",
      "Privacy & trust center",
      "Clinical responsibility",
      "Media & press",
    ],
  },
  {
    title: "Support & Legal",
    icon: ShieldCheck,
    links: [
      "Help center",
      "Safety & emergencies",
      "Privacy policy",
      "Terms of use",
      "Cookie notice",
      "Accessibility statement",
      "Legal notices",
      "Cookie preferences",
    ],
  },
] as const;

export const FOOTER_LINK_HREFS: Readonly<Record<string, string>> = {
  "Explore healthcare services": "/healthcare-services",
  "Care pathways explained": "/care-pathways",
  "Healthcare professionals": "/healthcare-professionals",
  "Locations and availability": "/locations-availability",
};

export const OFFICES = [
  {
    label: "HEADQUARTERS",
    title: "United States",
    lines: [
      "Zoiko Access / Zoiko Healthcare",
      "Sacramento, California",
      "United States",
    ],
  },
  {
    label: "EUROPEAN HEADQUARTERS",
    title: "United Kingdom",
    lines: [
      "Zoiko Access / Zoiko Healthcare",
      "167–169 Great Portland Street, 5th Floor",
      "London W1W 5PF",
      "United Kingdom",
    ],
  },
] as const;

export const HELP_LINKS = ["Help", "Privacy", "Accessibility"] as const;

export const LEGAL_LINKS = [
  "Privacy Policy",
  "Terms of Use",
  "Cookie Notice",
  "Accessibility",
  "Legal Notices",
  "Sitemap",
  "Cookie Preferences",
] as const;

export const TAGLINE = [
  "Clearer information.",
  "Connected next steps.",
  "Responsible care coordination.",
] as const;

export const DISCLAIMERS = [
  "Healthcare advice, diagnosis, treatment, and clinical decisions remain the responsibility of appropriately authorized healthcare professionals and service providers.",
  "Applicable contracting entities, data-controller information, and jurisdiction-specific disclosures require verified local Legal Notices and Privacy Policy.",
] as const;
