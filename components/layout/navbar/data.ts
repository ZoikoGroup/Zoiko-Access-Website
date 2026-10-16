import {
  AlertTriangle,
  Accessibility,
  ArrowLeftRight,
  ArrowRight,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  ClipboardList,
  Code2,
  Compass,
  Contact,
  Cpu,
  FileCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Grid3x3,
  Handshake,
  Headphones,
  Heart,
  HelpCircle,
  Home,
  Hospital,
  Info,
  KeyRound,
  Landmark,
  ListChecks,
  Lock,
  Map,
  MapPin,
  MessageCircle,
  MessageSquare,
  Network,
  Newspaper,
  Package,
  Phone,
  Pill,
  Plug,
  Receipt,
  Route,
  Scale,
  Search,
  Shield,
  Stethoscope,
  Target,
  User,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type MenuLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type MenuItem = {
  label: string;
  columns: readonly (readonly MenuLink[])[];
  cta: string;
  image: string;
  imageAlt: string;
};

const l = (label: string, icon: LucideIcon, href = "#"): MenuLink => ({
  label,
  icon,
  href,
});

export const MENU: readonly MenuItem[] = [
  {
    label: "Explore Care",
    cta: "Explore how it works",
    image: "/navbar/1.jpg",
    imageAlt: "Two women talking in a bright consultation room",
    columns: [
      [
        l("Understand your options", Info),
        l("How Zoiko Access works", BookOpen),
        l("Explore healthcare", Heart, "/healthcare-services"),
        l("Care pathways", Map, "/care-pathways"),
      ],
      [
        l("Find services", Search),
        l("Find care", Heart),
        l("Healthcare professionals", BookOpen, "/healthcare-professionals"),
        l("Locations and availability", MapPin, "/locations-availability"),
      ],
      [
        l("Next steps", ClipboardList),
        l("Book or request care", CalendarDays),
        l("How referrals work", FileText, "/how-referrals-work"),
        l("Talk to support", MessageCircle),
      ],
    ],
  },
  {
    label: "Patients",
    cta: "How patient access works",
    image: "/navbar/2.jpg",
    imageAlt: "Doctor holding a clipboard speaking with a patient",
    columns: [
      [
        l("Start here", Compass),
        l("For patients", User),
        l("For caregivers", Heart),
        l("Create a patient account", UserPlus),
      ],
      [
        l("Manage your journey", Route),
        l("Appointments & requests", CalendarDays),
        l("Referrals & next steps", ArrowRight),
        l("Messages & notifications", Bell),
      ],
      [
        l("Your information", Contact),
        l("Privacy & permissions", Lock),
        l("Health information", FileText),
        l("Accessible help", Accessibility),
      ],
    ],
  },
  {
    label: "Clinicians",
    cta: "Explore clinicians",
    image: "/navbar/3.jpg",
    imageAlt: "Two colleagues talking in a clinic waiting area",
    columns: [
      [
        l("Clinical coordination", Network),
        l("For clinicians", Stethoscope),
        l("Referral coordination", ArrowRight),
        l("Care transitions", ArrowLeftRight),
      ],
      [
        l("Clinical workflows", Network),
        l("Tasks & worklists", ListChecks),
        l("Results & review", BarChart3),
        l("Secure communication", MessageSquare),
      ],
      [
        l("Participation", Users),
        l("Professional", Briefcase),
        l("Clinical responsibility", Shield),
        l("Contact our clinical team", Phone),
      ],
    ],
  },
  {
    label: "Hospitals & Clinics",
    cta: "Explore hospital & clinic solutions",
    image: "/navbar/4.jpg",
    imageAlt: "Doctor speaking with a nurse in a hospital corridor",
    columns: [
      [
        l("Provider institutions", Hospital),
        l("Hospitals & clinics", Hospital),
        l("Private practices", Stethoscope),
        l("Outpatient services", User),
      ],
      [
        l("Care operations", ClipboardList),
        l("Scheduling", CalendarDays),
        l("Referral intake & routing", ArrowRight),
        l("Discharge & transitions", ArrowLeftRight),
      ],
      [
        l("Technology & adoption", Cpu),
        l("EHR interoperability", Network),
        l("Enterprise onboarding", Briefcase),
        l("Speak with our institutional team", MessageCircle),
      ],
    ],
  },
  {
    label: "Labs & Pharmacies",
    cta: "Explore diagnostics & pharmacy",
    image: "/navbar/5.jpg",
    imageAlt: "Two laboratory scientists working with a microscope",
    columns: [
      [
        l("Diagnostics", Stethoscope),
        l("For laboratories", FlaskConical),
        l("Imaging & radiology", Grid3x3),
        l("Diagnostics coordination", Network),
      ],
      [
        l("Pharmacy services", Pill),
        l("For pharmacies", Pill),
        l("Prescription routing", FileText),
        l("Fulfillment & availability", Package),
      ],
      [
        l("Partner connectivity", Network),
        l("Lab & imaging integration", Plug),
        l("Pharmacy partnerships", Handshake),
        l("Safety & escalation", AlertTriangle),
      ],
    ],
  },
  {
    label: "Payers & Insurers",
    cta: "Explore payer solutions",
    image: "/navbar/6.jpg",
    imageAlt: "Clinic staff meeting with patients in a consulting room",
    columns: [
      [
        l("Coverage & access", Shield),
        l("For payers & insurers", Wallet),
        l("Eligibility & benefits", Contact),
        l("Prior authorization", FileCheck),
      ],
      [
        l("Claims & governance", Scale),
        l("Claims & remittance", Receipt),
        l("Member access", KeyRound),
        l("Payer integration", Plug),
      ],
      [
        l("Become a partner", Handshake),
        l("Talk to our payer team", MessageCircle),
        l("Implementation approach", Network),
      ],
    ],
  },
  {
    label: "Organizations",
    cta: "Explore organization solutions",
    image: "/navbar/7.jpg",
    imageAlt: "Woman seated across a table meeting with two colleagues",
    columns: [
      [
        l("Workplace & community", Building2),
        l("Employers & occupational health", Briefcase),
        l("Community & home care", Home),
        l("Nonprofits & NGOs", Heart),
      ],
      [
        l("Public systems", Landmark),
        l("Government & public health", Landmark),
        l("Health systems & regional networks", Hospital),
        l("Care programs & policy", ClipboardList),
      ],
      [
        l("Research & programs", FlaskConical),
        l("Research institutions", GraduationCap),
        l("Program implementation", Network),
        l("Discuss a program", MessageCircle),
      ],
    ],
  },
  {
    label: "Partners & Developers",
    cta: "Explore integration partnerships",
    image: "/navbar/8.jpg",
    imageAlt: "Two smiling colleagues reviewing a tablet together",
    columns: [
      [
        l("Partner ecosystem", Network),
        l("Technology partners", Cpu),
        l("Health system vendors", Hospital),
        l("System integrators", Plug),
      ],
      [
        l("Build & connect", Code2),
        l("API & interoperability", Code2),
        l("SDKs, webhooks & events", Network),
        l("Integration security", Shield),
      ],
      [
        l("Partner onboarding", UserPlus),
        l("Certification framework", Award),
        l("Developer documentation", BookOpen),
        l("Become a partner", Handshake),
      ],
    ],
  },
  {
    label: "Resources",
    cta: "Visit the Resource Center",
    image: "/navbar/9.jpg",
    imageAlt: "Two women talking in a bright room",
    columns: [
      [
        l("Get answers", HelpCircle),
        l("Help center", Headphones),
        l("Frequently asked questions", HelpCircle),
        l("Healthcare navigation guide", Compass),
      ],
      [
        l("Safety & rights", Shield),
        l("Safety and emergency", AlertTriangle),
        l("Accessibility", Accessibility),
        l("Privacy and your information", Lock),
      ],
      [
        l("Keep informed", Bell),
        l("News and insights", Newspaper),
        l("Contact support", Headphones),
      ],
    ],
  },
  {
    label: "Company",
    cta: "Meet Zoiko Access",
    image: "/navbar/10.jpg",
    imageAlt: "Three doctors talking in front of a concrete wall",
    columns: [
      [
        l("Our company", Building2),
        l("Company overview", FileText),
        l("Mission & approach", Target),
        l("Leadership & governance", Users),
      ],
      [
        l("Trust & engagement", Shield),
        l("Privacy & trust center", Lock),
        l("Clinical responsibility", Stethoscope),
        l("Contact us", Phone),
      ],
      [
        l("Connect with us", MessageCircle),
        l("Careers", Briefcase),
        l("Media & press", Newspaper),
        l("Legal notices", Scale),
      ],
    ],
  },
] as const;
