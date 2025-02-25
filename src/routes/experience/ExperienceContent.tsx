import ContentBtn from "@/components/buttons/ContentBtn";
import experienceInfo from "./ExperienceInfo";
import { ReactElement, useEffect, useState, useRef } from "react";
import { ClassStyles } from "@/styles";

export const ExperienceContent = () => {
  const [actBtn, setIsActBtn] = useState(0);
  const [actBtnData, setActBtnData] = useState<ReactElement<any, any> | null>(
    null,
  );
  const buttonRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Initialize refs array with the correct length
  useEffect(() => {
    buttonRefs.current = Array(experienceInfo.length).fill(null);
  }, []);

  useEffect(() => {
    setActBtnData(buildComponent(actBtn));

    // Handle scrolling on small screens
    if (
      typeof window !== "undefined" &&
      window.innerWidth < 768 &&
      buttonRefs.current[actBtn] &&
      containerRef.current
    ) {
      // TODO not working
      // Scroll the button into view with smooth behavior
      // containerRef.current.scrollLeft =
      //   buttonRefs.current[actBtn]!.offsetLeft -
      //   containerRef.current.offsetWidth +
      //   buttonRefs.current[actBtn]!.offsetWidth / 2;
    }
  }, [actBtn]);

  const buildComponent = (actBtn: number) => {
    const info = experienceInfo[actBtn];
    const info_content = info.content.trim().split("\n\n");
    return (
      <>
        <h2 id="experience-date">
          <div className="flex justify-center max-md:mt-5 max-sm:text-xl text-3xl font-bold mb-3">
            {info.dates}
          </div>
        </h2>
        <div className="max-md:grid max-md:grid-cols-7">
          <ul className="max-md:col-start-1 max-md:col-end-8 max-md:ml-5">
            {info_content.map((content, index) => {
              const content_trim = content.trim();
              if (content_trim.startsWith("###")) {
                // Handle h3 headings
                return (
                  <h3
                    className="max-md:flex max-md:justify-center mt-2 max-sm:!text-lg min-md:ml-4"
                    key={index}
                  >
                    {content_trim.substring(3)}
                  </h3>
                );
              } else if (content_trim.startsWith("##")) {
                // Handle h2 headings
                return (
                  <h2
                    className="max-md:flex max-md:justify-center mt-5 max-sm:!text-xl min-md:ml-4"
                    key={index}
                  >
                    {content_trim.substring(2)}
                  </h2>
                );
              } else {
                // Regular list items
                return (
                  <li
                    className="max-md:col-start-2 max-md:col-end-7 max-md:my-2 max-md:text-justify min-md:ml-10
                      min-md:mt-2.5"
                    key={index}
                  >
                    {content_trim}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </>
    );
  };

  // Correct way to set refs in a list
  const setButtonRef = (el: HTMLDivElement | null, index: number) => {
    buttonRefs.current[index] = el;
  };

  return (
    <>
      <div
        className="col-start-1 col-end-8 min-md:hidden max-md:mb-3 max-md:justify-center text-lg
          text-left place-self-center"
      >
        Swipe and tap to see more
      </div>
      <div
        className={
          "max-md:col-start-3 max-md:col-end-6 min-md:col-start-1 min-md:col-end-7"
        }
      >
        <div className="max-md:flex max-md:justify-center max-md:ml-0.5">
          <div
            ref={containerRef}
            className={`max-md:-mt-4 max-md:flex max-md:justify-start max-md:overflow-x-scroll
              max-md:min-w-80 max-md:border-l-5 max-md:border-r-5 max-md:border-jade
              max-md:rounded-4xl min-md:grid min-md:grid-rows-${experienceInfo.length}
              ${ClassStyles.ExperienceBar}`}
          >
            {experienceInfo.map((item, index) => (
              <div key={index} ref={el => setButtonRef(el, index)}>
                <ContentBtn
                  btnClassName="m-2 p-2 max-md:min-w-55 min-md:min-w-65 max"
                  btnText={item.title}
                  btnSubText={item.subtitle}
                  selected={index === actBtn}
                  onClick={() => setIsActBtn(index)}
                />
              </div>
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
