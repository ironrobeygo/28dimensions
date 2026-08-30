import Header from "@/components/Header";
import HamiltonIfrs16Header from "@/components/products/HamiltonIfrs16Header";
import HamiltonIfrs16Overview from "@/components/products/HamiltonIfrs16Overview";
import HamiltonIfrs16Capabilities from "@/components/products/HamiltonIfrs16Capabilities";
import HamiltonIfrs16Industries from "@/components/products/HamiltonIfrs16Industries";
import HamiltonIfrs16Why from "@/components/products/HamiltonIfrs16Why";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HamiltonIfrs16Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HamiltonIfrs16Header />
        <HamiltonIfrs16Overview />
        <HamiltonIfrs16Capabilities />
        <HamiltonIfrs16Industries />
        <HamiltonIfrs16Why />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
