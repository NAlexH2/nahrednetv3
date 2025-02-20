import beard from "@assets/images/beard.svg";

export const Header = () => {
  // Explicitly define the type of the ref
  return (
    <div id="header" className="grid grid-cols-4 grid-rows-1">
      <div className="flex justify-center col-start-2 col-span-2">
        <button id="header-button" className="flex">
          <img className="" src={beard} width={100} />
          <div className="pl-3 pt-6 text-8xl font-squarepeg text-white">
            Alex Harris
          </div>
        </button>
      </div>
      <hr className="-mt-3 w-100 h-2 mx-auto my-4 border-0 mb-15 col-start-2 col-span-2" />
    </div>
  );
};

export default Header;
