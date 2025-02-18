// import "@/styles/home.css"; TODO - not used currently (ever?)
import NavBar from "@/components/navbar/navBar";

export const Bio = () => {
  const routedPage: string = "Bio";

  return (
    <div className="mt-3">
      <NavBar routedPage={routedPage} />
      bio
    </div>
  );
};

export default Bio;
