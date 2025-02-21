import { Link } from "react-router-dom";
import { NavBarBtn } from "@buttons/NavBarBtn";
import { navBarItems } from "./navItemConsts";

const RouteDecider = (item: string): string => {
  if (item === "Bio") return "/";
  return `/${item}`;
};

export const NavBar = ({ routedPage = "" }: { routedPage: string }) => {
  return (
    <nav className="flex justify-center">
      {navBarItems.map((item, index) => (
        <Link to={RouteDecider(item)} key={index} className="ml-4 mr-4">
          <NavBarBtn
            key={index}
            routedPage={routedPage}
            btnText={item}
            textClassName="transition-all text-5xl font-light max-md:text-3xl"
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
