import { Code, dracula } from "react-code-blocks";
import { Link } from "react-router-dom";
import NRNImage from "@/components/imageComponents/nrnImage";
import { ClassStyles, IDStyles } from "@/styles";

const projURL = "https://github.com/NAlexH2/nahrednetv3";
export const NahRedNetV3 = () => {
  return (
    <div className="my-8 mx-5">
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
          <li className="mt-1 ml-5">Python</li>
          <li className="mt-1 ml-5">Flask/Jinja2</li>
          <li className="mt-1 ml-5">HTML & Tailwind CSS</li>
          <li className="mt-1 ml-5">
            {" "}
            <Link to="https://www.igdb.com/" id={IDStyles.TextLink}>
              IGDB
            </Link>{" "}
            and its{" "}
            <Link
              to="https://api-docs.igdb.com/#getting-started"
              id={IDStyles.TextLink}
            >
              API
            </Link>{" "}
          </li>
          <li className="mt-1 ml-5">
            {" "}
            <Link
              to="https://cloud.google.com/vision?hl=en"
              id={IDStyles.TextLink}
            >
              Google Cloud Vision AI API
            </Link>
          </li>
          <li className="mt-1 ml-5">Docker</li>
        </ul>
      </p>
      <div className="text-justify">
        <p className="mt-3">
          This website was put together for a final project during Fall term at
          Portland State University, and was started the 28th of November 2023
          and completed on the 6th of December 2023. The only requirements that
          we had to be concerned with (at the graduate level) was that it must
          incorporate 2 different API. It is a Flask application hosted on the
          Google Cloud Platform (GCP) through their Cloud Run service using a
          docker image built from the source I produced.
        </p>
        <p className="mt-3">
          I have had an idea for awhile that I wanted to turn into something
          more tangible: create a website that allows a person to explore the
          entirety of video game history. That is a tall order, especially for
          this final project! Having still wanted to make this, I elected to go
          a simpler path - allow people to query the Internet Games Database
          (IGDB) and see information regarding that search.
        </p>
        <p className="mt-3">
          I had also needed to select another API. During this brainstorming
          process, the class had just gone through learning how to use Google
          Cloud AI API, and I figured that generating labels to be used as the
          alt text on the games cover art would be a good idea. It is/was, but
          the training data isn&#39;t curated towards games cover art, so the
          results were mixed.
        </p>
        <p className="mt-3">
          For example: it knows who Mario is, but not Sonic (mostly). So if you
          look up a Mario and Sonic sports game, the alt text accurately
          generates for Mario, but not Sonic... Or any of the other characters
          that appear on the box art, again, mostly.
        </p>
        <h3 className="underline decoration-honey mt-3">Challenges</h3>
        <p className="mt-3">
          The hardest part of this project was parsing the data from the IGDB
          API after receiving it. Initially, I thought it was just getting the
          app to appear in the dev environment I was using, but the IGDB API is
          particularly stale.
        </p>
        <p className="mt-3">
          When retrieving information, some of the endpoints were
          non-functional, and so there were workarounds that had to be performed
          to get the exact data I needed. This included, but not limited to:
          obtaining the exact release date, the ESRB age rating, and only
          wanting to view actual real and released games.
        </p>
        <p className="mt-3">
          IGDB allows anyone, it seems, to upload and add a game to the
          database. This means there are games that are simply fan creations
          that don&#39;t live on the mainstream. This is fine, but it was
          interfering with more legitimate results causing these fan creations
          to have precedence over mainstream releases.
        </p>
        <p className="mt-3">
          I had to develop this workaround to source legit titles because of the
          limitations I had to set for both the IGDB API and Google Cloud Vision
          AI API. If the user attempted too many results, the page would
          eventually timeout instead of waiting for a response.
        </p>
        <h3 className="underline decoration-honey mt-3">
          Jinja Templates Are Pretty Cool!
        </h3>
        <p className="mt-3">
          One thing I had discovered working on this project and reading through
          documentation was that Jinja templates can smartly identify which HTML
          components to render based on if the response data was returned with
          or without certain information.
        </p>
        <p className="mt-3">
          In this example, I have a Jinja for loop going through a
          &#34;games&#34; response object (which has multiple results from the
          query the user did), and for each game, if{" "}
          {
            <Code
              // @ts-ignore
              language="TypeScript"
              text='game["aggregated_rating"]'
              theme={dracula}
            />
          }{" "}
          has data, then the score - out of 100 - would be displayed.
        </p>
        <p className="mt-3">
          However, if it does not have any data, the page will alert the user
          that for some reason IGDB currently does not have any critical reviews
          aggregated for a certain game. I had to do this for the ESRB rating as
          well, as it is possible for the IGDB to have a released game in their
          records, but missing the rating for one reason or another.
        </p>
        <h3 className="underline decoration-honey mt-3">
          How Long Did This Take?
        </h3>
        <p className="mt-3">
          I was given approximately 2 weeks to utilize all the knowledge from
          the class to finish this final project. However, I was finished in a
          far shorter amount of time, and the project was completed in
          approximately 6 days. I elected to work ahead of the class material as
          to give myself as much time needed to complete the project. Easing my
          future school work debt made this project incredibly manageable!
        </p>
      </div>
    </div>
  );
};

export default NahRedNetV3;
