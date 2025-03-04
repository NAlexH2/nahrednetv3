import { NRNImage } from "@/components/imageComponents";
import PBCode from "@/assets/images/phonebill-android.png";
import { ClassStyles } from "@/styles";
import IDStyles from "@/styles/IDStyles.module.css";
import { Link } from "react-router-dom";

const projURL = "https://github.com/NAlexH2/phonebill-android-project";
export const PhoneBill = () => {
  return (
    <div className="my-8 mx-5">
      <div className="text-center">
        <Link
          to={projURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl italic underline decoration-[var(--honey)] font-semibold"
          id={IDStyles.TextLink}
        >
          Phone Bill Manager
        </Link>
      </div>
      <br />
      <p className="float-left mr-10 mb-2">
        <div className="text-2xl underline decoration font-medium decoration-[var(--honey)]">
          Tech Stack:
        </div>
        <ul className={`${ClassStyles.CustomList} float-left`}>
          <li className="mt-1 ml-5">Android Studio</li>
          <li className="mt-1 ml-5">Maven</li>
          <li className="mt-1 ml-5">JUnit</li>
          <li className="mt-1 ml-5">JaCoCo</li>
        </ul>
      </p>
      <div className="text-justify">
        <p>
          This was a project that was given to me during my summer 2022 term at
          Portland State University in the &#34;Advanced Programming with
          Java&#34; class where I did incremental development on various
          projects that culminated our knowledge to this point. All skills and
          tools I learned throughout the term were put to the test for this
          project and required us to develop a simple (but functional) toy
          android application to &#34;manage&#34; customer phone bills.
        </p>
        <div className="max-md:flex max-md:justify-center md:float-right">
          <NRNImage
            src={PBCode}
            className="p-5 max-h-96 w-auto"
            alt={`Code snippet from the phone bill manager project`}
          >
            <div className="text-center -mt-4 mb-4 text-xs">
              Code snippet of the Phone Bill Android app
            </div>
          </NRNImage>
        </div>

        <p className="mt-3">
          The previous projects took on different forms using basic command line
          programs which took in command line arguments to handle the user&#39;s
          request. Each of these projects required tests to support sufficient
          code coverage and included documentation as well.
        </p>
        <p className="mt-3">
          The first required simply adding and tracking a single customers bill
          The second required tracking the customer&#39;s bill in a text file
          The third required tracking multiple customers, the dates, times,
          duration, and sorting based on the date/time. If date/time were the
          same, then sort by the phone number and finally &#34;pretty
          printing&#34; all this data to make it human readable.
        </p>
        <p className="mt-3">
          The fourth used the REST API and utilized a Java servlet to handle
          requests from the command line. The user would enter in data to
          request/add/search for and the servlet would respond. All data was
          kept in volatile memory and not stored permanently in any sort of way.
          The requirements were fairly similar to the previous projects (aside
          from the fourth). It had to store data, be human readable, and
          searchable.
        </p>
        <p className="mt-3">
          All of these prior projects put me on the path to develop something
          fun and interesting as I did with the Android Phone Bill Manager
          mobile application.
        </p>
      </div>
    </div>
  );
};

export default PhoneBill;
