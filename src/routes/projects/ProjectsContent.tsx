import ContentBtn from "@/components/buttons/ContentBtn";
import projectInfo from "./projectsData";
import { ReactElement, useEffect, useState, useRef } from "react";
import { ClassStyles } from "@/styles";

export const ProjectsContent = () => {
  const [actBtn, setIsActBtn] = useState(0);
  const [actBtnData, setActBtnData] = useState<ReactElement<any, any> | null>(
    null,
  );
  const buttonRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const btnId = "btn#";

  useEffect(() => {
    buttonRefs.current = Array(projectInfo.length).fill(null);
  }, []);

  useEffect(() => {
    setActBtnData(buildComponent(actBtn));

    const ele = document.getElementById(btnId.concat(actBtn.toString()));
    if (
      typeof window !== "undefined" &&
      window.innerWidth < 768 &&
      buttonRefs.current[actBtn] &&
      containerRef.current
    ) {
      if (ele) {
        ele.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }
  }, [actBtn]);

  const buildComponent = (actBtn: number) => {
    const info = projectInfo[actBtn];
    return (
      <>
        <h2 id="experience-date">
          <div className="flex justify-center max-md:mt-5 max-sm:text-xl text-3xl font-bold mb-3">
            {info.dates}
          </div>
        </h2>
        <div>{info.content}</div>
      </>
    );
  };

  const setButtonRef = (el: HTMLDivElement | null, index: number) => {
    buttonRefs.current[index] = el;
  };

  return (
    <>
      <div className="transition-all">
        <div className="max-md:grid max-md:grid-cols-7">
          <div
            className="max-md:col-start-1 max-md:col-end-8 min-md:hidden max-md:justify-center text-lg
              text-left place-self-center max-md:mt-4 max-md:-mb-1"
          >
            Swipe and tap to see more
          </div>
        </div>
        <div className="max-md:flex max-md:justify-center">
          <div
            ref={containerRef}
            className={`${ClassStyles.ExperienceBar} min-md:flex min-md:flex-wrap min-md:justify-center
              max-md:max-w-80 max-md:flex max-md:overflow-x-scroll max-md:min-w-80
              max-md:border-l-5 max-md:border-r-5 max-md:border-jade max-md:rounded-4xl`}
          >
            <div
              className={
                "flex justify-center min-md:mt-5 min-md:flex-wrap min-md:max-w-200"
              }
            >
              {projectInfo.map((item, index) => (
                <div
                  id={btnId.concat(index.toString())}
                  key={index}
                  ref={el => setButtonRef(el, index)}
                >
                  <a href={`#${btnId.concat(index.toString())}`} />
                  <ContentBtn
                    btnClassName="m-2 p-2 max-md:min-w-45 min-md:min-w-55"
                    btnText={item.title}
                    selected={index === actBtn}
                    onClick={() => setIsActBtn(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid max-md:grid-cols-7 min-md:grid-cols-16">
        <div
          className="max-md:col-start-1 max-md:col-end-8 min-md:ml-2 min-md:col-start-2
            min-md:col-end-16 min-md:mt-3"
        >
          {actBtnData}
        </div>
      </div>
    </>
  );
};

export default ProjectsContent;
