import TopBanner from "@/components/topBanner/TopBanner";
import BioContent from "./BioContent";
import NavBar from "@/components/navbar/NavBar";

export const Bio = () => {
  const routedPage: string = "Bio";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <BioContent />
    </div>
  );
};

export default Bio;
