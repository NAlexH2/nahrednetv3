import NavBar from "@/components/navbar/NavBar";

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
