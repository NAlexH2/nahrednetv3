import { HeadShot } from "./BioHeadShot";
import { SystemTimeGreeting } from "@/utils/SystemTimeGreeting";
import { FirstParagraphBio } from "./FirstParagraphBio";
import { SecondParagraphBio } from "./SecondParagraphBio";
import { PresentBio } from "./PresentBio";
import { BeforeBio } from "./BeforeBio";

export const BioContent = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-justify mt-10 text-[16px]">
        <div className="transition-all grid grid-cols-16 gap-x-5">
          <HeadShot />
          <div
            className="transition-all max-md:col-span-full max-md:mt-2
              min-md:col-start-7 min-md:col-span-10"
          >
            <SystemTimeGreeting />
            <FirstParagraphBio />
          </div>
          <div className="col-span-full">
            <div className="mt-4">
              <SecondParagraphBio />
            </div>
            <PresentBio />
            <BeforeBio />
          </div>
        </div>
      </div>
    </>
  );
};

export default BioContent;
