import arcade from "../assets/arcade.png"
import disease from "../assets/diseasechecker.png"
import medinfo from "../assets/medinfo.png"
import clipit from "../assets/clipit.png"
import petfinder from "../assets/petfinder.png"
import quizme from "../assets/quizme.png"
function Card({ name, description, tech, picture }) {
   return (
      <div className="w-[310px] md:w-[320px] rounded-xl p-5 border border-red-600 bg-neutral-950 shadow shadow-orange-600">
         <img
            src={picture}
            alt=""
            className="rounded-lg h-[150px] md:h-[160px] aspect-[16/9] mx-auto"
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

         <h2 className="mt-3 text-xl text-neutral-100">{name}</h2>
         <hr className="h-px mt-1 bg-neutral-800 border-0" />
         <p className="mt-2 text-sm text-neutral-400">{description}</p>
      </div>
   )
}
const Projects = () => {
   return (
      <div className="mt-32" id="projects">
         <div className="flex flex-col items-center mt-32 mb-8">
            <h1 className="text-4xl text-neutral-100">Projects</h1>
            <p className="text-lg sm:text-xl mt-5 text-center text-neutral-200 mx-2">
               Here is a curated collection of my projects.
            </p>
         </div>

         <div className="flex flex-wrap justify-evenly w-10/12 mx-auto gap-5">
            <Card
               name="Quizme"
               description="An AI powered quiz platform. This platform uses Mistral 7B AI model to dynamically generate questions based on the user’s chosen topic. It incorporates anti-cheat measures, terminating the quiz if any cheating behavior is detected."
               tech={[
                  "React",
                  "Typescript",
                  "NextAuth",
                  "Supabase",
                  "DaisyUI",
                  "Tailwindcss",
               ]}
               picture={quizme}
            />
            <Card
               name="PetFinder"
               description="A pet ecommerce platform with a robust full-text search engine, personalized filters, secure user authentication, and  allowing logged-in users to save pets as favorites."
               tech={[
                  "React",
                  "Typescript",
                  "Supabase",
                  "PostgreSQL",
                  "Redux",
                  "Tailwindcss",
               ]}
               picture={petfinder}
            />
            <Card
               name="ClipIt"
               description="A fully responsive video streaming platform designed using the youtube api to deliver a seamless experience."
               tech={["React", "Typescript", "Tailwindcss"]}
               picture={clipit}
            />
            <Card
               name="Arcade Arena"
               description="A complete full stack Arcade gaming site which allows users to sign-in & enjoy classic arcade games. It records user information and their respective scores across all games."
               tech={["Javascript", "Node Js", "Express", "MongoDB"]}
               picture={arcade}
            />
            <Card
               name="Medinfo"
               description="A health information syndication platform that aggregates real-time medical content."
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
   )
}

export default Projects
