import "../App.css";
import React, { useState } from "react";
import Links from "./Links";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconClassName = isOpen ? "xmark" : "bars";
  return (
    <div
      style={{ backgroundColor: "#050614" }}
      className="sticky top-0 z-10 flex flex-col md:flex-row md:justify-center px-4 py-4 md:px-20 md:py-5 border-b-1"
    >
      <div className="flex justify-end h-[22px] items-center">
        <i
          className={`md:hidden fa-solid fa-${iconClassName} fa-xl cursor-pointer text-neutral-300`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <Links
        className={`${
          isOpen ? " translate-y-[30px] " : " translate-y-[-200px] "
        } md:hidden fixed pt-2 pb-2 left-0 w-full flex flex-col space-y-4 items-center transition-all duration-300 bg-[#050614]/[0.85] text-lg`}
        action={() => setIsOpen(false)}
      />
      <Links className="hidden md:block space-x-10 text-white text-lg" />
    </div>
  );
};

export default Header;
