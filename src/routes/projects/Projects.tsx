import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/NavBar";

export const Projects = () => {
  const routedPage: string = "Projects";

  return (
    <div className="m-5">
      <Header />
      <NavBar routedPage={routedPage} />
      projects
    </div>
  );
};

export default Projects;
