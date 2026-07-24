import IDStyles from "@/styles/IDStyles.module.css";
import { Link } from "react-router-dom";

export const FirstParagraphBio = () => {
  return (
    <>
      My name is{" "}
      <i>
        <b>Nicholas Alexander Harris,</b>
      </i>{" "}
      though I prefer to go by my middle name, Alex. I&apos;m a systems
      administrator on the Live Ops team at{" "}
      <Link
        to="https://www.grindinggear.com/"
        id={IDStyles.TextLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Grinding Gear Games
      </Link>{" "}
      in Auckland, New Zealand, where I help keep Path of Exile 1 and 2 online
      and healthy. Before this I served eight years in the United States Navy,
      then earned a Bachelor of Science and a Master of Science in Computer
      Science at{" "}
      <Link
        to="https://www.pdx.edu/"
        id={IDStyles.TextLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Portland State University
      </Link>
      , in the{" "}
      <Link
        to="https://www.pdx.edu/engineering/"
        id={IDStyles.TextLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Maseeh College of Engineering and Computer Science
      </Link>
      , with a minor in Mathematics.
    </>
  );
};
