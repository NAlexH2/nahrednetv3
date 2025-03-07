import TopBanner from "@/components/topBanner/TopBanner";
import BioContent from "./BioContent";
import NavBar from "@/components/navbar/NavBar";
import { PageFooter } from "@/components/pageFooter";

export const Bio = () => {
  const routedPage: string = "Bio";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <BioContent />
      <PageFooter />
    </div>
  );
};

export default Bio;
