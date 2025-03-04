import { NRNImage } from "components/ui/imageComponents";
import HGCode from "/public/images/projectImages/HaskellGoSnippet.png";
import Link from "next/link";
import { IDStyles, ClassStyles } from "styles";
import { CodeBlock, dracula, Code } from "react-code-blocks";
import AnimateTx from "components/utils/animateTx";

const separateUnits = "[[0,1,3],[2,3],[3,5,6],[4,7],[5,8]]";
const unionedUnits = "[[0,1,2,3,5,6,8],[4,7]]";

const projURL = "https://github.com/NAlexH2/HaskellGo";
export const HaskellGo = () => {
  return (
    <AnimateTx>
      <div className="my-8 mx-5">
        <div className="text-center">
          <Link
            href={projURL}
            passHref={true}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl italic underline decoration-[var(--honey)] font-semibold"
            id={IDStyles.UniLink}
          >
            HaskellGo
          </Link>
        </div>
        <br />
        <p className="float-left mr-10">
          <div className="text-2xl underline decoration font-medium decoration-[var(--honey)]">
            Tech Stack:
          </div>
          <ul className={`${ClassStyles.CustomList} float-left`}>
            <li className="mt-1 ml-5">Haskell</li>
            <li className="mt-1 ml-5">Haskell Language Server</li>
            <li className="mt-1 ml-5">GHC</li>
            <li className="mt-1 ml-5">Cabal</li>
          </ul>
        </p>
        <div className="text-justify">
          <p>
            The game of &#34;Go&#34; is ancient and the first instances of the
            game being played goes back around 4,000 years ago in China. It has
            stood the test of time and is still enjoyed by many people world
            wide. This repository is an attempt to re-create the game using
            Haskell as the language of choice while utilizing{" "}
            <Link
              href="https://docs.haskellstack.org/en/stable/"
              passHref={true}
              target="_blank"
              rel="noopener noreferrer"
              id={IDStyles.UniLink}
            >
              The Haskell Tool Stack.
            </Link>
          </p>
          <div className="flex justify-center">
            <NRNImage
              src={HGCode}
              className="p-5 max-h-96 w-auto"
              alt={`Code snippet from the phone bill manager project`}
            >
              <div className="text-center -mt-4 mb-4 text-xs">
                An interesting snippet found in GoCapture.hs
              </div>
            </NRNImage>
          </div>
          <h1 className="text-[var(--toastedalmond)] mt-6">
            Major Challenges and Their Solutions
          </h1>
          <h3 className="text-[var(--toastedalmond)] underline decoration-[var(--honey)] ml-4 mt-1">
            Capturing Units - CaptureGo.hs
          </h3>
          <p className="mt-3 mx-4">
            Firstly, let me explain some vocabulary you will see coming up.
            <ul className={ClassStyles.CustomList}>
              <li className="mt-2 mx-7">
                <b className="text-white">Unit:</b> A collection of stones of
                the same color where their cardinal intersections (north, south,
                east, west) connect.
              </li>
              <li className="mt-1 mx-7">
                <b className="text-white">Liberties:</b> The cardinal positions
                of a stone that are currently <i>empty</i>. This means that no
                stone has yet to be placed next to another stone, regardless of
                the color.
              </li>
            </ul>
          </p>
          <p className="mt-3 mx-4">
            This was the task that took me the longest to figure out. I could
            not manage to find a way for a period of time on what solution would
            work best. At a certain point I ran into the issue of having 3-5
            functions attempting to tackle this issue. I took step back and
            re-examined the issue. Each &#34;stone&#34; in a unit must lose all
            its liberties to be considered captured.
          </p>
          <p className="mt-3 mx-4">
            Once I realized all I had to do was examine each stone to check its
            liberties and then check all the other stones in that unit for the
            same instance of losing all their liberties. From there, the code
            returned True or False for each stone - True if it lost all its
            liberties, False if any of its liberties were not occupied - if any
            were False, then the unit had not been captured, if all were True
            then the unit had been captured.
          </p>
          <h3 className="text-[var(--toastedalmond)] underline decoration-[var(--honey)] ml-4 mt-6">
            Identifying Units - CaptureGo.hs
          </h3>
          <p className="mt-3 mx-4">
            This was the 2nd most difficult task, weirdly enough. It had felt
            (at first) as if it was going to take me the entire duration of the
            project but I found myself noticing a pattern in the code I had
            already wrote.
          </p>
          <p className="mt-3 mx-4">
            This pattern actually saved me a lot of time trying to generate a
            solution and realized that my arrays had something along these lines
            of overlapping values:
            <div className="my-3">
              <CodeBlock
                text={separateUnits}
                language="TypeScript"
                showLineNumbers={false}
                theme={dracula}
              />
            </div>
          </p>
          <p className="mt-3 mx-4">
            Once recognizing this pattern, and a bit more research,{" "}
            {
              <Code
                // @ts-ignore
                language="TypeScript"
                text="a `union` b"
                theme={dracula}
                showLineNumbers={false}
              />
            }{" "}
            could do a lot of heavy lifting in identifying my overlapping
            values. There is a lot of summarizing happening I will admit, but
            with some fancy logic and a bit of function composition the above
            array came out to a nice neat list of lists like this:
            <div className="my-3">
              <CodeBlock
                text={unionedUnits}
                language="TypeScript"
                showLineNumbers={false}
                theme={dracula}
              />
            </div>
          </p>
          <p className="mt-3 mx-4">
            Where the first was all the Black stones in a unit, and the second
            was all the White stones in a unit. This part was not explicitly
            ordered this way, but the example comes from a real list I had
            generated while working on the problem with testBoard2 in GoTests.hs
          </p>
          <p className="mt-3 mx-4">
            This then allowed me to start working on identifying which stones
            needed to be captured. Single stones were trivial in comparison.
          </p>
        </div>
      </div>
    </AnimateTx>
  );
};

export default HaskellGo;
