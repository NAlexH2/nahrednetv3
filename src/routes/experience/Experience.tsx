import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/NavBar";

export const Experience = () => {
  const routedPage: string = "Experience";

  return (
    <div className="m-5">
      <Header />
      <NavBar routedPage={routedPage} />
      experience
    </div>
  );
};

export default Experience;
