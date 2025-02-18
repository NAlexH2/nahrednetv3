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
const activeBtn: string = `${ClassStyles.activeNavBtnShadow} bg-clip-text \
  text-black underline decoration-black decoration-5 font-bold \
  hover:text-ocean-slate-light hover:decoration-ocean-slate-light \
  transition-all duration-500 bg-linear-to-t \
  from-honey from-[90%] to-ocean-slate-light`;

const nonActiveBtn: string = `${ClassStyles.notActiveNavBtnShadow} \
  bg-clip-text text-honey underline decoration-honey decoration-5 \
  font-bold hover:text-ocean-slate-light hover:decoration-ocean-slate-light \
  transition-all duration-500 bg-linear-to-t \
  from-honey from-[90%] to-ocean-slate-light`;

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
      <div className={prop.className}>{prop.btnText}</div>
    </button>
  );
};

export default NavBarBtn;
