const Footer = () => {
  return (
    <div
      className=" mt-16"
      style={{ background: "rgba(5,6,20,1)" }}
    >
      <div className="flex flex-col w-11/12 mx-auto items-center pt-12 pb-10 gap-8">
        <div className="text-l text-orange-600">PRANAV SINGH</div>
        <div className="flex gap-20 text-xl">
          <a href="" className="hover:text-orange-600">
            Home
          </a>
          <a href="" className="hover:text-orange-600">
            Skills
          </a>
          <a href="" className="hover:text-orange-600">
            Projects
          </a>
          <a href="" className="hover:text-orange-600">
            Contact
          </a>
        </div>
        <div className="space-x-12">
          <a
            href="https://www.linkedin.com/in/pranavv-singh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in fa-xl text-white hover:text-orange-600" />
          </a>
          <a
            href="https://github.com/PranavvvSingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github fa-xl text-white hover:text-orange-600" />
          </a>
          <a
            href="https://www.instagram.com/purrranav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram fa-xl text-white hover:text-orange-600" />
          </a>
          <a
            href="https://leetcode.com/pranavvalt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-code fa-xl text-white hover:text-orange-600" />
          </a>
        </div>
        <p className="mt-5">@2023 Pranav Singh. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
