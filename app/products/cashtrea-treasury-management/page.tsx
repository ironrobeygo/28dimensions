import Header from "@/components/Header";
import CashtreaHeader from "@/components/products/CashtreaHeader";
import CashtreaOverview from "@/components/products/CashtreaOverview";
import CashtreaWhy from "@/components/products/CashtreaWhy";
import CashtreaCapabilities from "@/components/products/CashtreaCapabilities";
import CashtreaIndustries from "@/components/products/CashtreaIndustries";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function CashtreaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CashtreaHeader />
        <CashtreaOverview />
        <CashtreaCapabilities />
        <CashtreaIndustries />
        <CashtreaWhy />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
