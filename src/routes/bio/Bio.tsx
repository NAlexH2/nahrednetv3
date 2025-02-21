import Header from "@/components/header/Header";
import { NavBar } from "@/components/navbar/NavBar";
import BioContent from "./BioContent";

export const Bio = () => {
  const routedPage: string = "Bio";

  return (
    <div className="m-5">
      <Header />
      <NavBar routedPage={routedPage} />
      <BioContent />
    </div>
  );
};

export default Bio;
