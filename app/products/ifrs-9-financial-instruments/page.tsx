import Header from "@/components/Header";
import HamiltonIfrs9Header from "@/components/products/HamiltonIfrs9Header";
import HamiltonIfrs9Overview from "@/components/products/HamiltonIfrs9Overview";
import HamiltonIfrs9Capabilities from "@/components/products/HamiltonIfrs9Capabilities";
import HamiltonIfrs9Industries from "@/components/products/HamiltonIfrs9Industries";
import HamiltonIfrs9Why from "@/components/products/HamiltonIfrs9Why";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HamiltonIfrs9Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HamiltonIfrs9Header />
        <HamiltonIfrs9Overview />
        <HamiltonIfrs9Capabilities />
        <HamiltonIfrs9Industries />
        <HamiltonIfrs9Why />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
