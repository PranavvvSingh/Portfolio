function Card({ name, description, tech }) {
  return (
    <div className="w-80 rounded-xl p-5 shadow-md shadow-black bg-neutral-950">
      <img
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        style={{ width: "280px", height: "180px" }}
        className="rounded-xl"
      />
      <div className="flex flex-wrap justify-start gap-2 mt-4 text-black">
        {tech.map((element, index) => (
          <button
            key={index}
            className="bg-red-700 rounded-xl px-2 py-1 text-xs font-semibold"
            style={{
              background: `linear-gradient(166deg, rgba(253,29,29,1) 20%, rgba(224,153,54,1) 100%)`,
            }}
          >
            {element}
          </button>
        ))}
      </div>
      <hr className="h-px mt-3 bg-neutral-800 border-0" />
      <h1 className="mt-2 text-xl">{name}</h1>
      <p className="mt-2 tracking-wide text-sm text-neutral-400">{description}</p>
    </div>
  );
}
const Projects = () => {
  return (
    <div className="mt-32">
      <div className="flex flex-col items-center m-10">
        <h1 className="text-4xl">Projects</h1>
        <p className="text-xl mt-5">
          I have designed a shit tonne of projects. Here are some of them.
        </p>
      </div>

      <div className="flex flex-wrap justify-around w-10/12 mx-auto gap-2">
        <Card
          name="Arcade Arena"
          description="A complete full stack Arcade gaming site which allows users to sign-in & enjoy classic arcade
games. It records user information and their respective scores across all games to display their individual as
well as overall high score."
          tech={["Javascript", "Node Js", "Express", "MongoDB"]}
        />
        <Card
          name="Medinfo"
          description="A health information syndication platform that aggregates real-time medical content and features an
advanced healthcare chatbot for users to input symptoms and receive disease predictions. Users can also
save/bookmark articles, enhancing convenience."
          tech={[
            "React Js",
            "Redux",
            "Tailwindcss",
            "Spring Boot",
            "Python",
            "Deep Learning",
          ]}
        />
        <Card
          name="Disease Checker"
          description=" A machine learning interactive web application which predicts Heart Disease & Diabetes
in a patient using classification techniques."
          tech={["Streamlit", "Python", "Machine Learning"]}
        />
      </div>
    </div>
  );
};

export default Projects;
