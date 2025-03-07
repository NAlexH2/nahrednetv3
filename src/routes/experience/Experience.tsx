import NavBar from "@/components/navbar/NavBar";
import TopBanner from "@/components/topBanner/TopBanner";
import { ExperienceContent } from "./ExperienceContent";
import { PageFooter } from "@/components/pageFooter";

export const Experience = () => {
  const routedPage: string = "Experience";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <ExperienceContent />
      <PageFooter />
    </div>
  );
};

export default Experience;
