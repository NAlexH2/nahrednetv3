import NavBar from "@/components/navbar/NavBar";
import TopBanner from "@/components/topBanner/TopBanner";
import ProjectsContent from "./ProjectsContent";
import { PageFooter } from "@/components/pageFooter";

export const Projects = () => {
  const routedPage: string = "Projects";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <ProjectsContent />
      <PageFooter />
    </div>
  );
};

export default Projects;
