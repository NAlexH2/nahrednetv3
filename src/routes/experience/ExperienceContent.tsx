import ContentBtn from "@/components/buttons/ContentBtn";
import experienceInfo from "./ExperienceInfo";
import { ReactElement, useEffect, useState } from "react";
import { ClassStyles } from "@/styles";

export const ExperienceContent = () => {
  const [actBtn, setIsActBtn] = useState(0);
  const [actBtnData, setActBtnData] = useState<ReactElement<any, any> | null>(
    null,
  );
  useEffect(() => {
    setActBtnData(buildComponent(actBtn));
  }, [actBtn]);
  const buildComponent = (actBtn: number) => {
    const info = experienceInfo[actBtn];
    const info_content = info.content.trim().split("\n\n");
    return (
      <>
        <h2 id="experience-date">
          <div className="max-md:flex max-md:justify-center max-md:mt-5 min-md:ml-5 text-left text-2xl">
            {info.dates}
          </div>
        </h2>
        <ul>
          {info_content.map((content, index) => (
            <li
              className="max-md:ml-10 max-md:my-2 max-md:text-justify min-md:ml-10 min-md:mt-2.5"
              key={index}
            >
              {content}
            </li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <>
      <div
        className={
          "max-md:col-start-3 max-md:col-end-6 min-md:col-start-1 min-md:col-end-7"
        }
      >
        <div className="max-md:flex max-md:justify-center">
          <div
            className={`max-md:-mt-4 max-md:pl-2 max-md:pr-2 max-md:flex max-md:justify-start
              max-md:overflow-y-scroll max-md:min-w-90 max-md:border-l-5 max-md:border-r-5
              max-md:border-jade max-md:rounded-4xl min-md:grid
              min-md:grid-rows-${experienceInfo.length} ${ClassStyles.ExperienceBar}`}
          >
            {experienceInfo.map((item, index) => (
              <ContentBtn
                key={index}
                btnClassName="m-2 p-2 max-md:min-w-70"
                btnText={item.title}
                btnSubText={item.subtitle}
                selected={index === actBtn}
                onClick={() => setIsActBtn(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="max-md:col-start-1 max-md:col-end-8 min-md:ml-2 min-md:col-start-7
          min-md:col-end-17"
      >
        {actBtnData}
      </div>
    </>
  );
};
