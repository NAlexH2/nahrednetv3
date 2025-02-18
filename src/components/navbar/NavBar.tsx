import NavBarBtn from "@buttons/navBarBtn";
import { Link } from "react-router-dom";
import { navBarItems } from "./navItemConsts";

const RouteDecider = (item: string): string => {
  if (item === "Bio") return "/";
  return `/${item}`;
};

export const NavBar = ({ routedPage = "" }: { routedPage: string }) => {
  return (
    <nav className="flex justify-center mt-3">
      {navBarItems.map((item, index) => (
        <Link to={RouteDecider(item)} className="ml-4 mr-4">
          <NavBarBtn
            key={index}
            routedPage={routedPage}
            btnText={item}
            className="flex-row text-4xl"
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
