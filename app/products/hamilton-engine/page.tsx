import Header from "@/components/Header";
import HamiltonEngineHeader from "@/components/products/HamiltonEngineHeader";
import HamiltonEngineOverview from "@/components/products/HamiltonEngineOverview";
import HamiltonEngineCapabilities from "@/components/products/HamiltonEngineCapabilities";
import HamiltonEngineIndustries from "@/components/products/HamiltonEngineIndustries";
import HamiltonEngineWhy from "@/components/products/HamiltonEngineWhy";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HamiltonEnginePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HamiltonEngineHeader />
        <HamiltonEngineOverview />
        <HamiltonEngineCapabilities />
        <HamiltonEngineIndustries />
        <HamiltonEngineWhy />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
