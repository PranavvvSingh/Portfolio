import arcade from '../assets/arcade2.png'
import disease from '../assets/diseasechecker2.png'
import medinfo from '../assets/medinfo.png'
function Card({ name, description, tech, picture }) {
  return (
    <div className="w-80 rounded-xl p-5 shadow-md bg-neutral-950">
      <img
        src={picture}
        alt=""
        style={{ width: "280px", height: "150px" }}
        className="rounded-xl"
      />
      <div className="flex flex-wrap justify-start gap-2 mt-4 text-black">
        {tech.map((element, index) => (
          <button
            key={index}
            className=" rounded-xl px-2 py-1 text-xs  text-white"
            style={{
              background: `linear-gradient(166deg, rgba(253,29,29,1) 20%, rgba(224,153,54,1) 100%)`,
            }}
          >
            {element}
          </button>
        ))}
      </div>

      <h2 className="mt-3 text-xl">{name}</h2>
      <hr className="h-px mt-1 bg-neutral-800 border-0" />
      <p className="mt-2 text-sm text-neutral-400">{description}</p>
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

      <div className="flex flex-wrap justify-center w-10/12 mx-auto gap-5">
        <Card
          name="Arcade Arena"
          description="A complete full stack Arcade gaming site which allows users to sign-in & enjoy classic arcade
games. It records user information and their respective scores across all games."
          tech={["Javascript", "Node Js", "Express", "MongoDB"]}
          picture={arcade}
        />
        <Card
          name="Medinfo"
          description="A health information syndication platform that aggregates real-time medical content and features an
advanced healthcare chatbot for users."
          tech={[
            "React Js",
            "Redux",
            "Tailwindcss",
            "Spring Boot",
            "Python",
            "Deep Learning",
          ]}
          picture={medinfo}
        />
        <Card
          name="Disease Checker"
          description=" A machine learning interactive web application which predicts Heart Disease & Diabetes
in a patient using classification techniques."
          tech={["Streamlit", "Python", "Machine Learning"]}
          picture={disease}
        />
      </div>
    </div>
  );
};

export default Projects;
