import '../App.css'
const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#050614" }}
      className="sticky top-0 z-10 flex justify-between ps-20 pe-20 pt-5 pb-5 border-b-1 "
    >
      <div className="w-1/6 text-white">Portfolio</div>
      <div className="space-x-10 text-white text-lg">
        <a href="" className="hover:text-orange-600 heading">
          Home
        </a>
        <a href="" className="hover:text-orange-600 heading">
          Skills
        </a>
        <a href="" className="hover:text-orange-600 heading">
          Projects
        </a>
        <a href="" className="hover:text-orange-600 heading">
          Contact
        </a>
      </div>
      <button type="button" className="text-xl w-2/12 text-white">
        Hire Me
      </button>
    </div>
  );
}

export default Header