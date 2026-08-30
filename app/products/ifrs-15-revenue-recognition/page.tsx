import Header from "@/components/Header";
import HamiltonIfrs15Header from "@/components/products/HamiltonIfrs15Header";
import HamiltonIfrs15Overview from "@/components/products/HamiltonIfrs15Overview";
import HamiltonIfrs15Capabilities from "@/components/products/HamiltonIfrs15Capabilities";
import HamiltonIfrs15Industries from "@/components/products/HamiltonIfrs15Industries";
import HamiltonIfrs15Why from "@/components/products/HamiltonIfrs15Why";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HamiltonIfrs15Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HamiltonIfrs15Header />
        <HamiltonIfrs15Overview />
        <HamiltonIfrs15Capabilities />
        <HamiltonIfrs15Industries />
        <HamiltonIfrs15Why />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
