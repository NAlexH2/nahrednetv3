import NavBar from "@/components/navbar/NavBar";
import TopBanner from "@/components/topBanner/TopBanner";

export const Experience = () => {
  const routedPage: string = "Experience";

  return (
    <div className="m-5">
      <TopBanner />
      <NavBar routedPage={routedPage} />
      experience
    </div>
  );
};

export default Experience;
