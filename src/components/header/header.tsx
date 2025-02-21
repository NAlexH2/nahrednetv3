import { Link } from "react-router-dom";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderText } from "./HeaderText";
import IDStyles from "@/styles/IDStyles.module.css";

export const Header = () => {
  const homeUrl = "/";
  const btnTxt = "button-text";
  const btnClassDefault =
    "pl-3 pt-6 text-7xl font-squarepeg transition-all max-md:hidden";
  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <div className="flex justify-center col-start-1 col-span-5">
        <Link to={homeUrl} className="z-40 px-5">
          <button id={IDStyles.NavBarBtn} className="flex -mt-7">
            <HeaderLogo />
            <HeaderText id={btnTxt} className={btnClassDefault} />
          </button>
        </Link>
      </div>
      <hr
        className="transition-all -mt-2 w-72 h-1 mx-auto my-4 border-0 mb-5 col-start-1 col-span-5
          bg-jade max-md:hidden"
      />
    </div>
  );
};

export default Header;
