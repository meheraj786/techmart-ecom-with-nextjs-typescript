import Link from "next/link";
import React from "react";

const Logo = ({ className } : {className? : string}) => {
  return (
    <Link href="/">
      <div
        className={` font-logo text-[28px] text-black font-bold cursor-pointer ${className}`}
      >
        TECHMART
      </div>
    </Link>
  );
};

export default Logo;