import IDStyles from "@/styles/IDStyles.module.css";
import { Link } from "react-router-dom";

export const PresentBio = () => {
  const info: string = `
                As of January 2025, I am continuing my Master's degree in
                Computer Science at Portland State University, maintaining a
                3.94 GPA as I enter my second to final term. My journey began in
                September 2023, and I've built on my academic foundation
                through coursework, research, and professional experiences.

               
                During my first term, I delved into critical planning and design
                patterns, expanding my understanding of software development
                across projects of varying scales. While I had some foundational
                knowledge from my undergraduate studies, this deeper exploration
                provided new perspectives on designing efficient, scalable, and
                maintainable systems.


                I also completed a course titled "Internet, Web & Cloud
                Systems" which covered the complexities of developing
                cloud-based applications. For my final project, I designed and
                implemented a fully functional cloud application, further
                solidifying my expertise in modern web technologies and cloud
                platforms.


                Beyond my coursework, I authored a research paper in computer
                vision, exploring innovative techniques for solving real-world
                challenges. Additionally, my time at CDK Global provided
                invaluable hands-on experience, where I contributed to impactful
                projects, honed my technical skills, and collaborated with
                industry professionals.


`;
  return (
    <>
      <br />
      <h2 className="">Present:</h2>
      {info
        .trim()
        .split("\n\n") // Splitting by double newlines to separate paragraphs
        .map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph.trim()}
          </p>
        ))}
      <p>
        To learn more about my projects and ongoing work,{" "}
        <Link
          to="/projects"
          id={IDStyles.TextLink}
          target="_blank"
          className="transition-all"
        >
          please visit my projects page
        </Link>
        .
      </p>
    </>
  );
};
