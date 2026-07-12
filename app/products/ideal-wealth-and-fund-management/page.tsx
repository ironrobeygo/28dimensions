import Header from "@/components/Header";
import IdealWealthFundsHeader from "@/components/products/IdealWealthFundsHeader";
import IdealWealthFundsOverview from "@/components/products/IdealWealthFundsOverview";
import IdealWealthFundsCapabilities from "@/components/products/IdealWealthFundsCapabilities";
import IdealWealthFundsIndustries from "@/components/products/IdealWealthFundsIndustries";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function IdealWealthFundsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IdealWealthFundsHeader />
        <IdealWealthFundsOverview />
        <IdealWealthFundsCapabilities />
        <IdealWealthFundsIndustries />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
