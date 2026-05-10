import PageMeta from "../../components/common/PageMeta";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import SummaryMetrics from "../../components/dashboard/SummaryMetrics";
import AddCreditCardPromo from "../../components/dashboard/AddCreditCardPromo";
import QuickLinks from "../../components/dashboard/QuickLinks";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Dashboard | PetCare Portal"
        description="PetCare Portal Dashboard"
      />
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          <div className="xl:col-span-8">
            <WelcomeCard />
          </div>
          <div className="xl:col-span-4">
            <SummaryMetrics />
          </div>
        </div>
        
        <AddCreditCardPromo />
        <QuickLinks />
      </div>
    </>
  );
}
