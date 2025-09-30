import React from "react";

type containerType = {
  children: React.ReactNode;
};

const Container = ({ children }: containerType) => {
  return (
    <div className="xl:w-[1170px] w-full px-3 xl:px-0 mx-auto">{children}</div>
  );
};

export default Container;
