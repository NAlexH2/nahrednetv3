import TopBanner from "@/components/topBanner/TopBanner";
import BioContent from "./BioContent";
import NavBar from "@/components/navbar/NavBar";
import { DefaultPageContainer } from "@/components/DefaultPageContainer";

export const Bio = () => {
  const routedPage: string = "Bio";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <DefaultPageContainer>
        <BioContent />
      </DefaultPageContainer>
    </div>
  );
};

export default Bio;
