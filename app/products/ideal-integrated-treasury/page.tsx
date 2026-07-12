import Header from "@/components/Header";
import IdealHeader from "@/components/products/IdealHeader";
import IdealOverview from "@/components/products/IdealOverview";
import IdealWhy from "@/components/products/IdealWhy";
import IdealCapabilities from "@/components/products/IdealCapabilities";
import IdealIndustries from "@/components/products/IdealIndustries";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function IdealPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IdealHeader />
        <IdealOverview />
        <IdealCapabilities />
        <IdealIndustries />
        <IdealWhy />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
