import { MouseEventHandler, useEffect, useState } from "react";
import ClassStyles from "@/styles/ClassStyles.module.css";

interface MButtonProps {
  btnText: string;
  routedPage: string;
  className?: string;
  id?: string;
  onClick?: MouseEventHandler;
  children?: React.ReactNode;
}
const navBarBtn = "navBarBtn";
const activeBtn: string = `${ClassStyles.activeNavBtn} bg-clip-text \
  text-white underline decoration-5 decoration-toasted-almond decoration-3 font-bold \
  text-4xl`;
// \
// transition-all duration-500 bg-linear-to-t from-honey from-[90%] \
// to-ocean-slate-light `;

const nonActiveBtn: string = `${ClassStyles.notActiveNavBtn} \
  bg-clip-text text-toasted-almond decoration-5 underline decoration-honey decoration-3 \
  font-bold text-4xl`;
// transition-all duration-500 bg-linear-to-t \
// from-transparent-almond from-[90%] to-ocean-slate-light text-4xl`;

export const NavBarBtn = (prop: MButtonProps) => {
  const [isAct, setIsAct] = useState(false);
  useEffect(() => {
    setIsAct(prop.routedPage === prop.btnText);
  }, [prop.routedPage, prop.btnText]);

  const getButtonClass = (): string => {
    return isAct ? activeBtn : nonActiveBtn;
  };

  return (
    <button id={navBarBtn} className={getButtonClass()}>
      <div className={`${prop.className}`}>{prop.btnText}</div>
    </button>
  );
};

export default NavBarBtn;
