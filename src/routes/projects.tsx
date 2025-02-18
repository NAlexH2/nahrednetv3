import { NavBar } from "@/components/navbar/navBar";

export const Projects = () => {
  const routedPage: string = "Projects";

  return (
    <div className="mt-3">
      <NavBar routedPage={routedPage} />
      projects
    </div>
  );
};

export default Projects;
