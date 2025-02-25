import { MouseEventHandler } from "react";

interface MButtonProps {
  btnText: string;
  btnSubText?: string;
  btnClassName?: string;
  textClassName?: string;
  id?: string;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const activeBtn: string = `text-black border-jade border-5 rounded-4xl \
bg-tp-almond decoration-tp-almond font-bold hover:!cursor-default`;

const nonActiveBtn: string = `text-jade border-tp-almond border-5 rounded-4xl \
decoration-5 font-bold hover:text-honey`;

export const NavBarBtn = (prop: MButtonProps) => {
  const getButtonClass = (
    selected: boolean | undefined,
  ): string | undefined => {
    if (selected === undefined) return;
    else if (selected) return activeBtn;
    return nonActiveBtn;
  };

  return (
    <button
      className={`transition-all ${getButtonClass(prop.selected)} ${prop.btnClassName}`}
      onClick={prop.onClick}
    >
      <div
        className={`transition-all ${prop.textClassName} text-lg max-md:text-sm`}
      >
        {prop.btnText}
      </div>
      {prop.btnSubText ? (
        <div className="transition-all text-sm max-md:text-xs">
          {prop.btnSubText}
        </div>
      ) : (
        <></>
      )}
    </button>
  );
};

export default NavBarBtn;
