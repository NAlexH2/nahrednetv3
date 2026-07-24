import Selfie from "@images/hs2-small.jpg";
import IDStyles from "@/styles/IDStyles.module.css";

export const HeadShot = () => {
  return (
    <img
      id={IDStyles.Headshot}
      src={Selfie}
      className="transition-all self-start max-md:col-span-full
        max-md:justify-self-center max-md:max-h-70 min-md:col-start-1
        min-md:col-span-6 min-md:w-full"
    />
  );
};
