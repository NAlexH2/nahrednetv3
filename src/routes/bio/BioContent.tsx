import { HeadShot } from "./BioHeadShot";
import { SystemTimeGreeting } from "@/utils/SystemTimeGreeting";
import { FirstParagraphBio } from "./FirstParagraphBio";
import { SecondParagraphBio } from "./SecondParagraphBio";
import { PresentBio } from "./PresentBio";

export const BioContent = () => {
  return (
    <>
      <HeadShot />
      <div
        className="transition-all max-md:mt-2 max-md:col-start-1 max-md:col-end-8
          min-md:col-start-7 min-md:col-end-16"
      >
        <SystemTimeGreeting />
        <FirstParagraphBio />
      </div>
      <div className="max-md:col-start-1 max-md:col-end-8 col-start-2 col-end-16">
        <SecondParagraphBio />
        <PresentBio />
      </div>
    </>
  );
};

export default BioContent;
