import Image from "next/image";
import React from "react";
import Logo from "../public/assests/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-start items-center space-x-5 px-5 py-2 cursor-pointer duration-300">
      <Image
        className="inline-block h-14 w-14 rounded-full"
        src={Logo}
        alt=""
        width={5}
        height={5}
      />
      <p className="text-[#FFCA5F] text-4xl font-bold">Astrix.</p>
    </div>
  );
};

export default Navbar;
