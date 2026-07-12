import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | 28 Dimensions",
  description:
    "The terms that govern your use of the 28 Dimensions website.",
};

type Section = {
  number: string;
  title: string;
  body?: React.ReactNode;
};

const sections: Section[] = [
  {
    number: "1",
    title: "Acceptance of Terms",
  },
  {
    number: "2",
    title: "Purpose of the Site",
    body: (
      <p>
        This Site is maintained by 28 Dimensions solely for informational purposes. It
        provides general information about our product and company. The Site is not the
        product itself, and no services are offered, sold, or delivered through it.
      </p>
    ),
  },
  {
    number: "3",
    title: "Intellectual Property",
    body: (
      <>
        <p>
          All content on this Site — including but not limited to text, graphics, logos,
          icons, and images — is the property of 28 Dimensions and is protected by
          applicable copyright, trademark, and intellectual property laws. You may not:
        </p>
        <ul className="mt-3 flex flex-col gap-2 text-left">
          {[
            "Copy, reproduce, or redistribute any content from this Site without prior written permission",
            "Use our trademarks, logos, or brand materials without authorization",
            "Scrape, harvest, or extract data from this Site by automated means",
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
    number: "4",
    title: "Permitted Use",
    body: (
      <p>
        You may access and view this Site for personal, non-commercial informational
        purposes only. Any other use requires our express written consent.
      </p>
    ),
  },
  {
    number: "5",
    title: "Disclaimer of Warranties",
    body: (
      <>
        <p>
          This Site and all content on it are provided on an &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; basis, without warranties of any kind, either express
          or implied. We make no representations or warranties regarding:
        </p>
        <ul className="mt-3 flex flex-col gap-2 text-left">
          {[
            "The accuracy, completeness, or timeliness of any information on the Site",
            "The availability or uninterrupted operation of the Site",
            "Product features, pricing, or availability described on the Site, which are subject to change at any time without notice",
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
    number: "6",
    title: "Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, 28 Dimensions and its officers, directors,
        employees, and affiliates shall not be liable for any indirect, incidental,
        special, or consequential damages arising out of or in connection with your use
        of — or inability to use — this Site or its content.
      </p>
    ),
  },
  {
    number: "7",
    title: "Third-Party Links",
    body: (
      <p>
        This Site may contain links to third-party websites for your convenience. These
        links do not constitute an endorsement of those sites. We have no control over
        their content and accept no responsibility for them or for any loss or damage that
        may arise from your use of them.
      </p>
    ),
  },
  {
    number: "8",
    title: "Changes to the Site and Terms",
    body: (
      <p>
        We reserve the right to modify or discontinue this Site, or any part of it, at any
        time without notice. We may also update these Terms from time to time. Continued
        use of the Site after any changes constitutes your acceptance of the revised
        Terms. We encourage you to review these Terms periodically.
      </p>
    ),
  },
  {
    number: "9",
    title: "Governing Law",
    body: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the
        Philippines, without regard to its conflict of law provisions. Any disputes
        arising under these Terms shall be subject to the exclusive jurisdiction of the
        courts located in the Philippines.
      </p>
    ),
  },
  {
    number: "10",
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about these Terms, please contact us at:</p>
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

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-dark px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-white/70 hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-brand-orange">Legal</span>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-white/70">Terms of Service</span>
          </nav>

          <div className="mt-8 text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-orange">LEGAL</p>
            <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-sm text-white/60">
              Effective Date: <span className="text-brand-orange">June 15, 2026</span>
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
              By accessing or using this website (the &ldquo;Site&rdquo;), you agree to be
              bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree
              with any part of these Terms, please do not use the Site.
            </p>
          </div>

          <div className="mt-10 flex flex-col divide-y divide-white/10 border-t border-white/10">
            {sections.map((section) => (
              <section key={section.number} className="py-8 text-left">
                <h2 className="flex items-baseline gap-3 text-xl font-bold text-white">
                  <span className="text-brand-orange">{section.number}.</span>
                  {section.title}
                </h2>
                {section.body && (
                  <div className="mt-3 flex max-w-2xl flex-col gap-3 text-sm leading-relaxed text-white/60">
                    {section.body}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
