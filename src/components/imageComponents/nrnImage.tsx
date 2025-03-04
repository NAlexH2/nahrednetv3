import React from "react";

interface nrnImageProps {
  src: string;
  className?: string;
  id?: string;
  alt: string;
  children?: React.ReactNode;
}

export const NRNImage = (prop: nrnImageProps) => {
  return (
    <div>
      <img
        className={prop.className}
        id={prop.id}
        style={{ color: "inherit" }}
        src={prop.src}
        alt={prop.alt}
      />
      {prop.children}
    </div>
  );
};

export default NRNImage;
