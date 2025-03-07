import FuturesFor from "@/assets/images/projectImages/TriMetImages/PubFutureBlockingFor.png";
import CanBeRanExample from "@/assets/images/projectImages/TriMetImages/CanCodeBeRanExample.png";
import FlowDGM from "@/assets/images/projectImages/TriMetImages/TriMetFlowDgm.png";
import GDriveUpload from "@/assets/images/projectImages/TriMetImages/GdriveUpload.png";
import { Code, CodeBlock, dracula } from "react-code-blocks";
import { Link } from "react-router-dom";
import NRNImage from "@/components/imageComponents/nrnImage";
import { ClassStyles, IDStyles } from "@/styles";

const projURL = "https://github.com/NAlexH2/TriMet-Data-Pipeline-CS510";
const slidesLink =
  "https://docs.google.com/presentation/d/1zwebj1bL0xYedI6ku5EEljGD72pKLKqQsEkvEro4beA/edit?usp=drive_link";
const videoLink =
  "https://drive.google.com/file/d/13ah6aVZQ6AwBv5OBT88kJJH_HsmaSLNJ/view?usp=sharing";

const serviceCreated = `
# Create the authorization token
creds = service_account.Credentials.from_service_account_file(
  SERVICE_ACCOUNT_FILE, scopes=SCOPES
  )

# Use the authorization token to build the gdrive service connection
service = build("drive", "v3", credentials=creds)`;

const mediaStrucutre = `# Build the metadata that needs to be passed along to the creation
# function. This requires the name of the file, and the folder/path
# on the gdrive (the gdrive folder ID) to store it to.
file_metadata = {
  "name": files[i],
  "parents": [GDRIVE_DATA_MONTH_DAY],
}

# Create the endpoint to be stored to
media = MediaFileUpload(RAW_DATA_PATH + "/" + files[i])`;

export const TriMetPipeline = () => {
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
          TriMet Bus Vehicle Data Pipeline
        </Link>
      </div>
      <br />
      <p className="float-left border-r-5 border-b-5 mr-5 mb-4">
        <div className="text-2xl underline decoration font-medium decoration-honey">
          Tech Stack:
        </div>
        <ul className={`${ClassStyles.CustomList} mb-4`}>
          <li className="mt-1 ml-5">Google Cloud Platform (GCP)</li>
          <li className="mt-1 ml-5">
            Python
            <ul id={`${IDStyles.SubLists}`} className="ml-5">
              <li>
                <Link
                  to="https://pandas.pydata.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={IDStyles.TextLink}
                  className="-ml-2"
                >
                  Pandas
                </Link>
              </li>
              <li>
                <Link
                  to="https://pypi.org/project/requests/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={IDStyles.TextLink}
                  className="-ml-2"
                >
                  Requests
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.psycopg.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={IDStyles.TextLink}
                  className="-ml-2"
                >
                  Psycopg2
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.crummy.com/software/BeautifulSoup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id={IDStyles.TextLink}
                  className="-ml-2"
                >
                  Beautiful Soup 4
                </Link>
              </li>
            </ul>
          </li>
          <li className="mt-1 ml-5">Linux System Services</li>
          <li className="mt-1 ml-5">Bash</li>
          <li className="mt-1 ml-5">CRON Tabs</li>
          <li className="mt-1 ml-5">PostgreSQL</li>
          <li className="mt-1 ml-5">JSON</li>
        </ul>
      </p>
      <div className="text-justify">
        <p className="mt-3">
          This pipeline was part of a class project, but was significant in
          scale that students had a chance to experience the full length of
          constructing and managing a data pipeline. The data was provided
          freely and graciously by{" "}
          <Link
            to="https://trimet.org/about/index.htm"
            target="_blank"
            rel="noopener noreferrer"
            id={IDStyles.TextLink}
          >
            TriMet
          </Link>{" "}
          (Portland Metro area public transportation).
        </p>
        <p className="mt-3">
          Students had the option to either work on it in a group of 4 to 6
          people, or on their own. I elected to do the project solo as I had
          wanted to really push my Python skills to limit and also gain the full
          experience of learning from the process, end to end. This benefited me
          greatly as I learned more than I expected, and found myself enjoying
          it more than any other project I've ever worked on in school.
        </p>
        <p className="mt-3">
          Because of this, I found myself looking more for data engineering
          roles over others. I began also doing side projects that were just
          exploring accessing and harvesting data from other places on the net
          just to explore this specialization of software engineering a bit
          more.
        </p>
        <p className="mt-3">
          I've made my google{" "}
          <Link
            to={slidesLink}
            target="_blank"
            rel="noopener noreferrer"
            id={IDStyles.TextLink}
          >
            slides
          </Link>{" "}
          and the{" "}
          <Link
            to={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            id={IDStyles.TextLink}
          >
            video presentation
          </Link>{" "}
          public to view for the final stage of the project. These both were
          part of the final milestone requirement, and there was no in-person
          presentation conducted by instruction of the professor.
        </p>
        <p className="mt-3">
          Another important thing to note: each day we were expected to collect
          data, and if that day passed, that data was lost, and we would have
          incomplete data. This will come up in the near future of this writeup.
        </p>
        <p className="mt-3">
          We were expected to pull data from two endpoints daily. Initially it
          was just a breadcrumb of a given group of vehicles (I had the
          'snickers' vehicle group). Each group consisted of almost 100 vehicles
          each. Each vehicle had a fluctuating amount of breadcrumb data. What's
          in a breadcrumb? Event trip id, stop id, date, vehicle id, distance
          traveled in meters, activity time in seconds (counts up from 0
          starting at midnight), GPS longitude and GPS latitude. There was also
          the number of GPS satellites the bus was tracking, as well as a
          GPS_HDOP value - neither of these were retained in the final database
          that was built, but were incredibly helpful for validating data.
        </p>
        <p className="mt-3">
          Now how did this pipeline flow. By the end of the project there were 3
          different virtual machines setup on GCP: first was to pull breadcrumb
          data, another was to pull stop event data, and the last was to manage
          the assertions and transformations on the data then put it into a
          PostgreSQL database. The first two VM would publish, while the last VM
          would subscribe and wait for the data to come through.
        </p>
        <div className="flex justify-center">
          <NRNImage
            src={FlowDGM}
            className="p-5 max-h-[250px] w-auto"
            alt={`A block diagram showing 2 virtual machines pushing to google pub/sub. Then pub/sub sending data to a 3rd vm.`}
          ></NRNImage>
        </div>
        <div className="text-center -mt-4 mb-5 text-xs">
          The block diagram for the dataflow from the 2 end points to the PSQL
          database.
        </div>
        <h2 className="underline decoration-honey mt-3">Challenges</h2>
        <div className="mx-5">
          <h3 className="underline decoration-honey mt-3">
            Wrong Google Cloud Python Package
          </h3>
          <p className="mt-3">
            There were many instances where I hit blockers. A prominent one at
            the very start of the project was issue of Google Pub/Sub
            performance. Initially, the Python script managing the subscribing
            part of the pipeline was using{" "}
            <Code
              language="Python"
              text="googleapiclient.discovery"
              theme={dracula}
            />{" "}
            package. Instead it should have been using{" "}
            <Code language="Python" text="google.cloud" theme={dracula} />{" "}
            package, and once this was corrected and the code refactored, the
            subscribing went from around 12 hours, down to about 4 minutes for
            around 300k daily records. The publishing also was impacted by this
            oversight, going from 1.5 hours down to somewhere between 5 and 10
            seconds for the same number of records.
          </p>
          <h3 className="underline decoration-honey mt-3">
            Many Pending Threads
          </h3>
          <p className="mt-3">
            Another issue encountered was{" "}
            <b>data was being dropped after being sent to the publisher.</b>{" "}
            This wasn't a package issue, but rather an issue with how messages
            were acknowledged after being published. This is called a "future"
            in this context.
          </p>
          <div className="flex justify-center">
            <NRNImage
              src={FuturesFor}
              className="p-5 max-h-[100px] w-auto"
              alt={`Python for loop that would loop until all futures were completed.`}
            ></NRNImage>
          </div>
          <div className="text-center -mt-4 mb-5 text-xs">
            A blocking for loop to prevent early termination by the script.
          </div>
          <p className="mt-3">
            This was something I had to figure out farther into the project than
            I had liked. Given a list of futures waiting for results from, a
            blocking for loop was used to wait until they are all properly
            popped from this list. This ensures all messages are published
            before moving on. This is <b>A</b> solution, and it's because not
            all{" "}
            <Code language="Python" text="future.results()" theme={dracula} />{" "}
            happen quick enough, and threads get piled up and may be lost when
            the script ends. Because of this, the missing acknowledgment was
            causing several thousands of records to just never be sent. The time
            it took to publish all of this data wasn't actually because of the
            pending threads, just the amount of data being sent - 99% of the
            time spent on publishing was actually spent on publishing, not
            waiting for pending threads.
          </p>
          <h3 className="underline decoration-honey mt-3">
            Having Complete Data
          </h3>
          <p className="mt-3">
            Complete data in this context means I had data from every day of the
            term. As mentioned in the opening segment of this project, if a day
            was missed, that data was permanently lost. This challenge was
            solved by two approaches: modular design of the entire pipeline and
            backing up the data. Let me discuss the modular design first, as it
            paints the picture for how I was able to have complete data for the
            entire pipeline.
          </p>
          <p className="mt-3">
            <div className="font-bold underline decoration-honey">
              For the modular design:
            </div>
            Each Python file written was capable of running entirely
            independently of the entire pipeline for both debugging and testing
            purposes. You are probably wondering then, how can a pipeline be a
            pipeline if each piece can operate independently of the other? Well,
            each script has certain requirements to be able to actually run.
            Most require either data to have been pulled down from the endpoints
            provided to us by the University, or to have existing data sitting
            in another directory from the publisher. Comments exist at the top
            of each file indicating if a chunk of this pipeline can be ran
            independently, or under what conditions it can be ran. Again, this
            was mostly for debugging and testing purposes!
          </p>
          <div className="flex justify-center">
            <NRNImage
              src={CanBeRanExample}
              className="p-5 max-h-[100px] w-auto"
              alt={`Python comments explaining the conditions in which a Python file can be ran.`}
            ></NRNImage>
          </div>
          <div className="text-center -mt-4 mb-5 text-xs">
            Python comments explaining the conditions in which a Python file can
            be ran.
          </div>
          <p className="mt-3">
            <div className="font-bold underline decoration-honey">
              Backing up data:
            </div>
            Backing all the data up that was collected was several approaches.
            Initially, I would just save it to my computer locally. Not ideal,
            but it's what I had for the moment, and that was okay! However, I
            quickly wanted to automate this with one of the virtual machines I
            was running the code on. Discovering the service account was a
            google email of sorts, I was able to give the account permission to
            my school provided google drive. Once this was done, I was able to
            send all the data to the drive daily, automatically.
          </p>
          <div className="flex justify-center">
            <NRNImage
              src={GDriveUpload}
              className="p-5 max-h-[100px] w-auto"
              alt={`Code snippet that shows the upload to google drive.`}
            ></NRNImage>
          </div>
          <div className="text-center -mt-4 mb-5 text-xs">
            Code snippet that shows the upload to google drive.
          </div>
          <p className="mt-3">
            Here's how the{" "}
            <Code language="Python" text="body" theme={dracula} /> and{" "}
            <Code language="Python" text="media_body" theme={dracula} /> were
            created:
          </p>
          <CodeBlock language="Python" text={mediaStrucutre} theme={dracula} />{" "}
          <p className="mt-3">
            The service object was created in the following way:
          </p>
          <CodeBlock language="Python" text={serviceCreated} theme={dracula} />{" "}
          <p className="mt-3">
            This is just a small snippet of the file, but these few lines
            essentially facilitate the entire backup from local storage to the
            cloud. For every file pulled from the endpoint, it would be uploaded
            to the cloud in this loop that exists, you just can't see it. If you
            want to see it, you can go look at the backup code{" "}
            <Link
              to="https://github.com/NAlexH2/TriMet-Data-Pipeline-CS510/blob/main/src/mainpipe/uploadgdrive.py"
              target="_blank"
              rel="noopener noreferrer"
              id={IDStyles.TextLink}
            >
              here
            </Link>
            .
          </p>
        </div>
        <h2 className="underline decoration-honey mt-3">Lessons Learned</h2>
        <p className="mt-3">
          <ul className={`${ClassStyles.CustomList} mx-5`}>
            <li className="mt-1">
              Optimizing Data Processing: Learned how to efficiently handle
              real-time data streams, particularly the importance of optimizing
              Pub/Sub for fast data publishing and subscribing.
            </li>
            <li className="mt-1">
              Handling Large-Scale Data: Gained experience in managing and
              processing massive datasets, understanding database performance
              considerations, and the importance of structuring queries for
              scalability.
            </li>
            <li className="mt-1">
              Effective Use of Cloud Services: Deepened my understanding of
              integrating cloud services like Google Pub/Sub and PostgreSQL, and
              the significance of selecting the right libraries for seamless
              service communication.
            </li>
            <li className="mt-1">
              Troubleshooting and Debugging: Improved my troubleshooting skills
              by addressing synchronization issues and fine-tuning system
              performance, ensuring timely data updates.
            </li>
            <li className="mt-1">
              Automation and Reliability: Gained insight into system automation
              (via crontabs and scheduled tasks) and the importance of backup
              strategies to maintain data integrity and reliability.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default TriMetPipeline;
