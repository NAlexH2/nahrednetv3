import HeadShot from "@images/hs2-small.jpg";
import { Link } from "react-router-dom";
import IDStyles from "@/styles/IDStyles.module.css";

export const BioContent = () => {
  const SystemTimeGreetingGreeting = () => {
    const currentTime: Date = new Date(Date.now());
    const tod: number = currentTime.getHours();
    if (tod < 12) {
      return <h3>{"Good morning!"}</h3>;
    } else if (tod < 16) {
      return <h3>{"Good afternoon!"}</h3>;
    } else {
      return <h3>{"Good Evening!"}</h3>;
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-justify mt-5 text-[16px]">
      <div className="transition-all grid max-md:grid-cols-7 min-md:grid-cols-16">
        <img
          id={IDStyles.Headshot}
          src={HeadShot}
          className="transition-all max-md:col-start-2 max-md:col-end-7 max-md:place-self-center
            max-md:max-h-70 max-md:mt-2 min-md:col-start-2 min-md:col-end-6"
        />
        <div
          className="transition-all max-md:mt-2 max-md:col-start-2 max-md:col-end-7
            min-md:col-start-7 min-md:col-end-16"
        >
          <div className="transition-all max-md:flex max-md:justify-center max-md:my-2">
            <SystemTimeGreetingGreeting />
          </div>
          My name is{" "}
          <i>
            <b>Nicholas Alexander Harris,</b>
          </i>{" "}
          though I go by Alex. I&apos;m currently a graduate student at{" "}
          <Link
            to="https://www.pdx.edu/"
            id={IDStyles.TextLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Portland State University
          </Link>
          , where I’m building on the foundation I established during my
          undergraduate studies at the{" "}
          <Link
            to="https://www.pdx.edu/engineering/"
            id={IDStyles.TextLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Maseeh College of Engineering and Computer Science
          </Link>
          . There, I earned a Bachelor of Science in Computer Science and a
          minor in Mathematics.
        </div>
      </div>
    </div>
  );
};

export default BioContent;
