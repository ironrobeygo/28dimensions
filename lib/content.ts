import {
  MapPin,
  Globe2,
  Link2,
  ShieldCheck,
  Share2,
  Fingerprint,
  Cloud,
  Lock,
  TrainFront,
  BarChart3,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "What We Do", href: "#what-we-do" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: MapPin,
    title: "Local Presence",
    description: "Deep understanding of the Philippine landscape",
  },
  {
    icon: Globe2,
    title: "Global Ecosystem",
    description: "Partnerships with world-class technology providers",
  },
  {
    icon: Link2,
    title: "End-to-End Delivery",
    description: "From strategy and integration to sustainable operations",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Infrastructure",
    description: "Secure, resilient systems built for mission-critical environments",
  },
  {
    icon: Share2,
    title: "Future Technologies",
    description: "AI, cloud, blockchain, and next-generation digital solutions",
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Fingerprint,
    title: "Digital Identity & Trust",
    description: "Secure digital identity solutions for every Filipino.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Scalable, sovereign, and future-ready cloud foundations.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Protecting critical systems and data that power the nation.",
  },
  {
    icon: TrainFront,
    title: "Transport & Rail Systems",
    description: "Smart mobility solutions for safer and faster journeys.",
  },
  {
    icon: BarChart3,
    title: "AI, Data & Analytics",
    description: "Data-driven intelligence for better decisions and outcomes.",
  },
  {
    icon: Handshake,
    title: "PPP Advisory & Delivery",
    description: "Enabling public-private collaboration for lasting impact.",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "National ID for All",
    description: "Digital identity solutions for a more inclusive nation.",
    image: "/assets/our-impact-in-action/national-id.png",
  },
  {
    title: "Accessible Transport",
    description: "Modernizing rail systems for connected communities.",
    image: "/assets/our-impact-in-action/accesibility.png",
  },
  {
    title: "Digital Government",
    description: "Technology that enables efficient and transparent public services.",
    image: "/assets/our-impact-in-action/government.png",
  },
  {
    title: "Secure Communities",
    description: "Protecting citizens and infrastructure through advanced security.",
    image: "/assets/our-impact-in-action/communities.png",
  },
  {
    title: "Smart Infrastructure",
    description: "Building resilient systems that power progress.",
    image: "/assets/our-impact-in-action/infrastructure.png",
  },
];
