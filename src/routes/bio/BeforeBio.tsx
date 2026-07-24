import IDStyles from "@/styles/IDStyles.module.css";
import { Link } from "react-router-dom";

export const BeforeBio = () => {
  const info: string = `
                I enlisted in the Navy in 2012 as an Electronics Technician.
                Four of those years were aboard the USS Theodore Roosevelt,
                where I ran three maintenance work centers and kept the ship's
                external radio communications alive, in and out of homeport and
                through a seven month deployment that took us from Norfolk,
                Virginia the long way around the world to San Diego,
                California. A considerable distance to cover to end up in the
                same country. Then three years at Commander Fleet Activities
                Sasebo, Japan, handling logistics for US, Japanese, Australian,
                Canadian and Indian naval forces during port visits, running
                helicopter operations in and out of the base, and giving weekly
                operations intelligence briefings to the command triad. I left
                in 2020 as a Second Class Petty Officer.

                The Navy is where I picked up the parts of this work that
                aren't code. How to read a procedure and understand why it
                exists, how to hand something off cleanly, and how to work
                alongside people who are counting on you. Things break
                regardless of how careful anyone is. What you can control is
                being steady while you sort it out.

                Portland State came next. I finished my BS, spent nearly four
                years as a teaching assistant walking first year students
                through their first programs, interned at CDK Global migrating
                a Pick database to AWS Aurora in C++ for a 542% pipeline
                speedup, and completed my Master's in June 2025 with a 3.95
                GPA. Along the way I spent a term researching and writing a
                paper on computer vision, and built a solo data pipeline for
                live TriMet transit data that is still the most I've enjoyed
                any project in school.
`;
  return (
    <>
      <br />
      <h2 className="mt-5 mb-2">Before:</h2>
      {info
        .trim()
        .split("\n\n") // Splitting by double newlines to separate paragraphs
        .map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph.trim()}
          </p>
        ))}
      <p>
        To see the work itself,{" "}
        <Link to="/projects" id={IDStyles.TextLink} className="transition-all">
          please visit my projects page
        </Link>
        .
      </p>
    </>
  );
};
