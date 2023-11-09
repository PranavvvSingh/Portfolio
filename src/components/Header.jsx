const Header = () => {
  return (
    <div className="flex justify-between ps-20 pe-20 pt-5 pb-5 border-b-1 ">
      <div className="w-1/6 text-white">Portfolio</div>
      <div className="space-x-5 text-white">
        <a href="">Home</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
      <button type="button" className="text-xl w-2/12 text-white">
        Hire Me
      </button>
    </div>
  );
}

export default Header