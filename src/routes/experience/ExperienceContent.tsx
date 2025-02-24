import ContentBtn from "@/components/buttons/ContentBtn";
import accordionInfo from "./ExperienceInfo";

export const ExperienceContent = () => {
  return (
    <div className="col-start-1 col-end-5">
      <div className={`grid grid-rows-${accordionInfo.length}`}>
        {accordionInfo.map((item, index) => (
          <ContentBtn key={index} btnText={item.title} />
        ))}
      </div>
    </div>
  );
};
