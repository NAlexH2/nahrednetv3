import Selfie from "@images/hs2-small.jpg";
import IDStyles from "@/styles/IDStyles.module.css";

export const HeadShot = () => {
  return (
    <img
      id={IDStyles.Headshot}
      src={Selfie}
      className="transition-all max-md:col-start-2 max-md:col-end-7 max-md:place-self-center
        max-md:max-h-70 min-md:col-start-2 min-md:col-end-6"
    />
  );
};
