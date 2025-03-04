import NavBar from "@/components/navbar/NavBar";
import TopBanner from "@/components/topBanner/TopBanner";
import ProjectsContent from "./ProjectsContent";

export const Projects = () => {
  const routedPage: string = "Projects";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <ProjectsContent />
    </div>
  );
};

export default Projects;
