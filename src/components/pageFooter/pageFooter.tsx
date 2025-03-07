import GitHubButton from "./gitHubButton";
import LinkedInButton from "./linkedInButton";

export const PageFooter = () => {
  return (
    <div>
      <span className="flex justify-center mt-10">
        <LinkedInButton />
        <div className="px-3" />
        <GitHubButton />
      </span>
      <span className="flex justify-center">
        <div className="text-center text-md my-3">
          &#169; 2025 Nicholas Alexander Harris
        </div>
      </span>
    </div>
  );
};

export default PageFooter;
