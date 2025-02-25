import NavBar from "@/components/navbar/NavBar";
import TopBanner from "@/components/topBanner/TopBanner";

export const Projects = () => {
  const routedPage: string = "Projects";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      <h2 className="max-md:flex max-md:justify-center mt-5 max-sm:!text-xl">
        aaaa
      </h2>
      <h3 className="max-md:flex max-md:justify-center mt-2 max-sm:!text-lg">
        bbbb
      </h3>
    </div>
  );
};

export default Projects;
