
const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center m-10">
        <h1 className="text-4xl">Projects</h1>
        <p className="text-xl mt-5">
          I have designed a shit tonne of projects. Here are some of them.
        </p>
      </div>
      <div className="flex ms-32 me-32 gap-8">
        <div className="w-3/6 rounded-2xl p-7 border border-rose-700 shadow-md shadow-rose-700 bg-black">
          <div className="flex justify-center">
            <h1 className="text-3xl">Project 1</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5">

          </div>
        </div>
        <div className="w-3/6 rounded-2xl p-7 border border-rose-700 shadow-md shadow-rose-700 bg-black">
          <div className="flex justify-center">
            <h1 className="text-3xl">Project 2</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects