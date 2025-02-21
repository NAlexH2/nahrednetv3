import beard from "@assets/images/beard-black.svg";
export const HeaderLogo = () => {
  return (
    <img
      className="max-md:flex max-md:justify-center max-md:w-30 w-18 mt-3 transition-all
        max-md:my-5"
      src={beard}
      width={100}
    />
  );
};
