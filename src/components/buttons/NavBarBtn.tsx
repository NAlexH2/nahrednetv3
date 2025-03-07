import { useEffect, useState } from "react";
import IDStyles from "@/styles/IDStyles.module.css";

interface MButtonProps {
  btnText: string;
  routedPage: string;
  textClassName?: string;
  id?: string;
}
const activeBtn: string = `text-jade underline decoration-5 \
decoration-tp-almond decoration-3`;

const nonActiveBtn: string = `text-tp-almond decoration-5 underline \
decoration-jade decoration-3`;

export const NavBarBtn = (prop: MButtonProps) => {
  const [isAct, setIsAct] = useState(false);
  useEffect(() => {
    setIsAct(prop.routedPage === prop.btnText);
  }, [prop.routedPage, prop.btnText]);

  const getButtonClass = (): string => {
    return isAct ? activeBtn : nonActiveBtn;
  };

  return (
    <button id={IDStyles.NavBarBtn} className={getButtonClass()}>
      <div className={`${prop.textClassName}`}>{prop.btnText}</div>
    </button>
  );
};

export default NavBarBtn;
