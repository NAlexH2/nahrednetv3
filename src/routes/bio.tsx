import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/NavBar";

export const Bio = () => {
  const routedPage: string = "Bio";

  return (
    <div>
      <Header />
      <NavBar routedPage={routedPage} />
      bio
    </div>
  );
};

export default Bio;
