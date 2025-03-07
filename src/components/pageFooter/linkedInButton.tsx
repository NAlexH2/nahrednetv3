import { Link } from "react-router-dom";
import { NRNImage } from "../imageComponents";
import LinkedIn from "@/assets/images/linkedin.svg";
export const LinkedInButton = () => {
  return (
    <div>
      <Link
        to="https://www.linkedin.com/in/nalexh2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NRNImage
          className="w-14"
          src={LinkedIn}
          alt="A Button with the LinkedIn logo"
        />
      </Link>
    </div>
  );
};

export default LinkedInButton;
