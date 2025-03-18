import { Link } from "react-router-dom";
import { ClassStyles, IDStyles } from "@/styles";
import { CodeBlocks } from "@/components/CodeBlocks";

const projURL = "https://github.com/NAlexH2/nahrednetv3";

const sampleTailwind = `min-md:flex min-md:flex-wrap min-md:justify-center max-md:max-w-80 
max-md:flex max-md:overflow-x-scroll max-md:min-w-80 max-md:border-l-5 
max-md:border-r-5 max-md:border-jade max-md:rounded-4xl`;

export const NahRedNetV3 = () => {
  return (
    <div className="my-3 mx-5">
      <div className="text-center">
        <Link
          to={projURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl italic underline decoration-honey font-semibold"
          id={IDStyles.TextLink}
        >
          neh-red.net V3
        </Link>
      </div>
      <br />
      <p className="float-left border-r-5 border-b-5 mr-5 mb-4">
        <div className="text-2xl underline decoration font-medium decoration-honey">
          Tech Stack:
        </div>
        <ul className={`${ClassStyles.CustomList} mb-4`}>
          <li className="mt-1 ml-5">AWS Amplify (Hosting)</li>
          <li className="mt-1 ml-5">
            <Link
              to={"https://vite.dev/"}
              target="_blank"
              rel="noopener noreferrer"
              id={IDStyles.TextLink}
            >
              Vite
            </Link>
          </li>
          <li className="mt-1 ml-5">React</li>
          <li className="mt-1 ml-5">TypesScript</li>
          <li className="mt-1 ml-5">
            <Link
              to={"https://tailwindcss.com/"}
              target="_blank"
              rel="noopener noreferrer"
              id={IDStyles.TextLink}
            >
              Tailwind CSS
            </Link>
          </li>
          <li className="mt-1 ml-5">HTML</li>
          <li className="mt-1 ml-5">
            <Link
              to={"https://www.npmjs.com/package/react-code-blocks"}
              target="_blank"
              rel="noopener noreferrer"
              id={IDStyles.TextLink}
            >
              react-code-blocks
            </Link>
          </li>
        </ul>
      </p>
      <div className="text-justify">
        <p className="mt-3">
          This website was put together as an update to my previous versions. I
          elected to rework all of the content and presentation, and started
          fresh because of this. Even with a fresh start, I was able to bring
          over a lot of my already created material for the projects section,
          which a allowed me to also revisit how I wanted to organize and which
          projects I wanted to showcase. I trimmed down the tools being used so
          I could learn more by doing more. Getting rid of Material UI and
          Framer Motion forced me to create components I wanted to use/reuse and
          learn how to (lightly) animate with CSS - granted, the animation is
          done with Tailwind CSS, but that itself takes some learning too!
        </p>
        <p className="mt-3">
          With custom components, to CSS overriding AND customization/extending,
          and out of the box ready components, this stack allowed me to learn
          far more than I had expected to. I went into this personal project
          expecting it to be a lot of placing components and customizing them
          the way I wanted them to be, but that turned into recreating and
          building my own components to behave{" "}
          <i>exactly how I wanted them to</i>.
        </p>
        <h3 className="underline decoration-honey mt-3">Why Vite?</h3>
        <p className="mt-1">
          Quite simple reasoning actually: I used it before! I knew how to set
          it up, and customize various features, while learning how to do new
          ones too (such as aliasing, but that's not necessarily Vite specific.)
          Unlike previous versions of the website, which started off with raw
          HTML/CSS with very little JavaScript. Then I created a NextJS version,
          but found myself stressing over client side rendering and server side
          rendering, though it provided easy to use features like custom fonts
          to be incorporated. Not vital to the project, but I wanted it that
          badly, I found a way! Though, with this version of the site, I'm using
          Vite as the framework, while being able to use all the features I had
          with NextJS, and also able to use the React Router to be very explicit
          about the routing which, was another issue I was having/had with
          NextJS - just didn't quite trust the automatic nature of it.
        </p>
        <p className="mt-1">
          I quickly found myself stuck in a corner with React though! I could
          not find a clean and easy way to do some things - such as adding
          custom fonts - in a nice manner. NextJS however, made it super easy to
          do that! Then, I was running into issues where certain packages I was
          trying to use were, strangely enough, having issues being compatible.
          I had thought to myself how strange that was and that it should not
          matter.
        </p>
        <h3 className="underline decoration-honey mt-3">On Tailwind CSS</h3>
        <p className="mt-3">
          Now I am quite new to web development, but Tailwind CSS is a dream
          framework. It made 99% of the work I had to do with CSS incredibly
          simple. From adding my own extended grid options to use with it, to
          being able to do something like{" "}
          <CodeBlocks
            className="bg-gray-700 inline-block"
            language="tsx"
            code="max-h-[280px]"
          />{" "}
          where I am setting my own pixel width instead of being constrained to
          their built in options was amazing! This extends to <i>almost</i> any
          CSS property too. Here is another pretty cool example:
        </p>
        <div className="my-4">
          <CodeBlocks
            className="bg-gray-700 inline-block"
            language="tsx"
            code={sampleTailwind}
          />
        </div>
        <p className="mt-1">
          This is a{" "}
          <CodeBlocks
            className="bg-gray-700 inline-block"
            language="tsx"
            code="className"
          />{" "}
          on a{" "}
          <CodeBlocks
            className="bg-gray-700 inline-block"
            language="tsx"
            code="<div>"
          />{" "}
          inside of the{" "}
          <CodeBlocks
            className="bg-gray-700 inline-block"
            language="tsx"
            code="ProjectsContent"
          />{" "}
          component! This example allowed me to specify a maximum media query
          for an CSS property to stop taking effect. In this case{" "}
          <CodeBlocks
            className="bg-gray-700 inline-block"
            language="tsx"
            code="max-md"
          />{" "}
          is anything below medium viewport width less than 40rem, or 640px,
          will take effect. Where as{" "}
          <CodeBlocks
            className="bg-gray-700 inline-block"
            language="TypeScript"
            code="min-md"
          />{" "}
          will take effect when the viewport is greater than 40rem/640px, and
          will persist for all viewport widths beyond that point.
        </p>
        <h3 className="underline decoration-honey mt-3">
          Where Is This Deployed?
        </h3>
        <p className="mt-3">
          The website is built and deployed from AWS Amplify. AWS Amplify can
          automatically detect and build/rebuild a website if it detects any
          changes to the source, much like GitHub actions can too. I also used
          GitHub pages and GitHub actions to do test deployments just to ensure
          it looked fine periodically.
        </p>
        <h3 className="underline decoration-honey mt-3">
          How Long Did This Take?
        </h3>
        <p>
          In total, if worked on every day, about a week, off and on. This was a
          personal project that just took a bit more time though because of
          other commitments. Though looking at the commit history exclusively,
          it was 3 weeks. Not bad, and is far less time than the V2, which took
          me a about 2.5 months of learning and researching on my own simply
          because of the volume of new stuff I was learning everyday.
        </p>
      </div>
    </div>
  );
};

export default NahRedNetV3;
