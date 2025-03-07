import { Link } from "react-router-dom";
import { NRNImage } from "../imageComponents";
import GitHub from "@/assets/images/github.svg";
export const GitHubButton = () => {
  return (
    <div>
      <Link
        to="https://github.com/NAlexH2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NRNImage
          className="w-14"
          src={GitHub}
          alt="A Button with the LinkedIn logo"
        />
      </Link>
    </div>
  );
};

export default GitHubButton;
