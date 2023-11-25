import React from "react";

const Footer = () => {
  return (
    <div className=" mt-24" style={{ background: "rgba(5,6,20,1)" }}>
      <div className="flex flex-col w-11/12 mx-auto items-center pt-12 pb-10 gap-8">
        <div className="text-sm sm:text-base md:text-l text-orange-600">
          PRANAV SINGH
        </div>
        <div className="space-x-12">
          <a
            href="https://www.linkedin.com/in/pranavv-singh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in fa-sm sm:lg md:fa-xl text-white hover:text-orange-600" />
          </a>
          <a
            href="https://github.com/PranavvvSingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github fa-sm sm:lg md:fa-xl text-white hover:text-orange-600" />
          </a>
          <a
            href="https://www.instagram.com/purrranav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram fa-sm sm:lg md:fa-xl text-white hover:text-orange-600" />
          </a>
          <a
            href="https://leetcode.com/pranavvalt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-code fa-sm sm:lg md:fa-xl text-white hover:text-orange-600" />
          </a>
        </div>
        <p className="text-sm sm:text-base mt-5">
          @2023 Pranav Singh. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
