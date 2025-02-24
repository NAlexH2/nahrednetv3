import { DefaultPageContainer } from "@/components/DefaultPageContainer";
import NavBar from "@/components/navbar/NavBar";
import TopBanner from "@/components/topBanner/TopBanner";
import { ExperienceAccordion } from "./ExperienceAccordion";

export const Experience = () => {
  const routedPage: string = "Experience";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <DefaultPageContainer></DefaultPageContainer>
    </div>
  );
};

export default Experience;
