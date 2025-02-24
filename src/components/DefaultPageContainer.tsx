import React, { ReactNode } from "react";

interface DefaultPageContainerProps {
  children?: ReactNode;
}

export const DefaultPageContainer: React.FC<DefaultPageContainerProps> = ({
  children,
}) => {
  return (
    <div className="max-w-3xl mx-auto text-justify mt-10 text-[16px]">
      <div className="transition-all grid max-md:grid-cols-7 min-md:grid-cols-16">
        {children}
      </div>
    </div>
  );
};
