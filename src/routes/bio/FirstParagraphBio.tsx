import IDStyles from "@/styles/IDStyles.module.css";
import { Link } from "react-router-dom";

export const FirstParagraphBio = () => {
  return (
    <>
      My name is{" "}
      <i>
        <b>Nicholas Alexander Harris,</b>
      </i>{" "}
      though I prefer to go by my middle name, Alex. I&apos;m currently a
      graduate student at{" "}
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
      . There, I earned a Bachelor of Science in Computer Science and a minor in
      Mathematics.
    </>
  );
};
