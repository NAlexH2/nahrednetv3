import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/NavBar";

export const Experience = () => {
  const routedPage: string = "Experience";

  return (
    <div>
      <Header />
      <NavBar routedPage={routedPage} />
      experience
    </div>
  );
};

export default Experience;
