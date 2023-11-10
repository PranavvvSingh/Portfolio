import cover from "../assets/cover.svg";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "80%",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "left",
        backgroundPositionY: "center",
      }}
      className="flex mt-12 pt-5 pb-5 items-center text-white"
    >
      <div className="w-full flex justify-center ps-28 pe-5">
        <div className="">
          <h3 className="text-xl">Hi! I am,</h3>
          <h1 className="mt-2 text-5xl font-bold">Pranav Singh</h1>
          <h2 className="mt-3 text-3xl font-semibold">
            And I am a Full Stack Developer
          </h2>
          <p className="mt-1 mb-3 tracking-wider">
            Passionate about designing efficient web applications and committed
            to staying updated with the latest technologies in development and
            industry trends. I possess a strong understanding of data structures
            and algorithms, allowing me to excel in problem-solving.
          </p>
          {/* <div className="mt-1">
            <div className="flex space-x-3">
              <div className="w-9 h-9 bg-black rounded-full flex justify-center items-center">
                <i className="fa-brands fa-linkedin-in fa-l text-white" />
              </div>
              <div className="w-9 h-9 bg-black rounded-full flex justify-center items-center">
                <i className="fa-brands fa-github fa-l text-white" />
              </div>
              <div className="w-9 h-9 bg-black rounded-full flex justify-center items-center">
                <i className="fa-brands fa-instagram fa-l text-white" />
              </div>
              <div className="w-9 h-9 bg-black rounded-full flex justify-center items-center">
                <i className="fa-solid fa-code fa-l text-white" />
              </div>
            </div>
          </div> */}
          <button className="mt-2 shadow-md shadow-white bg-black rounded-full text-white px-3 py-1  hover:bg-slate-800">
            Check Resume
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <img src="./src/assets/profile.png" alt="" style={{ height: "50vh" }} />
      </div>
    </div>
  );
};

export default Banner;
