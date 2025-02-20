import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/NavBar";

export const Projects = () => {
  const routedPage: string = "Projects";

  return (
    <div>
      <Header />
      <NavBar routedPage={routedPage} />
      projects
    </div>
  );
};

export default Projects;
