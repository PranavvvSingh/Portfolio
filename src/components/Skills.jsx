import node from '../assets/node.png'
import express from '../assets/express.png'
import spring from '../assets/spring.png'
import mongodb from '../assets/mongodb.png'
import firebase from '../assets/firebase.png'
import postgre from '../assets/postgresql.png'
import css from '../assets/css.png'
import html from '../assets/html.png';
import mui from '../assets/mui.png';
import jquery from '../assets/jquery.png';
import ts from '../assets/typescript.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import bootstrap from '../assets/bootstrap.png';
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'

function Techimage({src, text}){
  return (
    <div className='flex gap-2 items-center px-5 py-2 rounded-xl border'>
      <img
        src={src}
        alt="nodejs"
        style={{ height: "30px", width: "30px" }}
      />
      <p>{text}</p>
    </div>
  );
}

const Skills = () => {
  return (
    <>
      <div className="flex flex-col items-center m-10">
        <h1 className='text-4xl'>Skills</h1>
        <p className='text-xl mt-5'>Here are some of the skills I have acquired over the years.</p>
      </div>
      <div className="flex ms-32 me-32 gap-8">
        <div className="w-3/6 rounded-2xl p-7 border border-rose-700 shadow-md shadow-rose-700 bg-black">
          <div className="flex justify-center">
            <h1 className="text-3xl">Backend</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <Techimage src={node} text="Node" />
            <Techimage src={express} text="Express" />
            <Techimage src={spring} text="Spring" />
            <Techimage src={mongodb} text="MongoDB" />
            <Techimage src={firebase} text="Firebase" />
            <Techimage src={postgre} text="Postresql" />
          </div>
        </div>
        <div className="w-3/6 rounded-2xl p-7 border border-rose-700 shadow-md shadow-rose-700 bg-black">
          <div className="flex justify-center">
            <h1 className="text-3xl">Frontend</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <Techimage src={html} text="HTML" />
            <Techimage src={css} text="CSS" />
            <Techimage src={redux} text="Redux" />
            <Techimage src={react} text="React" />
            <Techimage src={bootstrap} text="Bootstrap" />
            <Techimage src={mui} text="Material UI" />
            <Techimage src={ts} text="Typescript" />
            <Techimage src={jquery} text="jQuery" />
            <Techimage src={javascript} text="Javascript" />
            <Techimage src={tailwind} text="Tailwind" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
