import { useState } from "react";
import experienceInfo from "./ExperienceInfo";

export const ExperienceAccordion = () => {
  const [accordion, setAccordion] = useState<number | null>(null);
  const firstItem: number = 0; //Just a nice keyword
  const lastItem: number = experienceInfo.length - 1; //ID our final accordion item
  const handleAccordion = (index: number) => {
    console.log(index === accordion);
    if (index === accordion) {
      let activeID: string | null = null;
      setAccordion(activeID);
    } else {
      console.log("index: ", index);
      setAccordion(index);
      console.log("accordion: ", accordion);
    }
  };
  const setAccordionStyle = (index: number) => {
    const commonAccordionStyles = {
      borderLeft: "10px solid var(--jade)",
      borderRight: "10px solid var(--jade)",
    };

    if (index === firstItem) {
      return {
        ...commonAccordionStyles,
        borderTop: "10px solid var(--jade)",
        borderBottom: "10px solid var(--jade)",
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0",
        borderTopRightRadius: "0.5rem",
        borderTopLeftRadius: "0.5rem",
      };
    } else if (index === lastItem) {
      return {
        ...commonAccordionStyles,
        borderBottom: "10px solid var(--jade)",
        borderBottomRightRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem",
        borderTopRightRadius: "0",
        borderTopLeftRadius: "0",
      };
    } else {
      return {
        ...commonAccordionStyles,
        borderBottom: "10px solid var(--jade)",
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0",
        borderTopRightRadius: "0",
        borderTopLeftRadius: "0",
      };
    }
  };
  return (
    <div className="col-start-2 col-end-16">
      {experienceInfo.map((item, index) => (
        <div
          key={index}
          onClick={() => handleAccordion(item.id)}
          className="transition-all hover:cursor-pointer p-3 text-black bg-jade"
          style={setAccordionStyle(index)}
        >
          <div className="transition-all border-3 border-black rounded-lg bg-tp-almond -m-3 p-5">
            {item.title}
            <div className="transition-all hover:cursor-default">
              {accordion === item.id ? item.dates : ""}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
