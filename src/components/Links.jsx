import { Link } from "react-scroll";
import "../App.css";
import React from "react";

const Links = ({className, action}) => {
  return (
    <div className={className}>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-150}
        duration={1000}
        className="hover:text-orange-600 w-min text-neutral-200"
        onClick={action}
        activeStyle={{ borderBottom: "2px solid #ea580c" }}
      >
        Home
      </Link>
      <Link
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        className="hover:text-orange-600 w-min text-neutral-200"
        onClick={action}
        activeStyle={{ borderBottom: "2px solid #ea580c" }}
      >
        Skills
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        className="hover:text-orange-600 w-min text-neutral-200"
        onClick={action}
        activeStyle={{ borderBottom: "2px solid #ea580c" }}
      >
        Projects
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        className="hover:text-orange-600 w-min text-neutral-200"
        onClick={action}
        activeStyle={{ borderBottom: "2px solid #ea580c" }}
      >
        Contact
      </Link>
    </div>
  );
};
export default Links;
