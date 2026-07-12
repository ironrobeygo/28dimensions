import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | 28 Dimensions",
  description:
    "How 28 Dimensions handles information in connection with your visit to this Site.",
};

type Section = {
  number: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    number: "1",
    title: "Overview",
    body: (
      <>
        <p>
          28 Dimensions operates this website (the &ldquo;Site&rdquo;) solely as an
          informational resource about our product. This Privacy Policy explains how we
          handle information in connection with your visit to the Site.
        </p>
        <p>
          The short version: we do not collect, store, or share any personal information
          from visitors to this Site.
        </p>
      </>
    ),
  },
  {
    number: "2",
    title: "Information We Do Not Collect",
    body: (
      <>
        <p>
          We do not collect any personal information from you when you visit this Site.
          Specifically, we do not:
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {[
            "Ask you to create an account or log in",
            "Collect your name, email address, phone number, or any other contact information",
            "Use cookies, tracking pixels, or similar technologies to monitor your behavior",
            "Use third-party analytics tools (such as Google Analytics) that collect visitor data",
            "Run advertising or retargeting scripts",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "3",
    title: "Automatically Collected Technical Data",
    body: (
      <p>
        Like most web servers, our hosting provider may automatically log basic technical
        information such as your IP address, browser type, and pages visited. This data is
        retained by our hosting infrastructure for security and operational purposes only
        and is not used by us to identify or track individual visitors.
      </p>
    ),
  },
  {
    number: "4",
    title: "Third-Party Links",
    body: (
      <p>
        This Site may contain links to third-party websites. This Privacy Policy applies
        only to this Site. We are not responsible for the privacy practices of any
        third-party sites and encourage you to review their policies before providing any
        personal information.
      </p>
    ),
  },
  {
    number: "5",
    title: "Children’s Privacy",
    body: (
      <p>
        This Site is not directed at children under the age of 13, and we do not knowingly
        collect any information from children.
      </p>
    ),
  },
  {
    number: "6",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on
        this page with a revised effective date. We encourage you to review this policy
        periodically.
      </p>
    ),
  },
  {
    number: "7",
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="mt-3">
          <span className="block font-semibold text-white">28 Dimensions</span>
          <span className="block">
            Email:{" "}
            <a href="mailto:info@28dimensions.com" className="text-brand-orange hover:underline">
              info@28dimensions.com
            </a>
          </span>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-dark px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/70 hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-brand-orange">Legal</span>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-white/70">Privacy Policy</span>
          </nav>

          <div className="mt-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange">LEGAL</p>
            <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-white/60">
              Effective Date: <span className="text-brand-orange">June 15, 2026</span>
            </p>
          </div>

          <div className="mt-10 flex flex-col divide-y divide-white/10 border-t border-white/10">
            {sections.map((section) => (
              <section key={section.number} className="py-8">
                <h2 className="flex items-baseline gap-3 text-xl font-bold text-white">
                  <span className="text-brand-orange">{section.number}.</span>
                  {section.title}
                </h2>
                <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-white/60">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
