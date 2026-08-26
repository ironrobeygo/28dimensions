import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import EnterpriseSolutions from "@/components/EnterpriseSolutions";
import ImpactProjects from "@/components/ImpactProjects";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureStrip />
        <WhoWeAre />
        <EnterpriseSolutions />
        <WhatWeDo />
        <ImpactProjects />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
