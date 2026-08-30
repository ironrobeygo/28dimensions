import Header from "@/components/Header";
import HamiltonIfrs17Header from "@/components/products/HamiltonIfrs17Header";
import HamiltonIfrs17Overview from "@/components/products/HamiltonIfrs17Overview";
import HamiltonIfrs17Capabilities from "@/components/products/HamiltonIfrs17Capabilities";
import HamiltonIfrs17Industries from "@/components/products/HamiltonIfrs17Industries";
import HamiltonIfrs17Why from "@/components/products/HamiltonIfrs17Why";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HamiltonIfrs17Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HamiltonIfrs17Header />
        <HamiltonIfrs17Overview />
        <HamiltonIfrs17Capabilities />
        <HamiltonIfrs17Industries />
        <HamiltonIfrs17Why />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
