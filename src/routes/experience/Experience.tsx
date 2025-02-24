import { DefaultPageContainer } from "@/components/DefaultPageContainer";
import NavBar from "@/components/navbar/NavBar";
import TopBanner from "@/components/topBanner/TopBanner";
import { ExperienceContent } from "./ExperienceContent";

export const Experience = () => {
  const routedPage: string = "Experience";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <DefaultPageContainer>
        <ExperienceContent />
      </DefaultPageContainer>
    </div>
  );
};

export default Experience;
