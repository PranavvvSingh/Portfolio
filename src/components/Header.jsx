import { Link } from 'react-scroll';
import '../App.css'
import React from 'react';

const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#050614" }}
      className="sticky top-0 z-10 flex justify-between ps-20 pe-20 pt-5 pb-5 border-b-1 "
    >
      <div className="text-white text-sm md:text-lg">📄Portfolio</div>
      <div className="hidden sm:block space-x-10 text-white md:text-lg">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={1000}
          className="hover:text-orange-600"
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
          className="hover:text-orange-600 "
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
          className="hover:text-orange-600 "
          activeStyle={{ borderBottom: "2px solid #ea580c" }}
        >
          Projects
        </Link>
      </div>
      <div className="text-l sm:text-xl text-white  text-right">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="hover:text-orange-600"
          activeStyle={{ borderBottom: "2px solid #ea580c" }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header