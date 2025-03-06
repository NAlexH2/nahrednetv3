import NavBar from "@/components/navbar/NavBar";
import TopBanner from "@/components/topBanner/TopBanner";
import ProjectsContent from "./ProjectsContent";
import { DefaultPageContainer } from "@/components/DefaultPageContainer";

export const Projects = () => {
  const routedPage: string = "Projects";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <DefaultPageContainer>
        <ProjectsContent />
      </DefaultPageContainer>
    </div>
  );
};

export default Projects;
