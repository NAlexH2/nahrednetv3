import SafeWebsite from "@/assets/images/projectImages/SafeImages/SafeWebsite.png";
import NRNImage from "@/components/imageComponents/nrnImage";
import { ClassStyles, IDStyles } from "@/styles";
import { Link } from "react-router-dom";

const projURL = "https://github.com/PSU-MCECS-SAFE/SAFE";
export const Safe = () => {
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
          SAFE - System for Anonymous Feedback
        </Link>
      </div>
      <br />
      <p className="float-left border-r-5 border-b-5 mr-5 mb-2">
        <div className="text-2xl mr-10 underline decoration font-medium decoration-honey">
          Tech Stack:
        </div>
        <ul className={`${ClassStyles.CustomList} mb-4`}>
          <li className="mt-1 ml-5">TypeScript</li>
          <li className="mt-1 ml-5">React</li>
          <li className="mt-1 ml-5">MaterialUI</li>
          <li className="mt-1 ml-5">NodeJS</li>
          <li className="mt-1 ml-5">Express</li>
          <li className="mt-1 ml-5">REST API</li>
          <li className="mt-1 ml-5">
            <Link to="https://pm2.keymetrics.io/" id={IDStyles.TextLink}>
              PM2
            </Link>
          </li>
          <li className="ml-5">Python</li>
        </ul>
      </p>
      <div className="text-justify">
        <p>
          In our final two terms as Undergraduate students at Portland State
          University, we are tasked with developing a product that can be used
          within the community called a &#34;Capstone Project&#34;. The purpose
          of this project is to not only give back to the Portland community in
          some way, but to also demonstrate the skills and abilities we have
          learned in the years we&#39;ve attended PSU.
          <p className="mt-3">
            These projects are essentially auctioned off to the team who is the
            most convincing they can succeed at it. Teams are selected by the
            people who requested to be a team lead at the start of the first
            term. The SAFE project was in high-demand by all teams as it was
            something people felt was important - a project that gave back not
            to any community, the community we were all part of: PSU&#39;s
            Computer Science Department.
          </p>
        </p>
        <div className="max-md:flex max-md:justify-center md:float-right">
          <NRNImage
            src={SafeWebsite}
            className="p-5 max-h-96 w-auto"
            alt={`An image displaying the SAFE which shows the website has
            several forms to fill out and a button to submit. The image also
            shows additional resources available to students.`}
          >
            {" "}
            <div className="text-center -mt-4 mb-1 text-xs">
              Screenshot of feedback.cs.pdx.edu
            </div>
          </NRNImage>
        </div>
        <p className="mt-3">
          The front is put together is a React app using TypeScript as the
          language. Components came from Material UI, with styling and CSS are
          done natively by modifying CSS attributes directly or using a styling
          component.
        </p>
        <p className="mt-3">
          <div>The backend has several components to it:</div>
          <ul className={ClassStyles.CustomList}>
            <li className="mt-2 ml-7">
              PostgreSQL Database to capture and store feedback.
            </li>
            <li className="mt-1 ml-7">
              Express REST API to capture POST requests from the website and
              store them inside the database.
            </li>
            <li className="mt-1 ml-7">
              Configuration file that can be updated seamlessly to transfer
              message receipts to another individual.
            </li>
            <li className="mt-1 ml-7">
              PM2 to restart the REST API in the event there are configuration
              changes.
            </li>
            <li className="mt-1 ml-7">
              Python deployment script to make setup as simple as possible and
              support production like environment testing.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Safe;
